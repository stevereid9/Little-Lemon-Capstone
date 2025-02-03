import React from "react";

import "./button.style.css";

const Button = ({ type = "button", handleClick, classes = "", children }) => {
  return (
    <>
      <button className={classes} type={type} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
