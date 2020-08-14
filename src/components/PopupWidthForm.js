import React from "react";

class PopupWidthForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section className={this.props.class} id={this.props.popupSelector}>
                <div className='popup__container'>
                    <button className='popup__close' onClick={this.props.isClose} type='button'></button>
                    <form className='popup__form' name={this.props.formName} noValidate>
                        <h3 className='popup__title'>{this.props.title}</h3>
                        {this.props.children}
                    </form>
                </div>
            </section>
        );
    }
}

export default PopupWidthForm;