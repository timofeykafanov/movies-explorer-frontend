import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList(props) {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (props.movies === []) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [props.movies])

  console.log(props.nothingFound)

  return (
    <>
      {props.isLoading ? <Preloader /> :
        <>
          {isEmpty ? '' :
            <section className='movies-card-list'>
              {props.movies.slice(0, props.counter).map((movie) => {
                return (
                <MoviesCard
                  counter={props.counter}
                  mainApi={props.mainApi}
                  likedMovies={props.likedMovies}
                  movie={movie}
                  handleDelete={props.handleDelete}
                  key={movie.nameRU}
                  setSavedFilteredMovies={props.setSavedFilteredMovies}
                  savedFilteredMovies={props.savedFilteredMovies}
                />
                )
              })}
            </section>
          }
          {props.nothingFound ? <p>Ничего не найдено</p> : ''}
        </>
      }
    </>
  )
}

export default MoviesCardList;