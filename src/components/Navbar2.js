import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import headerLogo from "../assets/img/2026/header-logo.svg";
import tooltipStar from "../assets/img/2026/tooltip-star.svg";

const float = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-6px); }
`;

const Header = styled.header`
  height: 84px;
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.$isScrolled ? "rgba(255, 255, 255, 0.92)" : "transparent"};
  backdrop-filter: ${(props) => (props.$isScrolled ? "blur(12px)" : "none")};
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: ${(props) =>
    props.$isScrolled ? "0 1px 0 rgba(0, 0, 0, 0.04)" : "none"};
`;

const HeaderInner = styled.div`
  height: 84px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 22px 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    height: 70px;
    padding: 16px 20px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;

  img {
    width: 162px;
    height: 32px;
    display: block;
    object-fit: contain;
    border: 0;
    outline: none;
  }

  @media (max-width: 768px) {
    img {
      width: 130px;
      height: 26px;
    }
  }
`;

const MenuList = styled.nav`
  display: flex;
  align-items: center;
  gap: 44px;

  a {
    text-decoration: none;
    color: #000;
    font-family: Pretendard, sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.5px;
    line-height: 1;
    white-space: nowrap;
    transition: color 0.2s ease;

    &:hover {
      color: #5170ff;
    }

    &.active {
      color: #5170ff;
    }
  }

  @media (max-width: 900px) {
    gap: 28px;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    height: calc(100vh - 70px);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 28px;
    padding-top: 56px;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(16px);

    a {
      font-size: 18px;
    }
  }
`;

const RightArea = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  width: 162px;

  @media (max-width: 768px) {
    width: auto;
    display: none;
  }
`;

/* 피그마: 신청하기 버튼 기준 토스트 중앙 정렬 */
const ApplyWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ApplyButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #5170ff;
  color: #fff;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 1;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  white-space: nowrap;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #3f5cf0;
    transform: translateY(-1px);
  }
`;

/* 피그마 1001:192 — 버튼 하단 중앙, 버튼과 간격 확보 */
const Tooltip = styled.button`
  position: absolute;
  top: calc(100% + 20px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: #0f172a;
  color: #f9fafb;
  font-family: Pretendard, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  white-space: nowrap;
  cursor: pointer;
  animation: ${float} 2.2s ease-in-out infinite;
  z-index: 2;

  img {
    width: 10px;
    height: 10px;
    display: block;
    flex-shrink: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    width: 10px;
    height: 10px;
    background: #0f172a;
    transform: translateX(-50%) rotate(45deg);
  }
`;

const Toggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: #5170ff;
  font-size: 1.5rem;
  padding: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileApplyLink = styled(Link)`
  display: none;

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    background: #5170ff;
    color: #fff !important;
    font-family: Pretendard, sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.5px;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 8px;
  }
`;

const MENU_ITEMS = [
  { to: "/2026", label: "2026 사마톤" },
  { to: "/gallary", label: "갤러리" },
  { to: "/notice", label: "공지" },
  { to: "/community", label: "커뮤니티" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      // 피그마 주석: 인사말 섹션부터 흰색 배경
      setIsScrolled(window.scrollY > 700);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <Header $isScrolled={isScrolled || isOpen}>
      <HeaderInner>
        <LogoLink to="/">
          <img src={headerLogo} alt="사랑마라톤" />
        </LogoLink>

        <Toggle
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </Toggle>

        <MenuList $isOpen={isOpen}>
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={location.pathname.startsWith(item.to) ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <MobileApplyLink to="/apply">신청하기</MobileApplyLink>
        </MenuList>

        <RightArea>
          <ApplyWrap>
            <ApplyButton to="/apply">신청하기</ApplyButton>
            {showTooltip && (
              <Tooltip
                type="button"
                aria-label="참가자 신청하기 안내 닫기"
                onClick={() => setShowTooltip(false)}
              >
                <img src={tooltipStar} alt="" />
                참가자 신청하기
                <img src={tooltipStar} alt="" />
              </Tooltip>
            )}
          </ApplyWrap>
        </RightArea>
      </HeaderInner>
    </Header>
  );
}

export default Navbar;
