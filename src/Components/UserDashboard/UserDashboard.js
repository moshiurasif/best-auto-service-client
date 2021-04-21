import React from 'react';
import Sidebar from '../OrderPage/Sidebar/Sidebar';

const UserDashboard = () => {
    return (
        <section className="user-dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserDashboard;