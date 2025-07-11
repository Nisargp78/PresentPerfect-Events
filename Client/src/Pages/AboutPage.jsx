import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import About from '../components/About/About.jsx';
import Team from '../components/Team/Team.jsx';
import '../css/About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-page-content">
        <About />
        <Team />
      </div>
    </div>
  );
};

export default AboutPage;
