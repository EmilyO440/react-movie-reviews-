// components/MovieList.js
import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, onReviewSubmit }) => {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} onReviewSubmit={onReviewSubmit} />
      ))}
    </div>
  );
};

export default MovieList;

