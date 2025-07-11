import React from 'react';
import decort from '../css/Decort.module.css';
import Navbar from '../components/Navbar/Navbar.jsx';

const Decort = () => {
  const decorItems = [
    { title: 'Birthday Party Décor', items: ['Balloon Decorations', 'Themed Party Props', 'Personalized Banners & Signage', 'Cake Table Setup', 'Photo Booth Props'] },
    { title: 'Wedding Décor', items: ['Floral Arrangements', 'Mandap & Stage Setup', 'Table Centerpieces', 'Chair Covers & Sashes', 'Lighting (Fairy lights)'] },
    { title: 'Engagement Décor', items: ['Floral Decorations', 'Backdrop Design', 'Lighting Effects', 'Stage & Seating', 'Entrance Archway'] },
    { title: 'Anniversary Décor', items: ['Romantic Themes', 'Photo Wall & Displays', 'Balloon Decorations', 'Fairy Lights & Candles', 'Customized Cake Table Setup'] },
    { title: 'Baby Shower Décor', items: ['Themed Décor', 'Balloon Installations', 'Welcome Banners', 'Cake & Dessert Table', 'Photo Booth Props', 'Centerpieces'] },
    { title: 'Housewarming Décor', items: ['Welcome Entrance', 'Living Space Decoration', 'Dining Setup', 'Hanging(Lanterns, lights)', 'Personalized Signage', 'Themed Corners'] },
    { title: 'Corporate Event Décor', items: ['Elegant Floral Displays', 'AV Equipment Setup (Lights, Screens, Mics)', 'Branded Signage and Staging', 'Modern Table & Seating Arrangements'] },
    { title: 'Exhibition Décor', items: ['Booth Design & Setup', 'Branding Elements', 'Display Units & Shelving', 'Lighting', 'Themed Zones', 'Seating Areas'] }
  ];

  return (
    <div className={decort.body}>
      <Navbar />
      <section className={decort.sec}>
        <h1 className={decort.sec_h1}>Décor & Items</h1>
        <p id={decort.sec_p}>Make every gift extra special with our unique, custom-designed items crafted to reflect individuality.</p>
        <div className={decort.container}>
          {decorItems.map((item, index) => (
            <div className={decort.item} key={index}>
              <section className={decort.sec_boxes}>
                <h2>{item.title}</h2>
                <ul className={decort.decor_list}>
                  {item.items.map((decor, i) => (<li key={i}>{decor}</li>))}
                </ul>
              </section>
            </div>
          ))}
        </div>
      </section>
      <div className={decort.personalized_section}>
        <h1>All Events Decoration Products</h1>
        <p>Make every gift extra special with our unique, custom-designed items crafted to reflect individuality.</p>
        <div className={decort.products_container}>
          <div className={decort.product}>
            <img src="/images/lamansh-lamansh-pack-of-1-indian-wedding-decoration-umbrellas-28579203448893_1800x1800.jpg" alt="Indian Wedding Umbrella" />
            <h3>Indian Wedding decoration Umbrellas</h3>
            <p>Jaipuri Golden print umbrella's for haldi mehendi wedding decoration</p>
          </div>
          <div className={decort.product}>
            <img src="/images/walkways_wedding.jpg" alt="Wedding Walkways" />
            <h3>Beautiful walkways into your wedding</h3>
            <p>Creating a lovely wedding pathway for your arriving guests</p>
          </div>
          <div className={decort.product}>
            <img src="/images/mehndi_setup.jpg" alt="Outdoor Mehndi Setup" />
            <h3>Outdoor mehndi Setup</h3>
            <p>Unique outdoor mehndi function setup for Weddings</p>
          </div>
        </div>

        <div className={decort.products_container}>
          <div className={decort.product}>
            <img src="/images/birthday_decor.jpg" alt="Birthday Party Decorations" />
            <h3>Birthday Party / Anniversary Decorations</h3>
            <p>Mirror Gold Sequin Panels, Backdrop Sequin Wall for Event Decor Wedding</p>
          </div>
          <div className={decort.product}>
            <img src="/images/haldi_decor.webp" alt="Haldi Decor" />
            <h3>Haldi Décor</h3>
            <p>Full Wedding Backdrop, Multicolor Indian Dream Catchers, Indian Wedding Decoration, Haldi Decor & Backdrop</p>
          </div>
          <div className={decort.product}>
            <img src="/images/puppets-katputli.jpg" alt="Jaipuri Handmade Puppets" />
            <h3>Rajasthani Jaipuri Handmade Puppets (Katputli)</h3>
            <p>For Wedding Party, Mehndi Party, Theme Events Party Decoration</p>
          </div>
        </div>

        <div className={decort.products_container}>
          <div className={decort.product}>
            <img src="/images/decoration_stage.jpg" alt="Haldi & Wedding Event Decoration" />
            <h3>Haldi & Wedding Event Decoration</h3>
            <p>Indian Wedding Decor Net fabric Hangings / Net Decorative Hanging for Wedding Backdrops</p>
          </div>
          <div className={decort.product}>
            <img src="/images/wedding_stage.jpg" alt="Wedding Stage Decoration" />
            <h3>Wedding stage decoration for wedding party</h3>
            <p>Beautiful themed stage decoration for wedding party</p>
          </div>
          <div className={decort.product}>
            <img src="/images/flower-hangings.jpg" alt="Marigold Flower Hangings" />
            <h3>Marigold Flower Hangings</h3>
            <p>Genda Marigold Garland Phool Flower hangings For Wedding, Party & Event Decoration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decort;
