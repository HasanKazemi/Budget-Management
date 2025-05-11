import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expense",
    initialState: JSON.parse(localStorage.getItem("expense") || "[]"),
    reducers: {
        addExpense(state, action) {
            const newExpense = {
                id: state.length ? state[state.length-1].id + 1 : 1,
                expenseTitle: action.payload.expenseTitle,
                expenseAmount: action.payload.expenseAmount,
                walletId: action.payload.walletId,
                expenseCategory: action.payload.expenseCategory,
                expenseDate: action.payload.expenseDate
            }
            state.push(newExpense)
            localStorage.setItem("expense",JSON.stringify(state))
        }
    }
})
export const { addExpense } = expenseSlice.actions;