import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function MoviesCard(props) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      {props.movies.slice(0, props.counter).map((movie) => {
        function handleLikeClick() {
          if (!isLiked) {
            props.mainApi.addMovie({
              country: movie.country,
              director: movie.director,
              duration: movie.duration,
              year: movie.year,
              description: movie.description,
              image: `https://api.nomoreparties.co/${movie.image.url}`,
              trailerLink: movie.trailerLink,
              nameRU: movie.nameRU,
              nameEN: movie.nameEN,
              thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
              movieId: movie.id,
            })
          } else {
            props.mainApi.deleteMovie(props.movie.id);
          }
        }

        function handleDeleteClick() {
          console.log(movie._id)
          props.mainApi.deleteMovie(movie._id);
        }

        return (
          <div className='movies-card' key={location.pathname === '/movies' ? movie.id : movie._id}>
            <div className='movies-card__about'>
              <div className='movies-card__texts'>
                <h2 className='movies-card__title'>{movie.nameRU}</h2>
                <p className='movies-card__duration'>
                  {`${Math.trunc(movie.duration / 60) > 0 ? `${Math.trunc(movie.duration / 60)}ч` :
                  ''} ${movie.duration % 60}м`}
                </p>
              </div>
              {location.pathname === '/movies' ?
                <button className={`movies-card__like ${isLiked ? 'movies-card__like_active' : ''}`}
                type='button' onClick={handleLikeClick} /> :
                <button className='movies-card__delete' type='button' onClick={handleDeleteClick} />
              }
            </div>
            <a className='movies-card__link' href={movie.trailerLink} target='_blank' rel="noreferrer">
              <img src={location.pathname === '/movies' ? `https://api.nomoreparties.co/${movie.image.url}` :
              movie.image} alt={movie.nameRU} className='movies-card__image' />
            </a>
          </div>
        )
      })}
    </>
  )
}

export default MoviesCard;