import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/menu.css"

const Menu = () => {
  return (
    <nav className='nav'>
        <NavLink to="/wallets">حساب ها</NavLink>
        <NavLink to="/wallets/AddNewWallet">افزودن حساب جدید</NavLink>
        <NavLink to="/incomes">درآمد ها</NavLink>
        <NavLink to="/addIncome">ثبت درآمد جدید</NavLink>
        <NavLink to="/expenses">هزینه ها</NavLink>
        <NavLink to="/addExpense">ثبت هزینه جدید</NavLink>
    </nav>
  )
}

export default Menu