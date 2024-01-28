// components/ReviewForm.js
import React, { useState } from 'react';

const ReviewForm = ({ movieId, onReviewSubmit }) => {
  const [reviewText, setReviewText] = useState('');

  const handleInputChange = event => {
    setReviewText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onReviewSubmit(movieId, reviewText);
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your review here..."
        value={reviewText}
        onChange={handleInputChange}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
