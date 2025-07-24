import { configureStore } from '@reduxjs/toolkit';
import { marketInsightApiSlice } from './marketInsight/marketInsightApiSlice';
import { futuresOpApiSlice } from './futuresOp/futuresOpApiSlice';

export const store = configureStore({
    reducer: {
        [marketInsightApiSlice.reducerPath]: marketInsightApiSlice.reducer,
        [futuresOpApiSlice.reducerPath]: futuresOpApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            marketInsightApiSlice.middleware,
            futuresOpApiSlice.middleware
        );
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
