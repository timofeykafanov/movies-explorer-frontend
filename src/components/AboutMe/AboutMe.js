import './AboutMe.css';

function AboutMe() {
  return (
    <section className='aboutMe'>
      <h2 className='section__title'>Студент</h2>
      <div className='aboutMe__block'>
        <div className='aboutMe__info'>
          <div className='aboutMe__texts'>
            <h3 className='aboutMe__name'>Тимофей</h3>
            <p className='aboutMe__about'>Фронтенд-разработчик, 25 лет</p>
            <p className='aboutMe__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. 
              У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <div className='aboutMe__links'>
            <a className='aboutMe__link'
              href='https://www.facebook.com/profile.php?id=100011387485927'
              target='_blank'
              rel="noreferrer">Facebook
            </a>
            <a className='aboutMe__link'
              href='https://github.com/timofeykafanov'
              target='_blank'
              rel="noreferrer">Github
            </a>
          </div>
        </div>
        <div className='aboutMe__image' />
      </div>
    </section>
  )
}

export default AboutMe;