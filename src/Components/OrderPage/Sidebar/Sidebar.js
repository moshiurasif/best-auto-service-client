import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInsUser] = useContext(UserContext);
  const [admin, setAdmin] = useState(false);
  useEffect(()=>{
    fetch("https://whispering-springs-55108.herokuapp.com/checkAdmin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: loggedInsUser.email }),
    })
      .then((res) => res.json())
      .then((result) => {
        setAdmin(result);
      });
  },[loggedInsUser])
    return (
      <div className="side-bar">
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          {admin && (
            <>
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
            </>
          )}
          {!admin &&
            <>
              <li>
                <Link to="/order">Order</Link>
              </li>
              <li>
                <Link to="/order-list">Order List</Link>
              </li>
              <li>
                <Link to="/review">Add Review</Link>
              </li>
            </>
          }
        </ul>
      </div>
    );
};

export default Sidebar;