// import { useState, useEffect } from "react";

import React from "react";
import styled from "styled-components";
import Community from "../components/Community";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
function CommunityPage() {
  const CommunityPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fdfcf8;
  `;

  return (
    <CommunityPage>
      <Navbar />
      <Community />
      <Footer />
    </CommunityPage>
  );
}

export default CommunityPage;
