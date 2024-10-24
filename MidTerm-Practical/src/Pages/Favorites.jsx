import React, { useContext } from 'react';
import { MovieContext } from '../context/GlobalContext';
import MovieItem from '../components/MovieItem';

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        favorites.map(movie => <MovieItem key={movie.id} movie={movie} />)
      ) : (
        <p>No favorite movies added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
