import React from 'react'
import Corporate_Party from '../css/Corporate_Party.module.css';
import Navbar from '../components/Navbar/Navbar.jsx';

const Corporate = () => {
  return (
    <div className={Corporate_Party.body}>
    <Navbar />
      <main>
        <section className={Corporate_Party.sec}>
          <h2 id={Corporate_Party.title}>Celebrate Your Corporate Party With Us!</h2>
          <p id={Corporate_Party.para}>At Present Perfect, we craft enchanting Corporate Party celebrations, making your
          special day a cherished memory that lasts a lifetime.</p>
        </section>
  
        <section className={Corporate_Party.sec}>
          <h2 id={Corporate_Party.title}>Our services</h2>
          <div className={Corporate_Party.container}>
            <div className={Corporate_Party.item} id={Corporate_Party.item1}>
              <section className={Corporate_Party.sec_boxes}>
                <h2>Decor & Themes</h2>
                <p>Stunning floral setups, lighting, and personalized themes for your special day</p>
              </section>
            </div>
            <div className={Corporate_Party.item} id={Corporate_Party.item2}>
              <section className={Corporate_Party.sec_boxes}>
                <h2>Special Moments</h2>
                <p>Luxurious stage design for cake cutting, vow renewal, or special speeches</p>
              </section>
            </div>
            <div className={Corporate_Party.item} id={Corporate_Party.item3}>
              <section className={Corporate_Party.sec_boxes}>
                <h2>Catering</h2>
                <p>Cakes, drinks, starters, snacks, beverages, and full meals</p>
              </section>
            </div>
            <div className={Corporate_Party.item} id={Corporate_Party.item4}>
              <section className={Corporate_Party.sec_boxes}>
                <h2>Photography</h2>
                <p>Professional coverage, candid moments, and a curated album</p>
              </section>
            </div>
            <div className={Corporate_Party.item} id={Corporate_Party.item5}>
              <section className={Corporate_Party.sec_boxes}>
                <h2>Entertainment</h2>
                <p>Live music, engaging emcee, games and photo booths.</p>
              </section>
            </div>
          </div>
        </section>
  
        <section className={Corporate_Party.sec}>
          <h2 id={Corporate_Party.title}>Plan Your Perfect Corporate Party Today!</h2>
          <p id={Corporate_Party.para}>Explore our curated Corporate Party packages and add-ons, or contact us to craft a customized celebration just
          for you.</p>
        </section>
  
        <section className={Corporate_Party.sec}>
          <div className={Corporate_Party.container}>
            <div className={Corporate_Party.item_card} id={Corporate_Party.item_card1}>
              <section className={Corporate_Party.sec_card}>
                <h2>Basic</h2>
                <h2>RS 50,000</h2>
                <div className={Corporate_Party.card_list}>
                  <ul>
                    <li className={Corporate_Party.card_text}>* Customized décor with theme options</li>
                    <li className={Corporate_Party.card_text}>* Catering with basic menu options</li>
                    <li className={Corporate_Party.card_text}>* Simple Engagement cake</li>
                    <li className={Corporate_Party.card_text}>* Standard anniversary cake</li>
                    <li className={Corporate_Party.card_text}>* Professional photography for Key moments</li>
                    <li className={Corporate_Party.card_text}>* Background music for entertainment</li>
                    <li className={Corporate_Party.card_text}>* Simple stage setup for cake cutting or special moments</li>
                    <li className={Corporate_Party.card_text}>* Basic photo booth with props</li>
                  </ul>
                </div>
              </section>
            </div>
  
            <div className={Corporate_Party.item_card} id={Corporate_Party.item_card2}>
              <section className={Corporate_Party.sec_card}>
                <h2>Premium</h2>
                <h2>RS 1,00,000</h2>
                <div className={Corporate_Party.card_list}>
                  <ul>
                    <li className={Corporate_Party.card_text}>* Customized décor with advanced themes</li>
                    <li className={Corporate_Party.card_text}>* Full catering menu with a variety of options</li>
                    <li className={Corporate_Party.card_text}>* Designer anniversary cake</li>
                    <li className={Corporate_Party.card_text}>* Professional photography with Full event coverage</li>
                    <li className={Corporate_Party.card_text}>* Entertainment with Live DJs, Games and activities</li>
                    <li className={Corporate_Party.card_text}>* Luxurious stage setup with spotlight effects</li>
                    <li className={Corporate_Party.card_text}>* Premium photo booth with props</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>
  
        <div className={Corporate_Party.pictures}>
          <div className={Corporate_Party.pict}>
            <h2 id={Corporate_Party.title}>Our Housewarming Gallery</h2>
            <p id={Corporate_Party.para}>Explore Heartwarming Moments From Housewarmings We've Thoughtfully Planned, Celebrating New
              Beginnings and Cherished Memories.</p>
          </div>
          <div className={Corporate_Party.secimg}>
          <div className={Corporate_Party.pc}>
            <div className={Corporate_Party.pc1}>
              <img src="/images1/co1.jpg" className={Corporate_Party.img1} />
              <img src="/images1/c2.jpg" className={Corporate_Party.img1} />
              <img src="/images1/c3.jpg" className={Corporate_Party.img1} />
            </div>
            <div className={Corporate_Party.pc2}>
              <img src="/images1/c4.jpg" className={Corporate_Party.img2} />
              <img src="/images1/c5.jpg" className={Corporate_Party.img2} />
              <img src="/images1/c6.jpg" className={Corporate_Party.img2} />
            </div>
          </div>
          </div>
          <div>
            <h2 id={Corporate_Party.title}>Happy Corporate Employee, Perfect Corporate Party</h2>
            <p id={Corporate_Party.para}>"Present Perfect made our Corporate Party day unforgettable! From the décor to the
            ceremony, every detail was perfect!" – Neha & Raj</p>
            <p id={Corporate_Party.para}>"Flawless service and impeccable planning for our Corporate Party! Every moment was
            beautiful, and our guests had an amazing time!" – Priya & Anil</p>
            <p id={Corporate_Party.para}>"An unforgettable Corporate Party celebration! Everything was organized to perfection,
            making our day even more special." – Shruti & Arjun</p>
          </div>
           <div className={Corporate_Party.blank}></div>
        </div>
      </main>
    </div>
  )
}

export default Corporate;
