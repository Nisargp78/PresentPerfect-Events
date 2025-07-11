import React from 'react'
import anniversary from '../css/Anniversary.module.css';
import Navbar from '../components/Navbar/Navbar.jsx';

const Anniversary = () => {
  return (
    <div className={anniversary.body}>
    <Navbar />
      <main>
        <section className={anniversary.sec}>
          <h2 id={anniversary.title}>Celebrate Your Love Story With Us!</h2>
          <p id={anniversary.para}>At Present Perfect, we craft enchanting wedding anniversary celebrations, making your special day a cherished memory that lasts a lifetime.</p>
        </section>
  
        <section className={anniversary.sec}>
          <h2 id={anniversary.title}>Anniversary services</h2>
          <div className={anniversary.container}>
            <div className={anniversary.item} id={anniversary.item1}>
              <section className={anniversary.sec_boxes}>
                <h2>Decor & Themes</h2>
                <p>Stunning floral setups, lighting, and personalized themes for your special day</p>
              </section>
            </div>
            <div className={anniversary.item} id={anniversary.item2}>
              <section className={anniversary.sec_boxes}>
                <h2>Special Moments</h2>
                <p>Luxurious stage design for cake cutting, vow renewal, or special speeches</p>
              </section>
            </div>
            <div className={anniversary.item} id={anniversary.item3}>
              <section className={anniversary.sec_boxes}>
                <h2>Catering</h2>
                <p>Cakes, drinks, starters, snacks, beverages, and full meals</p>
              </section>
            </div>
            <div className={anniversary.item} id={anniversary.item4}>
              <section className={anniversary.sec_boxes}>
                <h2>Photography</h2>
                <p>Professional coverage, candid moments, and a curated album</p>
              </section>
            </div>
            <div className={anniversary.item} id={anniversary.item5}>
              <section className={anniversary.sec_boxes}>
                <h2>Entertainment</h2>
                <p>Live music, engaging emcee, games and photo booths.</p>
              </section>
            </div>
          </div>
        </section>
  
        <section className={anniversary.sec}>
          <h2 id={anniversary.title}>Plan Your Perfect Anniversary Today!</h2>
          <p id={anniversary.para}>Explore our curated anniversary packages and add-ons, or contact us to craft a customized celebration just for you.</p>
        </section>
  
        <section className={anniversary.sec}>
          <div className={anniversary.container}>
            <div className={anniversary.item_card} id={anniversary.item_card1}>
              <section className={anniversary.sec_card}>
                <h2>Basic</h2>
                <h2>RS 1,00,000</h2>
                <div className={anniversary.card_list}>
                  <ul>
                    <li className={anniversary.card_text}>* Customized décor with theme options</li>
                    <li className={anniversary.card_text}>* Catering with basic menu options</li>
                    <li className={anniversary.card_text}>* Simple Engagement cake</li>
                    <li className={anniversary.card_text}>* Standard anniversary cake</li>
                    <li className={anniversary.card_text}>* Professional photography for Key moments</li>
                    <li className={anniversary.card_text}>* Background music for entertainment</li>
                    <li className={anniversary.card_text}>* Simple stage setup for cake cutting or special moments</li>
                    <li className={anniversary.card_text}>* Basic photo booth with props</li>
                  </ul>
                </div>
              </section>
              
            </div>
  
            <div className={anniversary.item_card} id={anniversary.item_card2}>
              <section className={anniversary.sec_card}>
                <h2>Premium</h2>
                <h2>RS 2,00,000</h2>
                <div className={anniversary.card_list}>
                  <ul>
                    <li className={anniversary.card_text}>* Customized décor with advanced themes</li>
                    <li className={anniversary.card_text}>* Full catering menu with a variety of options</li>
                    <li className={anniversary.card_text}>* Designer anniversary cake</li>
                    <li className={anniversary.card_text}>* Professional photography with Full event coverage</li>
                    <li className={anniversary.card_text}>* Entertainment with Live DJs, Games and activities</li>
                    <li className={anniversary.card_text}>* Luxurious stage setup with spotlight effects</li>
                    <li className={anniversary.card_text}>* Premium photo booth with props</li>
                  </ul>
                </div>
              </section>
              
            </div>
          </div>
        </section>
  
        <div className={anniversary.pictures}>
          <div className={anniversary.pict}>
            <h2 id={anniversary.title}>Our Anniversary Gallery</h2>
            <p id={anniversary.para}>Discover cherished moments from anniversary celebrations we've beautifully crafted, capturing love and joy.</p>
          </div>
          <div className={anniversary.secimg}>
          <div className={anniversary.pc}>
            <div className={anniversary.pc1}>
              <img src="/images1/anniv 1.jpg" className={anniversary.img1} />
              <img src="/images1/anniv 2.jpeg" className={anniversary.img1} />
              <img src="/images1/anniv 3.png" className={anniversary.img1} />
            </div>
            <div className={anniversary.pc2}>
              <img src="/images1/anniv 4.jpg" className={anniversary.img2} />
              <img src="/images1/anniv 5.jpeg" className={anniversary.img2} />
              <img src="/images1/anniv 6.jpeg" className={anniversary.img2} />
              <img src="/images1/anniv 7.jpeg" className={anniversary.img2} />
            </div>
          </div>
          </div>
          <div>
            <h2 id={anniversary.title}>Happy Couples, Perfect Engagement</h2>
            <p id={anniversary.para}>"Present Perfect made our anniversary day unforgettable! From the décor to the ceremony, every detail was perfect!" – Neha & Raj</p>
            <p id={anniversary.para}>"Flawless service and impeccable planning for our anniversary! Every moment was beautiful, and our guests had an amazing time!" – Priya & Anil</p>
            <p id={anniversary.para}>"An unforgettable anniversary celebration! Everything was organized to perfection, making our day even more special." – Shruti & Arjun</p>
          </div>
          <div className={anniversary.blank}></div>
        </div>
      </main>
    </div>
  )
}

export default Anniversary
