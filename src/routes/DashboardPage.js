import Dashboard from "../components/Dashboard";
import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import BannerManagement from "../components/BannerManagement";
function DashboardPage() {
  const DashboardPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fdfcf8;
  `;

  return (
    <DashboardPage>
      <Navbar />
      <Dashboard />
      <Footer />
    </DashboardPage>
  );
}

export default DashboardPage;
