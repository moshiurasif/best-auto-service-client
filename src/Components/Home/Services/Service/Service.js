import React, { useEffect, useState } from 'react';
import "./Service.css";
import { useHistory } from 'react-router';
import serImg from "../../../../images/02-3.png";

const Service = ({serve}) => {
  const [order, setOrder]= useState({});
  const history = useHistory();

  const handleOrder = () => {
    history.push(`/book/${serve._id}`);
  };
  // useEffect(()=>{
  //   fetch("https://whispering-springs-55108.herokuapp.com/addOrder", {
  //     method: "Post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(order)
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  // },[])
  console.log(serve);

  
  
    return (
      <div className="col-md-6 col-12">
        <div className="service-style">
          <div className="icon-style">
            {serve.image ? (
              <img
                className="img-fluid"
                style={{ width: "100px", marginTop: "25px" }}
                src={`data:image/png;base64,${serve.image.img}`}
                alt=""
              />
            ) : (
              <img
                className="img-fluid"
                style={{ width: "100px", marginTop: "25px" }}
                src={serImg}
              />
            )}
          </div>
          <div className="service-content">
            <h3>{serve.serviceName}</h3>
            <p>{serve.description}</p>
            <h3>$ {serve.price}</h3>
            <button onClick={handleOrder} className="btn-style">
              Order
            </button>
          </div>
        </div>
      </div>
    );
};

export default Service;