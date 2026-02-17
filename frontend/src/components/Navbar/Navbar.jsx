import { assets } from "../../assets/assets";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const navItems = [
  { id: 1 ,title: "Home", target: "/" },
  { id: 2 ,title: "menu", target: "/menu" },
  { id: 3 ,title: "mobile-app", target: "/mobile-app" },
  { id: 4 ,title: "contact us", target: "/contact-us" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" alt="khanaExpress logo " />
      <ul className="navbar-menu">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink to={item.target} className={({ isActive }) => (isActive ? "active" : "")}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} className="navbar-search-icon" alt="search" />
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
