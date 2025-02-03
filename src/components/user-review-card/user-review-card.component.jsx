import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./user-review-card.style.css";

const UserReviewCard = ({ avatar, name, stars, userFeedback }) => {
  const getStarRating = () => {
    let starsArray = [];
    for (let i = 1; i <= stars; i++) {
      starsArray.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
    return starsArray;
  };

  return (
    <div className="user-review-card-container">
      <div className="card-header">
        <img className="avatar" src={avatar} alt={name} />
        <div className="user-name">{name}</div>
      </div>
      <span className="star-rating">{getStarRating()}</span>
      <div className="feedback">{userFeedback}</div>
    </div>
  );
};

export default UserReviewCard;
