import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const movies = [
    { id: 1, title: "Inception", releaseDate: "2010-07-16", rating: 8.8 },
    { id: 2, title: "Interstellar", releaseDate: "2014-11-07", rating: 8.6 },
    { id: 3, title: "The Dark Knight", releaseDate: "2008-07-18", rating: 9.0 },
    { id: 4, title: "Fight Club", releaseDate: "1999-10-15", rating: 8.8 },
  ];

  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieDetails;
