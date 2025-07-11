import React from 'react'
import wedding from '../css/Wedding.module.css';
import Navbar from '../components/Navbar/Navbar.jsx'

const Wedding = () => {
  return (
    <div className={wedding.body}>
    <Navbar />
    <div>
    <main>
        <section className={wedding.sec}>
          <h2 id={wedding.title}>Celebrate Weddings with Us!</h2>
          <p id={wedding.para}>
            We turn your wedding into an unforgettable celebration of love. Whether it’s an intimate ceremony<br />
            or a grand affair, we provide everything you need to make your special day truly perfect.
          </p>
        </section>

        <section className={wedding.sec}>
          <h2 id={wedding.title}>Wedding services</h2>
          <div className={wedding.container}>
            <div className={wedding.item} id={wedding.item1}>
              <section className={wedding.sec_boxes}>
                <h2>Decor & Themes</h2>
                <p>Stunning floral setups, lighting, and personalized themes for a dream wedding</p>
              </section>
            </div>

            <div className={wedding.item} id={wedding.item2}>
              <section className={wedding.sec_boxes}>
                <h2>Bride/Groom entry</h2>
                <p>Grand entries with floral chariots, LED pathways, smoke effects, or luxury cars.</p>
              </section>
            </div>

            <div className={wedding.item} id={wedding.item3}>
              <section className={wedding.sec_boxes}>
                <h2>Haldi Ceremony</h2>
                <p>Vibrant and traditional Haldi décor and arrangements.</p>
              </section>
            </div>

            <div className={wedding.item} id={wedding.item4}>
              <section className={wedding.sec_boxes}>
                <h2>Sangeet Night</h2>
                <p>Choreographed dances, live music, and dazzling entertainment.</p>
              </section>
            </div>

            <div className={wedding.item} id={wedding.item5}>
              <section className={wedding.sec_boxes}>
                <h2>Catering</h2>
                <p>Multi-cuisine menus, live stations, and delectable desserts.</p>
              </section>
            </div>

            <div className={wedding.item} id={wedding.item6}>
              <section className={wedding.sec_boxes}>
                <h2>Photos & Filming</h2>
                <p>Cinematic films, candid shots, and pre-wedding shoots.</p>
              </section>
            </div>

            <div className={wedding.item} id={wedding.item1}>
              <section className={wedding.sec_boxes}>
                <h2>Makeup & Styling</h2>
                <p>Expert makeup and hairstyling for your perfect look.</p>
              </section>
            </div>

            <div className={wedding.item} id={wedding.item2}>
              <section className={wedding.sec_boxes}>
                <h2>Mehendi Artists</h2>
                <p>Intricate and beautiful mehendi designs for bride and other guests.</p>
              </section>
            </div>

            <div className={wedding.item} id={wedding.item3}>
              <section className={wedding.sec_boxes}>
                <h2>Entertainment</h2>
                <p>Live bands, DJs, cultural acts, photo booths, and fireworks.</p>
              </section>
            </div>

            <div className={wedding.item} id={wedding.item4}>
              <section className={wedding.sec_boxes}>
                <h2>Venue Selection</h2>
                <p>Assistance in finding the perfect venue for your big day</p>
              </section>
            </div>

          
          </div>
        </section>

        <section className={wedding.sec}>
          <h2 id={wedding.title}>Plan Your Dream Wedding Today!</h2>
          <p id={wedding.para}>
            Explore our curated wedding packages and add-ons, or contact us to craft a customized celebration just
            for you.
          </p>
        </section>

        <section className={wedding.sec}>
          <div className={wedding.container}>
            <div className={wedding.item_card} id={wedding.item_card1}>
              <section className={wedding.sec_card}>
                <h2>Basic</h2>
                <h2>RS 20,000</h2>
                <div className={wedding.card_list}>
                  <ul type="disc">
                    <li className={wedding.card_text}>* Simple venue with essentials</li>
                    <li className={wedding.card_text}>* Basic catering with limited options</li>
                    <li className={wedding.card_text}>* One professional photographer</li>
                    <li className={wedding.card_text}>* Simple floral décor and lighting</li>
                    <li className={wedding.card_text}>* DJ or playlist</li>
                    <li className={wedding.card_text}>* Traditional bride and groom entry</li>
                    <li className={wedding.card_text}>* Basic makeup and styling for the bride</li>
                    <li className={wedding.card_text}>* Guest lodging options at nearby hotels</li>
                    <li className={wedding.card_text}>* Basic ceremony setup with chairs and backdrop</li>
                  </ul>
                </div>
              </section>
              
            </div>

            <div className={wedding.item_card} id={wedding.item_card2}>
              <section className={wedding.sec_card}>
                <h2>Premium</h2>
                <h2>RS 35,000</h2>
                <div className={wedding.card_list}>
                  <ul>
                    <li className={wedding.card_text}>* Elegant venue with extra features</li>
                    <li className={wedding.card_text}>* Expanded catering with more options</li>
                    <li className={wedding.card_text}>* Two photographers and highlight video</li>
                    <li className={wedding.card_text}>* Custom floral décor and centerpieces</li>
                    <li className={wedding.card_text}>* Live band or DJ</li>
                    <li className={wedding.card_text}>* Full-day coordination</li>
                    <li className={wedding.card_text}>* Special bride and groom entry</li>
                    <li className={wedding.card_text}>* Destination wedding arrangements</li>
                    <li className={wedding.card_text}>* Professional makeup and styling for bride and groom</li>
                    <li className={wedding.card_text}>* Guest lodging at premium hotels or resorts</li>
                  </ul>
                </div>
              </section>
              
            </div>

            <div className={wedding.item_card} id={wedding.item_card3}>
              <section className={wedding.sec_card}>
                <h2>Diamond</h2>
                <h2>RS 60,000</h2>
                <div className={wedding.card_list}>
                  <ul>
                    <li className={wedding.card_text}>* Luxury venue with exclusive access</li>
                    <li className={wedding.card_text}>* Gourmet catering with multicourse menu</li>
                    <li className={wedding.card_text}>* Full photography and videography coverage</li>
                    <li className={wedding.card_text}>* High-end décor and custom furniture</li>
                    <li className={wedding.card_text}>* Live band, DJ, and performances</li>
                    <li className={wedding.card_text}>* Complete planning services</li>
                    <li className={wedding.card_text}>* Grand entry with fireworks or performance</li>
                    <li className={wedding.card_text}>* Personalized beach wedding setup</li>
                    <li className={wedding.card_text}>* Luxury makeup and styling for bride and groom</li>
                  </ul>
                </div>
              </section>
              
            </div>
          </div>
        </section>

        <section className={wedding.sec}>
          <div className={wedding.pictures}>
            <div className={wedding.pict}>
              <h2 id={wedding.title}>Our Wedding Gallery</h2>
              <p id={wedding.para}>
                Explore memorable moments from past weddings we've organized, showcasing the beauty, elegance, and<br />
                magic of each celebration, from small ceremonies to grand receptions.
              </p>
            </div>
            <div className={wedding.secimg}>
            <div className={wedding.pc}>
              <div className={wedding.pc1}>
                <img src="/images1/wedding (1).png" alt="wedding1" className={wedding.img1} />
                <img src="/images1/wedding (2).png" alt="wedding2" className={wedding.img1} />
                <img src="/images1/wedding 3.jpg" alt="wedding3" className={wedding.img1} />
              </div>
              <div className={wedding.pc2}>
                <img src="/images1/wedding (4).jpg" alt="wedding4" className={wedding.img2} />
                <img src="/images1/wedding 5.jpg" alt="wedding5" className={wedding.img2} />
                <img src="/images1/wedding 6.jpeg" alt="wedding6" className={wedding.img2} />
              </div>
              <div className={wedding.pc3}>
                <img src="/images1/wedding 7.jpg" alt="wedding7" className={wedding.img3} />
                <img src="/images1/wedding 8.jpg" alt="wedding8" className={wedding.img3} />
                <img src="/images1/wedding 9.jpg" alt="wedding9" className={wedding.img3} />
              </div>
              <div className={wedding.pc4}>
                <img src="/images1/wedding 10.jpg" alt="wedding10" className={wedding.img4} />
                <img src="/images1/wedding 11.png" alt="wedding11" className={wedding.img4} />
                <img src="/images1/wedding 12.jpg" alt="wedding12" className={wedding.img4} />
              </div>
            </div>
            </div>
            <div>
              <h2 id={wedding.title}>Happy Couples, Perfect Weddings</h2>
              <p id={wedding.para}>
                "Present Perfect made our wedding day unforgettable! From the décor to the reception,<br />
                everything was flawless!" – Neha & Raj
              </p>
              <p id={wedding.para}>
                "Exceptional service and flawless organization for our wedding! Every detail was taken<br />
                care of, and our guests had an amazing time!" – Priya & Anil
              </p>
              <p id={wedding.para}>
                "An unforgettable experience for our wedding day! The event was perfectly organized,<br />
                and we couldn't have asked for a more beautiful celebration." – Shruti & Arjun
              </p>
            </div>
            <div className={wedding.blank}></div>
          </div>
        </section>
      </main>
    </div>
    </div>
  )
}

export default Wedding
