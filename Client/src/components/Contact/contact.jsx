import React, { useState } from "react";
import axios from "axios";
import '../../css/contact.css';
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { name, email, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
  
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {

  
      const errorMessage = error.response?.data?.message || "An error occurred!";
      toast.error(errorMessage);
    }
  };
  
  
  

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item" id="card">
            <h4>Address</h4>
            <p>Any where, Any City, Any Country</p>
          </div>
          <div className="item" id="card">
            <h4>Call Us</h4>
            <p>Call Us: +91 9510817689</p>
          </div>
          <div className="item" id="card">
            <h4>Mail Us</h4>
            <p>presentperfect@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d184692.33309164643!2d72.57818285808247!3d23.088122819150502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739677807790!5m2!1sen!2sin" width="400" height="300"
              style={{ border: 0, width: "100%", height: "415px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
