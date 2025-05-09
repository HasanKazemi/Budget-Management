import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
    name: "wallets",
    initialState: JSON.parse(localStorage.getItem("wallets") || "[]"),
    reducers: {
        addWallet(state,action){
            const newWallet = {
                id: state.length ? state[state.length-1].id + 1 : 1,
                walletLabel: action.payload.walletLabel,
                assetAmount: parseInt(action.payload.assetAmount),
            }
            state.push(newWallet)
            localStorage.setItem("wallets",JSON.stringify(state))
        },
    }
})
export const { addWallet } = walletSlice.actions