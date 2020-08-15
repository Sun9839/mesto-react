import React from "react";

class ImagePopup extends React.Component{
    render(){
        return(
            <section className={`popup ${this.props.isOpen && 'popup_opened'}`} id={this.props.popupSelector}>
                <div className='popup__container'>
                    <button className='popup__close' onClick={this.props.isClose} type='button' />
                    <img className='popup__image' alt='фото' src={`${this.props.card.link}`}/>
                    <p className='popup__text'>{this.props.card.name}</p>
                </div>
            </section>
        )
    }
}

export default ImagePopup;