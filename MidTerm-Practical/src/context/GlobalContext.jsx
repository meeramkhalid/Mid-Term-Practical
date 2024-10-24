import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter(movie => movie.id !== id));
  };

  return (
    <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};
