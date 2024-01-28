// components/Movie.js
import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie, onReviewSubmit }) => {
  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = newRating => {
    setUserRating(newRating);
  };

  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars rating={userRating} onRatingChange={handleRatingChange} />
      <ReviewList reviews={movie.reviews} />
      <ReviewForm movieId={movie.id} onReviewSubmit={onReviewSubmit} />
    </div>
  );
};

export default Movie;
