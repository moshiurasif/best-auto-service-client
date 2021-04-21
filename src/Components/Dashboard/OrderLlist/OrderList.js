import React, { useContext } from 'react';
import Sidebar from '../../OrderPage/Sidebar/Sidebar';
import { useEffect } from "react";
import { useState } from "react";
import serImg from "../../../images/01-6.jpg";
import { UserContext } from '../../../App';

const OrderList = ({order}) => {
   const [orders, setOrders] = useState([]);
   const [loggedInUser] = useContext(UserContext);
   console.log(loggedInUser);
  //  useEffect(() => {
  //    fetch("https://whispering-springs-55108.herokuapp.com/orders")
  //      .then((res) => res.json())
  //      .then((data) => setOrders(data));
  //  }, []);
  //  console.log(orders);

  useEffect(() => {
    
    fetch("https://whispering-springs-55108.herokuapp.com/customarBookingsList", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  
  return (
    <section className="order-list">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-8">
            {orders.map((order) => (
              <div className="service-style">
                <div className="icon-style">
                  {order.service.image ? (
                    <img
                      className="img-fluid"
                      style={{ width: "100px", marginTop: "25px" }}
                      src={`data:image/png;base64,${order.service.image.img}`}
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
                  <h3>{order.service.serviceName}</h3>
                  <p>{order.service.description}</p>
                  <h3>{order.service.price}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;