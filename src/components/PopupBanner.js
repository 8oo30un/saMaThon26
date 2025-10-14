import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../index"; // Firebase 설정이 있는 파일
import cancel from "../assets/img/cancel.png";

const BannerWrapper = styled.div`
  width: 100%;
  background-image: ${(props) =>
    props.bgImage ? `url(${props.bgImage})` : "none"};
  backdrop-filter: ${(props) => (props.bgImage ? "none" : "blur(1000px)")};

  background-size: cover;
  background-position: center;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none; /* Hide the banner on mobile devices */
  }
`;

const BannerText = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const BannerButton = styled.a`
  background-color: transparent;
  border: 2px solid white;
  padding: 7px 15px;
  color: white;
  text-decoration: none;
  border-radius: 50px; /* Capsule shape */
  margin-left: 10px;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 700;
  display: inline-flex;
  align-items: center; /* Vertically centers the content */
  &:hover {
    background-color: white;
    color: black;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 36px;
  line-height: 20px;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center; /* Vertically centers the close icon */
  img {
    width: 15px;
  }
`;

const PopupBanner = ({ onClose }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [bannerData, setBannerData] = useState(null);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const fetchBannerData = async () => {
      const docRef = doc(db, "banner", "current");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBannerData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchBannerData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsBannerVisible(false);
      } else {
        setIsBannerVisible(true);
      }
    };

    // Check the window size when the component mounts
    handleResize();

    // Add event listener to handle window resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
    onClose(); // Notify parent component to hide the banner
  };

  if (!bannerData || !showBanner || !isBannerVisible) {
    return null;
  }

  const normalizeURL = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <BannerWrapper bgImage={bannerData.bgImage} show={showBanner}>
      <BannerText>{bannerData.text}</BannerText>
      <div style={{ display: "flex", alignItems: "center" }}>
        <BannerButton href={normalizeURL(bannerData.link1)} target="_blank">
          {bannerData.buttonText1}
        </BannerButton>
        {bannerData.buttonText2 && (
          <BannerButton href={normalizeURL(bannerData.link2)} target="_blank">
            {bannerData.buttonText2}
          </BannerButton>
        )}
        <CloseButton onClick={handleCloseBanner}>
          <img src={cancel} alt="close" />
        </CloseButton>
      </div>
    </BannerWrapper>
  );
};

export default PopupBanner;
