import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <main className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <section className='profile__info'>
          <div className='profile__name'>
            <p className='profile__key'>Имя</p>
            <p className='profile__value'>Виталий</p>
          </div>
          <div className='profile__email'>
            <p className='profile__key'>E-mail</p>
            <p className='profile__value'>pochta@yandex.ru</p>
          </div>
        </section>
        <button className='profile__edit' type='button'>Редактировать</button>
        <Link className='profile__logout' to='/'>Выйти из аккаунта</Link>
      </div>
    </main>
  )
}

export default Profile;