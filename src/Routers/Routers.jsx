import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";

import Home from "../Pages/Home";
import Cards from "../Pages/Cards";
import Favorite from "../Pages/Favorite";

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/cards',
                element: <Cards/>
            },
            {
                path: '/favorites',
                element: <Favorite/>
            }
        ]
    }
])
