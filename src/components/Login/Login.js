import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <section className='login'>
      <div className='login__container'>
        <Link to='/' className='login__logo' />
        <h2 className='login__title'>Рады видеть!</h2>
        <form className='login__form'>
          <label className='login__label'>E-mail</label>
          <input className='login__input login__input_type_name' type='email' />
          <span className='login__error login__error_hidden'>Что-то пошло не так...</span>
          <label className='login__label'>Пароль</label>
          <input className='login__input login__input_type_name' type='password' />
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