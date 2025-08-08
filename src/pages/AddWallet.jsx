import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWallet } from '../redux/slices/walletSlice'
import styles from '../styles/form.module.css'
import Amount from '../components/Amount'

const AddWallet = () => {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        walletLabel: "",
        balance: 0,
    })

    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        dispatch(addWallet(formData))
        setFormData({
            walletLabel: "",
            balance: 0,
        })
    }

  return (
    <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <label htmlFor="walletLabel">نام حساب</label>
                <input type="text" name="walletLabel" id="walletLabel" value={formData.walletLabel} onChange={handleChange} />
            </div>
            <div className='row'>
                <Amount label="مقدار دارایی" name="balance" value={formData.balance} onChange={handleChange} />
            </div>
            <div className='row'>
                <button type="submit">ثبت</button>
            </div>
        </form>
    </div>
  )
}

export default AddWallet