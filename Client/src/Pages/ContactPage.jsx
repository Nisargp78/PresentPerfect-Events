import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Contact from '../components/Contact/contact.jsx';
import '../css/contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-page-content">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
