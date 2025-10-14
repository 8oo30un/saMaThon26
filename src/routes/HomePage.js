import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopupBanner from "../components/PopupBanner";
import Home from "../components/Home";

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

function HomePage() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleBannerClose = () => {
    setIsBannerVisible(false);
  };

  return (
    <HomePageWrapper>
      {isBannerVisible && <PopupBanner onClose={handleBannerClose} />}
      <Navbar isBannerVisible={isBannerVisible} />
      <Home />
      <Footer />
    </HomePageWrapper>
  );
}

export default HomePage;
