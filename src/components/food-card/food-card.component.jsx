import React from "react";

import deliveryIcon from "../../assets/svgs/delivery-icon.svg";

import "./food-card.style.css";
import { Link } from "react-router-dom";

const FoodCard = ({ dishTitle, dishImage, dishDescription, dishPrice }) => {
  return (
    <div className="dish-card-box">
      <img className="dish-image" src={dishImage} alt={dishTitle} />

      <div className="dish-card-info-container">
        <div className="dish-info-carpl-box">
          <div className="row-wrapper">
            <h3 className="dish-title">{dishTitle}</h3>
            <span className="dish-price">${dishPrice}</span>
          </div>
          <p className="dish-description">{dishDescription}</p>
        </div>

        <span className="order-link-box">
          <Link className="order-link" to="/order">
            Order a delivery
          </Link>
          <img src={deliveryIcon} alt="Delivery Icon" />
        </span>
      </div>
    </div>
  );
};

export default FoodCard;
