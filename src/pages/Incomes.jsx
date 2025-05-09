import React from 'react'
import { useSelector } from 'react-redux'

const Incomes = () => {
    const incomes = useSelector(state => state.income)
  return (
    <div>
        {incomes.map(income=>(
            <div key={income.id}>
                <p>{income.incomeTitle}</p>
                <p>{income.incomeAmount}</p>
                <p>{income.toWallet}</p>
                <p>{income.incomeDate}</p>
            </div>
        ))}
    </div>
  )
}

export default Incomes