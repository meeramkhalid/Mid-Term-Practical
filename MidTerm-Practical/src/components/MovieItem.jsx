import React, { useContext } from 'react';

const MovieItem = ({ movie }) => {
  const { addToFavorites } = useContext(MovieContext);

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
      <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
    </div>
  );
};

export default MovieItem;
