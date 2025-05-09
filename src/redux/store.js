import { configureStore } from "@reduxjs/toolkit";
import { walletSlice } from "./slices/walletSlice";
import { incomeSlice } from "./slices/incomeSlice";

export const store = configureStore({
    reducer: {
        wallets: walletSlice.reducer,
        income: incomeSlice.reducer,
    }
})