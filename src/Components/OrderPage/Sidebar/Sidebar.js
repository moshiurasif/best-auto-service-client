import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
    return (
      <div className="side-bar">
        <ul>
          <li>
            <Link to="/dashboard">Admin Dashboard</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li>
            <Link to="/order-list">Order List</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;