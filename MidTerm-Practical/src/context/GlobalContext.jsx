import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [theme, setTheme] = useState('light'); 

    const addFavorite = (movie) => {
        setFavorites((prevFavorites) => [...prevFavorites, movie]);
    };

    const removeFavorite = (movieId) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((movie) => movie.id !== movieId)
        );
    };

    return (
        <GlobalContext.Provider value={{ favorites, addFavorite, removeFavorite, theme, setTheme }}>
            {children}
        </GlobalContext.Provider>
    );
};
