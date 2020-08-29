import React from "react";

function ImagePopup (props){
    return(
        <section className={`popup ${props.isOpen && 'popup_opened'}`} id={props.popupSelector}>
            <div className='popup__container'>
                <button className='popup__close' onClick={props.isClose} type='button' />
                <img className='popup__image' alt='фото' src={`${props.card.link}`}/>
                <p className='popup__text'>{props.card.name}</p>
            </div>
        </section>
    )
}

export default ImagePopup;