import React from 'react';
import Sidebar from '../../OrderPage/Sidebar/Sidebar';
import { useEffect } from "react";
import { useState } from "react";
import serImg from "../../../images/01-6.jpg";

const OrderList = ({order}) => {
   const [orders, setOrders] = useState([]);
   useEffect(() => {
     fetch("https://whispering-springs-55108.herokuapp.com/orders")
       .then((res) => res.json())
       .then((data) => setOrders(data));
   }, []);
   console.log(orders);
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