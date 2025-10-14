// import { useState, useEffect } from "react";

import React from "react";
import styled from "styled-components";
import ArticleForm from "../components/ArticleForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function NoticePage() {
  const NoticePage = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
  `;

  return (
    <NoticePage>
      <Navbar />
      <ArticleForm />
      <Footer />
    </NoticePage>
  );
}

export default NoticePage;
