import React from 'react'
import baby from '../css/Babyshower.module.css';
import Navbar from '../components/Navbar/Navbar.jsx';

const Baby = () => {
  return (
    <div className={baby.body}>
    <Navbar />
    <main>
        <section className={baby.sec}>
          <h2 id={baby.title}>Make Your Baby Shower Extra Special With Us!</h2>
          <p id={baby.para}>At Present Perfect, we design delightful baby shower celebrations, creating memories that
            you and your loved ones will cherish forever.</p>
        </section>
  
        <section className={baby.sec}>
          <h2 id={baby.title}>Baby Shower services</h2>
          <div className={baby.container}>
            <div className={baby.item} id={baby.item1}>
              <section className={baby.sec_boxes}>
                <h2>Decor & Themes</h2>
                <p>Stunning floral setups, lighting, and personalized themes for your special day</p>
              </section>
            </div>
  
            <div className={baby.item} id={baby.item2}>
              <section className={baby.sec_boxes}>
                <h2>Special Moments</h2>
                <p>Luxurious stage design for cake cutting, vow renewal, or special speeches</p>
              </section>
            </div>
  
            <div className={baby.item} id={baby.item3}>
              <section className={baby.sec_boxes}>
                <h2>Catering</h2>
                <p>Cakes, drinks, starters, snacks, beverages, and full meals</p>
              </section>
            </div>
  
            <div className={baby.item} id={baby.item4}>
              <section className={baby.sec_boxes}>
                <h2>Photography</h2>
                <p>Professional coverage, candid moments, and a curated album</p>
              </section>
            </div>
  
            <div className={baby.item} id={baby.item5}>
              <section className={baby.sec_boxes}>
                <h2>Entertainment</h2>
                <p>Live music, engaging emcee, games and photo booths.</p>
              </section>
            </div>
          </div>
        </section>
  
        <section className={baby.sec}>
          <h2 id={baby.title}>Plan Your Perfect Baby Shower Today!</h2>
          <p id={baby.para}>Browse our tailored baby shower packages and add-ons, or reach out to us to create a unique celebration
            designed just for you.</p>
        </section>
  
        <section className={baby.sec}>
          <div className={baby.container}>
            <div className={baby.item_card} id={baby.item_card1}>
              <section className={baby.sec_card}>
                <h2>Basic</h2>
                <h2>RS 1,00,000</h2>
                <div className={baby.card_list}>
                  <ul type="disc">
                    <li className={baby.card_text}>* Customized décor with theme options</li>
                    <li className={baby.card_text}>* Catering with basic menu options</li>
                    <li className={baby.card_text}>* Standard anniversary cake</li>
                    <li className={baby.card_text}>* Professional photography for Key moments</li>
                    <li className={baby.card_text}>* Background music for entertainment</li>
                    <li className={baby.card_text}>* Simple stage setup for cake cutting or special moments</li>
                    <li className={baby.card_text}>* Basic photo booth with props</li>
                  </ul>
                </div>
              </section>
            </div>
  
            <div className={baby.item_card} id={baby.item_card2}>
              <section className={baby.sec_card}>
                <h2>Premium</h2>
                <h2>RS 2,00,000</h2>
                <div className={baby.card_list}>
                  <ul>
                    <li className={baby.card_text}>* Customized décor with advanced themes</li>
                    <li className={baby.card_text}>* Full catering menu with a variety of options</li>
                    <li className={baby.card_text}>* Designer anniversary cake</li>
                    <li className={baby.card_text}>* Professional photography with Full event coverage</li>
                    <li className={baby.card_text}>* Entertainment with Live DJs, Games and activities</li>
                    <li className={baby.card_text}>* Luxurious stage setup with spotlight effects</li>
                    <li className={baby.card_text}>* Premium photo booth with props</li>
                  </ul>
                </div>
              </section>
            </div>
  
            <div className={baby.pictures}>
              <div className={baby.pict}>
                <h2 id={baby.title}>Our Baby Shower Gallery</h2>
                <p id={baby.para}>Discover Heartwarming Moments From Baby Showers We've Perfectly Planned, Celebrating Love and New
                  Beginnings.</p>
              </div>
              <div className={baby.secimg}>
              <div className={baby.pc}>
                <div className={baby.pc1}>
                  <img src="/images1/WhatsApp Image 2025-01-04 at 23.46.56 (3).jpg" className={baby.img1} />
                  <img src="/images1/babyshower.jpg" className={baby.img1} />
                  <img src="/images1/WhatsApp Image 2025-01-04 at 23.46.57 (1).jpg" className={baby.img1} />
                </div>
                <div className={baby.pc2}>
                  <img src="/images1/WhatsApp Image 2025-01-04 at 23.46.57 (1).jpg" className={baby.img2} />
                  <img src="/images1/WhatsApp Image 2025-01-04 at 23.51.13.jpg" className={baby.img2} />
                  <img src="/images1/WhatsApp Image 2025-01-06 at 22.10.18.jpg" className={baby.img2} />
                </div>
              </div>
              </div>
              <div>
                <h2 id={baby.title}>Happy Parents, Perfect Baby Shower</h2>
                <p id={baby.para}>"Present Perfect made our baby shower truly special! From the decorations to the<br />
                  activities, every detail was flawless!" - Aisha & Rahul</p>
                <p id={baby.para}>"Seamless planning and exceptional service for our baby shower! Every moment was<br />
                  memorable, and our guests had a fantastic time!" - Meera & Rohan</p>
                <p id={baby.para}>"An unforgettable baby shower celebration! Everything was beautifully organized, making<br />
                  the day even more magical." -  Neha & Vikram</p>
              </div>
              <div className={baby.blank}></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Baby
