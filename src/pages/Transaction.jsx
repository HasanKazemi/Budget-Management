import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomSelect from '../components/CustomSelect'
import { useDispatch, useSelector } from 'react-redux'
import { transActions } from '../redux/slices/TransactionListSlice'

const Transaction = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('income')
  const defaultTpes = ["income","expense"]
  const [category, setCategory] = useState('')
  const defaultCategories = ['food', 'transport', 'bill', 'fun']
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const transaction = useSelector(state=>state.transaction)
  const dispatch = useDispatch()

  const handleSubmit = (event)=>{
    event.preventDefault()
    dispatch(transActions.addTransActions({
      id: transaction.length +  1,
      title:title,
      price:price,
      type:type,
      category:category,
      date:date,
    }))
  }

  return (
    <div className='w-[70%] p-[50px] flex justify-center items-center'>
        <form className='w-[40%]' onSubmit={(event)=>handleSubmit(event)}>
            <CustomInput label='title' type="text" value={title} setValue={setTitle} placeholder="insert title ....." />
            <CustomInput label='price' type="number" value={price} setValue={setPrice} placeholder="insert price ....." />
            <CustomSelect label='type' options={defaultTpes} setValue={setType} />
            <CustomSelect label='category' options={defaultCategories} setValue={setCategory} />
            <CustomInput label='date' type="date" value={date} setValue={setDate} />
            <div className='flex justify-center'>
                <button className='btn btn-blue border py-1 px-4 rounded-md cursor-pointer'>submit</button>
            </div>
        </form>
    </div>
  )
}

export default Transaction