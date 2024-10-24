import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieLists';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const Movies = [
    { id: 1, title: 'The Shawshank Redemption', releaseDate: '1994' },
    { id: 2, title: 'The Godfather', releaseDate: '1972' },
    { id: 3, title: 'The Dark Knight', releaseDate: '2008' }
  ];

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setMovies(Movies);
      setLoading(false);
    }, 1000);
  }, []);

  const searchMovies = (query) => {

    setMovies(Movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div>
      <SearchBar onSearch={searchMovies} />
      {loading ? <p>Loading movies...</p> : <MovieList movies={movies} />}
    </div>
  );
};
console.log("Movies",Movies);

export default Home;
