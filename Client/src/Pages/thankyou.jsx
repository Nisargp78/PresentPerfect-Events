import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import '../css/Thankyou.css';

const Thankyou = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className="notFound">
        <div className="container">
        <span><i class="fa-regular fa-circle-check"></i></span>
          <h1 id="thankyou">Thank You</h1>
          <h1>Your Event is booked</h1>
          <p id="message_contact">Our Team will Contact to you</p>
          <p>Redirecting to Home in {countdown} seconds...</p>
          <Link to={"/"} id="button">
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Thankyou;