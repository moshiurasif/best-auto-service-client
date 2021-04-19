import React from 'react';
import "./Review.css";

const Review = ({review}) => {
    return (
      <div className="col-md-4">
        <div className="review-style">
            <img className="img-fluid w-25" src={review.image} alt="" />
          <h5>{review.name}</h5>
          <h6>{review.title}</h6>
          <p>{review.description}</p>
        </div>
      </div>
    );
};

export default Review;