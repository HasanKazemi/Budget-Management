import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWallet } from '../redux/slices/walletSlice'

const AddWallet = () => {

    const wallets = useSelector(state=>state.wallets)
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
        const newWallet = {
            id: wallets.length ? wallets[wallets.length - 1].id + 1 : 1,
            walletLabel: formData.walletLabel,
            assetAmount: formData.assetAmount,
        }
        dispatch(addWallet(newWallet))
        setFormData({
            walletLabel: "",
            assetAmount: 0,
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="walletLabel">نام حساب</label>
                <input type="text" name="walletLabel" id="walletLabel" value={formData.walletLabel} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="assetAmount">مقدار دارایی</label>
                <input type="number" name="assetAmount" id="assetAmount" value={formData.assetAmount} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">ثبت</button>
            </div>
        </form>
    </div>
  )
}

export default AddWallet