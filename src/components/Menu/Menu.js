import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <div className='menu menu__hidden'>
      <div className='menu__container'>
        <button className='menu__close' type='button' />
        <Link className='menu__link' to='/'>Главная</Link>
        <Link className='menu__link menu__link_active' to='/movies'>Фильмы</Link>
        <Link className='menu__link' to='/saved-movies'>Сохранённые фильмы</Link>
        <Link className='menu__account' to='/profile'>
          Аккаунт
          <div className='menu__icon' />
        </Link>
      </div>
    </div>
  )
}

export default Menu;