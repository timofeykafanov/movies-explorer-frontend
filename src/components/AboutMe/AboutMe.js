import './AboutMe.css';

import image from '../../images/photo.jpeg'


function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__container'>
        <h2 className='section__title'>Студент</h2>
        <div className='about-me__block'>
          <div className='about-me__info'>
            <div className='about-me__texts'>
              <h3 className='about-me__name'>Тимофей</h3>
              <p className='about-me__about'>Фронтенд-разработчик, 25 лет</p>
              <p className='about-me__text'>
                Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                начал заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <div className='about-me__links'>
              <a className='about-me__link'
                href='https://www.facebook.com/profile.php?id=100011387485927'
                target='_blank'
                rel="noreferrer">Facebook
              </a>
              <a className='about-me__link'
                href='https://github.com/timofeykafanov'
                target='_blank'
                rel="noreferrer">Github
              </a>
            </div>
          </div>
          <img src={image} alt='Тимофей' className='about-me__image' />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;