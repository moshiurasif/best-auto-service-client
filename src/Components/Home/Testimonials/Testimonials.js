import React from 'react';
import Review from './Review/Review';
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Anneta Alexa",
    title: "CEO, Hunaiyun City Club",
    description:
      "I've been taking my vehicles to Jeff's for a number of years and have always had a good experience. Customer service is excellent and they live by the golden rule. Can't recommend them enough!",
    image:
      "https://i.ibb.co/X7Xr685/contemporary-connection-leisure-internet-relax-concept-e1616490915242.jpg",
  },
  {
    name: "George Michael",
    title: "Marketing Offcier, Google",
    description:
      "Recently took my vehicle there for the first time for a water pump replacement. They were very friendly, did a great job, didn't charge me any extra fees above their quote, and got it done on time. Very happy with the experience.",
    image: "https://i.ibb.co/874fjsc/02.jpg",
  },
  {
    name: "Sabrina Rowlan",
    title: "Sales Executive, Microsoft",
    description:
      "Good, honest mechanics! They always get me in quickly, the prices are great, and the waiting area is really nice and comfy. Definitely the nicest auto shop I’ve ever been to.",
    image:
      "https://i.ibb.co/0CXzCt7/happy-owner-of-local-business-female-entrepreneur-collecting-and-packing-gifts-e1616490906625.jpg",
  },
];

const Testimonials = () => {
    
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
            {testimonialsData.map((review) => (
              <Review review={review}></Review>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Testimonials;