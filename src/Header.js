import React from "react";
import "./Header.css";
import menuBurger from "./menu-burger.png";
import heart from "./heart.png";
import shop from "./shop.png";
import search from "./search.png";
import user from "./user.png";
import adidas1 from "./adidas1.png";

const Header = ({ onMenuClick, onUserClick, onSearchClick }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="animated-text">EXTRA 5% OFF ON PREPAID ORDERS</div>
      </div>

      <div className="offer-box">
        <img
          src={menuBurger}
          alt="Menu Burger"
          className="logo"
          onClick={onMenuClick}
          style={{ cursor: "pointer" }}
        />

        <img src={heart} alt="heart" className="logo1" />
        <img src={adidas1} alt="adidas1" className="logo6" />

        <div className="right-logo">
          <img
            src={user}
            alt="user"
            className="logo4"
            onClick={onUserClick}
            style={{ cursor: "pointer" }}
          />
          <img
            src={search}
            alt="search"
            className="logo3"
            onClick={onSearchClick}
            style={{ cursor: "pointer" }}
          />
          <img src={shop} alt="shop" className="logo2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
