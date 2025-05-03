import React, { useRef } from "react";
import "./ProductSlider2.css";
import r1 from "./r1.jpg.avif";
import r2 from "./r2.jpg.avif";
import r3 from "./r3.jpg.avif";
import r4 from "./r4.jpg.avif";
import r5 from "./r5.jpg.avif";
import r6 from "./r6.jpg.avif";
import r7 from "./r7.jpg.avif";
import r8 from "./r8.jpg.avif";
import r9 from "./r9.jpg.avif";
import r10 from "./r10.jpg.avif";

const products = [
  { id: 1, name: "Response CL Shoes", price: "₹10399.50", image: r1 },
  { id: 2, name: "Grand Court TD Lifestyle   Shoes", price: "₹15279.50", image: r2},
  { id: 3, name: "Adilette Flow Slides", price: "₹2999.00", image: r3 },
  { id: 4, name: "Racer TR 23 Shoes", price: "₹6079.50", image: r4 },
  { id: 5, name: "Grand Court 2.0 Shoes", price: "₹6399.50", image: r5 },
  { id: 6, name: "UltraBoost 1.0 Shoes", price: "$200", image: r6 },
  { id: 7, name: "Stan Smith Shoes", price: "₹4199.50", image: r7 },
  { id: 8, name: "Copa Pure 2 League", price: "₹5999.50", image: r8 },
  { id: 9, name: "Run 60s 3.0 Shoes", price: "₹6599.00", image: r9 },
  { id: 10, name: "Retropy F2 Shoes", price: "₹7679.50", image: r10 }
];

const ProductSlider2 = () => {
  const sliderRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="product-slider">
      <div className="heading">BUY 2 OR MORE, SAVE AN EXTRA 20%!</div>
      <div className="btns">
        <button className="btn">Shoes</button>
        <button className="btn">Clothing</button>
        <button className="btn">Accessories</button>
      </div>

      {/* Scroll buttons */}
      <div className="slider-container">
        <button className="scroll-btn left" onClick={scrollLeft}>‹</button>
        
        <div className="product-list" ref={sliderRef}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>›</button>
      </div>
    </div>
  );
};

export default ProductSlider2;
