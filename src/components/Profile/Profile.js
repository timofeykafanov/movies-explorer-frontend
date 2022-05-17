import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, {currentUser.name}</h2>
        <section className='profile__info'>
          <div className='profile__name'>
            <p className='profile__key'>Имя</p>
            <p className='profile__value'>{currentUser.name}</p>
          </div>
          <div className='profile__email'>
            <p className='profile__key'>E-mail</p>
            <p className='profile__value'>{currentUser.email}</p>
          </div>
        </section>
        <button className='profile__edit' type='button'>Редактировать</button>
        <Link className='profile__logout' to='/' onClick={props.handleLogout}>Выйти из аккаунта</Link>
      </div>
    </main>
  )
}

export default Profile;