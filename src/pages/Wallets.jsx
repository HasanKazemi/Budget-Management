import React from 'react'
import '../styles/wallet.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWallet } from '../redux/slices/walletSlice'
import { Link } from 'react-router-dom'

const Wallets = () => {
  const wallets = useSelector(state=>state.wallets)
  const dispatch = useDispatch()
  const handleDelete = (walletId)=>{
    dispatch(deleteWallet(walletId))
  }
  return (
    <div>
      <h1 className='walletPageTitle'>دارایی های من</h1>
      <Link to="/wallets/addWallet" className='addNewLink'>افزودن حساب جدید</Link>
      <div className='walletContainer'>
        <div className="wallet-row">
          <p> ردیف </p>
          <p> نام حساب </p>
          <p> مقدار دارایی (ریال) </p>
          <p>عملیات</p>
        </div>
        {wallets.map(wallet=>(
          <div className='wallet-row' key={wallet.id}>
            <p>{wallet.id}</p>
            <p>{wallet.walletLabel}</p>
            <p>{wallet.balance.toLocaleString()}</p>
            <button className='deleteWallet' onClick={()=>handleDelete(wallet.id)}>حذف</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wallets