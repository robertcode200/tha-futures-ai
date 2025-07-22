import { configureStore } from '@reduxjs/toolkit';
import { marketInsightApiSlice } from './marketInsight/marketInsightApiSlice';

export const store = configureStore({
    reducer: {
        [marketInsightApiSlice.reducerPath]: marketInsightApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(marketInsightApiSlice.middleware);
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
