import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';

import Header from '../Header/Header';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';
import Menu from '../Menu/Menu';
import auth from '../../utils/Auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [isEditState, setIaEditState] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [savedFilteredMovies, setSavedFilteredMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [nothingFound, setNothingFound] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')) ? JSON.parse(localStorage.getItem('movies')) : [])
    setSavedFilteredMovies(JSON.parse(localStorage.getItem('savedMovies')) ? JSON.parse(localStorage.getItem('savedMovies')) : [])
  }, [])

  function handleSearch() {
    setIsloading(true);
    const key = new RegExp(localStorage.getItem('keyWord'), 'gi');
    mainApi.getMovies()
      .then((movies) => {
        setSavedMovies(movies);
        const array = [];
        movies.forEach((movie) => {
          array.push(movie.movieId)
        })
        setLikedMovies(array);
      })
      .catch(err => console.log(err));
    moviesApi.getMovies()
      .then((movies) => {
        let moviesList = movies;
        if (JSON.parse(localStorage.getItem('checkbox'))) {
          moviesList = movies.filter((item) => item.duration < 41)
        }
        const filteredMovies = moviesList.filter((item) => key.test(item.nameRU) || key.test(item.nameEN));
        setMovies(filteredMovies);
        localStorage.setItem('movies', JSON.stringify(filteredMovies))
        if (filteredMovies.length === 0) {
          setNothingFound(true);
        } else {
          setNothingFound(false);
        }
        console.log(nothingFound)
      })
      .catch(err => console.log(err))
      .finally(() => setIsloading(false));
  }

  function handleSavedMoviesSearch() {
    setIsloading(true);
    const key = new RegExp(localStorage.getItem('keyWord'), 'gi');
    mainApi.getMovies()
      .then((movies) => {
        let moviesList = movies;
        if (JSON.parse(localStorage.getItem('checkbox'))) {
          moviesList = movies.filter((item) => item.duration < 41)
        }
        const filteredMovies = moviesList.filter((item) => key.test(item.nameRU) || key.test(item.nameEN));
        setSavedFilteredMovies(filteredMovies);
        localStorage.setItem('savedMovies', JSON.stringify(filteredMovies))
        if (filteredMovies.length === 0) {
          setNothingFound(true);
        } else {
          setNothingFound(false);
        }
      })
      .catch(err => console.log(err))
      .finally(() => setIsloading(false));
  }

  function handleDeleteMovie(id) {
    savedMovies.forEach((movie) => {
      if (movie.movieId === id) {
        mainApi.deleteMovie(movie._id)
          .catch(err => console.log(err));
      }
    })
  }

  function handleEditClick() {
    setIaEditState(true);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleLogin(email, password) {
    auth.login(email, password)
      .then((user) => {
        setMessage('');
        setLoggedIn(true)
        setCurrentUser(user);
        navigate('/movies');
      })
      .catch((err) => {
        if (err.includes(401)) {
          setMessage("Неверный логин или пароль");
        } else {
          setMessage("При равторизации произошла ошибка");
        }
      })
  }

  function handleRegister(email, password, name) {
    auth.register(email, password, name)
      .then((user) => {
        setMessage('');
        setLoggedIn(true)
        setCurrentUser(user);
        navigate('/movies');
      })
      .catch((err) => {
        if (err.includes(409)) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При регистрации пользователя произошла ошибка");
        }
      })
  }

  function handleLogout() {
    auth.logout()
      .then(() => {
        setCurrentUser({});
        setLoggedIn(false);
        localStorage.removeItem('movies');
        localStorage.removeItem('savedMovies');
        localStorage.removeItem('checkbox');
        localStorage.removeItem('jwt');
        localStorage.removeItem('keyWord');
        setMovies([]);
        setSavedFilteredMovies([]);
      })
      .catch(err => console.log(err))
  }

  function handleUpdateUserInfo(email, name) {
    console.log(email, name)
    mainApi.updateUserInfo(email, name)
      .then((user) => {
        setMessage('');
        setCurrentUser(user);
        setIaEditState(false);
      })
      .catch((err) => {
        if (err.includes(409)) {
          setMessage("Пользователь с таким email уже существует");
        } else {
          setMessage("При обновлении профиля произошла ошибка");
        }
      })
  }

  useEffect(() => {
    setIaEditState(false);
    setNothingFound(false);
    setMessage('');
  }, [navigate])

  useEffect(() => {
    Promise.all([mainApi.getUserInfo()])
      .then(([user]) => {
        setLoggedIn(true);
        setCurrentUser(user);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header loggedIn={loggedIn} openMenu={openMenu} />
        <Routes>
          <Route path="/" element={
            <Main />
          } />
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                handleSearch={handleSearch}
                movies={movies} 
                mainApi={mainApi}
                likedMovies={likedMovies}
                handleDelete={handleDeleteMovie}
                isLoading={isLoading}
                nothingFound={nothingFound}
              />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                handleSearch={handleSavedMoviesSearch}
                movies={savedFilteredMovies}
                mainApi={mainApi}
                setSavedFilteredMovies={setSavedFilteredMovies}
                savedFilteredMovies={savedFilteredMovies}
                isLoading={isLoading}
                nothingFound={nothingFound}
              />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile handleLogout={handleLogout}
                handleUpdateUserInfo={handleUpdateUserInfo}
                handleEditClick={handleEditClick}
                isEditState={isEditState}
                message={message}
              />
            </ProtectedRoute>
          } />
          <Route path="/signin" element={
            <Login handleLogin={handleLogin} message={message} />
          } />
          <Route path="/signup" element={
            <Register handleRegister={handleRegister} message={message} />
          } />
          <Route path='/error' element={
            <Error />
          } />
        </Routes>
        <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
        {location.pathname === '/' ||
          location.pathname === '/movies' ||
          location.pathname === '/saved-movies' ?
          <Footer /> :
        <></>}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
