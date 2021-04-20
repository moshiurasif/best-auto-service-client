import React from 'react';
import DashboardSidebar from '../Dashboard/DashboardSidebar/DashboardSidebar';

const MakeAdmin = () => {
    return (
      <section className="make-admin">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <DashboardSidebar></DashboardSidebar>
            </div>
            <div className="col-md-8">
              <form>
                <input type="email" className="form-control" name="email" />
                <input type="submit" value="Make Admin" />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default MakeAdmin;