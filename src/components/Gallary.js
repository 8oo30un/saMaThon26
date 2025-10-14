import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import bg from "../assets/img/gallarybg.png";
import bgmo from "../assets/img/gallarybgmo.png";
import cancel from "../assets/img/cancel.png";

import toppimage from "../assets/img/toppimage.png";
import { logos, images, events } from "./data";
import { Link } from "react-router-dom";
import { useSpring, useTrail, animated } from "react-spring";

const GalleryContainer = styled.div`
  background-color: #fdfcf8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 0; /* Added to remove padding */
  margin: 0; /* Added to remove margin */

  .cover {
    background-image: url(${bg});
    background-size: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #f1f1f1;
    margin: 0;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform 0.5s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 768px) {
      background-image: url(${bgmo});
    }
  }

  .cover .centerp {
    letter-spacing: -0.03em;
    font-size: 5vw;
    font-weight: 900;
    transform-origin: top;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 9vw;
    }
  }

  .toppbg {
    margin: 0;

    margin-top: 200vh;
    background-color: rgb(0, 0, 0);
    width: 100%;
    display: flex;
    align-items: flex-start;

    flex-direction: row;
    color: #fff;
    padding: 5% 15%;
    box-sizing: border-box;
    text-align: start;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 50px;
    }
  }

  .toppimage {
    width: 35%;
    margin-right: 50px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
      padding-top: 10px;
      font-size: 24px;
    }
  }

  .topp {
    font-size: 16px;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  .container {
    max-width: 1048px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 200vh;
    @media screen and (max-width: 768px) {
      /* padding: 40px; */
    }
  }

  .event {
    margin-bottom: 40px;
    padding-top: 100px;
    font-family: Pretendard;
    @media screen and (max-width: 768px) {
      margin-bottom: 40px;
      padding-top: 0px;
    }
    .bighead {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-right: 20px;
      }
    }
    .header {
      display: flex;
      align-items: center;
      gap: 30px;
      @media screen and (max-width: 768px) {
        gap: 10px;
      }
      img {
        width: 150px;
        height: 150px;
        border-radius: 20px;
        @media screen and (max-width: 768px) {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          margin-left: 20px;
        }
      }

      .text {
        h6 {
          color: #636363;
          font-family: Pretendard;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          margin: 0px;
          margin-left: 4px;

          @media screen and (max-width: 768px) {
            font-size: 10px;
            line-height: 10px;
          }
        }

        h2 {
          color: #464646;
          font-family: Pretendard;
          font-size: 80px;
          line-height: 80px;
          font-style: normal;
          font-weight: 700;
          margin: 0px;
          letter-spacing: -5px;
          @media screen and (max-width: 768px) {
            letter-spacing: -2px;
            font-size: 30px;
            line-height: 30px;
          }
        }

        p {
          color: #464646;
          font-family: Pretendard;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 30px;
          margin: 0px;
          letter-spacing: -1px;
          @media screen and (max-width: 768px) {
            font-size: 14px;
            line-height: 16px;
          }
        }
      }
    }

    .images {
      margin-top: 20px;

      .masonry-grid {
        display: flex;
        width: auto;
        gap: 30px;
      }

      .masonry-grid_column {
        background-clip: padding-box;
      }

      .masonry-grid_column > div {
        margin-bottom: 30px;
        margin-right: 0px;
      }

      img {
        width: 100%;
        height: auto;
        display: block;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
    }
  }
  .floating-menu {
    position: fixed;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    background-color: transparent;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 700;
    align-items: center;
    .close-button {
      display: none;
      width: 20px;
      height: 20px;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      background-image: url(${cancel});
      background-size: 60%;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      margin: 5px;
    }
    span {
      cursor: pointer;
      font-size: 16px;
      color: grey;
      padding-top: 1px;
      &.active {
        color: black;
        font-weight: bold;
      }
    }

    @media screen and (max-width: 768px) {
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 5px;
      padding: 5px;
      gap: 5px;
      .close-button {
        display: block;
      }
      span {
        font-size: 14px;
      }
    }
  }
  .registerButton {
    color: #FD40B3;
    background-color: rgba(0, 0, 0, 0);
    padding: 12px 50px;
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 600;
    cursor: pointer;
    border: 2px #FD40B3 solid;
    border-radius: 32px;
    margin-top: 10px;
    @media screen and (max-width: 768px) {
      padding: 7px 10px;
      font-size: 12px;
    }
  }
`;

const Gallary = () => {
  const refs = useRef(
    events.reduce((acc, value) => {
      acc[value.year] = React.createRef();
      return acc;
    }, {})
  );
  const [activeYear, setActiveYear] = useState(events[0].year);
  const [coverScrolled, setCoverScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true); // 메뉴 가시성 상태
  const scrollToYear = (year) => {
    refs.current[year].current.scrollIntoView({ behavior: "smooth" });
  };
  const getLogoSrc = (year) => {
    if (logos[`${year}.png`]) {
      return logos[`${year}.png`];
    }
    if (logos[`${year}.jpg`]) {
      return logos[`${year}.jpg`];
    }
    return null;
  };

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentYear = activeYear;
      events.forEach((event) => {
        const ref = refs.current[event.year].current;
        if (ref && ref.offsetTop <= scrollPosition) {
          currentYear = event.year;
        }
      });

      setActiveYear(currentYear);
      setCoverScrolled(window.scrollY > window.innerHeight);

      const imageElements = document.querySelectorAll(".images img");
      imageElements.forEach((img) => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
          img.style.opacity = 1;
          img.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeYear]);

  const photos = (year) =>
    Object.keys(images)
      .filter((img) => img.startsWith(`${year}`))
      .map((image) => ({
        src: images[image],
        width: 4,
        height: 3,
      }));

  const trail = useTrail(photos(activeYear).length, {
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  return (
    <GalleryContainer>
      <div
        className="cover"
        style={{
          transform: coverScrolled ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <p className="centerp">
          Love Marathon:
          <br />A Historical Journey
          <br />
          from 2008
        </p>
        <div className="site-intro__footer-item">
          <svg
            width="47"
            height="23"
            viewBox="0 0 47 23"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path d="M1 1L23.5 22L46 1" stroke="black"></path>
          </svg>
        </div>
      </div>
      {menuVisible && (
        <div className="floating-menu">
          <div className="close-button" onClick={handleMenuToggle} />
          <span>2008</span>
          <span>:</span>
          {events.map((event) => (
            <span
              key={event.year}
              className={activeYear === event.year ? "active" : ""}
              onClick={() => scrollToYear(event.year)}
            >
              {event.year}
            </span>
          ))}
        </div>
      )}

      {/* <div className="toppbg">
        <img src={toppimage} className="toppimage"></img>
        <div>
          <p className="title">사랑의 마라톤의 시작</p>
          <p className="topp">
            사랑의 마라톤은 장애인과 비장애인이 2인1조를 이뤄 협력해 코스를
            완주하는 마라톤으로, 지난 2008년부터 한동대 학생들의 자발적 기획으로
            시작하여 매년 개최해 올해로 16회째를 맞고 있다.
          </p>
        </div>
      </div> */}
      <div className="container">
        {events.map((event) => (
          <div
            key={event.year}
            className="event"
            ref={refs.current[event.year]}
            data-year={event.year}
          >
            <div className="bighead">
              <div className="header">
                {getLogoSrc(event.year) && (
                  <img
                    src={getLogoSrc(event.year)}
                    alt={`${event.year} 로고`}
                  />
                )}
                <div className="text">
                  <h6>
                    제{event.index}회 <b>{event.title} </b>
                  </h6>
                  <h2>{event.year}</h2>
                </div>
              </div>
              {event.year === 2025 && (
                <Link to={`/2025`}>
                  <button className="registerButton">
                    2025 페이지 바로가기
                  </button>
                </Link>
              )}
            </div>

            <div className="images">
              <Masonry
                breakpointCols={{ default: 2, 1100: 2, 700: 1 }}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
              >
                {Object.keys(images)
                  .filter((img) => img.startsWith(`${event.year}`))
                  .map((image, idx) => {
                    const src = images[image];
                    return src ? (
                      <div key={idx}>
                        <img
                          src={src}
                          alt={`${event.year} ${event.title} ${idx + 1}`}
                          style={{
                            animationDelay: `${idx * 0.1}s`,
                            transform: "translateY(20px)",
                          }}
                          className="image"
                        />
                      </div>
                    ) : null;
                  })}
              </Masonry>
            </div>
          </div>
        ))}
      </div>
    </GalleryContainer>
  );
};

export default Gallary;
