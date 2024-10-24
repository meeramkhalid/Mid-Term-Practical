import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  const movie = { title: 'The Godfather', releaseDate: '1972', id };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Movie ID: {id}</p>
    </div>
  );
};

export default MovieDetails;

