import React from "react";
import "../Styles/Header.css"

const Hero = () => {
    return (
        <header className="header">
            <div className="header__hero">
                <img src={require("../Img/blue_white_blue1200.png")} alt="" />
            </div>
        </header>
    )
}

export default Hero;