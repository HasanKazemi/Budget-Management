import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomSelect from '../components/CustomSelect'
import { useDispatch, useSelector } from 'react-redux'
import { transActions } from '../redux/slices/TransactionListSlice'
import { RootState } from '../redux/store'

interface Transaction {
  id: number;
  title: string;
  price: string;
  category: string;
  date: string;
}

const Transaction: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [type, setType] = useState<string>('income')
  const defaultTypes = ['income', 'expense']
  const [category, setCategory] = useState<string>('')
  const defaultCategories = ['food', 'transport', 'bill', 'fun']
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0])
  const transaction = useSelector((state: RootState) => state.transaction)
  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newTransaction: Transaction = {
      id: transaction.length + 1,
      title,
      price,
      category,
      type,
      date,
    }
    dispatch(transActions.addTransActions(newTransaction))
  }

  return (
    <div className='w-[70%] p-[50px] flex justify-center items-center'>
        <form className='w-[40%]' onSubmit={handleSubmit}>
            <CustomInput 
              label='title' 
              type="text" 
              value={title} 
              setValue={setTitle} 
              placeholder="insert title ....." 
            />
            <CustomInput 
              label='price' 
              type="number" 
              value={price} 
              setValue={setPrice} 
              placeholder="insert price ....." 
            />
            <CustomSelect 
              label='type' 
              options={defaultTypes} 
              setValue={setType} 
            />
            <CustomSelect 
              label='category' 
              options={defaultCategories} 
              setValue={setCategory} 
            />
            <CustomInput 
              label='date' 
              type="date" 
              value={date} 
              setValue={setDate} 
            />
            <div className='flex justify-center'>
                <button className='btn btn-blue border py-1 px-4 rounded-md cursor-pointer'>submit</button>
            </div>
        </form>
    </div>
  )
}

export default Transaction