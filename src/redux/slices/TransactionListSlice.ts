import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  id: number;
  title: string;
  price: string;
  category: string;
  date: string;
}

interface FilterState {
  category?: string;
  searchTerm?: string;
}

interface RootState {
  transaction: Transaction[];
}

const initialState: Transaction[] = JSON.parse(localStorage.getItem("transactions") || "[]");

export const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        addTransActions(state, action: PayloadAction<Transaction>) {
            state.push(action.payload);
            localStorage.setItem("transactions", JSON.stringify(state));
        },
        deleteTransaction(state, action: PayloadAction<number>) {
            const newState = state.filter(item => item.id !== action.payload);
            localStorage.setItem("transactions", JSON.stringify(newState));
            return newState;
        },
    }
});

export const transActions = transactionSlice.actions;

// selectors
const selectTransactionList = (state: RootState) => state.transaction;

export const selectFilteredTransaction = createSelector(
    [
        selectTransactionList,
        (_: RootState, filters: FilterState) => filters.category,
        (_: RootState, filters: FilterState) => filters.searchTerm
    ],
    (transactionList, category, searchTerm) => {
        return transactionList.filter(item => {
            const matchesCategory = !category || item.category === category;
            const matchesSearch = !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }
); 