import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductSlider from './ProductSilder'; // Make sure filename spelling is correct
import ProductSlider2 from './ProductSlider2';
import Main1 from './Main1';
import Labels1 from './Labels1';
import Bottom from './Bottom';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Imageslider from './Imageslider';
import SidebarMenu from './SidebarMenu';
import LoginSignupPopup from './LoginSignupPopup';
import AdidasChatbot from './AdidasChatbot'; // 👈 New component
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [user, setUser] = useState(null); // track logged-in user

  // Listen for Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setShowPopup(false); // close popup on successful login/signup
      }
    });
    return () => unsubscribe();
  }, []);

  const handleMenuClick = () => setIsSliderOpen(true);
  const handleSidebarClose = () => setIsSliderOpen(false);

  // On user icon click, show login popup if not logged in
  const handleUserClick = () => {
    if (!user) {
      setShowPopup(true);
    } else {
      alert("You are already logged in!");
    }
  };

  const handleSearchClick = () => setShowChatbot(!showChatbot);

  const closePopup = () => setShowPopup(false);

  return (
    <div className="App">
      <Header
        onMenuClick={handleMenuClick}
        onUserClick={handleUserClick}
        onSearchClick={handleSearchClick}
      />
      <SidebarMenu isOpen={isSliderOpen} onCloseClick={handleSidebarClose} />
      {showPopup && <LoginSignupPopup onClose={closePopup} />}
      {showChatbot && <AdidasChatbot />}
      <Imageslider />
      <ProductSlider />
      {/* Pass user and login popup trigger to ProductSlider2 */}
      <ProductSlider2 user={user} onLoginRequired={() => setShowPopup(true)} />
      <Main1 />
      <Labels1 />
      <Bottom />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default App;
