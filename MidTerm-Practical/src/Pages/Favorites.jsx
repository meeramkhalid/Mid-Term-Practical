import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Favorites = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      {favorites.length ? (
        <ul>
          {favorites.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;
