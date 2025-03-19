import React from 'react'
import { FaHome, FaMoneyBillWave } from "react-icons/fa";
import { PiHandWithdrawBold } from "react-icons/pi";

const Menu = () => {
  const menuNames = [
    { id:1, name: 'Home', icon:<FaHome fill="#007bff"/> },
    { id:2, name: 'Income', icon:<FaMoneyBillWave fill="#007bff" /> },
    { id:3, name: 'Expense', icon:<PiHandWithdrawBold fill="#007bff" />  },
  ]
  return (
    <div className='flex flex-col gap-4 font-bold w-[200px]'>
        {menuNames.map(menu=>(
          <div key={menu.id} className='flex items-center gap-2 cursor-pointer'>
            <i>{menu.icon}</i>
            <h2>{menu.name}</h2>
          </div>
        ))}
    </div>
  )
}

export default Menu