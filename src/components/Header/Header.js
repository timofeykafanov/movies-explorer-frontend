import { Link, Route, Routes } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <Routes>
      <Route path='/' element={
        <header className='header header_main'>
          <div className='header__logo'></div>
          <div className='header__auth'>
            <Link className='header__signup' to='/signup'>Регистрация</Link>
            <Link className='header__signin' to='/signin'>Войти</Link>
          </div>
        </header>
      } />
      <Route path='/movies' element={
        <header className='header header_movie'>
          <div className='header__logo'></div>
          <div className='header__links'>
            <Link className='header__link header__link_active' to='/movies'>Фильмы</Link>
            <Link className='header__link' to='/saved-movies'>Сохранённые фильмы</Link>
          </div>
          <Link className='header__account' to='/profile'>
            <span>Аккаунт</span>
            <div className='header__icon' />
          </Link>
        </header>
      } />
    </Routes>
  )
}

export default Header;
