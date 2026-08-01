import Apply from "../components/Apply";
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #ffffff;
`;

function ApplyPage() {
  return (
    <PageWrapper>
      <Navbar />
      <Apply />
      <Footer />
    </PageWrapper>
  );
}

export default ApplyPage;
