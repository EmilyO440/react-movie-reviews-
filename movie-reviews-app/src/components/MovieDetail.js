import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  // Find the movie with the given id
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.review}</p>
    </div>
  );
};

export default MovieDetail;
