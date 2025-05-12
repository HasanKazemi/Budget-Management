import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../styles/incomesAndexpenses.module.css"

const Incomes = () => {
    const incomes = useSelector(state => state.income)
    const wallets = useSelector(state => state.wallets)

    const findWallet = (walletId)=>{
      const foundedWallet = wallets.find(wallet => wallet.id == parseInt(walletId))
      return foundedWallet?.walletLabel
    }

  return (
    <div className={styles.tableContainer}>
      <h1>لیست درآمدها</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>عنوان درآمد</th>
            <th>مبلغ (ریال)</th>
            <th>به حساب</th>
            <th>تاریخ واریز</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income,index)=>(
            <tr key={income.id}>
              <td>{index + 1}</td>
              <td>{income.incomeTitle}</td>
              <td>{income.incomeAmount.toLocaleString()}</td>
              <td>{findWallet(income.toWalletId)}</td>
              <td>{income.incomeDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Incomes