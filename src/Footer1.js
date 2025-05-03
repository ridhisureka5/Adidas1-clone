import React from "react";
import "./Footer1.css"; // Make sure to import the CSS

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h4>PRODUCTS</h4>
        <ul>
          <li>Footwear</li>
          <li>Clothing</li>
          <li>Accessories</li>
          <li>Outlet-Sale</li>
          <li>New Arrivals</li>
          <li>Flat 50% Off!</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>SPORTS</h4>
        <ul>
          <li>CRICKET</li>
          <li>Running</li>
          <li>Football</li>
          <li>Gym/Training</li>
          <li>Tennis</li>
          <li>Outdoor</li>
          <li>Basketball</li>
          <li>Swimming</li>
          <li>Skateboarding</li>
          <li>Motorsport</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>COLLECTIONS</h4>
        <ul>
          <li>Ultraboost</li>
          <li>Superstar</li>
          <li>NMD</li>
          <li>Stan Smith</li>
          <li>Sustainability</li>
          <li>Predator</li>
          <li>Parley</li>
          <li>Adicolor</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>SUPPORT</h4>
        <ul>
          <li>Help</li>
          <li>Customer Services</li>
          <li>Returns & Exchanges</li>
          <li>Shipping</li>
          <li>Order Tracker</li>
          <li>Store Finder</li>
          <li>adiClub</li>
          <li>adiclub Terms and conditions</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>COMPANY INFO</h4>
        <ul>
          <li>About Us</li>
          <li>adidas stories</li>
          <li>adidas Apps</li>
          <li>Entity Details</li>
          <li>Press</li>
          <li>Careers</li>
        </ul>
      </div>

      <div className="footer-section follow-us">
        <h4>FOLLOW US</h4>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          className="instagram-icon"
        />
      </div>
    </div>
  );
};

export default Footer;
