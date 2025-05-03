import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = ({ isOpen, onCloseClick }) => {
  return (
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="close-btn" onClick={onCloseClick}>
        &times;
      </div>
      <ul className="menu">
        <li>SHOES</li>
        <li>MOTORSPORT</li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>SPORTS</li>
        <li>LIFESTYLE</li>
        <li>OUTLET</li>
        <hr />
        <li>Order Tracker</li>
        <li>My Profile</li>
        <li>Store Finder</li>
        <li>Help & Customer Service</li>
        <li>Returns</li>
        <li>Signup</li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
