import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../styles/incomesAndexpenses.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { deleteIncome } from '../redux/slices/incomeSlice'
import { decreaseBalance } from '../redux/slices/walletSlice'

const Incomes = () => {
    const incomes = useSelector(state => state.income)
    const wallets = useSelector(state => state.wallets)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const findWallet = (walletId)=>{
      const foundedWallet = wallets.find(wallet => wallet.id == parseInt(walletId))
      return foundedWallet?.walletLabel
    }

    const handleDelete = (incomeId, toWalletId, incomeAmount)=>{
      dispatch(deleteIncome(incomeId))
      dispatch(decreaseBalance({
        walletId: toWalletId,
        expenseAmount: incomeAmount,
      }))
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
              <td onClick={()=>navigate(`/incomes/addIncome/${income.id}`)} className={styles.edit}>ویرایش</td>
              <td onClick={()=>handleDelete(income.id, income.toWalletId, income.incomeAmount)} className={styles.delete}>حذف</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Incomes