import { Link } from "react-router-dom";
import { useState } from "react";

import BloInfoLogo from "../Assets/BloInfo-logo.png";
import twitterIcon from "../Assets/twitter.svg";
import instaIcon from "../Assets/insta.svg";
import ytbIcon from "../Assets/ytb.svg";
import "../Style/Navbar.css";
import { changeNavbarStyle } from "./changeNavbarStyle";

function Navbar() {
  const [pageState, setPageState] = useState("a");
  const [menuOpenResponsive, setMenuOpenResponsive] = useState(
    "bi-navbar-hamburger"
  );

  const setResponsiveHamburgerNav = () => {
    if (menuOpenResponsive === "bi-navbar-hamburger") {
      setMenuOpenResponsive("bi-navbar-hamburger-open");
    } else {
      setMenuOpenResponsive("bi-navbar-hamburger");
    }
  };

  return (
    <section className={changeNavbarStyle(pageState, setPageState)}>
      {/* Phone part */}
      <div
        className="bi-hamburger-click"
        onClick={() => setResponsiveHamburgerNav()}
      ></div>
      <div className={menuOpenResponsive}>
        <Link to="/" className="bi-nav-item-phone home" href="#">
          Home
        </Link>
        <Link to="/About-Me" className="bi-nav-item-phone about" href="#">
          About
        </Link>
        <Link
          to="/Latest-Article"
          className="bi-nav-item-phone article"
          href="#"
        >
          Articles
        </Link>
        <Link to="/Contact" className="bi-nav-item-phone contact" href="#">
          Contact Us
        </Link>
      </div>

      {/* Computer */}
      <Link to="/">
        <img className="bi-navbar-logo" src={BloInfoLogo} alt="BloInfoLogo" />
      </Link>
      <div className="bi-navbar-nav-icons">
        <nav className="bi-navbar-nav">
          <Link to="/" className="bi-nav-item home" href="#">
            Home
          </Link>
          <Link to="/About-Me" className="bi-nav-item about" href="#">
            About
          </Link>
          <Link to="/Latest-Article" className="bi-nav-item article" href="#">
            Articles
          </Link>
          <Link to="/Contact" className="bi-nav-item contact" href="#">
            Contact Us
          </Link>
        </nav>
        <li className="bi-navbar-icons">
          <ul className="bi-icons-item">
            <img
              className="bi-icons-item-img"
              src={ytbIcon}
              alt="Youtube Icon"
            />
          </ul>
          <ul className="bi-icons-item">
            <img
              className="bi-icons-item-img"
              src={instaIcon}
              alt="Instagram Icon"
            />
          </ul>
          <ul className="bi-icons-item">
            <img
              className="bi-icons-item-img"
              src={twitterIcon}
              alt="Twitter Icon"
            />
          </ul>
        </li>
      </div>
    </section>
  );
}

export default Navbar;
