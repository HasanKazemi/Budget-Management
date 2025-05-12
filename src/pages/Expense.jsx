import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../styles/incomesAndexpenses.module.css"
import { Link } from 'react-router-dom'

const Expense = () => {
    const expenses = useSelector(state => state.expense)
    const wallets = useSelector(state => state.wallets)

    const findWallet = (walletId)=>{
        const foundedWallet = wallets.find(wallet => wallet.id == parseInt(walletId))
        return foundedWallet?.walletLabel
    }
  return (
    <div className={styles.tableContainer}>
        <Link to="/expenses/addExpense" className='addNewLink'>ثبت هزینه جدید</Link>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>ردیف</td>
                    <td>عنوان</td>
                    <td>مبلغ</td>
                    <td>از حساب</td>
                    <td>دسته بندی</td>
                    <td>تاریخ</td>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense,index)=>(
                    <tr key={expense.id}>
                        <td>{index + 1}</td>
                        <td>{expense.expenseTitle}</td>
                        <td>{expense.expenseAmount}</td>
                        <td>{findWallet(expense.walletId)}</td>
                        <td></td>
                        <td>{expense.expenseDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Expense