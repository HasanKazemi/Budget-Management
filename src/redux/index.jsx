import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./slices/ExpenseListSlice";

export const store = configureStore({
    reducer: {
        expense: expenseSlice.reducer,
    }
})