import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DashboardSidebar from '../DashboardSidebar';

const ManageService = () => {
    // const [services, setServices] = useState([]);
    // useEffect(() =>{
    //     fetch("http://localhost:8000/services")
    //     .then(res=>res.json)
    //     .then(data => setServices(data))
    // },[])
    // console.log(services);

    return (
       <section className="manage-service">
           <div className="container">
               <div className="row">
                   <div className="col-md-4">
                       <DashboardSidebar></DashboardSidebar>
                   </div>
                   <div className="col-md-8">
                       {/* {
                           services.map(service => <h2>{service.serviceName}</h2>)
                       } */}
                   </div>
               </div>
           </div>
       </section>
    );
};

export default ManageService;