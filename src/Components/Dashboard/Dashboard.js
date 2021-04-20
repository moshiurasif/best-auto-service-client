import React from 'react';
import AddService from '../AddService/AddService';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar';

const Dashboard = () => {
    return (
        <section className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <DashboardSidebar></DashboardSidebar>
                    </div>
                    <div className="col-md-8">
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;