import Dashboard from "../components/Dashboard";
import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import BannerManagement from "../components/BannerManagement";
function BannerPage() {
  const BannerPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fdfcf8;
  `;

  return (
    <BannerPage>
      <Navbar />
      <BannerManagement />
      <Footer />
    </BannerPage>
  );
}

export default BannerPage;
