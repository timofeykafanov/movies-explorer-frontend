import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';

function SearchForm(props) {
  const location = useLocation();
  const [isEmpty, setIsEmpty] = useState(false);
  const [movie, setMovie] = useState(location.pathname === '/movies' && localStorage.getItem('keyWord') ? localStorage.getItem('keyWord') : '');
  const [savedMovie, setSavedMovie] = useState(location.pathname === '/saved-movies' && localStorage.getItem('keyWordSaved') ? localStorage.getItem('keyWordSaved') : '');
  const defaultValue = location.pathname === '/movies' ?
    localStorage.getItem('keyWord') : localStorage.getItem('keyWordSaved');
  const defaultChecked = location.pathname === '/movies' ?
    JSON.parse(localStorage.getItem('checkbox')) : JSON.parse(localStorage.getItem('checkboxSaved'));

  function handleChange(e) {
    const input = e.target;
    if (location.pathname === '/movies') {
      setMovie(input.value);
    } else if (location.pathname === '/saved-movies') {
      setSavedMovie(input.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (location.pathname === '/movies') {
      localStorage.setItem('keyWord', movie);
    } else if (location.pathname === '/saved-movies') {
      localStorage.setItem('keyWordSaved', savedMovie);
    }
    if (location.pathname === '/movies') {
      if (movie === '') {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
        props.handleSearch();
      }
    } else if (location.pathname === '/saved-movies') {
      if (savedMovie === '') {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
        props.handleSearch();
      }
    }
  }

  function handleCheckboxChange(e) {
    const input = e.target;
    if (location.pathname === '/movies') {
      localStorage.setItem('checkbox', JSON.stringify(input.checked));
    } else if (location.pathname === '/saved-movies') {
      localStorage.setItem('checkboxSaved', JSON.stringify(input.checked));
    }
    if (localStorage.getItem('keyWord') || localStorage.getItem('keyWordSaved')) {
      props.handleSearch();
    }
  }

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__search'>
          <input
            className='search__input'
            placeholder='??????????'
            defaultValue={defaultValue}
            onChange={handleChange}
          ></input>
          <button className='search__button' type='submit'>??????????</button>
          <span className='search__error'>{isEmpty ? '?????????? ???????????? ???????????????? ??????????' : ''}</span>
        </div>
        <label className='search__label'>
          ??????????????????????????????
          <input
            className='search__invisible'
            type='checkbox'
            name='short-films'
            id='short-films'
            value='short-films'
            defaultChecked={defaultChecked}
            onChange={handleCheckboxChange}
          ></input>
          <span className='search__visible'></span>
        </label>
      </form>
    </section>
  )
}

export default SearchForm;