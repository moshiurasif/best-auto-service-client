import React from 'react';
import BestCarSolution from '../BestCarSolution/BestCarSolution';
import Experience from '../Experience/Experience';
import Footer from '../../SharedComponents/Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';
import "./Home.css";

const Home = () => {
    return (
      <div className="home-bg">
        <div className="overlay">
          <Navbar></Navbar>
          <Header></Header>
          <Services></Services>
          <Testimonials></Testimonials>
          <BestCarSolution></BestCarSolution>
          <Team></Team>
          <Experience></Experience>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Home;