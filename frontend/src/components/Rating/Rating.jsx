import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import"./Rating.css";

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="star-rating-container">
      {[...Array(totalStars)].map((_, index) => {
        const starNumber = index + 1;

        if (rating >= starNumber) {
          return <FaStar key={index} className="star-full" size={12} />;
        } else if (rating >= starNumber - 0.5) {
          return <FaStarHalfAlt key={index}className="star-half" size={12} />;
        } else {
          return <FaRegStar key={index}className="empty" size={12} />;
        }
      })}
      <span >{rating.toFixed(1)}</span>
    </div>
  );
};

export default Rating;
