import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/SignUp';
import SingleMovie from './components/SingleMovie';
import NetflixNavbar from './components/Navbar';
import NotFoundPage from './components/NoteFound';
import SearchedMoviesCard from './components/SearchedMoviesCard';
import Login from './components/Login';
import TvShows from './components/TvShows'; 
import Movies from './components/Movies'; 
import NewPopular from './components/NewPopular'; 
import MyList from './components/MyList'; 


function App() {
  return (
    <Router>
      <div>
        <NetflixNavbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/searchedmoviescard" element={<SearchedMoviesCard />} />
        <Route path="/tv-shows" element={<TvShows />} /> 
        <Route path="/movies" element={<Movies />} /> 
        <Route path="/new-popular" element={<NewPopular />} /> 
        <Route path="/my-list" element={<MyList />} /> 
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>

  )
}

export default App;
