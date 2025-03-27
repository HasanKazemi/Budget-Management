import React from 'react'

const CustomSelect = ({label}) => {
    const defaultCategories = ['food', 'transport', 'bill', 'fun']
    return (
        <div className='flex flex-col mb-10 gap-3'>
            <label htmlFor={label} className='font-bold text-lg'>{label.charAt(0).toUpperCase()+label.slice(1)}</label>
            <select id={label} className='border rounded-md px-3 h-10'>
                {defaultCategories?.map((category, index) => (
                    <option key={index} value={category} className='text-[#0f0a1e]'>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default CustomSelect