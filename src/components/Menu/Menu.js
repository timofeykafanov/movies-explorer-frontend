import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

function Menu(props) {
  const location = useLocation();

  function handleClick() {
    props.closeMenu();
  }

  return (
    <div className={`menu ${props.isOpen ? '' : 'menu_hidden'}`}>
      <nav className='menu__container'>
        <button className='menu__close' type='button' onClick={handleClick} />
        <Link className={`menu__link ${location.pathname === '/' ? 'menu__link_active' : ''}`} to='/' onClick={handleClick}>Главная</Link>
        <Link className={`menu__link ${location.pathname === '/movies' ? 'menu__link_active' : ''}`} to='/movies' onClick={handleClick}>Фильмы</Link>
        <Link className={`menu__link ${location.pathname === '/saved-movies' ? 'menu__link_active' : ''}`} to='/saved-movies' onClick={handleClick}>Сохранённые фильмы</Link>
        <Link className='menu__account' to='/profile' onClick={handleClick}>
          Аккаунт
          <div className='menu__icon' />
        </Link>
      </nav>
    </div>
  )
}

export default Menu;