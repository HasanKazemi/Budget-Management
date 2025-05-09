import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
    name: "wallets",
    initialState: JSON.parse(localStorage.getItem("wallets") || "[]"),
    reducers: {
        addWallet(state,action){
            state.push(action.payload)
            localStorage.setItem("wallets",JSON.stringify(state))
        },
    }
})
export const { addWallet } = walletSlice.actions