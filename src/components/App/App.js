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
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const location = useLocation();

  function handleLogin(email, password) {
    auth.login(email, password)
      .then((user) => {
        setLoggedIn(true)
        setCurrentUser(user);
        navigate('/movies');
      })
      .catch(err => console.log(err))
  }

  function handleLogout() {
    auth.logout()
      .then(() => {
        setCurrentUser({});
        setLoggedIn(false);
      })
  }

  useEffect(() => {
    Promise.all([mainApi.getUserInfo()])
      .then((user) => {
        console.log(user)
        setLoggedIn(true);
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={
            <Main />
          } />
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile handleLogout={handleLogout} />
            </ProtectedRoute>
          } />
          <Route path="/signin" element={
            <Login handleLogin={handleLogin} />
          } />
          <Route path="/signup" element={
            <Register />
          } />
          <Route path='/error' element={
            <Error />
          } />
        </Routes>
        <Menu />
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
