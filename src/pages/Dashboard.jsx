import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './dashboard.module.css'
import FilterByTitle from '../components/FilterByTitle'
import { expenseActions, selectFilteredExpense } from '../redux/slices/ExpenseListSlice'
import FilterByCategory from '../components/FilterByCategory'

const Dashboard = () => {
    const expenseList = useSelector(state => state.expense)
    const dispatch = useDispatch()

    const [filters, setFilters] = useState({
        searchTerm: "",
        category: "",
    })
    const filteredExpense = useSelector(state => selectFilteredExpense(state,filters))

    const handleDelete = (expenseId)=>{
        dispatch(expenseActions.deleteExpense(expenseId))
    }

    return (
        <div className='w-full flex flex-col items-center gap-5'>
            <div className='flex items-center justify-center gap-5'>
                <FilterByTitle setFilters={setFilters} />
                <FilterByCategory setFilters={setFilters} />
            </div>
            <h1 className='text-2xl'>Recent Transactions</h1>
            <table className={styles.expenseTable}>
                <thead>
                    <tr className=''>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpense?.map((expense)=>(
                        <tr key={expense.id}>
                            <td>{expense.title}</td>
                            <td>{expense.price}</td>
                            <td>{expense.category}</td>
                            <td>{expense.date}</td>
                            <td onClick={()=>handleDelete(expense.id)} className='text-red-800 font-bold cursor-pointer'>X</td>
                            <td>{expense.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard