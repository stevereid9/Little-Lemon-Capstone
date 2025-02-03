import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagramSquare,
  faYoutubeSquare,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import LogoWhite from "../../assets/images/little-lemon-logo-white.png";
import { schedule } from "../../data/schedule";

import "./footer.style.css";

const Footer = () => {
  return (
    <footer>
      <div className="grid-wrapper">
        <div id="grid">
          <div className="footer-logo-socials">
            <Link to="/">
              <img
                className="logo-footer"
                src={LogoWhite}
                alt="Little Lemon Logo"
              />
            </Link>
            <p>
              Join us for a memorable dining experience that will transport you
              to the sun-kissed shores and vibrant markets of the Mediterranean.
            </p>
            <div className="socials">
              <Link to="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </Link>
              <Link to="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </Link>
              <Link to="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </Link>
              <Link to="https://www.youtube.com/" target="_blank">
                <FontAwesomeIcon icon={faYoutubeSquare} />
              </Link>
            </div>
          </div>
          <div className="footer-navigation">
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/booking">Reservations</Link>
              </li>
              <li>
                <Link to="/order">Order Online</Link>
              </li>
            </ul>
          </div>
          <div className="footer-schedule">
            <h4>Hours</h4>
            {schedule.map((scheduleItem) => (
              <div key={scheduleItem.id} className="schedule-pair">
                <span>{scheduleItem.days}</span>
                <span>{scheduleItem.hours}</span>
              </div>
            ))}
          </div>
          <div className="footer-address">
            <address>
              <h4>Address</h4>
              <p>3700 West Ogden Ave. Chicago, IL 82453</p>
              <p>(872) 123-4567</p>
              <p>hello@littlelemon.com</p>
            </address>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer-rpl-copy">
        <span>&copy; 2024 Little Lemon. All rights reserved.</span>
        <span className="devider-copyright">|</span>
        <span>Design & Development by Ralitsa Lefterova</span>
      </div>
    </footer>
  );
};

export default Footer;
