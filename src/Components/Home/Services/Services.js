import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import "./Services.css";
import { faCogs, faTools, faCarCrash, faPumpSoap } from "@fortawesome/free-solid-svg-icons";


const servicesData = [
  {
    id: "1",
    serviceName: "Auto Engine Servicing",
    description: "Sed ut perspicia undniste natus volupta accus",
    icon: faCogs,
    price: 499,
  },
  {
    id: "2",
    serviceName: "Diagnostic Tests",
    description: "Sed ut perspicia undniste natus volupta accus",
    icon: faTools,
    price: 799,
  },
  {
    id: "3",
    serviceName: "Interior Cleaning",
    description: "Sed ut perspicia undniste natus volupta accus",
    icon: faCarCrash,
    price: 500,
  },
  {
    id: "4",
    serviceName: "Vaccume Cleaning",
    description: "Sed ut perspicia undniste natus volupta accus",
    icon: faPumpSoap,
    price: 296,
  },
];


const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
     fetch("http://localhost:8000/services")
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

          {/* {servicesData.map(serve => <Service serve={serve}></Service>)} */}
        </div>
      </section>
    );
};

export default Services;