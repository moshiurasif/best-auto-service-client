import React from 'react';
import { Link } from 'react-router-dom';
import "./OrderPage.css";

const OrderPage = () => {
    return (
        <section className="order-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="side-bar">
                            <ul>
                                <li><Link to="/book">Book</Link></li>
                                <li><Link to="/booking-list">Booking List</Link></li>
                                <li><Link to="/review">Review</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderPage;