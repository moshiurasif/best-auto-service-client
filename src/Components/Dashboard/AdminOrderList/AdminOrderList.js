import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const AdminOrderList = () => {
      const [orders, setOrders] = useState([]);
      useEffect(() => {
        fetch("http://localhost:8000/orders")
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, []);
    return (
      <section className="order-list-admin">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <DashboardSidebar></DashboardSidebar>
            </div>
            <div className="col-md-8">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th className="text-secondary text-left" scope="col">
                      Name
                    </th>
                    <th className="text-secondary" scope="col">
                      Email ID
                    </th>
                    <th className="text-secondary" scope="col">
                      Service
                    </th>
                    <th className="text-secondary" scope="col">
                      Pay with
                    </th>
                    <th className="text-secondary" scope="col">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr>
                      <td>{order.name}</td>
                      <td>{order.email}</td>
                      <td>{order.service.serviceName}</td>
                      <td>{order.payment.card.brand} card</td>
                      <td>pending</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AdminOrderList;