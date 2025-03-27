import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomSelect from '../components/CustomSelect'

const Expense = () => {
  return (
    <div className='w-[70%] p-[50px] flex justify-center items-center'>
        <form className='w-[40%]'>
            <CustomInput label='title' type="text" />
            <CustomInput label='price' type="number" />
            <CustomSelect label='category' />
            <CustomInput label='date' type="date" />
            <div className='flex justify-center'>
                <button className='btn btn-blue border py-1 px-4 rounded-md'>submit</button>
            </div>
        </form>
    </div>
  )
}

export default Expense