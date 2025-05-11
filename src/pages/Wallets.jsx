import React from 'react'
import '../styles/wallet.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWallet } from '../redux/slices/walletSlice'

const Wallets = () => {
  const wallets = useSelector(state=>state.wallets)
  const dispatch = useDispatch()
  const handleDelete = (walletId)=>{
    dispatch(deleteWallet(walletId))
  }
  return (
    <div>
      <h1 className='walletPageTitle'>دارایی های من</h1>
      <div className='walletContainer'>
        <div className="wallet-row">
          <p> نام حساب </p>
          <p> مقدار دارایی (ریال) </p>
          <p>حذف</p>
        </div>
        {wallets.map(wallet=>(
          <div className='wallet-row' key={wallet.id}>
            <p>{wallet.walletLabel}</p>
            <p>{wallet.assetAmount.toLocaleString()}</p>
            <button className='deleteWallet' onClick={()=>handleDelete(wallet.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wallets