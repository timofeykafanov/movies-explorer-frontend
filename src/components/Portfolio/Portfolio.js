import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://timofeykafanov.github.io/how-to-learn/'>Статичный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://timofeykafanov.github.io/russian-travel/'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://cartvelgram.students.nomoredomains.work/'>Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
