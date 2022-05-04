import { Route, Routes } from 'react-router-dom';
import Main from "../Main/Main";
// import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
// import Profile from "../Profile/Profile";
// import Login from "../Login/Login";
// import Register from "../Register/Register";
import Header from '../Header/Header';

import './App.css';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <Footer />
          </>
        } >

        </Route>
        {/* <Route path="/movies" element={<Movies />} >

        </Route>
        <Route path="/saved-movies" element={<SavedMovies />} >

        </Route>
        <Route path="/profile" element={<Profile />} >

        </Route>
        <Route path="/signin" element={<Login />} >

        </Route>
        <Route path="/signup" element={<Register />} >

        </Route> */}
      </Routes>
    </>
  );
}

export default App;
