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
        incrementIncome(state,action) {
            const {toWalletId, incomeAmount} = action.payload
            const wallet = state.find(item=> item.id === parseInt(toWalletId))
            if (wallet) wallet.assetAmount += parseInt(incomeAmount)
            localStorage.setItem("wallets",JSON.stringify(state))
        },
        deleteWallet(state,action){
            const walletId = action.payload
            const newState = state.filter(wallet => wallet.id !== walletId)
            localStorage.setItem("wallets",JSON.stringify(newState))
            return newState
        },
    }
})
export const { addWallet, incrementIncome, deleteWallet } = walletSlice.actions