import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.svg";

import "./header.style.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleResponsiveMenu = (event) => {
    event.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  const handleClickNavLink = () => {
    setToggleMenu(false);
  };

  return (
    <header>
      <div className="header-content">
        <Link className="nav-logo" to="/">
          <img className="logo" src={logo} alt="Little Lemon Logo" />
        </Link>

        <nav className={`nav ${toggleMenu ? "open" : ""}`}>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleClickNavLink}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={handleClickNavLink}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/menu"
                onClick={handleClickNavLink}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/booking"
                onClick={handleClickNavLink}
              >
                Reservation
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/order"
                onClick={handleClickNavLink}
              >
                Order online
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                onClick={handleClickNavLink}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`hamburger ${toggleMenu ? "open" : ""}`}
          onClick={toggleResponsiveMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
