import React from "react";

function PopupWithForm (props){
    return(
        <section className={`popup ${props.isOpen && 'popup_opened'}`} id={props.formName}>
            <div className='popup__container'>
                <button className='popup__close' onClick={props.onClose} type='button' />
                <form className='popup__form' onSubmit={props.onSubmit} name={props.formName} noValidate>
                    <h3 className='popup__title'>{props.title}</h3>
                    {props.children}
                    <button className='popup__save'>{props.buttonText}</button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;