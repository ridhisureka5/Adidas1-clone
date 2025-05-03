import React, { useRef } from "react";
import "./ProductSlider.css";
import s1 from "./s1.jpg.avif";
import s2 from "./s2.jpg.avif";
import s3 from "./s3.jpg.avif"
import s4 from "./s4.jpg.avif";
import s5 from "./s5.jpg.avif";
import s6 from "./s6.jpg.avif";


const products = [
  { id: 1, name: "SuperStar Orignals", price: "From the court to the street.", image: s1},
  { id: 2, name: "Samba Originals", price: "Inspiring indiviuality in every step", image: s2 },
  { id: 3, name: "Gazelle Originas", price: "Moving strong for over 70 years.", image: s3 },
  { id: 4, name: "SL 72 Originals", price: "The cult classic for originals worldwide.", image: s4 },
  { id: 5, name: "Campus Originals", price: "Low-key look,distinctvely retro style.", image: s5 },
  { id: 6, name: "Forum Originals", price: "The 80s basketball icon lives on.", image: s6 }
];

const ProductSlider = () => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300; // Adjust as needed
      sliderRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="product-slider__container">
      <button className="product-slider__button left" onClick={() => slide("left")}>&#8249;</button>
      
      <div className="product-slider__wrapper" ref={sliderRef}>
        {products.map((product) => (
          <div key={product.id} className="product-slider__card">
            <img src={product.image} alt={product.name} className="product-slider__image" />
            <h3 className="product-slider__name">{product.name}</h3>
            <p className="product-slider__price">{product.price}</p>
            <button className="product-slider__shop-button">Shop Now</button>
            
          </div>
        ))}
      </div>

      <button className="product-slider__button right" onClick={() => slide("right")}>&#8250;</button>
    </div>
  );
};

export default ProductSlider;
