import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
// import Profile from "../Profile/Profile";
// import Login from "../Login/Login";
// import Register from "../Register/Register";
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';

import './App.css';

function App() {
  return (
    <>
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
        {/* <Route path="/profile" element={<Profile />} >

        </Route>
        <Route path="/signin" element={<Login />} >

        </Route>
        <Route path="/signup" element={<Register />} >

        </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
