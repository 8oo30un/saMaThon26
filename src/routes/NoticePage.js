// import { useState, useEffect } from "react";

import React from "react";
import styled from "styled-components";
import Notice from "../components/Notice";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
function NoticePage() {
  const NoticePage = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fdfcf8;
  `;

  return (
    <NoticePage>
      <Navbar />
      <Notice />
      <Footer />
    </NoticePage>
  );
}

export default NoticePage;
