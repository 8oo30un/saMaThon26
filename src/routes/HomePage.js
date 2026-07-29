import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import Home from "../components/Home";

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

function HomePage() {
  return (
    <HomePageWrapper>
      <Navbar />
      <Home />
      <Footer />
    </HomePageWrapper>
  );
}

export default HomePage;
