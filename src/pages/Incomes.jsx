import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../styles/incomesAndexpenses.module.css"
import { Link } from 'react-router-dom'
import { deleteIncome } from '../redux/slices/incomeSlice'

const Incomes = () => {
    const incomes = useSelector(state => state.income)
    const wallets = useSelector(state => state.wallets)
    const dispatch = useDispatch()

    const findWallet = (walletId)=>{
      const foundedWallet = wallets.find(wallet => wallet.id == parseInt(walletId))
      return foundedWallet?.walletLabel
    }

  return (
    <div className={styles.tableContainer}>
      <Link to="/incomes/addIncome" className='addNewLink'>ثبت درآمد جدید</Link>
      <h1>لیست درآمدها</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>عنوان درآمد</th>
            <th>مبلغ (ریال)</th>
            <th>به حساب</th>
            <th>تاریخ واریز</th>
            <th colSpan={2}>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income,index)=>(
            <tr key={income.id}>
              <td>{index + 1}</td>
              <td>{income.incomeTitle}</td>
              <td className={styles.incomeAmount}>{income.incomeAmount.toLocaleString()}</td>
              <td>{findWallet(income.toWalletId)}</td>
              <td>{income.incomeDate}</td>
              <td className={styles.edit}>ویرایش</td>
              <td onClick={()=>dispatch(deleteIncome(income.id))} className={styles.delete}>حذف</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Incomes