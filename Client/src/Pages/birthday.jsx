import React from 'react'
import birthday from '../css/birthday.module.css';
import Navbar from '../components/Navbar/Navbar.jsx';

const Birthday = () => {
  return (
    <div className={birthday.body}>
    <Navbar />
    <main>
        <section className={birthday.sec}>
          <h2 id={birthday.title}>Celebrate Birthdays with Us!</h2>
          <p id={birthday.para}>
            At Present Perfect, we turn every birthday into a memorable celebration.
            Whether it's a small gathering or a grand event, we offer everything you need to make your special day perfect.
          </p>
        </section>

        <section className={birthday.sec}>
          <h2 id={birthday.title}>Birthday services</h2>
          <div className={birthday.container}>

            <div className={birthday.item} id={birthday.item1}>
              <section className={birthday.sec_boxes}>
                <h2>Themes</h2>
                <p>Custom themes for kids, adults, or specific interests</p>
              </section>
            </div>

            <div className={birthday.item} id={birthday.item2}>
              <section className={birthday.sec_boxes}>
                <h2>Decoration</h2>
                <p>Balloons, banners, lighting, and table settings</p>
              </section>
            </div>

            <div className={birthday.item} id={birthday.item3}>
              <section className={birthday.sec_boxes}>
                <h2>Entertainment</h2>
                <p>Clowns, games, magicians, DJs, photo booths, etc</p>
              </section>
            </div>

            <div className={birthday.item} id={birthday.item4}>
              <section className={birthday.sec_boxes}>
                <h2>Catering</h2>
                <p>Cakes, snacks, beverages, and full meals</p>
              </section>
            </div>

            <div className={birthday.item} id={birthday.item5}>
              <section className={birthday.sec_boxes}>
                <h2>Party Favour</h2>
                <p>Unique and fun takeaways for guests</p>
              </section>
            </div>

            <div className={birthday.item} id={birthday.item6}>
              <section className={birthday.sec_boxes}>
                <h2>Photography</h2>
                <p>Beautifully capture every special moment</p>
              </section>
            </div>
          </div>
        </section>

        <section className={birthday.sec}>
          <h2 id={birthday.title}>Book Your Birthday Party Today!</h2>
          <p id={birthday.para}>
            Explore our range of packages and add-ons, or contact us to create a custom experience just for you.
          </p>
        </section>

        <section className={birthday.sec}>
          <div className={birthday.container}>
            <div className={birthday.item_card} id={birthday.item_card1}>
              <section className={birthday.sec_card}>
                <h2>Basic</h2>
                <h2>RS 20,000</h2>
                <div className={birthday.card_list}>
                  <ul>
                    <li className={birthday.card_text}>* Customized Décor</li>
                    <li className={birthday.card_text}>* Catering with basic menu options</li>
                    <li className={birthday.card_text}>* Birthday Cake (Standard design)</li>
                    <li className={birthday.card_text}>* Photography (Event highlights)</li>
                    <li className={birthday.card_text}>* Simple games</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className={birthday.item_card} id={birthday.item_card2}>
              <section className={birthday.sec_card}>
                <h2>Premium</h2>
                <h2>RS 35,000</h2>
                <div className={birthday.card_list}>
                  <ul>
                    <li className={birthday.card_text}>* Customized Décor with theme options</li>
                    <li className={birthday.card_text}>* Full catering menu with a variety of options</li>
                    <li className={birthday.card_text}>* Birthday Cake (Custom design)</li>
                    <li className={birthday.card_text}>* Professional Photography (Full event coverage)</li>
                    <li className={birthday.card_text}>* Entertainment (Games and activities)</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className={birthday.item_card} id={birthday.item_card3}>
              <section className={birthday.sec_card}>
                <h2>Diamond</h2>
                <h2>RS 60,000</h2>
                <div className={birthday.card_list}>
                  <ul>
                    <li className={birthday.card_text}>* Luxury Décor with premium themes</li>
                    <li className={birthday.card_text}>* Gourmet catering with premium options</li>
                    <li className={birthday.card_text}>* Exclusive Birthday Cake</li>
                    <li className={birthday.card_text}>* Full event Photography + photo album</li>
                    <li className={birthday.card_text}>* Entertainment with DJ and games</li>
                    <li className={birthday.card_text}>* Personalized Gifts for all guests</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>

          <div>
            <div className={birthday.pictures}>
              <h2 id={birthday.title}>Our Birthday Gallery</h2>
              <p id={birthday.para}>
                Explore moments from past birthday events we’ve organized, capturing the essence of celebration.
              </p>
            </div>
            <div className={birthday.secimg}>
            <div className={birthday.pc}>
              <div className={birthday.pc1}>
                <img src="/images1/bday 1.jpg" className={birthday.img1} />
                <img src="/images1/bday 2.jpg" className={birthday.img1} />
                <img src="/images1/bday 3.png" className={birthday.img1} />
              </div>
              <div className={birthday.pc2}>
                <img src="/images1/bday 4.png" className={birthday.img2} />
                <img src="/images1/bday 5.jpg" className={birthday.img2} />
                <img src="/images1/bday 6.jpg" className={birthday.img2} />
              </div>
            </div>
            </div>
          </div>

          <div>
            <h2 id={birthday.title}>Happy Clients, Happy Birthdays</h2>
            <p id={birthday.para}>
              "Present Perfect made my son's birthday celebration unforgettable! Everything was perfect,<br />
              from the décor to the cake!" – Aditi & Vijay
            </p>
            <p id={birthday.para}>
              "Amazing service and seamless organization for my wife’s birthday! Our guests had a blast.<br />
              Highly recommend!" – Mohit
            </p>
            <p id={birthday.para}>
              "A fantastic experience for my mother’s milestone birthday! The event was beautifully<br />
              organized, and we couldn't have asked for more." – Ravi
            </p>
          </div>
          <div className={birthday.blank}></div>
      </section>
    </main>
    </div>
  )
}

export default Birthday
