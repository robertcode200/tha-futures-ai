import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ResponseSymbolHistory } from "./types";

export const futuresOpApiSlice = createApi({
  reducerPath: "futuresOp",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tvapi.futures-op.com",
  }),
  endpoints: (builder) => {
    return {
      getSymbolHistory: builder.query<ResponseSymbolHistory, void>({
        query: () =>
          "v2/history?symbol=TXAM-1&resolution=1D&from=1723075200&to=1753401600&countBack=301&ws=true&metaData=true&agent=futuresai&product=web",
      }),
    };
  },
});

export const { useGetSymbolHistoryQuery } = futuresOpApiSlice;
