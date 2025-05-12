import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expense",
    initialState: JSON.parse(localStorage.getItem("expense") || "[]"),
    reducers: {
        addExpense(state, action) {
            const newExpense = {
                id: state.length ? state[state.length-1].id + 1 : 1,
                expenseTitle: action.payload.expenseTitle,
                expenseAmount: parseInt(action.payload.expenseAmount),
                walletId: action.payload.walletId,
                expenseCategory: action.payload.expenseCategory,
                expenseDate: action.payload.expenseDate
            }
            state.push(newExpense)
            localStorage.setItem("expense",JSON.stringify(state))
        },
        deleteExpense(state,action){
            const filteredState = state.filter(expense => expense.id !== action.payload)
            localStorage.setItem("expense",JSON.stringify(filteredState))
            return filteredState
        },
    }
})
export const { addExpense, deleteExpense } = expenseSlice.actions;