import React from "react";
import PopupWidthForm from "./PopupWidthForm";

export default function EditAvatarPopup(props){
    const avatarRef = React.useRef()
    function handleSubmit(e){
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        })
    }
    React.useEffect(() => {
        avatarRef.current.value = ''
    },[avatarRef])
    return(
        <PopupWidthForm
            isOpen={props.isOpen}
            isClose={props.isClose}
            popupSelector={'avatar-popup'}
            title={'Обновить аватар'}
            buttonText={'Сохранить'}
            onSubmitImage={handleSubmit}
            children={
                <>
                  <input ref={avatarRef} autoComplete="off" type="url" className='popup__name' id='input-avatar' name='avatar' placeholder='Ссылка на аватар' required />
                  <span className='popup__input-error' id='input-avatar-error'/>
                </>
            }
            />
    )
}