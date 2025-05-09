import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Wallets from "../pages/Wallets";
import AddWallet from "../pages/AddWallet";
import AddIncome from "../pages/AddIncome";
import Incomes from "../pages/Incomes";

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
                path: "/wallets/addNewWallet",
                element: <AddWallet/>,
            },
            {
                path: "/incomes",
                element: <Incomes/>,
            },
            {
                path: "/addIncome",
                element: <AddIncome/>,
            },
        ]
    }
])