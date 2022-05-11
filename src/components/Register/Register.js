import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <section className='register'>
      <div className='register__container'>
        <div className='register__logo' />
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form className='register__form'>
          <label className='register__label'>Имя</label>
          <input className='register__input register__input_type_name' type='text' />
          <span className='register__error register__error_hidden'>Что-то пошло не так...</span>
          <label className='register__label'>E-mail</label>
          <input className='register__input register__input_type_name' type='email' />
          <span className='register__error register__error_hidden'>Что-то пошло не так...</span>
          <label className='register__label'>Пароль</label>
          <input className='register__input register__input_type_name' type='password' />
          <span className='register__error'>Что-то пошло не так...</span>
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