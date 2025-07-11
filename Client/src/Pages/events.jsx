import React from "react";
import { Link } from "react-router-dom";
import event from '../css/Events.module.css';
import Navbar from '../components/Navbar/Navbar.jsx';
import Services from '../components/Services/Services.jsx';


const Event = () => {
  console.log(event);
  return (
    <div className={event.body}>
      <Navbar />
        <main>
        <section className={event.sec}>
          <h2 className={event.sec1_h}>Events</h2>
          <p className={event.sec1_p}>
            At Present Perfect, we bring your celebrations to life. Whether it's a small gathering or a grand affair, we specialize in creating unforgettable moments for every occasion. From planning to execution, we ensure every detail is taken care of.
          </p>
          <p className={event.sec1_p}>
            Explore the variety of events we manage and let us craft an experience that you and your loved ones will cherish forever.
          </p>
         <Link to='/eventform'><button className={`${event.custom_btn} ${event.btn_1}`}>Book now</button></Link>
        </section>
        <div id="services-section">
    <Services />
    {/* <EventsForm /> */}
    </div>
        <section className={event.container}>
          <div className={event.h2}><h2 className={event.sec_h2}>FEATURED EVENTS</h2></div>
  {[
    { title: "Birthday Parties", img: "/Box/birthday.png", link: "/events/birthday", text: "Experience fun-filled themes vibrant decoration and exciting activities to make every birthday a unique and unforgettable celebration,tailored to every age group" },
    { title: "Weddings", img: "/Box/wedding.png", link: "/events/wedding", text: "Beautifully customized setups,creating the perfect ambiance for your special day,from elegant decoration to thoughtful touches that will stay in your memory forever" },
    { title: "Engagement", img: "/Box/Engagement.png", link: "/events/engagement", text: "Celebrate your love with sophisticated,intimate arrangements that reflect the joy and excitement of beginning a life together,complete with elegant decor and romantic details" },
    { title: "Anniversaries", img: "/Box/anniversary.png", link: "/events/anniversary", text: "Relive your most cherished moments with personalized,heartfelt celebration,featuring intimate settings and beautiful decor to mark the milestones of ypur journey together" },
    { title: "Baby Shower", img: "/Box/Baby shower.png", link: "/events/babyshower", text: "Welcoming the new arrival with warm, inviting decorations and thoughtful details that celebrate the joy of new life, offering a memorable experience for the parents-to-be and guests alike" },
    { title: "Housewarming Parties", img: "/Box/House warming.png", link: "/events/housewarming", text: "Invite friends and family to celebrate your new home with stylish and cozy setups that reflect your personal style, creating a warm and welcoming environment for your guests" },
    { title: "Corporate Events", img: "/Box/corporate.png", link: "/events/corporate", text: "Create a sleek, professional environment for productive meetings, offering modern setups that foster collaboration, and efficient discussions among colleagues and clients" },
    { title: "Exhibitions", img: "/Box/exhibition.png", link: "/events/exhibition", text: "Showcase creativity and innovation with dynamic displays, offering visitors a visually stunning experience that highlights talent, art, industry, leaving lasting impressions on all who attend" },
  ].map((item, index) => (
    <div className={index % 2 === 0 ? event.left : event.right} key={item.title}>
      <div className={index % 2 === 0 ? event.box_left : event.box_right}>
        {index % 2 !== 0 && <img src={item.img} className={event.img_right} alt={item.title} />}
        <div className={event.box_text}>
          <h2 className={event.text_h}>{item.title}</h2>
          <p className={event.text_p}>{item.text}</p>
          <div className={event.btn_huge}>
            <div className={event.btn_huge_text}>
              <Link to={item.link} className={event.text}>Explore More</Link>
            </div>
          </div>
        </div>
        {index % 2 === 0 && <img src={item.img} className={event.img_left} alt={item.title} />}
      </div>
    </div>
  ))}
</section>
      </main>
    </div>
  );
};

export default Event;
