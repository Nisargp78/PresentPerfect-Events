import Nav from '../css/Navbar.module.css';
import entertainment from '../css/Entertainment.module.css';
import ProfileDropdown from "../components/ProfileDropdown/ProfileDropdown.jsx";
import { useContext, useEffect, useState } from 'react';
import { Context } from '../main.jsx';

const Entertainment = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const [forceRender, setForceRender] = useState(false);
  
    useEffect(() => {
      setForceRender((prev) => !prev);
    }, [isAuthenticated]);
  
    const goToLogin = () => {
      navigate("/login");
    };
  return (
    <div className={entertainment.body}>
      <div className={entertainment.navbar}>
          <div className={Nav.navlogo}>
              <a className={Nav.navbarbrand} href="index.html">
            <img id={Nav.navlogo} src="/images/logo/PP.png" style={{ width: '70px' , paddingLeft: '7px'}}/></a>
            <h1 id={entertainment.pp}>resent Perfect</h1>
          </div>
          {/* <!-- List-Navbar --> */}  
          <nav id="Center_navbar">
          <div className={Nav.nav}>
            <ul className={entertainment.navlist}>
            {/*   <!-- List --> */}
              <li><a href="/">Home</a></li>
              <li><a href="Event.jsx">Events</a></li>
              <li><a href="">Gifts</a></li>
              <li><a href="Events/about.html">About Us</a></li>
              <li><a href="./Events/contact.html">Contact Us</a></li>
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
        {/* <!-- Navbar Ends --> */}
      <section className={entertainment.sec}>
        <h1 className={entertainment.sec_h1}>Entertainment Services</h1>
        <p id={entertainment.sec_p}>We offer a variety of entertainment services to make your event memorable. From live performances to interactive activities, we have something for everyone</p>
        <div className={entertainment.container}>
          {[
            { title: "Live Performances", items: ["Live Bands(Rock, Jazz, Classical, and Acoustic Bands)", "Singers & Musicians", "Traditional Dancers", "Stand-Up Comedians"] },
            { title: "DJ & Sound Services", items: ["Professional DJs for weddings, parties, and corporate events", "Themed Music Nights (Retro, Bollywood, EDM)", "Sound and Lighting Systems"] },
            { title: "Visual Entertainment", items: ["Fireworks Displays", "Laser Shows", "LED Performers", "Projection Mapping"] },
            { title: "Thematic Entertainment", items: ["Cultural Acts (Traditional music and dance based on event themes)", "Carnival & Circus Acts", "Photo Booths"] },
            { title: "Customized Experiences", items: ["Theme Party Entertainment (Bollywood night, Retro)", "Personalized Storytelling & AV Shows"] },
            { title: "Interactive Activities", items: ["Live Art Performances", "Workshops (Dance, pottery, cocktail making)", "Games & Competitions (Interactive games for audience engagement)"] }
          ].map((section, index) => (
            <div className={entertainment.item} key={index}>
              <section className={entertainment.sec_boxes}>
                <h2>{section.title}</h2>
                <ul className={entertainment.decor_list}>
                  {section.items.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </section>
            </div>
          ))}
        </div>
      </section>

      <div className={entertainment.personalized_section}>
        <h1>Unmatched Entertainment for Unforgettable Events</h1>
        <p>Elevate your event with unforgettable entertainment—live performances, visual spectacles, and interactive activities</p>
        <div className={entertainment.products_container}>
          {[
            { img: "/content/Entertainment/live band.jpg", title: "Live Band Performance", desc: "Experience the magic of live music with soulful performances that set the perfect vibe for your event" },
            { img: "/content/Entertainment/DJ.jpg", title: "DJ services", desc: "Turn up the energy with our DJ services—spinning the hottest tracks to keep the party alive" },
            { img: "/content/Entertainment/Fireworks.jpg", title: "Fireworks Displays", desc: "Light up the sky with dazzling fireworks displays—adding a spectacular touch to your celebrations" },
            { img: "/content/Entertainment/sangeeth.jpg", title: "Classy Wedding Sangeeth", desc: "Celebrate your wedding sangeet with a touch of class—grooves, glam, and unforgettable moments" },
            { img: "/content/Entertainment/LED performers.jpg", title: "LED Performers", desc: "Illuminate your event with LED performers—futuristic acts that captivate and mesmerize" },
            { img: "/content/Entertainment/open mic.jpg", title: "Open Mic Night Live Show", desc: "Unleash the talent with Open Mic Night—live music, poetry, and performances in an electrifying atmosphere" },
            { img: "/content/Entertainment/Games.jpg", title: "Games & Competitions", desc: "Bring excitement to your event with interactive games and competitions—fun for all ages and guaranteed to engage" },
            { img: "/content/Entertainment/Magic Show.jpg", title: "Magic Show", desc: "Add a touch of wonder with a captivating magic show—where illusions and surprises leave everyone spellbound" },
            { img: "/content/Entertainment/Drone light show.jpg", title: "Drone Light Show", desc: "Create a breathtaking spectacle with a Drone Light Show—synchronized lights painting stunning patterns in the sky" }
          ].map((product, index) => (
            <div className={entertainment.product} key={index}>
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Entertainment;