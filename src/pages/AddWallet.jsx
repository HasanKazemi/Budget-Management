import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWallet } from '../redux/slices/walletSlice'
import "../styles/addWallet.css"

const AddWallet = () => {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        walletLabel: "",
        assetAmount: 0,
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
            assetAmount: 0,
        })
    }

  return (
    <div className='addWalletContainer'>
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <label htmlFor="walletLabel">نام حساب</label>
                <input type="text" name="walletLabel" id="walletLabel" value={formData.walletLabel} onChange={handleChange} />
            </div>
            <div className='row'>
                <label htmlFor="assetAmount">مقدار دارایی</label>
                <input type="number" name="assetAmount" id="assetAmount" value={formData.assetAmount} onChange={handleChange} />
            </div>
            <div className='row'>
                <button type="submit">ثبت</button>
            </div>
        </form>
    </div>
  )
}

export default AddWallet