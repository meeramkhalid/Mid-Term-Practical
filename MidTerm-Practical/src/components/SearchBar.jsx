import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const SearchBar = ({ setMovies }) => {
    const [query, setQuery] = useState('');
    const { setTheme } = useContext(GlobalContext);

    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search || []); 
                setQuery('');
            });
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
