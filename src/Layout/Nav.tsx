import React, { useState } from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [ active, setActive ] = useState(false);
    
    return (
        <header>
            <nav className="header__nav">
                <div className="nav__logo">
                    <Link to="/"><img src={require("../Img/blue_transp_white_200.png")} width="100" alt="logo"/></Link>
                </div>
                <button onClick={() => active ? setActive(false) : setActive(true)}>
                        <svg viewBox="0 0 100 100" width="50" height="50" style={{fill: "white"}}>
                            <rect width="99" height="5"></rect>
                            <rect y="30" width="66" height="5"></rect>
                            <rect y="60" width="33" height="5"></rect>
                        </svg>
                </button>
                <div className={active?"nav__menu expanded":"nav__menu"}>
                    <ul>
                        <Link to="/about"><li>O NAS</li></Link>
                        <Link to="/posts"><li>POSTY</li></Link>
                        <Link to="/races"><li>ZAWODY</li></Link>
                        <Link to="/drivers"><li>ZAWODNICY</li></Link>
                        <Link to="/praga"><li>PRAGA</li></Link>
                    </ul>
                </div>
                <div className='nav__links'>
                    <div><img src={require("../Img/icons/phone-call.png")} alt="phone number"/><p>123 456 789</p></div>
                    <div><img src={require("../Img/icons/pin.png")} alt="location"/><p>Gminna 36G 05-506 Lesznowola</p></div>
                </div>
            </nav>
        </header>  
    )
};

export default Nav;