import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import headerLogo from "../assets/img/2026/header-logo.svg";
import headerLogoWhite from "../assets/img/2026/header-logo-white.svg";
import tooltipStar from "../assets/img/2026/tooltip-star.svg";
import MobileCtaBanner from "./MobileCtaBanner";

const float = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-6px); }
`;

const Header = styled.header`
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow: visible;
  /* Safari: fixed + 조상 overflow/clip 이슈 완화 */
  transform: translateZ(0);
  background-color: ${(props) =>
    props.$isScrolled ? "rgba(255, 255, 255, 0.92)" : "transparent"};
  -webkit-backdrop-filter: ${(props) =>
    props.$isScrolled ? "blur(12px)" : "none"};
  backdrop-filter: ${(props) => (props.$isScrolled ? "blur(12px)" : "none")};
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: ${(props) =>
    props.$isScrolled ? "0 1px 0 rgba(0, 0, 0, 0.04)" : "none"};
  /* 노치/툴바 등으로 상단이 가려지는 Safari 환경 대응 */
  padding-top: env(safe-area-inset-top, 0px);
`;

const HeaderInner = styled.div`
  /* height 고정(84) + padding(22*2)이면 콘텐츠 영역이 40px.
     신청 버튼(~40px)과 거의 동일해 Safari 폰트/서브픽셀에서 상단이 잘림 */
  min-height: 84px;
  height: auto;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 22px 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  overflow: visible;

  @media (max-width: 768px) {
    min-height: 70px;
    height: auto;
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
  gap: 48px;

  a {
    text-decoration: none;
    color: ${(props) => (props.$light ? "#fff" : "#000")};
    font-family: Pretendard, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.5px;
    line-height: 1;
    white-space: nowrap;
    transition: opacity 0.2s ease, color 0.2s ease;
    text-shadow: ${(props) =>
      props.$light ? "0 1px 2px rgba(0, 0, 0, 0.35)" : "none"};

    &:hover {
      opacity: 0.6;
    }

    &.active {
      color: ${(props) => (props.$light ? "#fff" : "#000")};
      opacity: 1;
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
      color: #000;
      text-shadow: none;

      &:hover {
        opacity: 0.6;
        color: #000;
      }

      &.active {
        color: #000;
        opacity: 1;
      }
    }
  }
`;

const RightArea = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  min-width: 162px;

  @media (max-width: 768px) {
    width: auto;
    min-width: 0;
    display: none;
  }
`;

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
  font-size: 16px;
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
  color: ${(props) => (props.$light ? "#fff" : "#5170ff")};
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
    font-size: 16px;
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
  const isHome = location.pathname === "/";
  const isApply = location.pathname === "/apply";

  useEffect(() => {
    const onScroll = () => {
      if (isApply) {
        // /apply: 흰 배경 위 투명 헤더(파란 로고·검정 메뉴) 유지
        setIsScrolled(false);
      } else if (isHome) {
        // 히어로(동영상): 투명+흰 로고 / 아래 사진 카드 구간부터: 불투명+파란 로고
        const heroEnd = Math.max(window.innerHeight - 84, 0);
        setIsScrolled(window.scrollY >= heroEnd);
      } else if (location.pathname === "/2026") {
        // ‘각자의 모습으로, 같은 길을’이 헤더에 닿으면 흰 배경
        const theme = document.getElementById("hero-theme-2026");
        if (theme) {
          setIsScrolled(theme.getBoundingClientRect().top <= 84);
        } else {
          setIsScrolled(window.scrollY > 140);
        }
      } else {
        setIsScrolled(window.scrollY > 700);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome, isApply, location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // /apply: 투명 + 파란 로고 + 검정 메뉴 (신청하기 버튼 숨김)
  const opaque = isApply ? false : isScrolled || isOpen;
  const lightMenu = isHome && !opaque;
  const logoSrc = isHome && !opaque ? headerLogoWhite : headerLogo;

  return (
    <Header $isScrolled={opaque}>
      {!isOpen && <MobileCtaBanner />}
      <HeaderInner>
        <LogoLink to="/">
          <img src={logoSrc} alt="사랑마라톤" />
        </LogoLink>

        <Toggle
          type="button"
          aria-label="메뉴 열기"
          $light={lightMenu}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </Toggle>

        <MenuList $isOpen={isOpen} $light={lightMenu}>
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={
                location.pathname.startsWith(item.to) ? "active" : ""
              }
            >
              {item.label}
            </Link>
          ))}
          {!isApply && (
            <MobileApplyLink to="/apply">신청하기</MobileApplyLink>
          )}
        </MenuList>

        {!isApply && (
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
        )}
      </HeaderInner>
    </Header>
  );
}

export default Navbar;
