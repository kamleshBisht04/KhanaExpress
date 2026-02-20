import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import useStore from "../../context/useStore";

const navItems = [
  { id: 1, label: "Home", value: "home" },
  { id: 2, label: "Menu", value: "explore-menu" },
  { id: 3, label: "Mobile App", value: "app-download" },
  { id: 4, label: "Contact Us", value: "footer" },
];

const Navbar = () => {
  const { search, setSearch } = useStore();
  const [activeMenu, setActiveMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <Logo setActiveMenu={setActiveMenu} />

      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
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
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="Search food..."
          />
        </div>

        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>

        <button className="signin">Sign In</button>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </div>
  );
};

export default Navbar;
