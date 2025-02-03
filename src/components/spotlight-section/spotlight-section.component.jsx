import { useNavigate } from "react-router-dom";

import bannerImage from "../../assets/images/cioppino-seafood-tomato-stew.png";

import "./spotlight-section.style.css";

const SpotlightSection = () => {
  const navigate = useNavigate();

  const handleGoToReserveTable = (e) => {
    e.preventDefault();
    navigate("/booking");
  };

  return (
    <section className="spotlight-section-container">
      <div className="spotlight-outer-container">
        <div className="spotlight-inner-container">
          <div className="image-container">
            <img src={bannerImage} alt="Cioppino Seafood Tomato Stew rpl" />
          </div>
          <div className="spotlight-info-container">
            <div className="text-container">
              <h1 id="intro-title">Little Lemon</h1>
              <h3 className="intro-subtitle">Chicago</h3>
              <p className="intro-text">
                Join us for a memorable dining experience that will transport
                you to the sun-kissed shores and vibrant markets of the
                Mediterranean.
              </p>
            </div>
            <div className="reserve-a-table-btn-container">
              <button
                className="reserve-a-table-btn"
                onClick={handleGoToReserveTable}
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
