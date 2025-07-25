import React, { useState } from 'react'
import styles from '../styles/form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense, editExpense } from '../redux/slices/expenseSlice'
import { decreaseBalance, increaseBalance } from '../redux/slices/walletSlice'
import { expenseCategories } from '../constant/categories'
import { useNavigate, useParams } from 'react-router-dom'

const AddExpense = () => {
    const {id} = useParams()
    const expenses = useSelector(state => state.expense)
    const existExpense = expenses.find(ex => ex.id == id) || {}
    const dispatch = useDispatch()
    const wallets = useSelector(state => state.wallets)
    const navigate = useNavigate()

    const now = new Date()
    now.setMinutes(now.getMinutes()-now.getTimezoneOffset())
    const thisTime = now.toISOString().slice(0,16);

    const [formData, setFormData] = useState({
        id: parseInt(id) || undefined,
        expenseTitle: existExpense.expenseTitle || "",
        expenseAmount: existExpense.expenseAmount || 0,
        walletId: existExpense.walletId || 1,
        expenseCategory: existExpense.expenseCategory || expenseCategories[0],
        expenseDate: existExpense.expenseDate || thisTime,
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData(prev => ({...prev, [name]:value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (id) {
            const expDiff = existExpense.expenseAmount - formData.expenseAmount
            if (expDiff > 0) {
                dispatch(increaseBalance({
                    toWalletId: formData.walletId,
                    incomeAmount: expDiff
                }))
            } else if (expDiff < 0) {
                dispatch(decreaseBalance({
                    walletId: formData.walletId,
                    expenseAmount: -(expDiff)
                }))
            }
            dispatch(editExpense(formData))
            return navigate("/expenses")
        }
        dispatch(addExpense(formData))
        dispatch(decreaseBalance(formData))
        setFormData({
            expenseTitle: "",
            expenseAmount: 0,
            walletId: 1,
            expenseCategory: expenseCategories[0],
            expenseDate: thisTime,
        })
        return navigate("/expenses")
    }

  return (
    <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="expenseTitle">عنوان هزینه</label>
                <input type="text" name="expenseTitle" id="expenseTitle" placeholder='عنوان را وارد کنید...' value={formData.expenseTitle} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="expenseAmount">مبلغ (ریال)</label>
                <input type="number" name="expenseAmount" id="expenseAmount" value={formData.expenseAmount} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="walletId">از حساب</label>
                <select name="walletId" id="walletId" value={formData.walletId} onChange={handleChange}>
                    {wallets.map(wallet=>(
                        <option key={wallet.id} value={wallet.id}>{wallet.walletLabel}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="expenseCategory">دسته بندی</label>
                <select name="expenseCategory" id="expenseCategory" value={formData.expenseCategory} onChange={handleChange}>
                    {expenseCategories.map(category=>(
                        <option value={category} key={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="expenseDate">تاریخ و زمان</label>
                <input type="datetime-local" name="expenseDate" id="expenseDate" value={formData.expenseDate} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">ثبت</button>
            </div>
        </form>
    </div>
  )
}

export default AddExpense