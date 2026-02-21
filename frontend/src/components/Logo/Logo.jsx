import { assets } from "../../assets/assets";
import "./Logo.css";

const Logo = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <a href="#home">
      <img
        src={assets.logo}
        alt="Eatigo logo"
        className="logo"
        aria-label="Go to homepage"
        onClick={handleClick}
      />
    </a>
  );
};

export default Logo;
