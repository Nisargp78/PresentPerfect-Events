import React from 'react';
import exhibition from '../css/Exhibition.module.css';
import Navbar from '../components/Navbar/Navbar.jsx';

const Exhibition = () => {
  return (
    <div className={exhibition.body}>
    <Navbar />
      <main>
        <section className={exhibition.sec}>
          <h2 id={exhibition.title}>Celebrate Your exhibition Party With Us!</h2>
          <p id={exhibition.para}>At Present Perfect, we craft enchanting exhibition Party celebrations, making your
          Vist a cherished memory that lasts a lifetime.</p>
        </section>
  
        <section className={exhibition.sec}>
          <h2 id={exhibition.title}>Our services</h2>
          <div className={exhibition.container}>
            <div className={exhibition.item} id={exhibition.item1}>
              <section className={exhibition.sec_boxes}>
                <h2>Decor & Themes</h2>
                <p>Stunning floral setups, lighting, and personalized themes for your special day</p>
              </section>
            </div>
            <div className={exhibition.item} id={exhibition.item2}>
              <section className={exhibition.sec_boxes}>
                <h2>Special Moments</h2>
                <p>Special show, vow renewal, or special speeches</p>
              </section>
            </div>
            <div className={exhibition.item} id={exhibition.item3}>
              <section className={exhibition.sec_boxes}>
                <h2>Catering</h2>
                <p>Cakes, drinks, starters, snacks, beverages, and full meals</p>
              </section>
            </div>
            <div className={exhibition.item} id={exhibition.item4}>
              <section className={exhibition.sec_boxes}>
                <h2>Photography</h2>
                <p>Professional coverage, candid moments, and a curated album</p>
              </section>
            </div>
          </div>
        </section>
  
        <section className={exhibition.sec}>
          <h2 id={exhibition.title}>Plan Your Perfect exhibition Party Today!</h2>
          <p id={exhibition.para}>Explore our curated exhibition Party packages and add-ons, or contact us to craft a customized celebration just
          for you.</p>
        </section>
  
        <section className={exhibition.sec}>
          <div className={exhibition.container}>
            <div className={exhibition.item_card} id={exhibition.item_card1}>
              <section className={exhibition.sec_card}>
                <h2>Basic</h2>
                <h2>RS 1,00,000</h2>
                <div className={exhibition.card_list}>
                  <ul>
                    <li className={exhibition.card_text}>* Customized décor with theme options</li>
                    <li className={exhibition.card_text}>* Catering with basic menu options</li>
                    <li className={exhibition.card_text}>* Simple Engagement cake</li>
                    <li className={exhibition.card_text}>* Standard anniversary cake</li>
                    <li className={exhibition.card_text}>* Professional photography for Key moments</li>
                    <li className={exhibition.card_text}>* Background music for entertainment</li>
                    <li className={exhibition.card_text}>* Simple stage setup for cake cutting or special moments</li>
                    <li className={exhibition.card_text}>* Basic photo booth with props</li>
                  </ul>
                </div>
              </section>
            </div>
  
            <div className={exhibition.item_card} id={exhibition.item_card2}>
              <section className={exhibition.sec_card}>
                <h2>Premium</h2>
                <h2>RS 2,00,000</h2>
                <div className={exhibition.card_list}>
                  <ul>
                    <li className={exhibition.card_text}>* Customized décor with advanced themes</li>
                    <li className={exhibition.card_text}>* Full catering menu with a variety of options</li>
                    <li className={exhibition.card_text}>* Designer anniversary cake</li>
                    <li className={exhibition.card_text}>* Professional photography with Full event coverage</li>
                    <li className={exhibition.card_text}>* Entertainment with Live DJs, Games and activities</li>
                    <li className={exhibition.card_text}>* Luxurious stage setup with spotlight effects</li>
                    <li className={exhibition.card_text}>* Premium photo booth with props</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>
  
        <div className={exhibition.pictures}>
          <div className={exhibition.pict}>
            <h2 id={exhibition.title}>Our exhibition Party Gallery</h2>
            <p id={exhibition.para}>Explore Heartwarming Moments From exhibition Party We've Thoughtfully Planned, Celebrating New
              Beginnings and Cherished Memories.</p>
          </div>
          <div className={exhibition.secimg}>
          <div className={exhibition.pc}>
            <div className={exhibition.pc1}>
              <img src="/images1/Peter Saul at The New Museum.jpg" className={exhibition.img1} />
              <img src="/images1/e2.jpg" className={exhibition.img1} />
              <img src="/images1/e6.jpg" className={exhibition.img1} />
            </div>
            <div className={exhibition.pc2}>
              <img src="/images1/e04.jpeg" className={exhibition.img2} />
              <img src="/images1/e05.jpg" className={exhibition.img2} />
              <img src="/images1/e06.jpg" className={exhibition.img2} />
            </div>
          </div>
          </div>
          <div>
            <h2 id={exhibition.title}>Happy People, Perfect Exhibition Show</h2>
            <p id={exhibition.para}>"Present Perfect made our Exhibition Show day unforgettable! From the décor to the
            Show, every detail was perfect!" – Neha & Raj</p>
            <p id={exhibition.para}>"Flawless service and impeccable planning for our Exhibition Show! Every moment was
            beautiful, and our guests had an amazing time!" – Priya & Anil</p>
            <p id={exhibition.para}>"An unforgettable Exhibition Show celebration! Everything was organized to perfection,
            making our day even more special." – Shruti & Arjun</p>
          </div>
          <div className={exhibition.blank}></div>
        </div>
      </main>
    </div>
  )
}

export default Exhibition;
