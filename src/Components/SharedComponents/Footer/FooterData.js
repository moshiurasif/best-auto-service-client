import React from 'react';
import "./Footer.css";

const FooterData = ({fdata}) => {
    return (
      <div className="col-md-3 col-6 mobile-view">
        <h3>{fdata.heading}</h3>
        <h6>{fdata.list1}</h6>
        <h6>{fdata.list2}</h6>
        <h6>{fdata.list3}</h6>
        <h6>{fdata.list4}</h6>
        <h6>{fdata.list5}</h6>
        <h6>{fdata.para}</h6>
        <h6>{fdata.support}</h6>
        <h6>{fdata.address}</h6>
        <h6>{fdata.phone}</h6>
        <h6>{fdata.time}</h6>
        <h6>{fdata.btn}</h6>
      </div>
    );
};

export default FooterData;