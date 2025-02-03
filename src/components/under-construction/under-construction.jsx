import underConstructionImage from "../../assets/images/under-construction.jpg";

import "./under-construction.style.css";

const UnderConstruction = ({ feature }) => {
  return (
    <div className="under-construction-container">
      <img
        className="under-construction-image"
        src={underConstructionImage}
        alt={`future ${feature} page for Little Lemon website`}
      />
    </div>
  );
};

export default UnderConstruction;
