import React from 'react'
import engagement from '../css/Engagement.module.css';
import Navbar from '../components/Navbar/Navbar.jsx'

const Engagement = () => {
  return (
    <div className={engagement.body}>
    <Navbar />
    <div>
      <main>
        <section className={engagement.sec}>
          <h2 id={engagement.title}>Make Your Engagement Special With Us!</h2>
          <p id={engagement.para}>
            At Present Perfect, we create unforgettable engagement celebrations, tailored to make your special
            day truly memorable.
          </p>
        </section>

        <section className={engagement.sec}>
          <h2 id={engagement.title}>Engagement services</h2>
          <div className={engagement.container}>
            <div className={engagement.item} id={engagement.item1}>
              <section className={engagement.sec_boxes}>
                <h2>Decor & Themes</h2>
                <p>Stunning floral setups, lighting, and personalized themes for your special day</p>
              </section>
            </div>

            <div className={engagement.item} id={engagement.item2}>
              <section className={engagement.sec_boxes}>
                <h2>Ring ceremony</h2>
                <p>Luxurious stage with spotlight effects, followed by cake cutting.</p>
              </section>
            </div>

            <div className={engagement.item} id={engagement.item3}>
              <section className={engagement.sec_boxes}>
                <h2>Catering</h2>
                <p>Cakes, drinks, starters, snacks, beverages, and full meals</p>
              </section>
            </div>

            <div className={engagement.item} id={engagement.item4}>
              <section className={engagement.sec_boxes}>
                <h2>Photography</h2>
                <p>Professional coverage, candid moments, and a curated album</p>
              </section>
            </div>

            <div className={engagement.item} id={engagement.item5}>
              <section className={engagement.sec_boxes}>
                <h2>Entertainment</h2>
                <p>Live music, engaging emcee, games and photo booths.</p>
              </section>
            </div>
          </div>
        </section>

        <section className={engagement.sec}>
          <h2 id={engagement.title}>Plan Your Perfect Engagement Today!</h2>
          <p id={engagement.para}>
            Explore our curated wedding packages and add-ons, or contact us to craft a customized celebration just for you.
          </p>
        </section>

        <section className={engagement.sec}>
          <div className={engagement.container}>
            <div className={engagement.item_card} id={engagement.item_card1}>
              <section className={engagement.sec_card}>
                <h2>Basic</h2>
                <h2>RS 1,00,000</h2>
                <div className={engagement.card_list}>
                  <ul className={engagement.disc}>
                    <li className={engagement.card_text}>* Customized décor with theme options</li>
                    <li className={engagement.card_text}>* Catering with basic menu options</li>
                    <li className={engagement.card_text}>* Simple Engagement cake</li>
                    <li className={engagement.card_text}>* Professional photography (Key moments)</li>
                    <li className={engagement.card_text}>* Entertainment (Background music)</li>
                    <li className={engagement.card_text}>* Simple ring exchange setup</li>
                    <li className={engagement.card_text}>* Basic photo booth with props</li>
                  </ul>
                </div>
              </section>
              
            </div>

            <div className={engagement.item_card} id={engagement.item_card2}>
              <section className={engagement.sec_card}>
                <h2>Premium</h2>
                <h2>RS 2,00,000</h2>
                <div className={engagement.card_list}>
                  <ul>
                    <li className={engagement.card_text}>* Customized décor with advanced themes</li>
                    <li className={engagement.card_text}>* Full catering menu with a variety of options</li>
                    <li className={engagement.card_text}>* Engagement cake (Custom design)</li>
                    <li className={engagement.card_text}>* Professional photography (Full event coverage)</li>
                    <li className={engagement.card_text}>* Entertainment with Live DJs, Games and activities</li>
                    <li className={engagement.card_text}>* Luxurious ring exchange setup with spotlight effects</li>
                  </ul>
                </div>
              </section>
              
            </div>
          </div>
        </section>

        <div className={engagement.pictures}>
          <div className={engagement.pict}>
            <h2 id={engagement.title}>Our Engagement Gallery</h2>
            <p id={engagement.para}>
              Explore moments from past engagement events we’ve organized, capturing the essence of celebration.
            </p>
          </div>
          <div className={engagement.secimg}>
          <div className={engagement.pc}>
            <div className={engagement.pc1}>
              <img src="/images1/Engagement 1.jpg" alt="Engagement1" className={engagement.img1} />
              <img src="/images1/Engagement 2.jpg" alt="Engagement2" className={engagement.img1} />
              <img src="/images1/Engagement 3.jpg" alt="Engagement3" className={engagement.img1} />
            </div>
            <div className={engagement.pc2}>
              <img src="/images1/Engagement 4.jpg" alt="Engagement4" className={engagement.img2} />
              <img src="/images1/Engagement 5.jpg" alt="Engagement5" className={engagement.img2} />
              <img src="/images1/Engagement 6.jpg" alt="Engagement6" className={engagement.img2} />
              <img src="/images1/Engagement 7.jpg" alt="Engagement6" className={engagement.img2} />
            </div>
          </div>
          </div>
          <div>
            <h2 id={engagement.title}>Happy Couples, Perfect Engagement</h2>
            <p id={engagement.para}>
              "Present Perfect made our engagement day unforgettable! From the décor to the ceremony, every detail was
              perfect!" – Neha & Raj
            </p>
            <p id={engagement.para}>
              "Flawless service and impeccable planning for our engagement! Every moment was beautiful, and our guests
              had an amazing time!" – Priya & Anil
            </p>
            <p id={engagement.para}>
              "An unforgettable engagement celebration! Everything was organized to perfection, making our day even
              more special." – Shruti & Arjun
            </p>
          </div>
          <div className={engagement.blank}></div>
        </div>
      </main>
    </div>
    </div>
  )
}

export default Engagement
