import React, { useRef } from "react";
import "./Main1.css";
import s1 from "./hot.avif"; // Make sure these paths are correct
import s2 from "./hot2.avif";
import s3 from "./hot3.avif";
import s4 from "./hot4.avif";
import s5 from "./hot5.avif";
import s6 from "./hot6.avif";

const products = [
  { id: 1, name: "adidas Kids Collection", price: "Go back -to-school in style.", image: s1 },
  { id: 2, name: "Celestial Victory Pack", price: "A fresh burst of colours for Predator ,F50 and Copa.", image: s2 },
  { id: 3, name: "adidas SPZL", price: "Discover modern takes on archival silhouettes.", image: s3 },
  { id: 4, name: "asmc SS25 GOLF", price: "Take bold swings!.", image: s4 },
  { id: 5, name: "SONG FOR THE MUTE X ADIDAS 005", price: "A ode to thr elemental- where solitude meets warmth ,where shelter is found in vastness.", image: s5 },
  { id: 6, name: "Y-3 ADIZER0 RUNNING", price: "A tale of edurance ,with Tigst Assefa.", image: s6 }
];

const Main1 = () => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Adjust as needed
      sliderRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="main">
      <div className="heading">WHAT'S HOT?</div>
      <div className="product-slider__container2">
        <button className="product-slider__button2 left" onClick={() => slide("left")}>&#8249;</button>

        <div className="product-slider__wrapper2" ref={sliderRef}>
          {products.map((product) => (
            <div key={product.id} className="product-slider__card2">
              <img src={product.image} alt={product.name} className="product-slider__image2" />
              <h3 className="product-slider__name2">{product.name}</h3>
              <p className="product-slider__price2">{product.price}</p>
              <button className="product-slider__shop-button2">Shop Now</button>
            </div>
          ))}
        </div>

        <button className="product-slider__button2 right" onClick={() => slide("right")}>&#8250;</button>
      </div>
    </div>
  );
};

export default Main1;
