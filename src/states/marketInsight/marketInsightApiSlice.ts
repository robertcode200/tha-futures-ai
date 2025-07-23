import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  ResponseLatestTradeDates,
  TransformedLatestTradeDates,
  ResponseChipUnifyTable,
  TransformedChipUnifyTable,
  ChipData,
  DateString,
} from "./types";
import { chipDataFields } from "./config";

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
      getChipUnifyTable: builder.query<TransformedChipUnifyTable | null, void>({
        query: (
          // TODO: supple
          // { from, to }
        ) => {
          // const params = new URLSearchParams();
          // if (from !== undefined) params.append('from', from.toString());
          // if (to !== undefined) params.append('to', to.toString());
          // const queryString = params.toString();
          // return `api/chip/unify_table${queryString ? `?${queryString}` : ''}`;
          return 'api/chip/unify_table';
        },
        transformResponse: (response: ResponseChipUnifyTable): TransformedChipUnifyTable | null => {
          if (!response) return null;

          // Filter to keep only ChipData fields
          const filteredData: Record<string, ChipData> = {};
          
          chipDataFields.forEach(field => {
            if (response[field as keyof ResponseChipUnifyTable]) {
              filteredData[field] = response[field as keyof ResponseChipUnifyTable] as ChipData;
            }
          });

          const chipDataKeys = Object.keys(filteredData);
          const date = response.date;

          const transformedData: Record<string, { date: DateString, oiDiff: number }[]> = {};

          chipDataKeys.forEach((key) => {
            transformedData[key] = filteredData[key].oi_diff.map((oiDiff, index) => ({
              date: date[index],
              oiDiff: oiDiff,
            }));
          });

          return transformedData;
        }
      }),
    };
  },
});

export const { useGetLatestTradeDatesQuery, useGetChipUnifyTableQuery } = marketInsightApiSlice;
