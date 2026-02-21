import { assets } from "../../assets/assets";
import "./Logo.css";

const Logo = ({ setActiveMenu, onClick }) => {
  const handleClick = () => {
    if (setActiveMenu) setActiveMenu("home");
    if (onClick) onClick();
  };

  return (
    <img
      src={assets.logo}
      alt="Eatigo logo"
      className="logo"
      aria-label="Go to homepage"
      onClick={handleClick}
    />
  );
};

export default Logo;