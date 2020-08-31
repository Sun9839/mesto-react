import React from "react";
import PopupWithForm from "./PopupWithForm";

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
        <PopupWithForm isOpen={props.isOpen}
                       onClose={props.onClose}
                       onSubmit={handleAddPlaceSubmit}
                       formName={'card-popup'}
                       buttonText={'Добавить'}
                       title={'Новое место'}
                       children={
                           <>
                               <input ref={titleRef} autoComplete="off" minLength="1" maxLength="30" className='popup__name' id='input-place' name='name' type='text' placeholder='Название' required />
                               <span className='popup__input-error' id='input-place-error'/>
                               <input ref={linkRef} autoComplete="off" type="url" className='popup__activity' id='input-link' name='link' placeholder='Ссылка на картинку' required />
                               <span className='popup__input-error' id='input-link-error'/>
                           </>
                       }
        />
    )
}