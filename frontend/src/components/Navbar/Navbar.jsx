import { assets } from "../../assets/assets";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" alt="khanaExpress logo " />
      <ul className="navbar-menu">
        <li>
          <NavLink to={"/home"} className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"} className={({ isActive }) => (isActive ? "active" : "")}>
            menu
          </NavLink>
        </li>
        <li>
          <NavLink to={"/mobile-app"} className={({ isActive }) => (isActive ? "active" : "")}>
            mobile-app
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact-us"} className={({ isActive }) => (isActive ? "active" : "")}>
            contact us
          </NavLink>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} className="navbar-search-icon" alt="search"  />
        <div className="navbar-search_icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button>sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
