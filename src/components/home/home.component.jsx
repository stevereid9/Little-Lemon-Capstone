import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

import Specials from "../specials/specials.component";
import Button from "../rpl-common/button/button.component";
import Testimonials from "../testimonials/testimonials.component";
import WhyUs from "../why-us/why-us.component";

import SpotlightSection from "../spotlight-section/spotlight-section.component";

import "./home.style.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGoToMenuList = (e) => {
    e.preventDefault();
    navigate("/menu");
  };

  return (
    <>
      <SpotlightSection />
      <section className="specials-section-container">
        <div className="specials-heading">
          <h1 id="specials-title">Specials</h1>
          <Button handleClick={handleGoToMenuList} classes="main-button">
            <FontAwesomeIcon icon={faBookOpen} />
            <span>Online Menu</span>
          </Button>
        </div>
        <div className="specials-container">
          <Specials />
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="why-us-overview-container">
        <WhyUs />
      </section>
    </>
  );
};

export default HomePage;
