import { createSlice } from "@reduxjs/toolkit";

const initialExpenseList= JSON.parse(localStorage.getItem("expenseList")) || []

export const expenseSlice = createSlice({
    name: "expense",
    initialState: initialExpenseList,
    reducers: {
        addExpense(state,action){
            state.push(action.payload)
            localStorage.setItem("expenseList", JSON.stringify(state))
        }
    }
})

export const expenseActions = expenseSlice.actions