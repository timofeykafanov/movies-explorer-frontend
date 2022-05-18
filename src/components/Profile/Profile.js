import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [email, setEmail] = useState(currentUser.email);
  const [name, setName] = useState(currentUser.name);
  const [isSameValue, setIsSameValue] = useState(true);

  function handleChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    }
    if ((e.target.value === currentUser.name || name === currentUser.name) &&
      (e.target.value === currentUser.email || name === currentUser.email)) {
      setIsSameValue(true);
    } else {
      setIsSameValue(false);
    }
    console.log(isSameValue, name, e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdateUserInfo(email, name);
    setIsSameValue(true);
  }

  return (
    <main className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, {currentUser.name}</h2>
        <form className='profile__info' onSubmit={handleSubmit}>
          <div className='profile__name'>
            <p className='profile__key'>Имя</p>
            {props.isEditState ? <input className='profile__input' type='text' name='name'
              defaultValue={currentUser.name} onChange={handleChange} /> :
              <p className='profile__value'>{currentUser.name}</p>}
          </div>
          <div className='profile__email'>
            <p className='profile__key'>E-mail</p>
            {props.isEditState ? <input className='profile__input' type='email' name='email'
              defaultValue={currentUser.email} onChange={handleChange} /> :
              <p className='profile__value'>{currentUser.email}</p>}
          </div>
          {props.isEditState ?
            <button className={`profile__button ${isSameValue ? 'profile__button_disabled' : ''}`} type='submit' 
              onClick={props.handleSaveClick} disabled={isSameValue}>Сохранить</button> :
            <div className='profile__links'>
              <button className='profile__edit' type='button' onClick={props.handleEditClick}>Редактировать</button>
              <Link className='profile__logout' to='/' onClick={props.handleLogout}>Выйти из аккаунта</Link>
            </div>
          }
        </form>
      </div>
    </main>
  )
}

export default Profile;