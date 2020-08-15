import React from "react";

class PopupWidthForm extends React.Component {
    render() {
        return(
            <section className={`popup ${this.props.isOpen && 'popup_opened'}`} id={this.props.popupSelector}>
                <div className='popup__container'>
                    <button className='popup__close' onClick={this.props.isClose} type='button'></button>
                    <form className='popup__form' name={this.props.formName} noValidate>
                        <h3 className='popup__title'>{this.props.title}</h3>
                        {this.props.children}
                        <button className='popup__save'>{this.props.buttonText}</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default PopupWidthForm;