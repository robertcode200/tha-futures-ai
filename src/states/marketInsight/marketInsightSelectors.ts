import { createSelector } from '@reduxjs/toolkit';
import { marketInsightApiSlice } from './marketInsightApiSlice';
import type { RootState } from '@/states/store';

export const selectLatestTradeDates = (state: RootState) => 
  marketInsightApiSlice.endpoints.getLatestTradeDates.select({ size: 30 })(state).data;

export const createSlicedTradeDatesSelector = (start: number, end: number) =>
  createSelector(
    [selectLatestTradeDates],
    (tradeDates) => {
      if (!tradeDates) return [];
      return tradeDates.slice(start, end);
    }
  ); 
