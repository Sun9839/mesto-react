import React from "react";

export default function AddPlacePopup(props){
    const linkRef = React.useRef();
    const titleRef = React.useRef();
    function handleAddPlaceSubmit(e){
        e.preventDefault();
        props.onAddCard({
            link: linkRef.current.value,
            name: titleRef.current.value
        })
    }
    React.useEffect(() => {
        linkRef.current.value = '';
        titleRef.current.value = ''
    },[linkRef,titleRef]);
    return(

        <section className={`popup ${props.isOpen && 'popup_opened'}`} id='card-popup'>
            <div className='popup__container'>
                <button className='popup__close' onClick={props.isClose} type='button' />
                <form className='popup__form' onSubmit={handleAddPlaceSubmit} name='places' noValidate>
                    <h3 className='popup__title'>Новое место</h3>
                    <input ref={titleRef} autoComplete="off" minLength="1" maxLength="30" className='popup__name' id='input-place' name='name' type='text' placeholder='Название' required />
                    <span className='popup__input-error' id='input-place-error'/>
                    <input ref={linkRef} autoComplete="off" type="url" className='popup__activity' id='input-link' name='link' placeholder='Ссылка на картинку' required />
                    <span className='popup__input-error' id='input-link-error'/>
                    <button className='popup__save'>Добавить</button>
                </form>
            </div>
        </section>
    )
}