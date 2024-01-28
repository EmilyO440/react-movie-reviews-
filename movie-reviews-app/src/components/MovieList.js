import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Movie 2', review: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
  // Add more movies as needed
];

const MovieList = () => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
