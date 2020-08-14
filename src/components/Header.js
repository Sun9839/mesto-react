import React from 'react';
import logo from "../images/logo.png";

function Header() {
    return(
        <header className='header'>
            <img className='header__logo' alt='Место' src={logo} />
        </header>
    );
}

export default Header;