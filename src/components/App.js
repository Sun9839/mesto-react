import React from 'react';
import Header from './Header';
import Main from "./Main";
import Footer from './Footer';
import PopupWidthForm from "./PopupWidthForm";
import ImagePopup from "./ImagePopup";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isEditProfilePopupOpen: false,
            isAddPlacePopupOpen: false,
            isEditAvatarPopupOpen: false,
            isImagePopupOpen: false,
            selectedCard: ''
        }
    }
    handleEditAvatarClick = () => {
        this.setState({isEditAvatarPopupOpen: true})
    }
    handleEditProfileClick = () => {
        this.setState({isEditProfilePopupOpen: true})
    }
    handleAddPlaceClick = () => {
        this.setState({isAddPlacePopupOpen: true})
    }
    handleCardClick = (card) => {
        this.setState({
            isImagePopupOpen: true,
            selectedCard: card
        });
    }
    closeAllPopups = () => {
        this.setState({
            isEditAvatarPopupOpen: false,
            isEditProfilePopupOpen: false,
            isAddPlacePopupOpen: false,
            isImagePopupOpen: false,
            selectedCard: ''
        })
    }
    render() {
        return(
                <div className='page'>
                    <Header />
                    <Main onCardClick={this.handleCardClick} imageClick={this.handleCardClick} onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} isEditAvatarPopupOpen={this.handleEditAvatarClick} />
                    <Footer />
                    <PopupWidthForm isClose={this.closeAllPopups} class={`popup ${this.state.isEditProfilePopupOpen && 'popup_opened'}`} popupSelector="profile-popup" formName="profile" title="Редактировать профиль" children={
                        <>
                            <input autoComplete="off" minLength="2" maxLength="40" className='popup__name' id='input-name' name='name' type='text' required />
                            <span className='popup__input-error' id='input-name-error'/>
                            <input autoComplete="off" minLength="2" maxLength="200" className='popup__activity'id='input-activity' name='about' type='text' required />
                            <span className='popup__input-error' id='input-activity-error'/>
                            <button className='popup__save' disabled>Сохранить</button>
                        </>
                    }
                    />

                    <PopupWidthForm isClose={this.closeAllPopups} class={`popup ${this.state.isAddPlacePopupOpen && 'popup_opened'}`} popupSelector="card-popup" formName="places" title="Новое место" children={
                        <>
                            <input autoComplete="off" minLength="1" maxLength="30" className='popup__name' id='input-place' name='name' type='text' placeholder='Название' required />
                            <span className='popup__input-error' id='input-place-error'/>
                            <input autoComplete="off" type="url" className='popup__activity' id='input-link' name='link' placeholder='Ссылка на картинку' required />
                            <span className='popup__input-error' id='input-link-error'/>
                            <button className='popup__save' disabled>Сохранить</button>
                        </>
                    }
                    />

                    <PopupWidthForm isClose={this.closeAllPopups} class="popup" popupSelector="delete-popup" title="Вы уверены?" children={
                        <>
                            <button className='popup__save popup__save_width-margin'>Да</button>
                        </>
                    }
                    />

                    <PopupWidthForm isClose={this.closeAllPopups} class={`popup ${this.state.isEditAvatarPopupOpen && 'popup_opened'}`} popupSelector="avatar-popup" title="Обновить аватар" children={
                        <>
                            <input autoComplete="off" type="url" className='popup__name' id='input-avatar' name='avatar' placeholder='Ссылка на аватар' required />
                            <span className='popup__input-error' id='input-avatar-error'/>
                            <button className='popup__save'>Сохранить</button>
                        </>
                    }
                    />

                    <ImagePopup popupSelector="image-popup" card={this.state.selectedCard} isClose={this.closeAllPopups} class={`popup ${this.state.isImagePopupOpen && 'popup_opened'}`}/>
                </div>
        );
    }
}

export default App;