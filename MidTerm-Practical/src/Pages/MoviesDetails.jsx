import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=YOUR_API_KEY`)
            .then((response) => response.json())
            .then((data) => setMovie(data));
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            <h1>{movie.Title}</h1>
            <p>Release Date: {movie.Released}</p>
            <p>Rating: {movie.Rated}</p>
            <p>{movie.Plot}</p>
            <img src={movie.Poster} alt={movie.Title} />
        </div>
    );
};

export default MovieDetailsPage;
