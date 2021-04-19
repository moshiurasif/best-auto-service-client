import React from 'react';
import Service from './Service/Service';
import "./Services.css";
import { faCogs, faTools, faCarCrash, faPumpSoap } from "@fortawesome/free-solid-svg-icons";


const servicesData = [
  {
    serviceName: "Auto Engine Servicing",
    description: "Sed ut perspicia undniste natus volupta accus",
    icon: faCogs
  },
  {
    serviceName: "Diagnostic Tests",
    description: "Sed ut perspicia undniste natus volupta accus",
    icon: faTools
  },
  {
    serviceName: "Interior Cleaning",
    description: "Sed ut perspicia undniste natus volupta accus",
    icon: faCarCrash
  },
  {
    serviceName: "Vaccume Cleaning",
    description: "Sed ut perspicia undniste natus volupta accus",
    icon: faPumpSoap
  },
];
const Services = () => {
    return (
      <section className="container mb-5 pt-5 pb-5 pt-5">
        <div className="row">
          <div className="text-center">
            <h5 style={{ color: "#ED1C24" }}>What We Offer</h5>
            <h1 className="mobile-font-size"
              style={{
                fontSize: "3rem",
                color: "rgb(11, 33, 84)",
                marginBottom: "2rem",
              }}
            >
              We Provide Quality Service
            </h1>
          </div>

          {servicesData.map((serve) => (
            <Service serve={serve}></Service>
          ))}
        </div>
      </section>
    );
};

export default Services;