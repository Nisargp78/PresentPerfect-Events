import React from 'react'
import housewarming from '../css/Housewarming.module.css';
import Navbar from '../components/Navbar/Navbar.jsx';

const Housewarming = () => {
  return (
    <div className={housewarming.body}>
    <Navbar />
      <main>
        <section className={housewarming.sec}>
          <h2 id={housewarming.title}>Make Your Housewarming Celebration Unforgettable With Us!</h2>
          <p id={housewarming.para}>At Present Perfect, we craft warm and welcoming housewarming events, creating lasting
          memories in your new home.</p>
        </section>
  
        <section className={housewarming.sec}>
          <h2 id={housewarming.title}>Our services</h2>
          <div className={housewarming.container}>
            <div className={housewarming.item} id={housewarming.item1}>
              <section className={housewarming.sec_boxes}>
                <h2>Decor & Themes</h2>
                <p>Stunning floral setups, lighting, and personalized themes for your special day</p>
              </section>
            </div>
            <div className={housewarming.item} id={housewarming.item2}>
              <section className={housewarming.sec_boxes}>
                <h2>Special Moments</h2>
                <p>Luxurious stage design for cake cutting, vow renewal, or special speeches</p>
              </section>
            </div>
            <div className={housewarming.item} id={housewarming.item3}>
              <section className={housewarming.sec_boxes}>
                <h2>Catering</h2>
                <p>Cakes, drinks, starters, snacks, beverages, and full meals</p>
              </section>
            </div>
            <div className={housewarming.item} id={housewarming.item4}>
              <section className={housewarming.sec_boxes}>
                <h2>Photography</h2>
                <p>Professional coverage, candid moments, and a curated album</p>
              </section>
            </div>
            <div className={housewarming.item} id={housewarming.item5}>
              <section className={housewarming.sec_boxes}>
                <h2>Entertainment</h2>
                <p>Live music, engaging emcee, games and photo booths.</p>
              </section>
            </div>
          </div>
        </section>
  
        <section className={housewarming.sec}>
          <h2 id={housewarming.title}>Plan Your Perfect Housewarming Today!</h2>
          <p id={housewarming.para}>Explore our tailored housewarming packages and add-ons, or contact us to create a customized celebration
          for your new home.</p>
        </section>
  
        <section className={housewarming.sec}>
          <div className={housewarming.container}>
            <div className={housewarming.item_card} id={housewarming.item_card1}>
              <section className={housewarming.sec_card}>
                <h2>Basic</h2>
                <h2>RS 1,00,000</h2>
                <div className={housewarming.card_list}>
                  <ul>
                    <li className={housewarming.card_text}>* Customized décor with theme options</li>
                    <li className={housewarming.card_text}>* Catering with basic menu options</li>
                    <li className={housewarming.card_text}>* Simple Engagement cake</li>
                    <li className={housewarming.card_text}>* Standard anniversary cake</li>
                    <li className={housewarming.card_text}>* Professional photography for Key moments</li>
                    <li className={housewarming.card_text}>* Background music for entertainment</li>
                    <li className={housewarming.card_text}>* Simple stage setup for cake cutting or special moments</li>
                    <li className={housewarming.card_text}>* Basic photo booth with props</li>
                  </ul>
                </div>
              </section>
            </div>
  
            <div className={housewarming.item_card} id={housewarming.item_card2}>
              <section className={housewarming.sec_card}>
                <h2>Premium</h2>
                <h2>RS 2,00,000</h2>
                <div className={housewarming.card_list}>
                  <ul>
                    <li className={housewarming.card_text}>* Customized décor with advanced themes</li>
                    <li className={housewarming.card_text}>* Full catering menu with a variety of options</li>
                    <li className={housewarming.card_text}>* Designer anniversary cake</li>
                    <li className={housewarming.card_text}>* Professional photography with Full event coverage</li>
                    <li className={housewarming.card_text}>* Entertainment with Live DJs, Games and activities</li>
                    <li className={housewarming.card_text}>* Luxurious stage setup with spotlight effects</li>
                    <li className={housewarming.card_text}>* Premium photo booth with props</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>
  
        <div className={housewarming.pictures}>
          <div className={housewarming.pict}>
            <h2 id={housewarming.title}>Our housewarming Gallery</h2>
            <p id={housewarming.para}>Explore Heartwarming Moments From Housewarmings We've Thoughtfully Planned, Celebrating New
              Beginnings and Cherished Memories.</p>
          </div>
          <div className={housewarming.secimg}>
          <div className={housewarming.pc}>
            <div className={housewarming.pc1}>
              <img src="/images1/e5f5115c-1594-4706-9754-63ab3ac5a4e6.jpg" className={housewarming.img1} />
              <img src="/images1/Best Housewarming Party Ideas To Celebrate Your New Space.jpg" className={housewarming.img1} />
              <img src="/images1/keys.jpg" className={housewarming.img1} />
            </div>
            <div className={housewarming.pc2}>
              <img src="/images1/h1.jpg" className={housewarming.img2} />
              <img src="/images1/WhatsApp Image 2025-01-06 at 22.48.40.jpeg" className={housewarming.img2} />
              <img src="/images1/WhatsApp Image 2025-01-06 at 22.50.41.jpeg" className={housewarming.img2} />
            </div>
          </div>
          </div>
          <div>
            <h2 id={housewarming.title}>Happy Homeowners, Perfect Housewarming</h2>
            <p id={housewarming.para}>"Present Perfect made our housewarming celebration unforgettable! From the décor to
              the food, every detail was perfect!" – Priya & Arjun</p>
            <p id={housewarming.para}>"Flawless execution and excellent service for our housewarming! Our new home was filled
              with joy, and our guests had a great time!" – Rakesh & Simran</p>
            <p id={housewarming.para}>"An amazing housewarming experience! The event was perfectly organized, making our new
              home feel even more special." – Tanya & Akash</p>
          </div>
           <div className={housewarming.blank}></div>
        </div>
      </main>
    </div>
  )
}

export default Housewarming;
