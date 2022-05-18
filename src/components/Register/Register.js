import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register({ handleRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(email, password, name);
  }

  return (
    <section className='register'>
      <div className='register__container'>
        <Link to='/' className='register__logo' />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form' onSubmit={handleSubmit}>
          <label className='register__label'>Имя</label>
          <input className='register__input register__input_type_name' type='text' name='name'
            value={name} placeholder="Имя" onChange={handleChange} />
          <span className='register__error register__error_hidden'>Что-то пошло не так...</span>
          <label className='register__label'>E-mail</label>
          <input className='register__input register__input_type_name' type='email' name='email'
            value={email} placeholder="Email" onChange={handleChange} />
          <span className='register__error register__error_hidden'>Что-то пошло не так...</span>
          <label className='register__label'>Пароль</label>
          <input className='register__input register__input_type_name' type='password' name='password'
            value={password} placeholder="Пароль" onChange={handleChange} />
          <span className='register__error register__error_hidden'>Что-то пошло не так...</span>
          <button className='register__button' type='submit'>Зарегистрироваться</button>
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