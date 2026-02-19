import React from "react";
import "./Header.css";
function Header() {
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
        <button>Book yummy</button>
      </div>
    </div>
  );
}

export default Header;
