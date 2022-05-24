import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function MoviesCard(props) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(location.pathname === '/movies' ? props.likedMovies.includes(props.movie.id) : false);

  function handleLikeClick() {
    if (!isLiked) {
      props.mainApi.addMovie({
        country: props.movie.country,
        director: props.movie.director,
        duration: props.movie.duration,
        year: props.movie.year,
        description: props.movie.description,
        image: `https://api.nomoreparties.co/${props.movie.image.url}`,
        trailerLink: props.movie.trailerLink,
        nameRU: props.movie.nameRU,
        nameEN: props.movie.nameEN,
        thumbnail: `https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}`,
        movieId: props.movie.id,
      });
      setIsLiked(true);
    } else {
      props.handleDelete(props.movie.id)
      setIsLiked(false);
    }
  }

  function handleDeleteClick() {
    props.mainApi.deleteMovie(props.movie._id)
      .then(() => {
        props.setSavedFilteredMovies(props.savedFilteredMovies.filter((item) => item._id !== props.movie._id));
        localStorage.setItem('savedMovies', JSON.stringify(props.savedFilteredMovies.filter((item) => item._id !== props.movie._id)))
      })
  }

  return (
    <div className='movies-card' key={location.pathname === '/movies' ? props.movie.id : props.movie.movieId}>
      <div className='movies-card__about'>
        <div className='movies-card__texts'>
          <h2 className='movies-card__title'>{props.movie.nameRU}</h2>
          <p className='movies-card__duration'>
            {`${Math.trunc(props.movie.duration / 60) > 0 ? `${Math.trunc(props.movie.duration / 60)}ч` :
            ''} ${props.movie.duration % 60}м`}
          </p>
        </div>
        {location.pathname === '/movies' ?
          <button className={`movies-card__like ${isLiked ? 'movies-card__like_active' : ''}`}
          type='button' onClick={handleLikeClick} /> :
          <button className='movies-card__delete' type='button' onClick={handleDeleteClick} />
        }
      </div>
      <a className='movies-card__link' href={props.movie.trailerLink} target='_blank' rel="noreferrer">
        <img src={location.pathname === '/movies' ? `https://api.nomoreparties.co/${props.movie.image.url}` :
        props.movie.image} alt={props.movie.nameRU} className='movies-card__image' />
      </a>
    </div>
  )
}

export default MoviesCard;