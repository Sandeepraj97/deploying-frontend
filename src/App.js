// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';

import "./App.css"

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const response = await axios.get('https://deploying-backend-ojva.onrender.com/api/reviews');
    setReviews(response.data);
  };

  const addReview = async (newReview) => {
    const response = await axios.post('https://deploying-backend-ojva.onrender.com/api/reviews', newReview);
    fetchReviews();
  };

  const deleteReview = async (id) => {
    await axios.delete(`https://deploying-backend-ojva.onrender.com/api/reviews/${id}`);
    fetchReviews();
  };

  return (
    <div className="App">
      <h1>Book Review App</h1>
      <ReviewForm addReview={addReview} /> 
      <ReviewList reviews={reviews} deleteReview={deleteReview} />
    </div>
  );
}

export default App;
