import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}

export default Movies;