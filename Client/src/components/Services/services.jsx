import React from 'react';
import {Link} from 'react-router-dom';
import services from '../../css/Services.module.css';

const Services = () => {
  return (
    <section className={services.sec}>
      <h2 className={services.sec_h2}>OUR SERVICES</h2>
      <div className={services.container}>
     
        <Link to={"/home/decort"} className={services.cards}>
        <div className={services.item} id={services.item3}>
          <section className={services.secboxes}>
            <i className="fa-regular fa-lights-holiday fa-beat-fade fa-3x" />
            <h2>Decor &amp; Items</h2>
            <p>Custom themes and decorations for any event</p>
          </section>
        </div></Link>
        <Link to={"/home/food"} className={services.cards}>
        <div className={services.item} id={services.item4}>
          <section className={services.secboxes}>
            <i className="fa-regular fa-plate-utensils fa-spin fa-3x" />
            <h2>Food</h2>
            <p>Tailored catering services to delight your guests</p>
          </section>
        </div></Link>
        <Link to={"/home/invitation_card"} className={services.cards}>
        <div className={services.item} id={services.item5}>
          <section className={services.secboxes}>
            <i className="fa-sharp fa-solid fa-envelope fa-bounce fa-3x" />
            <h2>Invitation Cards</h2>
            <p>Beautifully crafted invites, digital or print</p>
          </section>
        </div></Link>
        <Link to={"/home/entertainment"} className={services.cards}>
        <div className={services.item} id={services.item6}>
          <section className={services.secboxes}>
            <i className="fa-solid fa-photo-film-music fa-beat fa-3x" />
            <h2>Entertainment</h2>
            <p>DJs, dance, live shows, music and games for all</p>
          </section>
        </div></Link>
        <Link to={"/home/venue"} className={services.cards}>
        <div className={services.item} id={services.item7}>
          <section className={services.secboxes}>
            <i className="fa-sharp fa-solid fa-location-dot fa-bounce fa-3x" />
            <h2>Venue Selection</h2>
            <p>Find the perfect spot for your celebration</p>
          </section>
        </div></Link>
        <Link to={"/home/media"} className={services.cards}>
        <div className={services.item} id={services.item8}>
          <section className={services.secboxes}>
            <i className="fa-solid fa-camcorder fa-fade fa-3x" />
            <h2>Media Coverage</h2>
            <p>Capture memories with high quality photos and videos</p>
          </section>
        </div></Link>
      </div>
    </section>
  )
}

export default Services;
