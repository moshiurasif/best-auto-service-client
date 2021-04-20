import React from 'react';
import "./Review.css";

const Review = ({review}) => {
    return (
      <div className="col-md-4">
        <div className="review-style">
          <img
            className="img-fluid w-25"
            src={`http://localhost:8000/${review.image.img}`}
            alt=""
          />
          <h5>{review.name}</h5>
          <h6>{review.companyName}</h6>
          <p>{review.customerOpinion}</p>
        </div>
      </div>
    );
};

export default Review;