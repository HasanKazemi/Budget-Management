import React from 'react'
import { FaHome, FaMoneyBillWave } from "react-icons/fa";
import { PiHandWithdrawBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const menuNames = [
    { id:1, name: 'Dashboard', route: "/", icon:<FaHome fill="#007bff"/> },
    { id:3, name: 'Transaction', route: "/transactions", icon:<PiHandWithdrawBold fill="#007bff" />  },
  ]
  return (
    <div className='flex flex-col gap-4 font-bold w-[200px]'>
        {menuNames.map((menu,index)=>(
          <NavLink to={menu.route} key={index}>
            <div key={menu.id} className='flex items-center gap-2 cursor-pointer'>
              <i>{menu.icon}</i>
              <h2>{menu.name}</h2>
            </div>
          </NavLink>
        ))}
    </div>
  )
}

export default Menu