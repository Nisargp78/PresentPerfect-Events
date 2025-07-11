import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import '../../css/About.css';

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>We're serious about your Events.</p>
            </div>
            <p className="mid">
              We have transformed numerous events into unforgettable experiences with our expertise and dedication. Our team has built strong relationships with clients, providing seamless planning and execution, tailored to your unique needs. Let us take care of the details so you can relax and fully enjoy your event.
            </p>
            <Link to="/events" className="button">
              Explore Services{""}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default About;
