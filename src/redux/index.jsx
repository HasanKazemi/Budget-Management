import { configureStore } from "@reduxjs/toolkit";
import { transactionSlice } from "./slices/TransactionListSlice";

export const store = configureStore({
    reducer: {
        transaction: transactionSlice.reducer,
    }
})