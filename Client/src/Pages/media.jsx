import Nav from '../css/Navbar.module.css';
import media from '../css/Media.module.css';
import ProfileDropdown from "../components/ProfileDropdown/ProfileDropdown.jsx";
import { useContext, useEffect, useState } from 'react';
import { Context } from '../main.jsx';
const Media = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    setForceRender((prev) => !prev);
  }, [isAuthenticated]);

  const goToLogin = () => {
    navigate("/login");
  };
  return (
  <div className={media.body}>
    <div className={media.navbar}>
      <div className={Nav.navlogo}>
        <a className={Nav.navbarbrand}>
        <img id={Nav.navlogo} src="/images/logo/PP.png" style={{ width: '70px' , paddingLeft: '7px'}}/></a>
        <h1 id={media.pp}>resent Perfect</h1>
      </div>
              {/* <!-- List-Navbar --> */}  
      <nav id="Center_navbar">
        <div className={Nav.nav}>
          <ul className={media.navlist}>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>
      <div className={Nav.navform}>
        {isAuthenticated ? (
          <ProfileDropdown />
        ) : (
          <button className={Nav.signin} onClick={goToLogin}>
            Log In
          </button>
        )}
      </div>

    </div>

    <section className={media.sec}>
        <h1 className={media.sec_h1}>Media Coverage</h1>
        <p id={media.sec_p}>
          Discover perfect venues for every event—luxury banquet halls, beachside resorts, rustic estates, and more to match your style and occasion.
        </p>
        <div className={media.container}>
          <div className={media.item} id={media.item1}>
            <section className={media.sec_boxes}>
              <h2>Photography & Videography</h2>
              <ul className={media.decor_list}>
                <li>Pre-Wedding Photoshoots</li>
                <li>Candid Photography</li>
                <li>Full-event videography with cinematic editing options</li>
                <li>Drone footage for large-scale</li>
              </ul>
            </section>
          </div>
          <div className={media.item} id={media.item2}>
            <section className={media.sec_boxes}>
              <h2>Live Streaming & Broadcasting</h2>
              <ul className={media.decor_list}>
                <li>Multi-platform streaming (YouTube, Facebook, Instagram)</li>
                <li>Multi-angle video coverage</li>
                <li>Offer a private live stream for family and friends</li>
                <li>Dedicated host or emcee</li>
              </ul>
            </section>
          </div>
          <div className={media.item} id={media.item3}>
            <section className={media.sec_boxes}>
              <h2>Social Media Coverage</h2>
              <ul className={media.decor_list}>
                <li>Real-time social media updates</li>
                <li>On-the-go edits for Instagram Stories and Reels</li>
                <li>Post-event reels and highlight videos</li>
                <li>Custom event hashtags</li>
              </ul>
            </section>
          </div>
          <div className={media.item} id={media.item4}>
            <section className={media.sec_boxes}>
              <h2>Press & Media Relations</h2>
              <ul className={media.decor_list}>
                <li>Press release creation and distribution</li>
                <li>Media invitations and press conferences</li>
                <li>Exclusive interviews with key guests</li>
              </ul>
            </section>
          </div>
          <div className={media.item} id={media.item5}>
            <section className={media.sec_boxes}>
              <h2>Event Promotion & Advertising</h2>
              <ul className={media.decor_list}>
                <li>Social media ads and audience targeting</li>
                <li>Event listing on popular platforms</li>
                <li>Collaboration with local media and bloggers</li>
              </ul>
            </section>
          </div>
          <div className={media.item} id={media.item6}>
            <section className={media.sec_boxes}>
              <h2>Post-Event Coverage & Analytics</h2>
              <ul className={media.decor_list}>
                <li>Event Highlights Trailer</li>
                <li>Custom Wedding Album Design</li>
                <li>Engagement reports and media mentions</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <div className={media.personalized_section}>
        <h1>Perfect Venues for Every Occasion</h1>
        <p>Find stunning venues that perfectly match your event style and create unforgettable moments</p>
        <div className={media.products_container}>
          <div className={media.product}>
            <img src="/content/Media/Pre wedding.jpg" alt="Pre Wedding Photography" />
            <h3>Pre Wedding Photography</h3>
            <p>Modern rooftop spaces with stunning city views, perfect for chic and intimate events.</p>
          </div>
          <div className={media.product}>
            <img src="/content/Media/Wedding Album.jpg" alt="Wedding Album" />
            <h3>Custom Wedding Album</h3>
            <p>Treasure your special moments with a beautifully crafted custom wedding album, designed to last a lifetime</p>
          </div>
          <div className={media.product}>
            <img src="/content/Media/candid.jpg" alt="Candid Photography" />
            <h3>Candid Photography</h3>
            <p>Capture genuine emotions and unscripted moments with candid photography for a truly unforgettable experience</p>
          </div>
        </div>

        <div className={media.products_container}>
          <div className={media.product}>
            <img src="/content/Media/Banner.jpg" alt="Event Posters and Banners" />
            <h3>Event posters and banners</h3>
            <p>Enhance your event with custom-designed posters and banners, creating a visually captivating experience</p>
          </div>
          <div className={media.product}>
            <img src="/content/Media/Drone.jpg" alt="Drone Captures" />
            <h3>Drone Captures</h3>
            <p>Capture the grandeur of your event with breathtaking drone footage</p>
          </div>
          <div className={media.product}>
            <img src="/content/Media/multi stream.jpg" alt="Multi Platform Streaming" />
            <h3>Multi Platform Streaming</h3>
            <p>Stream your event live across multiple platforms like YouTube, Facebook, and Instagram for maximum reach and engagement</p>
          </div>
        </div>

        <div className={media.products_container}>
          <div className={media.product}>
            <img src="/content/Media/Video.jpg" alt="Cinematic Videography" />
            <h3>Cinematic Videography</h3>
            <p>Full-event videography with cinematic editing options</p>
          </div>
          <div className={media.product}>
            <img src="/content/Media/Live stream.jpg" alt="Live Streaming" />
            <h3>Live Streaming</h3>
            <p>Reach a wider audience with high-quality live streaming for your events, ensuring everyone stays connected in real time</p>
          </div>
          <div className={media.product}>
            <img src="/content/Media/conference.jpg" alt="Press Conference" />
            <h3>Press Conference</h3>
            <p>Host impactful press conferences with full media coverage, complete with a professional setup and seamless coordination</p>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Media;
