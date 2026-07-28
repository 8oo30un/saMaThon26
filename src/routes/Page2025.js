// import { useState, useEffect } from "react";

import React from "react";
import styled from "styled-components";
import ThisYear from "../components/ThisYear";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Page2025() {
  const Page2025 = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
  `;

  return (
    <Page2025>
      <Navbar />
      <ThisYear />
      <Footer />
    </Page2025>
  );
}

export default Page2025;
