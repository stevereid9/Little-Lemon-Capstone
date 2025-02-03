import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import "./confirmed-booking.style.css";

const ConfirmedBooking = () => {
  return (
    <div className="booking-confirmation-container">
      <div className="bg-lemon-rpl"></div>
      <div className="restaurant-image-container">
        <div className="confirmation-box">
          <FontAwesomeIcon icon={faCheckCircle} />
          <h2>Your reservation has been confirmed!</h2>
          <p>We look forward to welcoming you.</p>
          <p>
            Feel free to review your reservation details in the profile section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
