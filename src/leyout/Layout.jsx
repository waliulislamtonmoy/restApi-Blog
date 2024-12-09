import React from 'react';
import Navigation from "./Navigation.jsx";
import {Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;