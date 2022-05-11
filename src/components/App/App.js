import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';

import './App.css';
import Profile from '../Profile/Profile';

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
        {/* <Route path="/signin" element={<Login />} >

        </Route>
        <Route path="/signup" element={<Register />} >

        </Route> */}
      </Routes>
      {location.pathname === '/profile' || location.pathname === '/signin' || location.pathname === '/signup' ? <></> : <Footer />}
    </div>
  );
}

export default App;
