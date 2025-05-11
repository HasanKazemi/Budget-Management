import React from 'react'
import { useSelector } from 'react-redux'
import "../styles/incomes.css"

const Incomes = () => {
    const incomes = useSelector(state => state.income)
    const wallets = useSelector(state => state.wallet)
  return (
    <div className='incomesTableContainer'>
      <h1>لیست درآمدها</h1>
      <table className='incomesTable'>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>عنوان درآمد</th>
            <th>مبلغ (ریال)</th>
            <th>به حساب</th>
            <th>تاریخ واریز</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income,index)=>(
            <tr>
              <td>{index + 1}</td>
              <td>{income.incomeTitle}</td>
              <td>{income.incomeAmount.toLocaleString()}</td>
              <td>{income.toWallet}</td>
              <td>{income.incomeDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Incomes