import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type DateString = `${string & { __brand: "\\d{4}-\\d{2}-\\d{2}" }}`;
type ResponseLatestTradeDates = { date: DateString }[] | undefined;
type TransformedLatestTradeDates = { dateString: DateString, unixTimestampSeconds: number }[];

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
    };
  },
});

export const { useGetLatestTradeDatesQuery } = marketInsightApiSlice;
