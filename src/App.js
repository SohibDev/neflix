import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/SignUp';
import SingleMovie from './components/SingleMovie';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
      </Routes>
    </Router>

  )
}

export default App;
