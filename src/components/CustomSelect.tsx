import React from 'react'

interface CustomSelectProps {
  label: string;
  setValue: (value: string) => void;
  defaultCategories?: string[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({label, setValue, defaultCategories = ['food', 'transport', 'bill', 'fun']}) => {
    return (
        <div className='flex flex-col mb-10 gap-3'>
            <label htmlFor={label} className='font-bold text-lg'>{label.charAt(0).toUpperCase()+label.slice(1)}</label>
            <select 
              id={label} 
              onChange={(event) => setValue(event.target.value)} 
              className='border rounded-md px-3 h-10 cursor-pointer'
            >
                {defaultCategories?.map((item, index) => (
                    <option key={index} value={item} className='text-[#0f0a1e] cursor-pointer'>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default CustomSelect 