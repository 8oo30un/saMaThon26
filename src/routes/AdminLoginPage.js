// import { useState, useEffect } from "react";

import React from "react";
import styled from "styled-components";
import AdminLogin from "../components/AdminLogin";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
function AdminLoginPage() {
  const AdminLoginPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fdfcf8;
  `;

  return (
    <AdminLoginPage>
      <Navbar />
      <AdminLogin />
      <Footer />
    </AdminLoginPage>
  );
}

export default AdminLoginPage;
