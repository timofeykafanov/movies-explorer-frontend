import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__search'>
          <input className='search__input' placeholder='Фильм'></input>
          <button className='search__button' type='submit'>Найти</button>
        </div>
        <label className='search__label'>
          Короткометражки
          <input className='search__invisible' type='checkbox' name='short-films' id='short-films' value='short-films'></input>
          <span className='search__visible'></span>
        </label>
      </form>
    </section>
  )
}

export default SearchForm;