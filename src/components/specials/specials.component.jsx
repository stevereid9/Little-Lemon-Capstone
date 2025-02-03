import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { specials } from "../../data/specials";
import FoodCard from "../food-card/food-card.component";

import "./specials.style.css";

const Specials = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(3);
  const chevronWidth = 40;

  const handleNumberOfCards = () => {
    if (window.innerWidth > 1001) {
      setNumberOfCards(3);
    }
    if (window.innerWidth > 741 && window.innerWidth < 1000) {
      setNumberOfCards(2);
    }
    if (window.innerWidth < 740) {
      setNumberOfCards(1);
    }
  };

  useEffect(() => {
    window.addEventListener("changeNumberOfCards", handleNumberOfCards);

    return () =>
      window.removeEventListener("changeNumberOfCards", handleNumberOfCards);
  }, []);

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={40}
        leftChevron={
          <button>
            <FontAwesomeIcon
              className="icon-scroll-left-rpl"
              icon={faChevronLeft}
            />
          </button>
        }
        rightChevron={
          <button>
            <FontAwesomeIcon
              className="icon-scroll-right-rpl"
              icon={faChevronRight}
            />
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
        infiniteLoop={true}
      >
        {specials.map((dishItem) => (
          <FoodCard key={dishItem.id} {...dishItem} />
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default Specials;
