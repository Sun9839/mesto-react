import React from 'react';
import {api} from "../utils/Api";
import Card from "../utils/Card";

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName : 'Жак Ив-Кусто',
            userDescription : 'Исследователь океана',
            userAvatar : './images/Jak-Iv-Kusto.jpg',
            cards : []
        }
    }
    componentDidMount () {
        api.getUser().then(
            (data) => {
                this.setState({
                    userAvatar: data.avatar,
                    userName: data.name,
                    userDescription: data.about
                })
            }
        );
        api.getInitialCards().then(
            (data) => {
                this.setState({
                    cards : data
                })
            }
        )
    }
    render() {
        return(
            <>
                <section className='profile'>
                    <button className='profile__image-button' type='button' onClick={this.props.isEditAvatarPopupOpen} />
                    <img className='profile__image' alt='фото профиля' src={this.state.userAvatar} />
                    <div className='profile__info'>
                        <h1 className='profile__name'>{this.state.userName}</h1>
                        <p className='profile__activity'>{this.state.userDescription}</p>
                        <button className='profile__edit' type='button' onClick={this.props.onEditProfile} />
                    </div>
                    <button className='profile__add' type='button' onClick={this.props.onAddPlace } />
                </section>

                <section className='places-list'>
                    {this.state.cards.map((data) => {
                        return (<Card  onCardClick={this.props.imageClick} key={data._id} card={data} likes={data.likes} />)
                    })}
                </section>
            </>
        );
    }
}

export default Main;