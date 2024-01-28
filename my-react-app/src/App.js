// App.js

import React, { useState } from 'react';
import './App.css';

const initialMovies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    image:'the_shawshank_redemption.jpg',
    synopsis: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    rating: 4.5,
    reviews: ['Awesome movie!', 'Is a classic that will never be boring!'],
  },
  {
    id: 2,
    title: 'Gone with the Wind',
    image: 'Gone_with_the_Wind.jpg',
    synopsis: 'A sheltered and manipulative Southern belle and a roguish profiteer face off in a turbulent romance as the society around them crumbles with the end of slavery and is rebuilt during the Civil War and Reconstruction periods.',
    rating: 5,
    reviews: ['Masterpiece!', "is my go-to movie anytime of the year!"],
  },
];

const Stars = ({ rating, onChange }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleMouseOver = (hoveredRating) => {
    setHoveredRating(hoveredRating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleClick = (selectedRating) => {
    onChange(selectedRating);
  };

  const starElements = [];
  const maxRating = 5;

  for (let i = 1; i <= maxRating; i++) {
    const starClasses = ['star'];
    if (i <= (hoveredRating || rating)) {
      starClasses.push('filled');
    }

    starElements.push(
      <span
        key={i}
        className={starClasses.join(' ')}
        onMouseOver={() => handleMouseOver(i)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(i)}
      >
        ★
      </span>
    );
  }

  return <div className="stars">{starElements}</div>;
};

const Review = ({ review }) => (
  <div className="review">
    <p>{review}</p>
  </div>
);

const ReviewList = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review, index) => (
      <Review key={index} review={review} />
    ))}
  </div>
);

const ReviewForm = ({ onAddReview }) => {
  const [newReview, setNewReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() !== '') {
      onAddReview(newReview);
      setNewReview('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a review"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

const Movie = ({ movie, onAddReview }) => {
  const [rating, setRating] = useState(movie.rating);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleAddReview = (review) => {
    onAddReview(movie.id, review);
  };

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <Stars rating={rating} onChange={handleRatingChange} />
      <ReviewList reviews={movie.reviews} />
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
};

const MovieList = ({ movies, onAddReview }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <Movie key={movie.id} movie={movie} onAddReview={onAddReview} />
    ))}
  </div>
);

function App() {
  const [movies, setMovies] = useState(initialMovies);

  const addReview = (movieId, review) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, reviews: [...movie.reviews, review] } : movie
      )
    );
  };

  return (
    <div className="app">
      <h1>Movie Voting and Reviews App</h1>
      <MovieList movies={movies} onAddReview={addReview} />
    </div>
  );
}

export default App;


