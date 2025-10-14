// import { useState, useEffect } from "react";

import React from "react";
import styled from "styled-components";
import Gallary from "../components/Gallary";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
function GallaryPage() {
  const GallaryPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
  `;

  return (
    <GallaryPage>
      <Navbar2 />
      <Gallary />
      <Footer />
    </GallaryPage>
  );
}

export default GallaryPage;
