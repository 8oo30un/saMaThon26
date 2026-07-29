import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../index";
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
    display: none;
  }
`;

const BannerText = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const bannerButtonStyles = `
  background-color: transparent;
  border: 2px solid white;
  padding: 7px 15px;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  margin-left: 10px;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const BannerButton = styled.a`
  ${bannerButtonStyles}
`;

const BannerLink = styled(Link)`
  ${bannerButtonStyles}
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
  align-items: center;
  img {
    width: 15px;
  }
`;

const DEFAULT_BANNER = {
  text: "제18회 사랑의 마라톤 참가자 모집",
  buttonText1: "2026사마톤 페이지 바로가기",
  link1: "/2026",
};

const isInternalPath = (url = "") => url.startsWith("/");

const normalizeExternalURL = (url) => {
  if (!url) return url;
  if (isInternalPath(url)) return url;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
};

/** 기존 배너 문구/링크를 2026 기준으로 맞춤 */
const migrateBannerData = (data = {}) => {
  const next = { ...data };

  if (!next.text || /제\s*17회|2025/.test(next.text)) {
    next.text = DEFAULT_BANNER.text;
  } else {
    next.text = next.text.replace(/제\s*17회/g, "제18회");
  }

  if (!next.buttonText1 || /2025/.test(next.buttonText1)) {
    next.buttonText1 = DEFAULT_BANNER.buttonText1;
  } else {
    next.buttonText1 = next.buttonText1.replace(/2025/g, "2026");
  }

  if (
    !next.link1 ||
    /2025/.test(next.link1) ||
    next.link1.includes("2025")
  ) {
    next.link1 = DEFAULT_BANNER.link1;
  }

  return next;
};

const PopupBanner = ({ onClose }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [bannerData, setBannerData] = useState(null);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const fetchBannerData = async () => {
      const docRef = doc(db, "banner", "current");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const migrated = migrateBannerData(docSnap.data());
        setBannerData(migrated);

        const original = docSnap.data();
        if (
          original.text !== migrated.text ||
          original.buttonText1 !== migrated.buttonText1 ||
          original.link1 !== migrated.link1
        ) {
          try {
            await setDoc(docRef, migrated, { merge: true });
          } catch (e) {
            // 읽기만 가능한 환경에서도 UI는 2026 기준으로 표시
            console.warn("Banner migration save skipped:", e);
          }
        }
      } else {
        setBannerData(DEFAULT_BANNER);
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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
    onClose();
  };

  if (!bannerData || !showBanner || !isBannerVisible) {
    return null;
  }

  const renderButton = (text, link) => {
    if (!text) return null;
    if (isInternalPath(link)) {
      return <BannerLink to={link}>{text}</BannerLink>;
    }
    return (
      <BannerButton href={normalizeExternalURL(link)} target="_blank" rel="noreferrer">
        {text}
      </BannerButton>
    );
  };

  return (
    <BannerWrapper bgImage={bannerData.bgImage} show={showBanner}>
      <BannerText>{bannerData.text}</BannerText>
      <div style={{ display: "flex", alignItems: "center" }}>
        {renderButton(bannerData.buttonText1, bannerData.link1)}
        {renderButton(bannerData.buttonText2, bannerData.link2)}
        <CloseButton onClick={handleCloseBanner}>
          <img src={cancel} alt="close" />
        </CloseButton>
      </div>
    </BannerWrapper>
  );
};

export default PopupBanner;
