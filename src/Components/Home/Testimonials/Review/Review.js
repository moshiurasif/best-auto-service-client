import React from 'react';
import "./Review.css";
import client from "../../../../images/p1.jpg";

const Review = ({review}) => {
    return (
      <div className="col-md-4">
        <div className="review-style">
          
          {
            review.image ? (
            <img
              className="img-fluid w-25"
              src={`data:image/png;base64,${review.image.img}`}
              alt=""
            />
          ) : (
            <img src={client}/>
          )}
          <h5>{review.name}</h5>
          <h6>{review.companyName}</h6>
          <p>{review.customerOpinion}</p>
        </div>
      </div>
    );
};

export default Review;