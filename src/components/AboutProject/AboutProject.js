import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about'>
      <h2 className='about__title'>О проекте</h2>
      <hr className='about__line'></hr>
      <div className='about__texts'>
        <h3 className='about__subtitle'>Дипломный проект включал 5 этапов</h3>
        <p className='about__text'>
          Составление плана, работу над бэкендом, вёрстку, 
          добавление функциональности и финальные доработки.
        </p>
        <h3 className='about__subtitle'>На выполнение диплома ушло 5 недель</h3>
        <p className='about__text'>
          У каждого этапа был мягкий и жёсткий дедлайн, 
          которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='about__time'>
        <p className='about__one'>1 неделя</p>
        <p className='about__four'>4 недели</p>
        <p className='about__backend'>Back-end</p>
        <p className='about__frontend'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;