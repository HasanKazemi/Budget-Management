import React, { useState } from 'react'
import styles from '../styles/form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense } from '../redux/slices/expenseSlice'

const AddExpense = () => {

    const dispatch = useDispatch()
    const wallets = useSelector(state => state.wallets)

    const now = new Date()
    now.setMinutes(now.getMinutes()-now.getTimezoneOffset())
    const thisTime = now.toISOString().slice(0,16);

    const [formData, setFormData] = useState({
        expenseTitle: "",
        expenseAmount: 0,
        walletId: 1,
        expenseCategory: "",
        expenseDate: thisTime,
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData(prev => ({...prev, [name]:value}))
    }



    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addExpense(formData))
        setFormData({
            expenseTitle: "",
            expenseAmount: 0,
            walletId: 1,
            expenseCategory: "",
            expenseDate: thisTime,
        })
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
                        <option key={wallet.id} value={wallet.id}>{wallet.walletLable}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="expenseCategory">دسته بندی</label>
                <select name="expenseCategory" id="expenseCategory" value={formData.expenseCategory} onChange={handleChange}>

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