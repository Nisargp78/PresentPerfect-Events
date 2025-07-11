import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../main.jsx";
import Nav from "../../css/Navbar.module.css";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown.jsx";

const nav_links = [
  { path: "/home", display: "Home" },
  { path: "/events", display: "Events" },
  { path: "/about", display: "About Us" },
  { path: "/contact", display: "Contact Us" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    setForceRender((prev) => !prev);
  }, [isAuthenticated]);

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={Nav.navbar} key={isAuthenticated ? "loggedIn" : "loggedOut"}>
      <div className={Nav.navlogo}>
        <a className={Nav.navbarbrand} href="/">
          <img id="navlogo" src="/images/logo/PP.png" style={{ width: "70px", paddingLeft: "7px" }} alt="Logo" />
        </a>
        <h1 id={Nav.pp}>Present Perfect</h1>
      </div>

      {/* Navbar Links */}
      <nav id="Center-navbar">
        <div className={Nav.nav}>
          <ul className={Nav.navlist}>
            {nav_links.map((item, index) => (
              <li className={Nav.nav_item} key={index}>
                <NavLink to={item.path} className={(navClass) => (navClass.isActive ? "active_link" : "")}>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Right-Side Section */}
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
  );
};

export default Navbar;
