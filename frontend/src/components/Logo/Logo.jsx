import { assets } from "../../assets/assets";
import "./Logo.css";
const Logo = ({ setActiveMenu }) => {
  return (
    <a href="#home">
      <img
        onClick={() => setActiveMenu("home")}
        src={assets.logo}
        alt="Eatigo logo"
        className="logo"
        aria-label="Go to homepage"
      />
    </a>
  );
};

export default Logo;
