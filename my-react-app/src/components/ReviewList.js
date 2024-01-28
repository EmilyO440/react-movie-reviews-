// components/ReviewList.js
import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h4>Reviews:</h4>
      {reviews.map((review, index) => (
        <p key={index}>{review}</p>
      ))}
    </div>
  );
};

export default ReviewList;
