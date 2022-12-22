import * as React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FunctionComponent<{ children: object}> = (props) => {
    return (
        <>
            <Nav/>
                {props.children}
                <Outlet /> 
            <Footer/>
        </>
    )
}

export default Layout;