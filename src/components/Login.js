import React from 'react';
import Header from "./Header";
import Form from "./Form";

function Login(props){
    return(
        <div className='page'>
            <Header linkText='Регистрация'/>
            <Form title='Вход' buttonText='Войти' where='Ещё не' link='/sign-up' linkText='Регистрация'/>
        </div>
    )
}

export default Login;