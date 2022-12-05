import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <Nav/>
                {props.children}
                <Outlet />
            <Footer/>
        </div>
        
    )
}

export default Layout;