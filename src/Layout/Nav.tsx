import React from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="header_menu">
        <nav className="menu__nav">
            <div className="nav__logo">
                <Link to="/"><img src={require("../Img/blue_transp_white_200.png")} width="100" alt="logo"/></Link>
            </div>
            <div className="nav__links">
                <ul>
                    <Link to="/about"><li>O NAS</li></Link>
                    <a href="/zawody"><li>ZAWODY</li></a>
                    {/* <a href="/"><li>ZAWODNICY</li></a> */}
                    <a href="/praga"><li>PRAGA</li></a>
                </ul>
            </div>
        </nav>
    </div>          
  )
};

export default Nav;