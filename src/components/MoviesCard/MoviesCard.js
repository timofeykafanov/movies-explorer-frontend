import './MoviesCard.css';
import firstMovie from'../../images/first-movie.jpg';
import secondMovie from'../../images/second-movie.jpg';
import thirdMovie from'../../images/third-movie.jpg';
import fourthMovie from'../../images/fourth-movie.jpg';
import fifthMovie from'../../images/fifth-movie.jpg';
import sixthMovie from'../../images/sixth-movie.jpg';
import seventhMovie from'../../images/seventh-movie.jpg';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/movies' ? 
        <>
          <div className='movies-card'>
            <div className='movies-card__about'>
              <h2 className='movies-card__title'>33 слова о дизайне</h2>
              <p className='movies-card__duration'>1ч 42м</p>
              <button className='movies-card__like movies-card__like_active' />
            </div>
            <img src={firstMovie} alt='33 слова о дизайне' className='movies-card__image' />
          </div>
          <div className='movies-card'>
            <div className='movies-card__about'>
              <h2 className='movies-card__title'>Киноальманах «100 лет дизайна»</h2>
              <p className='movies-card__duration'>1ч 42м</p>
              <button className='movies-card__like movies-card__like_active' />
            </div>
            <img src={secondMovie} alt='Киноальманах «100 лет дизайна»' className='movies-card__image' />
          </div>
          <div className='movies-card'>
            <div className='movies-card__about'>
              <h2 className='movies-card__title'>В погоне за Бенкси</h2>
              <p className='movies-card__duration'>1ч 42м</p>
              <button className='movies-card__like' />
            </div>
            <img src={thirdMovie} alt='В погоне за Бенкси' className='movies-card__image' />
          </div>
          <div className='movies-card'>
            <div className='movies-card__about'>
              <h2 className='movies-card__title'>Баския: Взрыв реальности</h2>
              <p className='movies-card__duration'>1ч 42м</p>
              <button className='movies-card__like' />
            </div>
            <img src={fourthMovie} alt='Баския: Взрыв реальности' className='movies-card__image' />
          </div>
          <div className='movies-card'>
            <div className='movies-card__about'>
              <h2 className='movies-card__title'>Бег это свобода</h2>
              <p className='movies-card__duration'>1ч 42м</p>
              <button className='movies-card__like movies-card__like_active' />
            </div>
            <img src={fifthMovie} alt='Бег это свобода' className='movies-card__image' />
          </div>
          <div className='movies-card'>
            <div className='movies-card__about'>
              <h2 className='movies-card__title'>Книготорговцы</h2>
              <p className='movies-card__duration'>1ч 42м</p>
              <button className='movies-card__like' />
            </div>
            <img src={sixthMovie} alt='Книготорговцы' className='movies-card__image' />
          </div>
          <div className='movies-card'>
            <div className='movies-card__about'>
              <h2 className='movies-card__title'>Когда я думаю о Германии ночью</h2>
              <p className='movies-card__duration'>1ч 42м</p>
              <button className='movies-card__like' />
            </div>
            <img src={seventhMovie} alt='Когда я думаю о Германии ночью' className='movies-card__image' />
          </div>
        </>
      : 
        <>
          <div className='movies-card'>
            <div className='movies-card__about'>
              <h2 className='movies-card__title'>33 слова о дизайне</h2>
              <p className='movies-card__duration'>1ч 42м</p>
              <button className='movies-card__delete' />
            </div>
            <img src={firstMovie} alt='33 слова о дизайне' className='movies-card__image' />
          </div>
          <div className='movies-card'>
            <div className='movies-card__about'>
              <h2 className='movies-card__title'>Киноальманах «100 лет дизайна»</h2>
              <p className='movies-card__duration'>1ч 42м</p>
              <button className='movies-card__delete' />
            </div>
            <img src={secondMovie} alt='Киноальманах «100 лет дизайна»' className='movies-card__image' />
          </div>
          <div className='movies-card'>
            <div className='movies-card__about'>
              <h2 className='movies-card__title'>В погоне за Бенкси</h2>
              <p className='movies-card__duration'>1ч 42м</p>
              <button className='movies-card__delete' />
            </div>
            <img src={thirdMovie} alt='В погоне за Бенкси' className='movies-card__image' />
          </div>
        </>
      }
    </>
  )
}

export default MoviesCard;