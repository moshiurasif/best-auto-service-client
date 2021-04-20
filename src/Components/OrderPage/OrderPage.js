import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./OrderPage.css";
import Sidebar from './Sidebar/Sidebar';
import Stripe from './Stripe/Stripe';

const OrderPage = () => {
    const [service, setService] = useState({});
    const {id} = useParams();
    
    useEffect(()=>{
        fetch(`http://localhost:8000/singleService`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({id: id})
        })
          .then((res) => res.json())
          .then((data) => setService(...data));
    },[id])
    console.log(service);
    return (
        <section className="order-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8">
                    <h1>{id}</h1>
                        <Stripe service={service}></Stripe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderPage;