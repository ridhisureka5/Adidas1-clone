import React, { useState, useEffect } from "react";
import main2 from "./main2.jpg";
import hello from "./hello.jpg";
import './Imageslider.css';


const Imageslider = () => {
  const images = [main2, hello]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  return (
    <div className="slider-container">
     <div className="navbar">
     <button className="nav-button">Shoes</button>
        <button className="nav-button">Women</button>
        <button className="nav-button">Men</button>
        <button className="nav-button">Kids</button>
        <button className="nav-button">Lifestyle</button>
        <button className="nav-button">Sports</button>
        <button className="nav-button">Outlets</button>
      </div>
     
     
     
     
     
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`slide-${index}`} className="slide" />
        ))}
       
       </div>
       <button className ="shop-button">Shop More</button>
       <button className ="feedback"> FEEDBACK</button>
        <div container className="contain">"Elevate Your Game. Define Your Style "</div>
      
      
       </div>
  );
       
};

export default Imageslider;
