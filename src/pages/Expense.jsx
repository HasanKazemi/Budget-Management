import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../styles/incomesAndexpenses.module.css"
import { Link } from 'react-router-dom'
import { deleteExpense } from '../redux/slices/expenseSlice'
import { increaseBalance } from '../redux/slices/walletSlice'

const Expense = () => {
    const expenses = useSelector(state => state.expense)
    const wallets = useSelector(state => state.wallets)
    const dispatch = useDispatch()

    const findWallet = (walletId)=>{
        const foundedWallet = wallets.find(wallet => wallet.id == parseInt(walletId))
        return foundedWallet?.walletLabel
    }

    const handleDelete = (expenseId, walletId, expenseAmount)=>{
        dispatch(deleteExpense(expenseId))
        dispatch(increaseBalance({
            toWalletId: walletId,
            incomeAmount: expenseAmount
        }))
    }

  return (
    <div className={styles.tableContainer}>
        <Link to="/expenses/addExpense" className='addNewLink'>ثبت هزینه جدید</Link>
        <h1>لیست هزینه ها</h1>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>ردیف</th>
                    <th>عنوان</th>
                    <th>مبلغ (ریال)</th>
                    <th>از حساب</th>
                    <th>دسته بندی</th>
                    <th>تاریخ</th>
                    <th colSpan={2}>عملیات</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense,index)=>(
                    <tr key={expense.id}>
                        <td>{index + 1}</td>
                        <td>{expense.expenseTitle}</td>
                        <td className={styles.expenseAmount}>{expense.expenseAmount.toLocaleString()}</td>
                        <td>{findWallet(expense.walletId)}</td>
                        <td></td>
                        <td>{expense.expenseDate}</td>
                        <td className={styles.edit}>ویرایش</td>
                        <td onClick={()=>handleDelete(expense.id, expense.walletId, expense.expenseAmount)} className={styles.delete}>حذف</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Expense