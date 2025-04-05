import React from 'react'

const FilterByTitle = ({setFilters}) => {
  const handleFilter = (event) => {
    const { name, value } = event.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className='flex flex-col items-start gap-1'>
      <label htmlFor="searchTerm">search by title</label>
      <input id="searchTerm" name='searchTerm' onChange={handleFilter} type="text" className='border border-purple-950 px-3 py-1 rounded-sm bg-[#0b0818]' placeholder='insert product title ....' />
    </div>
  )
}

export default FilterByTitle