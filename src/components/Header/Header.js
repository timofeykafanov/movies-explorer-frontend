import { Link, Route, Routes } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <Routes>
      <Route path='/' element={
        <header className='header'>
          <div className='header__logo'></div>
          <div className='header__auth'>
            <Link className='header__signup' to='/signup'>Регистрация</Link>
            <Link className='header__signin' to='/signin'>Войти</Link>
          </div>
        </header>
      } />
    </Routes>
  )
}

export default Header;
