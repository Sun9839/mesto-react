import React from "react";

export default class Card extends React.Component{
    constructor(props) {
        super(props);
    }
    handleImageClick =() => {
        this.props.onCardClick(this.props.card);
    }
    render(){
        return(
            <div className='place-card'>
                <img className='place-card__image' alt='фото' src={this.props.card.link} onClick={this.handleImageClick} />
                <button className='place-card__delete' type='button'/>
                <p className='place-card__title'>{this.props.card.name}</p>
                <div className='place-card__like-container'>
                    <button className='place-card__like' type='button'/>
                    <p className='place-card__quantity'>{this.props.likes.length}</p>
                </div>
            </div>
        )
    }
}