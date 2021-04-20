import React from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const AdminOrderList = () => {
    return (
        <section className="order-list-admin">
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

export default AdminOrderList;