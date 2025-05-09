import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Wallets from "../pages/Wallets";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path: "/wallets",
                element: <Wallets/>,
            },
        ]
    }
])