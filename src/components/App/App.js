import { Route, Routes, useLocation } from 'react-router-dom';

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

import './App.css';

function App() {
  const location = useLocation();
  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path="/" element={
          <Main />
        } />
        <Route path="/movies" element={
          <Movies />
        } />
        <Route path="/saved-movies" element={
          <SavedMovies />
        } />
        <Route path="/profile" element={
          <Profile />
        } />
        <Route path="/signin" element={
          <Login />
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
  );
}

export default App;
