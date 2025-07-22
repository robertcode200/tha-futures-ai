import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  UnixTimestampSeconds,
  ResponseLatestTradeDates,
  TransformedLatestTradeDates,
  ResponseChipUnifyTable,
  TransformedChipUnifyTable,
} from "./types";

export const marketInsightApiSlice = createApi({
  reducerPath: "marketInsight",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.market-insight.futures-ai.com",
  }),
  endpoints: (builder) => {
    return {
      // ## market_info ##
      getLatestTradeDates: builder.query<TransformedLatestTradeDates, { size: number }>({
        query: ({ size }) =>
          `api/market_info/latest_trade_dates?size=${size}`,
        transformResponse: (response: ResponseLatestTradeDates) => {
          if (!response || response.length === 0) return [];
          return response.map(({ date }) => ({
            dateString: date,
            unixTimestampSeconds: Math.floor(new Date(date).getTime() / 1000),
          }));
        }
      }),

      // ## chip ##
      getChipUnifyTable: builder.query<TransformedChipUnifyTable, { from: UnixTimestampSeconds; to: UnixTimestampSeconds }>({
        query: ({ from, to }) =>
          `api/chip/unify_table?from=${from}&to=${to}`,
        transformResponse: (response: ResponseChipUnifyTable) => {
          if (!response) return null;
          return response;
        }
      }),
    };
  },
});

export const { useGetLatestTradeDatesQuery, useGetChipUnifyTableQuery } = marketInsightApiSlice;
