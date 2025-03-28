import { createSlice } from "@reduxjs/toolkit";

const initialExpenseList= JSON.parse(localStorage.getItem("expenseList")) || []

export const expenseSlice = createSlice({
    name: "expense",
    initialState: [],
    reducers: {
        addExpense(state,action){
            console.log(state);
            console.log(action.payload);
            state.push(action.payload)
            localStorage.setItem("expenseList", JSON.stringify(state))
        }
    }
})

export const expenseActions = expenseSlice.actions