import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import bannerStar from "../assets/img/2026/banner-star.svg";
import bannerClose from "../assets/img/2026/banner-close.svg";

const STORAGE_KEY = "samathon-strip-banner-dismissed-v3";

const getInitialVisible = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return true;
  }
};

const Banner = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: 50px;
    padding: 11px 16px;
    box-sizing: border-box;
    background: #000;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  flex: 1;
  flex-wrap: wrap;
`;

const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 8px;
  box-sizing: border-box;
  background: #fff;
  color: #5170ff;
  border-radius: 6px;
  font-family: Pretendard, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s ease;

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;

const ApplyLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 28px;
  padding: 0 8px;
  box-sizing: border-box;
  background: #5170ff;
  color: #fff;
  border-radius: 6px;
  font-family: Pretendard, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: opacity 0.2s ease;

  img {
    width: 9px;
    height: 9px;
    display: block;
    flex-shrink: 0;
  }

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;
  transition: opacity 0.2s ease;

  img {
    width: 12.5px;
    height: 12.5px;
    display: block;
  }

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;

function MobileCtaBanner() {
  const location = useLocation();
  const [visible, setVisible] = useState(getInitialVisible);

  const hideOnPaths = ["/apply", "/admin", "/dashboard", "/write", "/banner"];
  const shouldHide = hideOnPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  if (!visible || shouldHide) return null;

  const is2026 = location.pathname.startsWith("/2026");

  return (
    <Banner role="region" aria-label="바로가기">
      <Actions>
        {is2026 ? (
          <PrimaryLink to="/">공홈 페이지 보러가기</PrimaryLink>
        ) : (
          <PrimaryLink to="/2026">2026 사마톤 페이지 보러가기</PrimaryLink>
        )}
        <ApplyLink to="/apply">
          <img src={bannerStar} alt="" />
          참가자 신청하기
          <img src={bannerStar} alt="" />
        </ApplyLink>
      </Actions>
      <CloseButton
        type="button"
        aria-label="띠배너 닫기"
        onClick={() => {
          try {
            sessionStorage.setItem(STORAGE_KEY, "1");
          } catch {
            /* ignore */
          }
          setVisible(false);
        }}
      >
        <img src={bannerClose} alt="" />
      </CloseButton>
    </Banner>
  );
}

export default MobileCtaBanner;
