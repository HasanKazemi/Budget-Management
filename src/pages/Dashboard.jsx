import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './dashboard.module.css'
import FilterByTitle from '../components/FilterByTitle'

const Dashboard = () => {
    const expenseList = useSelector(state => state.expense)
    const expenseRef = useRef(expenseList)
    const [filteredExpenseList, setFilteredExpenseList] = useState(expenseList)

    return (
        <div className='w-full flex flex-col items-center gap-5'>
            <FilterByTitle expenseRef={expenseRef} setFilteredExpenseList={setFilteredExpenseList} />
            <h1 className='text-2xl'>Recent Transactions</h1>
            <table className={styles.expenseTable}>
                <thead>
                    <tr className=''>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpenseList?.map((expense,index)=>(
                        <tr key={index}>
                            <td>{expense.title}</td>
                            <td>{expense.price}</td>
                            <td>{expense.category}</td>
                            <td>{expense.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard