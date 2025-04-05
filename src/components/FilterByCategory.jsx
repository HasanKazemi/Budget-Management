import React from 'react'

const FilterByCategory = ({ setFilters }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  }
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor="category">filter by category</label>
      <select id="category" name='category' className='h-[30px] px-1 border text-blue-600' onChange={handleChange}>
        <option value="">All</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="bill">Bill</option>
        <option value="fun">Fun</option>
      </select>
    </div>
  )
}

export default FilterByCategory