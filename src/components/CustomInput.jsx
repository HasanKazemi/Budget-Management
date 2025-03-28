import React from 'react'

const CustomInput = ({label,type,placeholder,value,setValue}) => {
  return (
    <div className='flex flex-col mb-10 gap-3'>
        <label htmlFor={label} className='font-bold text-lg'>{label.charAt(0).toUpperCase() + label.slice(1)}</label>
        <input type={type} id={label} className='border rounded-md h-10 px-3' value={value} onChange={(event)=>setValue(event.target.value)} placeholder={placeholder || ''}/>
    </div>
  )
}

export default CustomInput