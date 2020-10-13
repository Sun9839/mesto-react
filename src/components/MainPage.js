import React from 'react';
import Header from './Header.js';
import Main from "./Main.js";
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm.js";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import {CurrentUserContext} from "../contexts/currentUserContext";
import{api} from "../utils/api";

function MainPage(props){
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([])
    const [editAvatarPopup, setEditAvatarPopup] = React.useState(false);
    const [editProfilePopup, setEditProfilePopup] = React.useState(false);
    const [editPlacePopup, setEditPlacePopup] = React.useState(false)
    const [editCardPopup,setEditCardPopup] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false)

    function handleEditAvatarClick () {
        setEditAvatarPopup(true);
    }
    function handleEditProfilePopup(){
        setEditProfilePopup(true);
    }
    function handleEditPlacePopup(){
        setEditPlacePopup(true);
    }
    function handleCardPopup(card){
        setEditCardPopup(true);
        setSelectedCard(card);
    }
    function closeAllPopups(){
        setEditCardPopup(false);
        setEditPlacePopup(false);
        setEditProfilePopup(false);
        setEditAvatarPopup(false);
        setSelectedCard({});
    }
    function onLikeClick(card){
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if(isLiked){
            api.removeLike(card._id).then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
        }else{
            api.setLike(card._id).then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
        }
    }

    function onDeleteButtonClick(card){
        api.deleteCard(card._id).then((deleteCard) => {
            const newCards = cards.filter(item => item !== deleteCard);
            setCards(newCards)
        })
    }
    function updateUser(obj){
        api.editProfile(obj).then((data) => {
            setCurrentUser(data);
        }).then(() => {
            closeAllPopups();
        })
    }
    function updateAvatar(obj){
        api.setAvatar(obj).then((data) => {
            setCurrentUser(data)
        }).then(() => {
            closeAllPopups();
        })
    }
    function addCard(obj){
        api.addCardToServer(obj).then((newCard) => {
            setCards([...cards,newCard]);
        }).then(() => {
            closeAllPopups();
        })
    }
    React.useEffect(() => {
        api.getUser().then((user) => {
            setCurrentUser(user);
        })

        api.getInitialCards().then((data) => {
            setCards(data);
        })
    },[]);
    return(
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <Header />
                <Main cards={cards} clickOnLike={onLikeClick} clickOnDeleteButton={onDeleteButtonClick} onCardClick={handleCardPopup} onEditProfile={handleEditProfilePopup} onAddPlace={handleEditPlacePopup} isEditAvatarPopupOpen={handleEditAvatarClick} />
                <Footer />
                <EditProfilePopup onUpdateUser={updateUser} onClose={closeAllPopups} isOpen={editProfilePopup} />
                <AddPlacePopup onAddCard={addCard} onClose={closeAllPopups} isOpen={editPlacePopup} />
                <PopupWithForm buttonText={'Да'} onClose={closeAllPopups} isOpen={false} popupSelector="delete-popup" title="Вы уверены?" />
                <EditAvatarPopup onUpdateAvatar={updateAvatar} onClose={closeAllPopups} isOpen={editAvatarPopup} />
                <ImagePopup popupSelector="image-popup" card={selectedCard} onClose={closeAllPopups} isOpen={editCardPopup}/>
            </div>
        </CurrentUserContext.Provider>
   );
}

export default MainPage;