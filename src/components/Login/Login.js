import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    if (e.target.name === "email") {
      console.log(e.target.value)
      setEmail(e.target.value)
    } else if (e.target.name === "password") {
      setPassword(e.target.value)
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
          <input className='login__input login__input_type_email' type='email' name='email' value={email} placeholder="Email" onChange={handleChange} />
          <span className='login__error login__error_hidden'>Что-то пошло не так...</span>
          <label className='login__label'>Пароль</label>
          <input className='login__input login__input_type_password' type='password' name='password' value={password} placeholder="Пароль" onChange={handleChange} />
          <span className='login__error login__error_hidden'>Что-то пошло не так...</span>
          <button className='login__button' type='submit'>Войти</button>
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