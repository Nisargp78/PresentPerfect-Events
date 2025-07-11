import React, { useState } from "react";
import form from "./Eventform.module.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EventsForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    event: "",
    packages: "",
    eventdate: "",
    guests: "",
    budget: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/events/event",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(res.data.message);
      navigate("/thankyou");
    } catch (error) {
        const errorMessage =
        error.response?.data?.message || "An error occurred!";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Navbar />
      <div className={form.page}>
        <div className={form.container_form}>
          <div className={form.box}>
            <div className={form.form_p}>
              <a href="/">
                <span>
                  <img className={form.logo} src="/images/logo/PP.png" id={form.loginlogo} alt="logo" />
                </span>
              </a>
              <div className={form.form_pos} id={form.reg_pos}>
                <div className={form.form_container}>
                  <p className={form.title_form}>PresentPerfect Events!</p>
                  <div id={form.form}>
                    <form className={form.booking_form} onSubmit={handleSubmit}>
                      {/* Name */}
                      <div className={form.input_group}>
                        <input type="text" id="firstname" className={form.firstname} placeholder="First name" value={formData.firstname} onChange={handleChange} />
                        <input type="text" id="lastname" className={form.lastname} placeholder="Last name" value={formData.lastname} onChange={handleChange} />
                      </div>
                      <div className={form.input_group}>
                        <input type="email" id="email" className={form.Email} placeholder="Email" value={formData.email} onChange={handleChange} />
                      </div>
                      <div className={form.input_group}>
                        <input type="text" id="contact" className={form.contact} placeholder="Contact" value={formData.contact} onChange={handleChange} />
                      </div>
                      {/* Events */}
                      <div className={form.input_group}>
                        <select id="event" className={form.Event} value={formData.event} onChange={handleChange}>
                          <option value="">-- Events --</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Engagement">Engagement</option>
                          <option value="Anniversary">Anniversary</option>
                          <option value="Baby Shower">Baby Shower</option>
                          <option value="Housewarming Parties">Housewarming Parties</option>
                          <option value="Corporate Events">Corporate Events</option>
                          <option value="Exhibitions">Exhibitions</option>
                        </select>
                        <a href="/events">
                          <button type="button" className={form.explore_btn}>Explore</button>
                        </a>
                      </div>
                      {/* Packages */}
                      <div className={form.input_group}>
                        <select id="packages" className={form.Packages} value={formData.packages} onChange={handleChange}>
                          <option value="">-- Packages --</option>
                          <option value="Basic">Basic</option>
                          <option value="Premium">Premium</option>
                          <option value="Diamond">Diamond</option>
                        </select>
                      </div>
                      {/* Date & Guests */}
                      <div className={form.input_group}>
                        <input type="date" id="eventdate" className={form.eventdate} value={formData.eventdate} onChange={handleChange} />
                        <select id="guests" className={form.Guests}  value={formData.guests} onChange={handleChange}>
                          <option value="">-- Guests --</option>
                          <option value="~100">~100</option>
                          <option value="100-250">100-250</option>
                          <option value="251-500">251-500</option>
                          <option value="501-800">501-800</option>
                          <option value="801-1250">801-1250</option>
                        </select>
                      </div>
                      {/* Budget */}
                      <div className={form.input_group}>
                        <input type="text" id="budget" className={form.Budget} placeholder="Budget"  value={formData.budget} onChange={handleChange} />
                      </div>
                      {/* Location */}
                      <div className={form.input_group}>
                        <textarea id="location" className={form.Location} placeholder="Venue"  value={formData.location} onChange={handleChange}></textarea>
                      </div>
                      {/* Submit Button */}
                      <div id={form.submit}>
                        <button type="submit" className={form.sign}>Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsForm;
