import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function handleEmailChange(e) {
    const input = e.target;
    setEmail(input.value);
    setIsValidEmail(input.validity.valid);
    if (!isValidEmail) {
      setEmailError(input.validationMessage)
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
    props.handleLogin(email, password);
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
          <span className='login__error'>{passwordError}</span>
          <span className='login__message'>{props.message}</span>
          <button className={`login__button ${!(isValidEmail && isValidPassword) ? 'login__button_disabled' : ''}`}
            type='submit' disabled={!(isValidEmail && isValidPassword)}>Войти</button>
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