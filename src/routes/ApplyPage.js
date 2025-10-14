import Apply from "../components/Apply";
import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function ApplyPage() {
  const ApplyPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
  `;

  return (
    <ApplyPage>
      <Navbar />
      <Apply />
      <Footer />
    </ApplyPage>
  );
}

export default ApplyPage;
