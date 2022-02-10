import "./Header.css";
import { useState } from "react";
import logo from "../../Images/img1.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div class="container">
        <Link to="/">
          <div class="logo">
            <img
              src={logo}
              className="logo"
              style={{ height: "10vmin", width: "10vmin", marginTop: "2vmin" }}
            />
          </div>
        </Link>

        <input
          className="hamburger-button"
          type="checkbox"
          id="hamburger-button"
          style={{ color: "#fff" }}
        />
        <label for="hamburger-button">
          <div></div>
        </label>
        <div className="menu">
          <nav>
            <ul style={{ listStyle: "none" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>

          <div className="buttons">
            <a href="/" className="button primary">
              Email Us
            </a>
            <a href="/" className="button">
              Youtube Channel
            </a>
          </div>
          <div className="mobile-icon">
            <img
              src={logo}
              className="logo"
              style={{ height: "12vmin", width: "12vmin" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
