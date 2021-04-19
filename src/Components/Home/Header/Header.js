import React from "react";
import './Header.css';

const Header = () => {
  return (
    <div className="container content-style">
      <div className="row">
        <div className="col-md-6 col">
          <div className="header-text-style">
            <h5>Welcome Auto Service</h5>
            <h1>
              Best Quality <br /> Car Services
            </h1>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born will give
            </p>
          </div>
        </div>
        <div className="col-md-6 col">
          <div className="appointment-form">
            <form>
              <h3 style={{ color: "#0B2154", fontSize: "2rem" }}>
                Make Appointment
              </h3>
              <p>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your Full Name"
                />
                <br />

                <input
                  className="form-control"
                  type="email"
                  placeholder="Email Address"
                />

                <br />

                <input
                  className="form-control"
                  type="text"
                  placeholder="Phone Number"
                />

                <br />
                <select className="form-control">
                  <option value="">Select Service ----</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Repair">Repair</option>
                  <option value="Othres">Othres</option>
                </select>
              </p>
              <div class="form_btn">
                <input type="submit" value="Make Appointment" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
