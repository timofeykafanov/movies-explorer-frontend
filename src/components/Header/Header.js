import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const location = useLocation();

  return (
    <>
      {(location.pathname === '/movies' ||
        location.pathname === '/saved-movies' ||
        location.pathname === '/profile' || 
        location.pathname === '/') &&
        props.loggedIn === true ? 
        <header className={`header ${location.pathname === '/' ? 'header_protected' : ''}`}>
          <div className={`header__container ${location.pathname === '/' ? 'header__container_protected' : ''}`}>
            <Link to='/' className='header__logo' />
            <div className='header__links'>
              <Link className={`header__link ${location.pathname === '/movies' ?
                'header__link_active' : ''}`} to='/movies'>Фильмы</Link>
              <Link className={`header__link ${location.pathname === '/saved-movies' ?
                'header__link_active' : ''}`} to='/saved-movies'>Сохранённые фильмы</Link>
            </div>
            <Link className='header__account' to='/profile'>
              <span>Аккаунт</span>
              <bitton className='header__icon' />
            </Link>
            <button className='header__menu' type='button' onClick={props.openMenu} />
          </div>
        </header> : <></>
      }
      {location.pathname === '/' && props.loggedIn === false ?
        <header className='header header_protected'>
          <div className='header__container header__container_protected'>
            <Link to='/' className='header__logo' />
            <div className='header__auth'>
              <Link className='header__signup' to='/signup'>Регистрация</Link>
              <Link className='header__signin' to='/signin'>Войти</Link>
            </div>
          </div>
        </header> : <></>
      }
    </>
  )
}

export default Header;
