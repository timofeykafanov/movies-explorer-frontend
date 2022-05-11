import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm />
        <MoviesCardList />
        <button className='movies__button' type='button'>Ещё</button>
      </div>
    </main>
  )
}

export default Movies;