import "./why-us.style.css";

import imageMarioAndAdrian from "../../assets/images/Mario-and-Adrian-A.jpg";
import imageRestaurantChef from "../../assets/images/restaurant-chef-B.jpg";
import { useEffect, useRef } from "react";

const WhyUs = () => {
  const whyUsRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      // rpl: old functionality
      // const targetElement = document.querySelector(".why-us-container");
      // const targetPosition = targetElement.getBoundingClientRect().top;

      const targetPosition = whyUsRef.current.getBoundingClientRect().top;
      const triggerPosition = window.innerHeight - targetPosition / 2;
      let scrollPosition = window.scrollY;

      if (scrollPosition > triggerPosition) {
        document.querySelector(".image1").style.transform =
          "translateX(0) translateY(0)";
        document.querySelector(".image2").style.transform =
          "translateX(0) translateY(0)";
      } else {
        document.querySelector(".image1").style.transform =
          "translateX(15%) translateY(-10%)";
        document.querySelector(".image2").style.transform =
          "translateX(-15%) translateY(10%)";
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="why-us-container" ref={whyUsRef}>
      <div className="images-container">
        <div className="images-wrapper">
          <img
            src={imageRestaurantChef}
            alt="Mario and Adrian"
            className="image image1"
          />
          <img
            src={imageMarioAndAdrian}
            alt="Restaurant Chef"
            className="image image2"
          />
        </div>
      </div>
      <div className="overview-container">
        <h1 className="title">Little Lemon</h1>
        <h3 className="subtitle">Chicago</h3>
        <p>
          Visit us at <strong>Little Lemon</strong> to savor the authentic
          flavors of the Mediterranean, where every dish is crafted with passion
          and precision. Explore our diverse menu, brimming with tantalizing
          dishes that capture the essence of the Mediterranean region.
        </p>
        <p>
          Meet Chef Mario and Chef Adrian, the culinary masterminds behind the
          delectable creations at Little Lemon. With years of experience and a
          deep-rooted love for Mediterranean cuisine, Chef Mario and Chef Adrian
          infuse every dish with creativity, expertise, and a touch of
          Mediterranean magic.
        </p>
        <p>
          Join us at Little Lemon and embark on a culinary journey like no
          other.
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
