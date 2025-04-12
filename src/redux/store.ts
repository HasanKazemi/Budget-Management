import { configureStore } from '@reduxjs/toolkit';
import { transactionSlice } from './slices/TransactionListSlice';

export const store = configureStore({
  reducer: {
    transaction: transactionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 