import React, { useEffect, useState } from 'react';
import Review from './Review/Review';
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

    useEffect( () => {
        fetch('https://whispering-springs-55108.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
 
    
    return (
      <section className="testimonial-section mb-5 pt-5 pb-5 pt-5">
        <div className="container">
          <div className="row text-center">
            <h5 style={{ color: "#ED1C24" }}>Testimonials</h5>
            <h1
              className="mobile-font-size"
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginBottom: "2rem",
              }}
            >
              Our Happy Customers
            </h1>
            {testimonials.map((review) => (
              <Review review={review} key={review._id}></Review>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Testimonials;