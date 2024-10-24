import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/Favorites';
import MovieDetailsPage from './Pages/Home';
import FavoritesPage from './Pages/MoviesDetails';

const App = () => {
    return (
        <GlobalProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movie/:id" element={<MovieDetailsPage />} />
                    <Route path="/favorites"  element={<FavoritesPage />} />
                </Routes>
                <Footer />
            </Router>
        </GlobalProvider>
    );
};

export default App;
