import './MoviesCard.css';

function MoviesCard() {
  return (
    <>
      <div className='movies-card'>
        <div className='movies-card__about'>
          <h2 className='movies-card__title'>33 слова о дизайне</h2>
          <p className='movies-card__duration'>1ч 42м</p>
          <div className='movies-card__like movies-card__like_active' />
        </div>
        <div className='movies-card__image' />
      </div>
      <div className='movies-card'>
        <div className='movies-card__about'>
          <h2 className='movies-card__title'>Киноальманах «100 лет дизайна»</h2>
          <p className='movies-card__duration'>1ч 42м</p>
          <div className='movies-card__like movies-card__like_active' />
        </div>
        <div className='movies-card__image' />
      </div>
      <div className='movies-card'>
        <div className='movies-card__about'>
          <h2 className='movies-card__title'>В погоне за Бенкси</h2>
          <p className='movies-card__duration'>1ч 42м</p>
          <div className='movies-card__like' />
        </div>
        <div className='movies-card__image' />
      </div>
      <div className='movies-card'>
        <div className='movies-card__about'>
          <h2 className='movies-card__title'>Баския: Взрыв реальности</h2>
          <p className='movies-card__duration'>1ч 42м</p>
          <div className='movies-card__like' />
        </div>
        <div className='movies-card__image' />
      </div>
      <div className='movies-card'>
        <div className='movies-card__about'>
          <h2 className='movies-card__title'>Бег это свобода</h2>
          <p className='movies-card__duration'>1ч 42м</p>
          <div className='movies-card__like movies-card__like_active' />
        </div>
        <div className='movies-card__image' />
      </div>
      <div className='movies-card'>
        <div className='movies-card__about'>
          <h2 className='movies-card__title'>Книготорговцы</h2>
          <p className='movies-card__duration'>1ч 42м</p>
          <div className='movies-card__like' />
        </div>
        <div className='movies-card__image' />
      </div>
      <div className='movies-card'>
        <div className='movies-card__about'>
          <h2 className='movies-card__title'>Когда я думаю о Германии ночью</h2>
          <p className='movies-card__duration'>1ч 42м</p>
          <div className='movies-card__like' />
        </div>
        <div className='movies-card__image' />
      </div>
    </>
  )
}

export default MoviesCard;