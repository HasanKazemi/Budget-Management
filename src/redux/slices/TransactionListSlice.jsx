import { createSelector, createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
    name: "transaction",
    initialState: JSON.parse(localStorage.getItem("transactions")) || [],
    reducers: {
        addTransActions(state,action){
            state.push(action.payload)
            localStorage.setItem("transactions", JSON.stringify(state))
        },
        deleteTransaction(state,action){
            localStorage.setItem("transactions", JSON.stringify(state))
            return state.filter(item => item.id !== action.payload)
        },
    }
})
export const transActions = transactionSlice.actions


// selectors
const selectTransactionList = (state) => state.transaction;
export const selectFilteredTransaction = createSelector(
    [selectTransactionList,
        (_,filters) => filters.category,
        (_,filters) => filters.searchTerm
    ],
    (transactionList,category,searchTerm) => {
        return transactionList.filter(item => {
            const matchesCategory = !category || item.category === category;
            const matchesSearch = !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch
        })
    }
)