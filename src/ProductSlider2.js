import React, { useRef, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig"; // adjust path
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
  { id: 1, name: "Response CL Shoes", price: "₹10399.50", image: r1, category: "Shoes" },
  { id: 2, name: "Grand Court TD Lifestyle Shoes", price: "₹15279.50", image: r2, category: "Shoes" },
  { id: 3, name: "Adilette Flow Slides", price: "₹2999.00", image: r3, category: "Accessories" },
  { id: 4, name: "Racer TR 23 Shoes", price: "₹6079.50", image: r4, category: "Shoes" },
  { id: 5, name: "Grand Court 2.0 Shoes", price: "₹6399.50", image: r5, category: "Shoes" },
  { id: 6, name: "UltraBoost 1.0 Shoes", price: "₹200", image: r6, category: "Shoes" },
  { id: 7, name: "Stan Smith Shoes", price: "₹4199.50", image: r7, category: "Shoes" },
  { id: 8, name: "Copa Pure 2 League", price: "₹5999.50", image: r8, category: "Shoes" },
  { id: 9, name: "Run 60s 3.0 Shoes", price: "₹6599.00", image: r9, category: "Shoes" },
  { id: 10, name: "Retropy F2 Shoes", price: "₹7679.50", image: r10, category: "Shoes" },
];

const CartDrawer = ({ cart, onClose, updateQuantity, removeItem }) => {
  const parsePrice = (priceStr) => parseFloat(priceStr.replace(/[₹,]/g, "")) || 0;

  const totalPrice = cart.reduce(
    (total, item) => total + parsePrice(item.price) * item.quantity,
    0
  );

  return (
    <>
      <div
        className="cart-overlay"
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 999,
        }}
      ></div>

      <div
        className="cart-drawer"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "25vw",
          maxWidth: 400,
          height: "100vh",
          backgroundColor: "#fff",
          boxShadow: "-2px 0 8px rgba(0,0,0,0.3)",
          zIndex: 1000,
          padding: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Shopping Cart</h2>
          <button
            onClick={onClose}
            style={{ cursor: "pointer", fontSize: 24, background: "none", border: "none" }}
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div style={{ flexGrow: 1, overflowY: "auto", marginTop: 10 }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  borderBottom: "1px solid #ddd",
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              >
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <label htmlFor={`qty-${item.id}`}>Qty:</label>
                  <input
                    id={`qty-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                    style={{ width: 60, padding: 4 }}
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      marginLeft: "auto",
                      backgroundColor: "red",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                      padding: "4px 8px",
                      borderRadius: 4,
                    }}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
                <p>
                  Subtotal: ₹
                  {(parsePrice(item.price) * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            borderTop: "1px solid #ddd",
            paddingTop: 10,
            marginTop: "auto",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Total: ₹{totalPrice.toFixed(2)}
        </div>
      </div>
    </>
  );
};

const ProductSlider2 = ({ onLoginRequired }) => {
  const sliderRef = useRef(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const addToCart = (product) => {
    if (!user) {
      alert("Please login to add products to your cart.");
      if (onLoginRequired) onLoginRequired();
      return;
    }

    const currentCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (currentCount >= 2) {
      alert("You can only add up to 2 items to your cart.");
      return;
    }

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        if (currentCount + 1 > 2) {
          alert("You can only add up to 2 items to your cart.");
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setCartOpen(true);
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const openCart = () => {
    if (!user) {
      alert("Please login to view your cart.");
      if (onLoginRequired) onLoginRequired();
      return;
    }
    setCartOpen(true);
  };

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());
    return matchCategory && matchSearch;
  });

  return (
    <div className="product-slider" style={{ position: "relative", padding: 20 }}>
      <h1>BUY 2 OR MORE, SAVE AN EXTRA 20%!</h1>

      <div
        style={{
          margin: "10px 0 20px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flexGrow: 1, padding: 8, fontSize: 16, minWidth: 180 }}
          aria-label="Search products"
        />

        {["All", "Shoes", "Clothing", "Accessories"].map((cat) => (
          <button
            key={cat}
            className={`btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              backgroundColor: selectedCategory === cat ? "#007bff" : "#eee",
              color: selectedCategory === cat ? "#fff" : "#000",
              border: "none",
              borderRadius: 4,
              minWidth: 90,
            }}
          >
            {cat}
          </button>
        ))}

        <button
          onClick={openCart}
          title="Open Cart"
          style={{
            marginLeft: "auto",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: 18,
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            minWidth: 110,
          }}
          aria-label="Open shopping cart"
        >
          🛒 Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </button>
      </div>

      <div
        className="slider-container"
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <button
          className="scroll-btn left"
          onClick={scrollLeft}
          aria-label="Scroll left"
          style={{
            fontSize: 30,
            cursor: "pointer",
            border: "none",
            background: "none",
            padding: 0,
            marginRight: 10,
          }}
        >
          ‹
        </button>

        <div
          className="product-list"
          ref={sliderRef}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: 16,
            paddingBottom: 10,
            scrollBehavior: "smooth",
          }}
        >
          {filteredProducts.length === 0 ? (
            <p style={{ padding: 20, minWidth: "100%" }}>No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                style={{
                  position: "relative",
                  minWidth: 180,
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  padding: 10,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  style={{ width: "100%", borderRadius: 6, objectFit: "cover" }}
                />
                <div className="product-info" style={{ marginTop: 8 }}>
                  <h3 style={{ fontSize: 16, margin: "4px 0" }}>{product.name}</h3>
                  <p style={{ fontWeight: "bold", margin: 0 }}>{product.price}</p>
                </div>
                <button
                  className="add-to-cart-btn"
                  title="Add to Cart"
                  onClick={() => addToCart(product)}
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "24px",
                  }}
                  aria-label={`Add ${product.name} to cart`}
                >
                  🛒
                </button>
              </div>
            ))
          )}
        </div>

        <button
          className="scroll-btn right"
          onClick={scrollRight}
          aria-label="Scroll right"
          style={{
            fontSize: 30,
            cursor: "pointer",
            border: "none",
            background: "none",
            padding: 0,
            marginLeft: 10,
          }}
        >
          ›
        </button>
      </div>

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      )}
    </div>
  );
};

export default ProductSlider2;
