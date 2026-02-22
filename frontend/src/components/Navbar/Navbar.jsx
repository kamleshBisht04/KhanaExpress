import { useState } from "react";
// import { assets } from "../../assets/assets";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { HiShoppingBag } from "react-icons/hi2";
import useStore from "../../context/useStore";
import { Link } from "react-router-dom";

const navItems = [
  { id: 1, label: "Home", value: "home" },
  { id: 2, label: "Menu", value: "explore-menu" },
  { id: 3, label: "Mobile App", value: "app-download" },
  { id: 4, label: "Contact Us", value: "footer" },
];

const Navbar = () => {
  const { search, setSearch, setShowLogin, cartItems } = useStore();
  const [activeMenu, setActiveMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = Object.values(cartItems).reduce((total, qty) => total + qty, 0);

  return (
    <div className="navbar">
      <Link
        to="/"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <Logo />
      </Link>

      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              to={`/#${item.value}`}
              onClick={() => {
                setActiveMenu(item.value);
                setIsOpen(false);
              }}
              className={activeMenu === item.value ? "active" : ""}
            >
              {item.label}
            </Link>
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
          <Link to="/cart">
            <HiShoppingBag size={23}/>
            {/* <img src={assets.basket_icon} alt="basket" /> */}
          </Link>

          {totalItems > 0 && (
            <div className="cart-count">{totalItems > 99 ? "99+" : totalItems}</div>
          )}
        </div>

        <button className="signin" onClick={() => setShowLogin(true)}>
          Sign In
        </button>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </div>
  );
};

export default Navbar;
