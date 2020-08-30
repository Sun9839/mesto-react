import React from "react";
import {CurrentUserContext} from "../contexts/currentUserContext";

function EditProfilePopup (props){
    const currentUser = React.useContext(CurrentUserContext);
    const [name,setName] = React.useState(currentUser.name);
    const [description, setDescription] = React.useState(currentUser.about);
    function changeName(e){
        setName(e.target.value);
    }
    function changeAbout(event){
        setDescription(event.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    },[currentUser.name,currentUser.about])
    return(
        <section className={`popup ${props.isOpen && 'popup_opened'}`} id='profile-popup'>
            <div className='popup__container'>
                <button className='popup__close' onClick={props.isClose} type='button' />
                <form className='popup__form' noValidate onSubmit={handleSubmit}>
                    <h3 className='popup__title'>Редактировать профиль</h3>
                    <input value={name || ''} onChange={changeName} autoComplete="off" minLength="2" maxLength="40" className='popup__name' id='input-name' name='name' type='text' required />
                    <span className='popup__input-error' id='input-name-error'/>
                    <input value={description || ''} onChange={changeAbout} autoComplete="off" minLength="2" maxLength="200" className='popup__activity' id='input-activity' name='about' type='text' required />
                    <span className='popup__input-error' id='input-activity-error'/>
                    <button className='popup__save'>Сохранить</button>
                </form>
            </div>
        </section>
    );
}

export default EditProfilePopup;