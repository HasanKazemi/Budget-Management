import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addIncome } from '../redux/slices/incomeSlice'

const AddIncome = () => {

    const dispatch = useDispatch()
    const wallets = useSelector(state => state.wallets)

    const now = new Date()
    now.setMinutes(now.getMinutes()-now.getTimezoneOffset())
    const thisTime = now.toISOString().slice(0,16);

    const [formData, setFormData] = useState({
        incomeTitle: "",
        incomeAmount: 0,
        toWallet: 1,
        incomeDate: thisTime,
    })

    const handleChange = (event)=>{
        const {name,value} = event.target
        setFormData(prev => ({...prev, [name]:value}))
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(formData);
        dispatch(addIncome(formData))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="incomeTitle"> عنوان </label>
                <input type="text" name="incomeTitle" id="incomeTitle" value={formData.incomeTitle} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="incomeAmount">مبلغ</label>
                <input type="number" name="incomeAmount" id="incomeAmount" value={formData.incomeAmount} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="toWallet"> به حساب </label>
                <select name="toWallet" id="toWallet" value={formData.toWallet} onChange={handleChange}>
                    {wallets.map(wallet=>(
                        <option value={wallet.id} key={wallet.id}>{wallet.walletLabel}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="incomeDate"> تاریخ و زمان </label>
                <input type="datetime-local" name="incomeDate" id="incomeDate" value={formData.incomeDate} onChange={handleChange} />
            </div>
            <div>
                <button type='submit'> ثبت </button>
            </div>
        </form>
    </div>
  )
}

export default AddIncome