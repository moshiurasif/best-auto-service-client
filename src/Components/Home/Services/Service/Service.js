import React from 'react';
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = ({serve}) => {
  
    return (
      <div className="col-md-6 col-12">
        <div className="service-style">
          <div className="icon-style">
            <FontAwesomeIcon icon={serve.icon} />
          </div>
          <div className="service-content">
            <h3>{serve.serviceName}</h3>
            <p>{serve.description}</p>
          </div>
        </div>
      </div>
    );
};

export default Service;