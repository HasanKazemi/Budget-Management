import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/menu.css"

const Menu = () => {
  return (
    <nav className='nav'>
        <NavLink to="/wallets">حساب ها</NavLink>
        <NavLink to="/wallets/AddNewWallet">افزودن حساب جدید</NavLink>
    </nav>
  )
}

export default Menu