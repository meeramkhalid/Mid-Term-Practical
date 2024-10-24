import React from 'react';
import MovieItem from './MovieItem';

const MovieLists = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieLists;
