import React from "react";
import "./Header.css";
import header_img from "../../public/header_img.png";
import useStore from "../../context/useStore";
function Header() {
  const { setShowLogin } = useStore();

  return (
    <div className="header" id="home">
      <div className="header-contents">
        <h2>
          Best Food Which Makes You
          <span>
            <strong> "Hungry"</strong>
          </span>
        </h2>
        <p>
          Exploring the world of cuisine is like embarking on a flavorful adventure. Testy foods add
          a thrilling twist, turning every bite into a delightful journey for the taste buds.
        </p>
        <button onClick={() => setShowLogin(true)}>Book yummy</button>
      </div>
      <div className="header-image">
        <img src={header_img} alt="Delicious food" />
      </div>
    </div>
  );
}

export default Header;
