import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
      <div className="side-bar">
        <ul>
          <li>
            <Link to="/">User Dashboard</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/admin-order-list">Order List</Link>
          </li>
          <li>
            <Link to="/add-service">Add Service</Link>
          </li>
          <li>
            <Link to="/make-admin">Make Admin</Link>
          </li>
          <li>
            <Link to="/manage-service">Manage Service</Link>
          </li>
        </ul>
      </div>
    );
};

export default DashboardSidebar;