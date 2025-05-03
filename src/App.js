import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import ProductSlider from './ProductSilder';
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

function App() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false); // 👈 New state

  const handleMenuClick = () => setIsSliderOpen(true);
  const handleSidebarClose = () => setIsSliderOpen(false);

  const handleUserClick = () => setShowPopup(true);
  const handleSearchClick = () => setShowChatbot(!showChatbot); // 👈 Toggle chatbot

  const closePopup = () => setShowPopup(false);

  return (
    <div className="App">
      <Header 
        onMenuClick={handleMenuClick} 
        onUserClick={handleUserClick} 
        onSearchClick={handleSearchClick} // 👈 New prop
      />
      <SidebarMenu isOpen={isSliderOpen} onCloseClick={handleSidebarClose} />
      {showPopup && <LoginSignupPopup onClose={closePopup} />}
      {showChatbot && <AdidasChatbot />} {/* 👈 Show chatbot */}
      <Imageslider />
      <ProductSlider />
      <ProductSlider2 />
      <Main1 />
      <Labels1 />
      <Bottom />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default App;
