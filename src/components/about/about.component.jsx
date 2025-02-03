import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import Button from "../rpl-common/button/button.component";
import RestaurantImage from "../../assets/images/restaurant.jpg";

import "./about.style.css";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleReserveTableClick = (e) => {
    e.preventDefault();
    navigate("/booking");
  };

  return (
    <>
      <div className="bg-image-container">
        <div className="banner-text-container">
          <span>Little Lemon Mediterranean Cuisine</span>
          <h1>Shoreline Gourmet Experience</h1>
          <div className="devider-utensils-rpl">
            <hr />
            <FontAwesomeIcon icon={faUtensils} />
            <hr />
          </div>
          <span className="text-uppercase">opening hours</span>
          <span>Monday - Friday: 08:00 AM - 22:00 PM</span>
          <span>Weekends: 10:00 AM - 04:00 PM</span>
          <Button
            classes="aboutus-booking-btn text-uppercase"
            handleClick={handleReserveTableClick}
          >
            Reserve a Table
          </Button>
        </div>
      </div>
      <div className="about-us-info-group">
        <div className="restaurant-text-rpl-box">
          <h2>Welcome To Our Restaurant</h2>
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12–15 items that they rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day.
          </p>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant. To craft the menu, Mario relies on family recipes and
            his experience as a chef in Italy. Adrian does all the marketing for
            the restaurant and led the effort to expand the menu beyond classic
            Italian to incorporate additional cuisines from the Mediterranean
            region.
          </p>
        </div>
        <div className="restaurant-img-rpl-box">
          <img
            src={RestaurantImage}
            alt="Little Lemon - Mediteranean Cuisine"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
