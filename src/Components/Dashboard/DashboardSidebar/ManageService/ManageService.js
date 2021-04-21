import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../../OrderPage/Sidebar/Sidebar';

const ManageService = () => {
      const [services, setServices] = useState([]);
      const [serviceDeleted, setServiceDeleted] = useState(false);

      useEffect(() => {
        fetch("https://whispering-springs-55108.herokuapp.com/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);
      console.log(services);

      
      const handleDeleteService = (id) => {
        fetch(`https://whispering-springs-55108.herokuapp.com/deleteService/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
              data && alert("Service Deleted");
              setServiceDeleted(data);
          });
        console.log(id)
      }; 
 
    return (
      <section className="manage-service">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th className="text-secondary text-left" scope="col">
                      Name
                    </th>
                    <th className="text-secondary" scope="col">
                      Price
                    </th>

                    <th className="text-secondary" scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr>
                      <td>{service.serviceName}</td>
                      <td>{service.price}</td>

                      <td
                        className="btn btn-style text-black mb-1" style={{backgroundColor:"navy", color:"#fff"}}
                        onClick={() => handleDeleteService(service._id)}
                      >
                        Delete
                      </td>
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

export default ManageService;