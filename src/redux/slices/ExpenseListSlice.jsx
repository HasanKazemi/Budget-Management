import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialExpenseList= JSON.parse(localStorage.getItem("expenseList")) || []
export const expenseSlice = createSlice({
    name: "expense",
    initialState: initialExpenseList,
    reducers: {
        addExpense(state,action){
            state.push(action.payload)
            localStorage.setItem("expenseList", JSON.stringify(state))
        },
        deleteExpense(state,action){
            localStorage.setItem("expenseList", JSON.stringify(state))
            return state.filter(item => item.id !== action.payload)
        },
    }
})
export const expenseActions = expenseSlice.actions


// selectors
const selectExpenseList = (state) => state.expense;
export const selectFilteredExpense = createSelector(
    [selectExpenseList,
        (_,filters) => filters.category,
        (_,filters) => filters.searchTerm
    ],
    (expenseList,category,searchTerm) => {
        return expenseList.filter(expense => {
            const matchesCategory = !category || expense.category === category;
            const matchesSearch = !searchTerm || expense.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch
        })
    }
)