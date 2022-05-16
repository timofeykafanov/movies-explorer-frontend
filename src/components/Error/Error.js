import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
  return (
    <section className='error'>
      <h2 className='error__title'>404</h2>
      <p className='error__text'>Страница не найдена</p>
      <Link className='error__link' to='/'>Назад</Link>
    </section>
  )
}

export default Error;