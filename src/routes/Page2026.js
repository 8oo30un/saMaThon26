import React from "react";
import styled from "styled-components";
import ThisYear2026 from "../components/ThisYear2026";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;;
`;

function Page2026() {
  return (
    <PageWrapper>
      <Navbar />
      <ThisYear2026 />
      <Footer />
    </PageWrapper>
  );
}

export default Page2026;
