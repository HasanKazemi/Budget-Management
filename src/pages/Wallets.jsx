import React from 'react'
import '../styles/wallet.css'
import { useSelector } from 'react-redux'

const Wallets = () => {
  const wallets = useSelector(state=>state.wallets)
  return (
    <div>
      <h1 className='walletPageTitle'>دارایی های من</h1>
      <div className='walletContainer'>
        <div className="wallet-row">
          <p> نام حساب </p>
          <p> مقدار دارایی (ریال) </p>
        </div>
        {wallets.map(wallet=>(
          <div className='wallet-row' key={wallet.id}>
            <p>{wallet.walletLabel}</p>
            <p>{wallet.assetAmount.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wallets