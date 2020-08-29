import React from "react";

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
        <section className={`popup ${props.isOpen && 'popup_opened'}`} id='avatar-popup' >
            <div className='popup__container'>
                <button className='popup__close' onClick={props.isClose} type='button' />
                <form className='popup__form' onSubmit={handleSubmit} noValidate>
                    <h3 className='popup__title'>Обновить аватар</h3>
                    <input ref={avatarRef} autoComplete="off" type="url" className='popup__name' id='input-avatar' name='avatar' placeholder='Ссылка на аватар' required />
                    <span className='popup__input-error' id='input-avatar-error'/>
                    <button className='popup__save'>Сохранить</button>
                </form>
            </div>
        </section>
    )
}