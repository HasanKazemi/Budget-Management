import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Wallets from "../pages/Wallets";
import AddWallet from "../pages/AddWallet";
import AddIncome from "../pages/AddIncome";
import Incomes from "../pages/Incomes";
import AddExpense from "../pages/AddExpense";
import Expense from "../pages/Expense";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path: "/wallets",
                element: <Wallets/>,
            },
            {
                path: "/wallets/addWallet",
                element: <AddWallet/>,
            },
            {
                path: "/incomes",
                element: <Incomes/>,
            },
            {
                path: "/incomes/addIncome/:id?",
                element: <AddIncome/>,
            },
            {
                path: "/expenses",
                element: <Expense/>
            },
            {
                path: "/expenses/addExpense/:id?",
                element: <AddExpense/>,
            },
        ]
    }
])