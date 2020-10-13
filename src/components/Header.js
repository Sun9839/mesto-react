import React from 'react';
import {Link} from "react-router-dom";
import logo from "../images/logo.png";

function Header(props) {
    return(
        <header className='header'>
            <img className='header__logo' alt='Место' src={logo} />
            <p className='header__email'>{props.email}</p>
            <Link className='header__link' to={props.link}>{props.linkText}</Link>
        </header>
    );
}

export default Header;