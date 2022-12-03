import React from "react";
import "../Styles/Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header_menu">
                <nav className="menu__nav">
                    <div className="nav__logo">
                        <img src={require("../Img/blue_transp_white_200.png")} width="100" alt="logo"/>
                    </div>
                    <div className="nav__links">
                        <ul>
                            <a href="/"><li>O NAS</li></a>
                            <a href="/"><li>ZAWODY</li></a>
                            <a href="/"><li>ZAWODNICY</li></a>
                            <a href="/"><li>PRODUKTY</li></a>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="header__hero">
                
            </div>
        </header>
    )
}

export default Header;