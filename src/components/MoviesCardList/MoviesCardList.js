import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
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

  return (
    <>
      {isEmpty ? <></> : 
        <section className='movies-card-list'>
          <MoviesCard movies={props.movies} counter={props.counter} mainApi={props.mainApi} />
        </section>
      }
    </>
  )
}

export default MoviesCardList;