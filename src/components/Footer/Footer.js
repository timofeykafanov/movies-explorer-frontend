import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__block'>
        <p className='footer__year'>&copy; 2022</p>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a className='footer__link' href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
          </li>
          <li className='footer__item'>
            <a className='footer__link' href='https://github.com/timofeykafanov'>Github</a>
          </li>
          <li className='footer__item'>
            <a className='footer__link' href='https://www.facebook.com/profile.php?id=100011387485927'>Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;