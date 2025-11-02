import React, { useState } from 'react'
import styles from "../styles/transfer.module.css"
import { useDispatch } from 'react-redux'
import { decreaseBalance, increaseBalance } from '../redux/slices/walletSlice'

const Transfer = ({transferFromId, wallets, setShowTransfer}) => {
    const transferFromTitle = wallets.find(w=>w.id === transferFromId)
    const [amount, setAmount] = useState(0)
    const [transferToId, setTransferToId] = useState(0)
    const dispatch = useDispatch()

    const dispatchTransfer = ()=>{
        dispatch(decreaseBalance({
            walletId: transferFromId,
            expenseAmount: amount,
        }))
        dispatch(increaseBalance({
            toWalletId: transferToId,
            incomeAmount: amount,
        }))
        setShowTransfer(false)
    }

  return (
    <div className={styles.popupContainer}>
        <div className={styles.internalContainer}>
            <div>
                <span>از حساب: </span>
                <span>{transferFromTitle.walletLabel}</span>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="amount">مبلغ</label>
                <input type="number" name="amount" id="amount" min={0} onChange={(e)=>setAmount(parseInt(e.target.value))} value={amount}/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="toWallet">به حساب</label>
                <select name="toWallet" id="toWallet" onChange={(e)=>setTransferToId(e.target.value)}>
                    {wallets.map((wallet,index)=>(
                        <option key={index} value={wallet.id}>{wallet.walletLabel}</option>
                    ))}
                </select>
            </div>
            <div className={styles.formRow}>
                <button className={styles.regBtn} onClick={dispatchTransfer} >تایید</button>
            </div>
            <span className={styles.closeBtn} onClick={()=>setShowTransfer(false)}>x</span>
        </div>
    </div>
  )
}

export default Transfer