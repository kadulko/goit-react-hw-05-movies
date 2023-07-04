import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
// import PropTypes from 'prop-types'

function Reviews(props) {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const fetchReviews = async id => {
      const fetchedReviews = await getReviews(movieId);
      if (fetchedReviews.length) {
        setReviews([...fetchedReviews]);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {!reviews && <h5>There are no reviews for this movie</h5>}
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h5>Author: {review.author}</h5>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

Reviews.propTypes = {};

export default Reviews;
