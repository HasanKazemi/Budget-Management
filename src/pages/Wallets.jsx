import React from 'react'
import '../styles/wallet.css'
import { useSelector } from 'react-redux'

const Wallets = () => {
  const wallets = useSelector(state=>state.wallets)
  return (
    <div>
      <h1>دارایی های من</h1>
      <div>
        {wallets.map(wallet=>(
          <div className='wallet-row' key={wallet.id}>
            <p>{wallet.walletLabel}</p>
            <p>{wallet.assetAmount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wallets