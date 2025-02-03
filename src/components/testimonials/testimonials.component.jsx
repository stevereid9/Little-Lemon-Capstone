import UserReviewCard from "../user-review-card/user-review-card.component";
import { userReviews } from "../../data/userReviews";

import "./testimonials.style.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1>Testimonials</h1>
      <div className="testimonials-list">
        {userReviews.map((review) => (
          <UserReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
