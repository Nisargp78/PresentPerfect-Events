import React from "react";
import invitation from '../css/Invitation.module.css';
import Navbar from '../components/Navbar/Navbar.jsx'

const Invitation_card = () => {
  return (
    <div className={invitation.body}>
    <Navbar />
      <section className={invitation.sec}>
        <h1 className={invitation.sec_h1}>Invitation cards</h1>
        <p id={invitation.sec_p}>Explore our collection of beautifully designed invitation cards for every occasion.</p>
        <div className={invitation.container}>
    
          <div className={invitation.item} id={invitation.item1}>
            <section className={invitation.sec_boxes}>
              <h2>Invitation Cards</h2>
              <ul className={invitation.decor_list}>
                <li>Birthday Party Invitation</li>
                <li>Wedding Invitation</li>
                <li>Engagement Invitation</li>
                <li>Baby Shower Invitation</li>
                <li>Housewarming Party Invitation</li>
                <li>Corporate Invitation</li>
                <li>Exhibition Invitation</li>
              </ul>
            </section>
          </div>
    
          <div className={invitation.item} id={invitation.item2}>
            <section className={invitation.sec_boxes}>
              <h2>Design Styles</h2>
              <ul className={invitation.decor_list}>
                <li>Traditional & Elegant</li> 
                <li>Modern & Minimalist</li>
                <li>Floral & Pastel</li>
                <li>Vintage Style</li>
                <li>Luxurious Foil & Embossed</li>
              </ul>
            </section>
          </div>
    
          <div className={invitation.item} id={invitation.item3}>
            <section className={invitation.sec_boxes}>
              <h2>Customization Options</h2>
              <ul className={invitation.decor_list}>
                <li>Custom colors, fonts, and text styles</li>
                <li>Add personal photos or event logos</li>
                <li>Multiple language support for international events</li>
              </ul>
            </section>
          </div>
    
          <div className={invitation.item} id={invitation.item4}>
            <section className={invitation.sec_boxes}>
              <h2>Digital & Physical Cards</h2>
              <ul className={invitation.decor_list}>
                <li>Physical Printed Cards</li>
                <li>Digital Invitation Cards (for email and WhatsApp sharing)</li>
                <li>Delivery Services</li>
              </ul>
            </section>
          </div>
    
          <div className={invitation.item} id={invitation.item5}>
            <section className={invitation.sec_boxes}>
              <h2>Add-on Services</h2>
              <ul className={invitation.decor_list}>
                <li>Envelope Design</li>
                <li>QR Code Integration</li>
                <li>Thank You Cards</li>
                <li>Save the Date Cards</li>
              </ul>
            </section>
          </div>
    
          <div className={invitation.item} id={invitation.item6}>
            <section className={invitation.sec_boxes}>
              <h2>Eco-friendly Options</h2>
              <ul className={invitation.decor_list}>
                <li>Promote eco-friendly paper and ink for those who want sustainable choices.</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
   
      <div className={invitation.personalized_section}>
        <h1>Beautiful Invitation Cards</h1>
        <p>Explore our collection of beautifully crafted invitation cards for every occasion, Each card is designed to leave a lasting impression.</p>
        <div className={invitation.products_container}>
          <div className={invitation.product}>
            <img src="/content/Invitation Cards/pink cherry blossom.jpg" alt="Pink Cherry Blossom Wedding Invitation" />
            <h3>Pink Cherry Blossom Wedding Invitation Card</h3>
            <p>the 'Sakura Collection' - a range of wedding stationery inspired by the delicate beauty of cherry blossoms</p>
          </div>
          <div className={invitation.product}>
            <img src="/content/Invitation Cards/glassbox.jpg" alt="Scroll invite in a glass box" />
            <h3>Scroll invite in a glass box</h3>
            <p>Royal scroll invite in a glass box—pure elegance for unforgettable moments</p>
          </div>
          <div className={invitation.product}>
            <img src="/content/Invitation Cards/Traditional cards.jpg" alt="Traditional Invitation Cards" />
            <h3>Traditional Invitation Cards</h3>
            <p>classic designs that honor timeless traditions and cultural elegance.</p>
          </div>
        </div>
    
        <div className={invitation.products_container}>
          <div className={invitation.product}>
            <img src="/content/Invitation Cards/Box invite.jpg" alt="White Art Designer Invitation Box" />
            <h3>White Art Designer Invitation Box</h3>
            <p>Exquisite blend of elegance and artistic craftsmanship, perfect for your grand celebrations</p>
          </div>
          <div className={invitation.product}>
            <img src="/content/Invitation Cards/classical invitation.jpg" alt="Classical Invitation Card" />
            <h3>Classical Invitation Card</h3>
            <p>Rich in tradition and adorned with timeless cultural motifs for sacred celebrations</p>
          </div>
          <div className={invitation.product}>
            <img src="/content/Invitation Cards/corporate.jpg" alt="Corporate Party Invitation" />
            <h3>Corporate Party Invitation</h3>
            <p>sleek, professional, and tailored for every business celebration</p>
          </div>
        </div>
    
        <div className={invitation.products_container}>
          <div className={invitation.product}>
            <img src="/content/Invitation Cards/Housewarming party.jpg" alt="Green Floral Housewarming Invitation Card" />
            <h3>Green Floral Housewarming Invitation Card</h3>
            <p>8ft Indian Wedding Decor Net fabric Hangings / Net Decorative Hanging for Wedding Backdrops </p>
          </div>
          <div className={invitation.product}>
            <img src="/content/Invitation Cards/baby shower.jpg" alt="Dusty Blue Roses Baby shower invitation" />
            <h3>Dusty Blue Roses Baby shower invitation</h3>
            <p>Dusty Blue Roses Baby Shower Invitation—soft hues and floral charm to celebrate your special arrival</p>
          </div>
          <div className={invitation.product}>
            <img src="/content/Invitation Cards/Gold foil card.jpg" alt="Acrylic Luxury gold Foil Invitation Card" />
            <h3>Acrylic Luxury gold Foil Invitation Card</h3>
            <p>Beautiful themed stage decoration for wedding party </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation_card;