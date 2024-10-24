import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieLists';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=Avengers&apikey=YOUR_API_KEY`)
            .then((response) => response.json())
            .then((data) => setMovies(data.Search || []));
    }, []);

    return (
        <div>
            <SearchBar setMovies={setMovies} />
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
