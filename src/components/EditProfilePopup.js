import React from "react";
import {CurrentUserContext} from "../contexts/currentUserContext";
import PopupWithForm from "./PopupWithForm";

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
        <PopupWithForm
            formName={'profile-popup'}
            isOpen={props.isOpen}
            onClose={props.onClose}
            title={'Редактировать профиль'}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}
            children={
                <>
                    <input value={name || ''} onChange={changeName} autoComplete="off" minLength="2" maxLength="40" className='popup__name' id='input-name' name='name' type='text' required />
                    <span className='popup__input-error' id='input-name-error'/>
                    <input value={description || ''} onChange={changeAbout} autoComplete="off" minLength="2" maxLength="200" className='popup__activity' id='input-activity' name='about' type='text' required />
                    <span className='popup__input-error' id='input-activity-error'/>
                </>
            }
        />
    );
}

export default EditProfilePopup;