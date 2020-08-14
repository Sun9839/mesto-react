import React from "react";

class ImagePopup extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <section className={this.props.class} id={this.props.popupSelector}>
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