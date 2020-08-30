import React from "react";
import {CurrentUserContext} from "../contexts/currentUserContext";

function Card (props){
    const context = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === context._id;
    const isLiked = props.card.likes.some(i => i._id === context._id)
    function handleImageClick () {
        props.onCardClick(props.card);
    }
    function handleCardLike () {
        props.handleCardLike(props.card);
    }
    function handleCardDelete(){
        props.handleCardDelete(props.card);
    }
    return(
        <div className='place-card'>
            <img className='place-card__image' alt='фото' src={props.card.link} onClick={handleImageClick} />
            <button onClick={handleCardDelete} className={`place-card__delete ${(isOwn ? "" : "place-card__delete_disabled")}`} type='button'/>
            <p className='place-card__title'>{props.card.name}</p>
            <div className='place-card__like-container'>
                <button className={`place-card__like ${isLiked ? 'place-card__like_clicked' : ''}`} onClick={handleCardLike} type='button'/>
                <p className='place-card__quantity'>{props.card.likes.length}</p>
            </div>
        </div>
    )
}
export default Card;