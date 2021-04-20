import React, { useEffect, useState } from 'react';
import Sidebar from '../../OrderPage/Sidebar/Sidebar';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const OrderList = () => {
    const [order, setOrder] = useState({});
    useEffect(()=>{
        fetch("http://localhost:8000/orders")
        .then(res=>res.json())
        .then(data => setOrder(data))
    },[])
    return (
      <section className="order-list">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
              <div className="service-style">
                <div className="icon-style">
                  <img
                    src=""
                    alt=""
                  />
                </div>
                <div className="service-content">
                  <h3>serviceName</h3>
                  <p>description</p>
                  <h3>$price</h3>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default OrderList;