import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__block'>
          <p className='footer__year'>&copy; 2022</p>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a className='footer__link' 
                href='https://practicum.yandex.ru'
                target='_blank'
                rel="noreferrer">Яндекс.Практикум
              </a>
            </li>
            <li className='footer__item'>
              <a className='footer__link'
                href='https://github.com/timofeykafanov'
                target='_blank'
                rel="noreferrer">Github
              </a>
            </li>
            <li className='footer__item'>
              <a className='footer__link'
                href='https://www.facebook.com/profile.php?id=100011387485927' 
                target='_blank'
                rel="noreferrer">Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;