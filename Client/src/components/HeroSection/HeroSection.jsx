import React from "react";
import { useNavigate } from "react-router-dom";
import '../../css/Herosection.css'; 

const HeroSection = () => {
  const navigate = useNavigate();

  const handleBookEvent = () => {
    navigate("/eventform");
  };

  return ( 
    <section className="event-hero" id="heroSection">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Professional <span className="gradient-text">Event Management</span>
            <br />
            <span className="highlight-text">Solutions</span>
          </h1>
          <p className="hero-subtitle">
            From corporate events to personal celebrations, we handle every detail 
            to make your special moments unforgettable. Expert planning, flawless execution.
          </p>
          
          <div className="event-types">
            <div className="event-type-card">
              <div className="event-icon">🎉</div>
              <h3>Birthday Parties</h3>
              <p>Memorable celebrations for all ages</p>
            </div>
            <div className="event-type-card">
              <div className="event-icon">💍</div>
              <h3>Weddings</h3>
              <p>Dream weddings planned to perfection</p>
            </div>
            <div className="event-type-card">
              <div className="event-icon">🏢</div>
              <h3>Corporate Events</h3>
              <p>Professional business gatherings</p>
            </div>
            <div className="event-type-card">
              <div className="event-icon">🎓</div>
              <h3>Special Occasions</h3>
              <p>Graduations, anniversaries & more</p>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Events Organized</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Event Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleBookEvent}>
              <span>Book Your Event</span>
            </button>
          </div>

          <div className="features-list">
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Full Event Planning & Coordination</span>
            </div>
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Venue Selection & Management</span>
            </div>
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Catering & Entertainment Services</span>
            </div>
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Budget-Friendly Packages Available</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="quick-booking">
        <div className="quick-booking-content">
          <h3>Quick Event Booking</h3>
          <p>Get started with your event planning in just a few clicks. Our streamlined process makes it easy to book your perfect event.</p>
        </div>
        <div className="quick-booking-steps">
          <div className="booking-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-text">Enter your details</div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-text">Choose Event Type</div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-text">Select Date & Package</div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-text">Confirm Venue and details</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
