import { assets } from "../../assets/assets";
import "./Logo.css";

const Logo = () => {
  return (
    <img
      src={assets.logo}
      alt="Eatigo logo"
      className="logo"
      aria-label="Go to homepage"
    />
  );
};

export default Logo;