// ReviewList.js
import React from 'react';

import "./index.css"

const  ReviewList = ({ reviews, deleteReview }) => {
  return (
    <div className='review-cointainer'>
      <h2>Book Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3><strong>Title: </strong>{review.title}</h3>
            <p><strong>Author: </strong> {review.author}</p>
            <p><strong>Review </strong>{review.content}</p>
            <p><em>Reviewed by: {review.reviewer}</em></p>
            <button onClick={() => deleteReview(review.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
