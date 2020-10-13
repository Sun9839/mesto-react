import React from 'react';
import Header from "./Header";
import Form from "./Form";

function Register(props){
    return(
        <div className='page'>
            <Header linkText='Войти'/>
            <Form title='Регистрация' buttonText='Зарегистрироваться' where='Уже' link='/sign-in' linkText='Войти'/>
        </div>
    )
}

export default Register;