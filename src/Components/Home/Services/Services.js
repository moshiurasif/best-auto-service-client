import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import "./Services.css";


const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
     fetch("https://whispering-springs-55108.herokuapp.com/services")
       .then((res) => res.json())
       .then((data) => setServices(data));
   }, []);
   console.log(services);
 
    return (
      <section className="container mb-5 pt-5 pb-5 pt-5">
        <div className="row">
          <div className="text-center">
            <h5 style={{ color: "#ED1C24" }}>What We Offer</h5>
            <h1
              className="mobile-font-size"
              style={{
                fontSize: "3rem",
                color: "rgb(11, 33, 84)",
                marginBottom: "2rem",
              }}
            >
              We Provide Quality Service
            </h1>
          </div>

          {services.map((serve) => (
            <Service serve={serve} key={serve._id}></Service>
          ))}
        </div>
      </section>
    );
};

export default Services;