import { createSlice } from "@reduxjs/toolkit";

export const incomeSlice = createSlice({
    name: "income",
    initialState: JSON.parse(localStorage.getItem("income") || "[]"),
    reducers: {
        addIncome(state,action){
            const newIncome = {
                id: state.length ? state[state.length-1].id + 1 : 1,
                incomeTitle: action.payload.incomeTitle,
                incomeAmount: parseInt(action.payload.incomeAmount),
                toWalletId: action.payload.toWalletId,
                incomeDate: action.payload.incomeDate,
            }
            state.push(newIncome)
            localStorage.setItem("income",JSON.stringify(state))
        },
        deleteIncome(state,action){
            const filteredState = state.filter(income => income.id !== action.payload)
            localStorage.setItem("income",JSON.stringify(filteredState))
            return filteredState
        }
    }
})
export const { addIncome, deleteIncome } = incomeSlice.actions