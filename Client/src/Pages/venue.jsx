import React from "react";
import Navbar from '../components/Navbar/Navbar.jsx'
import venue from '../css/Venue.module.css'

const Venue = () => {
  return (
    <div className={venue.body}>
    <Navbar />
      <section className={venue.sec}>
        <h1 className={venue.sec_h1}>Venue Selection</h1>
        <p id={venue.sec_p}>Discover perfect venues for every event—luxury banquet halls, beachside resorts, rustic estates, and more to match your style and occasion</p>
        <div className={venue.container}>
          <div className={venue.item} id={venue.item1}>
            <section className={venue.sec_boxes}>
              <h2>Wedding Venues</h2>
              <ul className={venue.decor_list}>
                <li>Luxury Banquet Halls</li>
                <li>Heritage Properties</li>
                <li>Beachfront Venues</li>
                <li>Garden & Outdoor Venues</li>
                <li>Five-Star Hotel Ballrooms</li>
                <li>Private Estates & Farmhouses</li>
              </ul>
            </section>
          </div>

          <div className={venue.item} id={venue.item2}>
            <section className={venue.sec_boxes}>
              <h2>Corporate Event Venues</h2>
              <ul className={venue.decor_list}>
                <li>Conference Halls & Convention Centers</li>
                <li>Hotels with Meeting Rooms</li>
                <li>Rooftop Venues</li>
                <li>Co-Working Spaces</li>
                <li>Auditoriums</li>
              </ul>
            </section>
          </div>

          <div className={venue.item} id={venue.item3}>
            <section className={venue.sec_boxes}>
              <h2>Private Party Venues</h2>
              <ul className={venue.decor_list}>
                <li>Luxury Villas & Farmhouses</li>
                <li>Clubs & Lounges</li>
                <li>Boutique Hotels</li>
                <li>Rooftop Gardens</li>
                <li>Cultural Centers</li>
                <li>Themed Event Spaces</li>
              </ul>
            </section>
          </div>

          <div className={venue.item} id={venue.item4}>
            <section className={venue.sec_boxes}>
              <h2>Exhibition & Trade Show Venues</h2>
              <ul className={venue.decor_list}>
                <li>Convention Centers</li>
                <li>Exhibition Halls</li>
                <li>Art Galleries</li>
                <li>University Campuses</li>
                <li>Outdoor Exhibition Grounds</li>
              </ul>
            </section>
          </div>

          <div className={venue.item} id={venue.item5}>
            <section className={venue.sec_boxes}>
              <h2>Destination Venues</h2>
              <ul className={venue.decor_list}>
                <li>Hilltop Resorts</li>
                <li>Beachside Resorts</li>
                <li>Vineyards & Countryside Estates</li>
                <li>Cruise Venues</li>
                <li>Mountain Retreats</li>
                <li>Island Resorts</li>
              </ul>
            </section>
          </div>

          <div className={venue.item} id={venue.item6}>
            <section className={venue.sec_boxes}>
              <h2>Themed Event Venues</h2>
              <ul className={venue.decor_list}>
                <li>Fantasy & Fairytale Venues</li>
                <li>Retro & Vintage Spaces</li>
                <li>Industrial Warehouses</li>
                <li>Boho-Chic Venues</li>
                <li>Cinemas & Theatres</li>
                <li>Sports Arenas & Stadiums</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <div className={venue.personalized_section}>
        <h1>Perfect Venues for Every Occasion</h1>
        <p>Find stunning venues that perfectly match your event style and create unforgettable moments</p>
        <div className={venue.products_container}>
          <div className={venue.product}>
            <img src="/content/Venues/bali.jpg" alt="Bali" />
            <h3>Destination Wedding Venue</h3>
            <p>Anantara Uluwantu Bali Resort - Perfect Destination wedding</p>
          </div>
          <div className={venue.product}>
            <img src="/content/Venues/Hilltop Resort.jpg" alt="Hilltop Resort" />
            <h3>Hilltop Resorts</h3>
            <p>Host your event at breathtaking locations—hilltop resorts, beachside venues, palaces, and more, each offering a unique experience for your special occasion</p>
          </div>
          <div className={venue.product}>
            <img src="/content/Venues/fairytale.jpg" id={venue.product9} alt="Fairytale Castle" />
            <h3>Fairytale Castle Venue</h3>
            <p>Celebrate your special day in a fairytale castle venue—where timeless charm and royal elegance come to life</p>
          </div>
        </div>
        <div className={venue.products_container}>
          <div className={venue.product}>
            <img src="/content/Venues/Fort.jpg" alt="Fort" />
            <h3>Heritage Palace or Fort</h3>
            <p>Majestic palaces and forts offering a royal setting for unforgettable events</p>
          </div>
          <div className={venue.product}>
            <img src="/content/Venues/Rustic estate.jpg" id={venue.product3} alt="Rustic Estate" />
            <h3>Rustic Estate</h3>
            <p>Charming countryside venues with natural beauty, ideal for rustic-themed celebrations</p>
          </div>
          <div className={venue.product}>
            <img src="/content/Venues/Beach side resort.jpg" alt="Beachside Resort" />
            <h3>Beachside Resort</h3>
            <p>Scenic beachfront venues with breathtaking views, perfect for romantic weddings and outdoor celebrations</p>
          </div>
        </div>

        <div className={venue.products_container}>
          <div className={venue.product}>
            <img src="/content/Venues/Luxury Banquet.jpg" alt="Luxury Banquet Hall" />
            <h3>Luxury Banquet Hall</h3>
            <p>Elegant and spacious halls with grand chandeliers, luxurious interiors, and impeccable service—perfect for weddings, receptions, and grand celebrations</p>
          </div>
          <div className={venue.product}>
            <img src="/content/Venues/Garden Venue.jpg" alt="Garden Venue" />
            <h3>Garden Venue</h3>
            <p>Lush green spaces with floral decor, perfect for outdoor weddings and daytime events</p>
          </div>
          <div className={venue.product}>
            <img src="/content/Venues/Rooftop.jpg" alt="Rooftop Venue" />
            <h3>Rooftop Venue</h3>
            <p>Modern rooftop spaces with stunning city views, perfect for chic and intimate events.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
