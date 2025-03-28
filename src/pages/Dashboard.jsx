import React from 'react'
import { useSelector } from 'react-redux'
import styles from './dashboard.module.css'

const Dashboard = () => {
    const { expense } = useSelector(state => state)
    console.log(expense);
    expense.map(e=>{
        console.log(e);
    })
    return (
        <div>
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
                    {expense.map(item=>(
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard