import React from 'react';
import {Link} from "react-router-dom";

function Form(props){
    const [emailValue, setEmailValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');
    function handleChangeEmail(e) {
        setEmailValue(e.target.value);
    }
    function handleChangePassword(e) {
        setPasswordValue(e.target.value);
    }
    return(
        <form className='form'>
            <h3 className='form__title'>{props.title}</h3>
            <div className='form__inputs'>
                <input placeholder='Email' value={emailValue} onChange={handleChangeEmail} className='form__input' />
                <input placeholder='Пароль' value={passwordValue} onChange={handleChangePassword} className='form__input' />
            </div>
            <button className='form__button'>{props.buttonText}</button>
            <p className='form__route'>
                {`${props.where} зарегистрированы? `}
                <Link className='form__link' to={props.link}>{props.linkText}</Link>
            </p>
        </form>
    )
}

export default Form