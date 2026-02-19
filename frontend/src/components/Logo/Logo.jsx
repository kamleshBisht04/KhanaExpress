import { assets } from "../../assets/assets";
import "./Logo.css";
const Logo = () => {
  return (
    <a href="#home">
      <img src={assets.logo} alt="Eatigo logo" className="logo" />
    </a>
  );
};

export default Logo;
