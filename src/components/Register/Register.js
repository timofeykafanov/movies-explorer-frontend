import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');

  function handleNameChange(e) {
    const input = e.target;
    setName(input.value);
    setIsValidName(input.validity.valid);
    if (!isValidName) {
      setNameError(input.validationMessage)
    } else {
      setNameError('');
    }
  }

  function handleEmailChange(e) {
    const input = e.target;
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
  }

  function handlePasswordChange(e) {
    const input = e.target;
    setPassword(input.value);
    setIsValidPassword(input.validity.valid);
    if (!isValidPassword) {
      setPasswordError(input.validationMessage)
    } else {
      setPasswordError('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(email, password, name);
  }

  return (
    <section className='register'>
      <div className='register__container'>
        <Link to='/' className='register__logo' />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form' onSubmit={handleSubmit}>
          <label className='register__label'>Имя</label>
          <input className={`register__input ${!isValidName ? 'register__input_error' : ''}`} type='text' name='name'
            value={name} placeholder="Имя" onChange={handleNameChange} minLength='2' maxLength='30' required />
          <span className='register__error'>{nameError}</span>
          <label className='register__label'>E-mail</label>
          <input className={`register__input ${!isValidEmail ? 'register__input_error' : ''}`} type='email' name='email'
            value={email} placeholder="Email" onChange={handleEmailChange} required />
          <span className='register__error'>{emailError}</span>
          <label className='register__label'>Пароль</label>
          <input className={`register__input ${!isValidPassword ? 'register__input_error' : ''}`} type='password' name='password'
            value={password} placeholder="Пароль" onChange={handlePasswordChange} required />
          <span className='register__error'>{passwordError}</span>
          <span className='register__message'>{props.message}</span>
          <button className={`register__button ${!(isValidEmail && isValidPassword && isValidName) ?
            'register__button_disabled' : ''}`} type='submit' disabled={!(isValidEmail && isValidPassword && isValidName)}>Зарегистрироваться</button>
          <p className='register__text'>
            Уже зарегистрированы?
            <Link className='register__link' to='/signin'>Войти</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Register;