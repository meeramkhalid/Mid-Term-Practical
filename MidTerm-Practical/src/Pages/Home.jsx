// src/pages/Home.js
import React, { useState } from 'react';
import MovieList from '../components/MovieLists';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const movies = [
    { id: 1, title: "Inception", releaseDate: "2010-07-16", rating: 8.8 },
    { id: 2, title: "Interstellar", releaseDate: "2014-11-07", rating: 8.6 },
    { id: 3, title: "The Dark Knight", releaseDate: "2008-07-18", rating: 9.0 },
    { id: 4, title: "Fight Club", releaseDate: "1999-10-15", rating: 8.8 },
  ];

  const [searchResults, setSearchResults] = useState(movies);

  const handleSearch = (query) => {
    const results = movies.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={searchResults} />
    </div>
  );
};

export default Home;
