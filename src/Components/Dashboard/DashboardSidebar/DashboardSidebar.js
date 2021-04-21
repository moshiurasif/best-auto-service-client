import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
      <div className="side-bar">
        <ul>
          <li>
            <Link to="/user-dashboard">User Dashboard</Link>
          </li>
         
        </ul>
      </div>
    );
};

export default DashboardSidebar;