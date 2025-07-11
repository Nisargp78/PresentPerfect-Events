import React from 'react';
import home from '../css/Home.module.css';
import Navbar from '../Components/Navbar/Navbar.jsx';
import HeroSection from '../components/HeroSection/HeroSection.jsx';

const Home = () => {
  return (
    <div className={home.body}>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default Home;
