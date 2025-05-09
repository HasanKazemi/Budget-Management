import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Wallets from "../pages/Wallets";
import AddWallet from "../pages/AddWallet";

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
        ]
    }
])