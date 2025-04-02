import React, { useRef } from 'react'

const FilterByTitle = ({expenseRef,setFilteredExpenseList}) => {
  const searchTermRef = useRef("")

  const handleFilter = () => {  
    setFilteredExpenseList(expenseRef.current?.filter(expense => {
      return expense.title.includes(searchTermRef.current.value)
    }))
  }

  return (
    <div className='flex flex-col items-start gap-1'>
      <label htmlFor="searchTerm">search by title</label>
      <input id="searchTerm" ref={searchTermRef} onChange={() => handleFilter()} type="text" className='border border-purple-950 px-3 py-1 rounded-sm bg-[#0b0818]' placeholder='insert product title ....' />
    </div>
  )
}

export default FilterByTitle