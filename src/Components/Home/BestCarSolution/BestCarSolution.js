import React from "react";
import image from "../../../images/02-3.png";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BestCarSolution.css";

const listItems = [
    { listItem: "Tire and Wheel" }, 
    { listItem: "Automotive Filters" },
{ listItem: "Best Opportunity" },
{ listItem: "Drivability Problems" },
{ listItem: "Experience Members" },
{ listItem: "Driving School" },
];

const BestCarSolution = () => {
  return (
    <section className="best-car-solution mt-5 mb-5 pb-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <img className="img-fluid w-75" src={image} alt="" />
          </div>
          <div className="col-md-6 col-12">
            <div className="heading-text">
              <h5 style={{ color: "#ED1C24" }}>Best Car Solutions</h5>
              <h1
                className="mobile-font-size"
                style={{
                  fontSize: "3rem",
                  color: "rgb(11, 33, 84)",
                  marginBottom: "2rem",
                }}
              >
                We’re Certified & Expert Car Servicing Agency
              </h1>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born will give
              </p>
            </div>
            <div className="listing-service">
              {listItems.map((list) => (
                <li className="d-flex">
                  <span
                    style={{
                      backgroundColor: "red",
                      borderRadius: "50%",
                      marginRight: "5px",
                      width: "30px",
                      height: "30px",
                      lineHeight: "30px",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <p>{list.listItem}</p>
                </li>
              ))}
              <button className="btn-style">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCarSolution;
