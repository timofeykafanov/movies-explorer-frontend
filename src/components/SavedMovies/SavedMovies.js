import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies(props) {
  const counter = Infinity;

  return (
    <main className='movies'>
      <div className='movies__container'>
        <SearchForm handleSearch={props.handleSearch} />
        <MoviesCardList
          movies={props.movies}
          counter={counter}
          mainApi={props.mainApi}
          setSavedFilteredMovies={props.setSavedFilteredMovies}
          savedFilteredMovies={props.savedFilteredMovies}
          isLoading={props.isLoading}
          nothingFound={props.nothingFound}
        />
      </div>
    </main>
  )
}

export default SavedMovies;