import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [emailError, setEmailError] = useState('');

  function handleEmailChange(e) {
      setEmail(e.target.value);
      setIsValidEmail(e.target.validity.valid);
      if (!isValidEmail) {
        setEmailError(e.target.validationMessage)
      } else {
        setEmailError('');
      }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setIsValidPassword(e.target.validity.valid);
      if (!isValidPassword) {
        setEmailError(e.target.validationMessage)
      } else {
        setEmailError('');
      }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);
  }

  return (
    <section className='login'>
      <div className='login__container'>
        <Link to='/' className='login__logo' />
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form' onSubmit={handleSubmit}>
          <label className='login__label'>E-mail</label>
          <input className={`login__input ${!isValidEmail ? 'login__input_error' : ''}`} type='email' name='email'
            value={email} placeholder="Email" onChange={handleEmailChange} required />
          <span className={`login__error`}>{emailError}</span>
          <label className='login__label'>Пароль</label>
          <input className={`login__input ${!isValidPassword ? 'login__input_error' : ''}`} type='password' name='password'
            value={password} placeholder="Пароль" onChange={handlePasswordChange} required />
          <span className='login__error login__error_hidden'>Что-то пошло не так...</span>
          <button className={`login__button ${!(isValidEmail && isValidPassword) ? 'login__button_disabled' : ''}`} type='submit' disabled={!(isValidEmail && isValidPassword)}>Войти</button>
          <p className='login__text'>
            Ещё не зарегистрированы?
            <Link className='login__link' to='/signup'>Регистрация</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login;