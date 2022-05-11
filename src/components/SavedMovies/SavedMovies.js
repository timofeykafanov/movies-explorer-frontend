import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}

export default SavedMovies;