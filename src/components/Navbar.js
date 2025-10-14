import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import mainlogo from "../assets/img/mainlogo.png";

const Header = styled.div`
  height: 80px;
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: ${(props) =>
    props.isBannerVisible ? (props.isMobile ? "0" : "50px") : "0"};
  left: 0;
  right: 0;
  background-color: transparent;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, top 0.3s;

  .headerbox {
    height: 80px;
    max-width: 1048px;
    margin: 0 auto !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  .logo img {
    margin: 0 1rem;
    width: 190px;
  }

  .header__menulist {
    list-style: none;
    display: flex;
    align-items: center;
  }

  .header__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
  }

  .header__right div {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
  }

  li {
    color: #fff;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    padding: 0 1.5rem;
    :hover {
      color: #fff;
    }
  }

  .apply {
    color: #fff;
    border: 1.5px solid #fff;
    border-radius: 25px;
    padding: 0.4rem 1rem 0.25rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin-left: 1rem;
    margin-bottom: 0.1rem;
  }

  .toggle {
    display: none;
    font-size: 1.7rem;
    padding: 1rem 1rem;
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  hr {
    display: none;
  }

  .loginText {
    font-size: 1.2rem;
    padding: 0 1rem;
  }

  @media screen and (max-width: 768px) {
    height: 70px;
    top: 0; /* Move navbar to the top when on mobile */

    .headerbox {
      height: 70px;
    }
    .logo img {
      display: flex;
      width: 143px;
      height: 31px;
    }

    .header__right {
      display: ${(props) => (props.userToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: black;
    }

    .header__menulist {
      display: ${(props) => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10000px);
      position: absolute;
      top: 70px;
      height: 100vh;
      padding: 0;
      padding-top: 50px;
      margin: 0;
    }

    .header__menulist li,
    .header__right li {
      margin: 1rem 0;
      padding: 0;
    }

    .toggle {
      display: block;
      color: #fff;
    }

    .user {
      display: block;
    }

    hr {
      display: block;
    }

    .apply {
      padding: 7px 30px !important;
      margin-left: 0rem !important;
    }
  }
`;

function Navbar({ isBannerVisible }) {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const updateWindowWidth = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <Header
      isScrolled={scrollPosition > 100}
      isToggled={isToggled}
      userToggled={userToggled}
      isBannerVisible={isBannerVisible}
      isMobile={isMobile}
    >
      <div className="headerbox">
        <div className="logo">
          <Link to={`/`}>
            <img src={mainlogo} />
          </Link>
        </div>
        <div
          className="toggle"
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
        </div>

        <ul className="header__menulist">
          <Link to={`/2025`}>
            <li className="en">2025사마톤</li>
          </Link>
          <Link to={`/gallary`}>
            <li className="en">갤러리</li>
          </Link>
          <Link to={`/notice`}>
            <li className="en">공지</li>
          </Link>
          <Link to={`/community`}>
            <li className="en">커뮤니티</li>
          </Link>
          {/*
          <Link to={`/apply`}>
            <li className="en apply">등록하기</li>
          </Link>
          */}
        </ul>
      </div>
    </Header>
  );
}

export default Navbar;
