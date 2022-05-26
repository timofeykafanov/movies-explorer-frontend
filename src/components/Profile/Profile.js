import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [email, setEmail] = useState(currentUser.email);
  const [name, setName] = useState(currentUser.name);
  const [isSameValue, setIsSameValue] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  function handleChange(e) {
    const input = e.target;
    if (input.name === "email") {
      const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{1,})$/i.test(
        input.value
      );
      setEmail(input.value);
      setIsValidEmail(validEmail);
      if (!isValidEmail) {
        setEmailError('Неверный формат почты')
      } else {
        setEmailError('');
      }
    } else if (input.name === "name") {
      setName(input.value);
      setIsValidName(input.validity.valid);
      if (!isValidName) {
        setNameError(input.validationMessage)
      } else {
        setNameError('');
      }
    }
    if (input.value === currentUser.name ||
      input.value === currentUser.email) {
      setIsSameValue(true);
    } else {
      setIsSameValue(false);
    }
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
            {props.isEditState ? <input className={`profile__input ${!isValidName ? 'profile__input_error' : ''}`} type='text' name='name'
              defaultValue={currentUser.name} onChange={handleChange} required minLength='2' maxLength='30' /> :
              <p className='profile__value'>{currentUser.name}</p>}
              <span className='profile__error profile__error_type_name'>{nameError}</span>
          </div>
          <div className='profile__email'>
            <p className='profile__key'>E-mail</p>
            {props.isEditState ? <input className={`profile__input ${!isValidEmail ? 'profile__input_error' : ''}`} type='email' name='email'
              defaultValue={currentUser.email} onChange={handleChange} required /> :
              <p className='profile__value'>{currentUser.email}</p>}
              <span className='profile__error profile__error_type_email'>{emailError}</span>
          </div>
          <span className='profile__message'>{props.message}</span>
          {props.isEditState ?
            <button className={`profile__button ${(isSameValue || (!isValidName || !isValidEmail)) ? 'profile__button_disabled' : ''}`} type='submit' 
              onClick={props.handleSaveClick} disabled={isSameValue || (!isValidName || !isValidEmail)}>Сохранить</button> :
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