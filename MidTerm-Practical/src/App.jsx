import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/GlobalContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import MovieDetails from './Pages/MoviesDetails';
import Favorites from './Pages/Favorites';

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </Router>
    </MovieProvider>
  );
};

export default App;
