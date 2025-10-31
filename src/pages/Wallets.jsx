import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWallet } from '../redux/slices/walletSlice'
import { Link } from 'react-router-dom'
import styles from "../styles/wallet.module.css"
import { convert, convertEnToPe } from 'persian-number'

const Wallets = () => {
  console.log(convert(51250));
  
  const wallets = useSelector(state=>state.wallets)
  const dispatch = useDispatch()
  const handleDelete = (walletId)=>{
    dispatch(deleteWallet(walletId))
  }
  const calcTotal = wallets.reduce((acc,cur)=>acc + cur.balance,0)
  return (
    <div>
      <h1 className={styles.walletPageTitle}>دارایی های من</h1>
      <Link to="/wallets/addWallet" className='addNewLink'>افزودن حساب جدید</Link>
      <div className={styles.walletContainer}>
        <div className={styles.walletRow}>
          <p> ردیف </p>
          <p> نام حساب </p>
          <p> مقدار دارایی (ریال) </p>
          <p>عملیات</p>
        </div>
        {wallets.map(wallet=>(
          <div className={styles.walletRow} key={wallet.id}>
            <p>{wallet.id}</p>
            <p>{wallet.walletLabel}</p>
            <p>{convertEnToPe(wallet.balance.toLocaleString())}</p>
            <button className={styles.deleteBtn} onClick={()=>handleDelete(wallet.id)}>حذف</button>
          </div>
        ))}
        <div className={styles.totalRow}>
          <p>جمع کل</p>
          <p>{convertEnToPe(calcTotal.toLocaleString())} ريال</p>
        </div>
      </div>
    </div>
  )
}

export default Wallets