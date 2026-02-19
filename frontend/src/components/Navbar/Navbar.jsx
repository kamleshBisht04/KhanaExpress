import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import Logo from "../Logo/Logo";

const navItems = [
  { id: 1, label: "Home", value: "home" },
  { id: 2, label: "Menu", value: "explore-menu" },
  { id: 3, label: "Mobile App", value: "app-download" },
  { id: 4, label: "Contact Us", value: "footer" },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div className="navbar" >
      <Logo/>
      <ul className="navbar-menu" >
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.value}`}
              onClick={() => setActiveMenu(item.value)}
              className={activeMenu === item.value ? "active" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
