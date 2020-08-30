import React from 'react';
import Card from "./Card.js";
import {CurrentUserContext} from "../contexts/currentUserContext";

function Main (props){
    const context = React.useContext(CurrentUserContext)

    function clickImage(card){
        props.onCardClick(card)
    }
    return(
        <>
            <section className='profile'>
                <button className='profile__image-button' type='button' onClick={props.isEditAvatarPopupOpen} />
                <img className='profile__image' alt='фото профиля' src={context.avatar} />
                <div className='profile__info'>
                    <h1 className='profile__name'>{context.name}</h1>
                    <p className='profile__activity'>{context.about}</p>
                    <button className='profile__edit' type='button' onClick={props.onEditProfile} />
                </div>
                <button className='profile__add' type='button' onClick={props.onAddPlace } />
            </section>

            <section className='places-list'>
                {props.cards.map((item) => {
                    return (<Card
                        handleCardLike={props.clickOnLike}
                        onCardClick={clickImage}
                        key={item._id}
                        card={item}
                        handleCardDelete={props.clickOnDeleteButton}
                    />)
                })}
            </section>
        </>
    );
}

export default Main;