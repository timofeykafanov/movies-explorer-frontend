import { useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [movie, setMovie] = useState('');

  function handleChange(e) {
    const input = e.target;
    setMovie(input.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (movie === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      props.handleSearch();
    }
    localStorage.setItem('keyWord', movie);
  }

  function handleCheckboxChange(e) {
    const input = e.target;
    localStorage.setItem('checkbox', JSON.stringify(input.checked));
    if (localStorage.getItem('keyWord')) {
      props.handleSearch();
    }
  }

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__search'>
          <input
            className='search__input'
            placeholder='Фильм'
            defaultValue={localStorage.getItem('keyWord')}
            onChange={handleChange}
          ></input>
          <button className='search__button' type='submit'>Найти</button>
          <span className='search__error'>{isEmpty ? 'Нужно ввести ключевое слово' : ''}</span>
        </div>
        <label className='search__label'>
          Короткометражки
          <input
            className='search__invisible'
            type='checkbox'
            name='short-films'
            id='short-films'
            value='short-films'
            defaultChecked={JSON.parse(localStorage.getItem('checkbox'))}
            onChange={handleCheckboxChange}
          ></input>
          <span className='search__visible'></span>
        </label>
      </form>
    </section>
  )
}

export default SearchForm;