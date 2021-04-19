import React from 'react';
import FooterData from './FooterData';

const footerData = [
  {
    heading: "Quick Links",
    list1: "Make Appointment",
    list2: "About Company",
    list3: "Team Member",
    list4: "Gallery Filter",
    list5: "Latest news",
  },
  {
    heading: "Services",
    list1: "Auto Engine Servicing",
    list2: "Interior Cleaning",
    list3: "Bike Servicing",
    list4: "Diagnostic Tests",
    list5: "Vaccume Cleaning",
  },
  {
    heading: "Contact",
    para: "Sed uterspis unde omnis iste natus error voluem",
    support: "support@gmail.com",
    address: "255 Main street, New york",
    phone: "+880 - 12 - 34 - 55 - 99",
  },
  {
    heading: "Work Hours",
    time: "8 AM - 5 PM : Monday - Saturday",
    btn: "Contact Us",
    support: "support@gmail.com",
    address: "255 Main street, New york",
    phone: "+880 - 12 - 34 - 55 - 99"
  },
];

const Footer = () => {
    return (
      <footer className="pt-5 mt-5">
        <div className="container">
          <div className="row">
            {footerData.map((fdata) => (
              <FooterData fdata={fdata}></FooterData>
            ))}
          </div>
        </div>
        <p className="text-center p-5 text-white">
          Copyright © 2021 Noka - Cleaning Service Template
        </p>
      </footer>
    );
};

export default Footer;