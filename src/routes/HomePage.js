import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import Home from "../components/Home";

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  overscroll-behavior-y: none;
`;

function HomePage() {
  useEffect(() => {
    const preventUpOverscroll = (event) => {
      if (window.scrollY > 0) return;
      if (event.deltaY < 0) {
        event.preventDefault();
      }
    };

    let touchStartY = 0;
    const onTouchStart = (event) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (event) => {
      if (window.scrollY > 0) return;
      const currentY = event.touches[0]?.clientY ?? 0;
      // 손가락을 아래로 내리면 페이지는 위로 스크롤(오버스크롤)됨
      if (currentY > touchStartY) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventUpOverscroll, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventUpOverscroll);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <HomePageWrapper>
      <Navbar />
      <Home />
      <Footer />
    </HomePageWrapper>
  );
}

export default HomePage;
