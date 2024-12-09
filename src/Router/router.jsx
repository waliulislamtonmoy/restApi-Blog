import {createBrowserRouter} from "react-router-dom";
import Layout from "../leyout/Layout.jsx";
import Home from "../pages/Home.jsx";
import ByCategoryPage from "../pages/ByCategoryPage.jsx";
import DetailsPage from "../pages/DetailsPage.jsx";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/byCategory/:categoryID",
                element:<ByCategoryPage></ByCategoryPage>
            },
            {
                path:"/details",
                element:<DetailsPage></DetailsPage>
            },
        ]

    },
])