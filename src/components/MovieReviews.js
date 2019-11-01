import React from 'react';

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => {
        return <p key={review.display_title} className="review">{review.display_title}</p>
      })}
    </div>
  );
}

export default MovieReviews;
