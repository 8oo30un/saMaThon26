import React, { useEffect } from "react";
import styled from "styled-components";
import bg from "../assets/img/bg.png";
import centerImage from "../assets/img/centerImage.png";
import thisyearimg from "../assets/img/thisyearimg.png";
import tt1 from "../assets/img/timetable1.png";
import tt2 from "../assets/img/timetable2.png";
import flowerImage from "../assets/img/bluef.png";
import { Link } from "react-router-dom";

const ThisYearWrapper = styled.div`
  padding-top: 80px;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: repeat-y;
  background-position: top center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  .container1 {
    display: flex;
    justify-content: center;

    margin-top: 60px;
    max-width: 1048px;
    width: 100%;
    gap: 30px;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      width: 100%;
    }
  }

  .left {
    font-size: 58px;
    @media screen and (max-width: 768px) {
      font-size: 38px;
    }
  }

  .image-container {
    position: relative;
    width: 100%;
  }

  .centerImage {
    max-width: 100%;
    width: 100%;
    display: block;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .right {
    position: absolute;
    bottom: 25.5%;
    right: 10%;
    text-align: center;
    color: #FD40B3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .date {
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    color: #FD40B3;
    text-align: center;
    font-size: 42px;
    margin: 0;
    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }

  .subtitle {
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    color: #FD40B3;
    text-align: center;
    font-size: 58px;
    margin: 0;
    line-height: 110%;

    @media screen and (max-width: 768px) {
      font-size: 34px;
    }
  }

  .registerButton {
    color: #00B965;
    background-color: rgba(255, 255, 255, 255);
    padding: 0.8vw 3vw;
    font-size: 1.3rem;
    font-family: Pretendard;
    font-weight: 600;
    cursor: pointer;
    border: 2px #00B965 solid;
    border-radius: 32px;
    margin-top: 0.2vw;
    @media screen and (max-width: 768px) and (min-width: 451px) {
      padding: 0.8vw 3vw;
      font-size: 1.2rem;
    }
    @media screen and (max-width: 450px) {
      padding: 1vw 3vw;
      font-size: 0.5rem;
    }
  }

  hr {
    border: 0.5px solid #FD40B3;
    height: 0px;
    width: 100%;
    margin-top: 60px;
    @media screen and (max-width: 768px) {
      margin-top: 50px;
    }
  }

  .container2 {
    width: 100%;
    margin: 80px 0px 0px 0px;
    align-items: flex-start;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    padding-left: 0;
    @media screen and (max-width: 768px) {
      align-items: center;
      width: 100%;
      /* padding: 0 20px; */
    }
  }

  .typing {
    display: flex;
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    color: #FD40B3;
    font-size: 82px;
    letter-spacing: -1.92px;
    @media screen and (max-width: 768px) {
      font-size: 42px;
      letter-spacing: -1px;
    }
  }

  .typing p {
    margin-bottom: 0px;
    text-align: center;
    overflow: hidden;
  }

  .typing p span.typed-text {
    font-weight: normal;
    color: #00B965;
  }

  .typing p span.cursor {
    display: inline-block;
    background-color: #ccc;
    margin-left: 0.1rem;
    width: 3px;
    animation: blink 1s infinite;
  }

  .typing p span.cursor.typing {
    animation: none;
  }

  .desc {
    color: #000000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    margin-top: 0px;
    margin-bottom: 0px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
    }
  }

  .thisyearimg1 {
    width: 100%;
    margin-top: 20px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .container3 {
    max-width: 1048px;
    width: 80%;
    @media screen and (max-width: 768px) {
      width: 100%;
      /* padding: 0 20px; */
    }
  }

  .title {
    color: #8C8C8C;
    font-family: Pretendard;
    font-size: 26px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    margin-top: 80px;
    margin-bottom: 30px;
    position: relative;
    padding-left: 40px;

    @media screen and (max-width: 768px) {
      font-size: 18px;
      margin-top: 50px;
      margin-bottom: 10px;
      padding-left: 25px;
    }
  }

  .title::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px; /* 이미지 크기 조정 */
    height: 30px; /* 이미지 크기 조정 */
    background-image: url(${flowerImage});
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (max-width: 768px) {
      width: 20px; /* 이미지 크기 조정 */
      height: 20px; /* 이미지 크기 조정 */
    }
  }

  .desc2 {
    color: #000000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 30px;
    }
  }

  .timetables {
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 30px;
      width: 100%;
    }
  }

  .timetables img {
    max-width: 48%;
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }

  .programs {
    display: grid;
    grid-template-columns: 1fr 11fr;
    gap: 12px;
    max-width: 1048px;
    width: 100%;
    margin: 20px 0;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 5fr;
      margin: 0;
    }
  }
  .program {
    display: flex;

    gap: 12px;
    max-width: 1048px;
    width: 100%;
    margin: 20px 0;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }

  .program-title {
    color: #8C8C8C;
    font-family: Pretendard;
    font-size: 19px;
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  .program-description {
    color: #000000;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  @keyframes blink {
    0% {
      background-color: #ccc;
    }
    49% {
      background-color: #ccc;
    }
    50% {
      background-color: transparent;
    }
    99% {
      background-color: transparent;
    }
    100% {
      background-color: #ccc;
    }
  }

  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    margin-bottom: 30px;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ThisYear = () => {
  useEffect(() => {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Heart", "Step", "Love"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    let typingTimeout;
    let erasingTimeout;
    let newTextTimeout;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        typingTimeout = setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        newTextTimeout = setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        erasingTimeout = setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 250);
      }
    }

    // 초기화 코드 추가
    typedTextSpan.textContent = "";

    type();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
      clearTimeout(newTextTimeout);
    };
  }, []);

  return (
    <ThisYearWrapper>
      <hr></hr>
      <div className="container1">
        <div className="image-container">
          <img className="centerImage" src={centerImage} alt="사랑의 마라톤" />
          <div className="right">
            <Link to={`/apply`}>
              <button className="registerButton">신청하기</button>
            </Link>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="typing">
        <p>
          One   <span className="typed-text"></span>
          <span className="cursor">&nbsp;</span>
        </p>
      </div>

      <div className="container2">
        <img className="thisyearimg1" src={thisyearimg}></img>
      </div>
      <div className="container3">
        <p className="title">다시 돌아온 사랑의 마라톤.</p>
        <p className="desc">
          포항 지역 장애인 참가자와 한동대학교 학생(짝꿍)이 하나가 되어<br />
          마라톤을 완주하는 사랑의 마라톤 행사가 많은 기관과 단체, 개인의 후원과 기도 아래 올해 제17회를 맞이했습니다.<br />
          이번 사랑의 마라톤은 One heart, one step, one love라는 주제로,<br />
          함께하는 마음과 동행하는 걸음 속에서 피어나는 사랑을 표현합니다.<br />
          장애인과 비장애인의 구분 없이 모두의 마음이 하나 되어 사랑을 향해 나아가며, 서로의 발걸음을 맞추는 따뜻한 시간이 되기를 소망합니다.<br />
        </p>
        <p className="title">올해 사랑의 마라톤은요!</p>
        <div className="program">
          {/* <div className="program-title">일시</div> */}
          <div className="program-description">2025년 9월 27일(토) 9:00~17:00</div>
          {/* <div className="program-title">장소</div> */}
          <div className="program-description">
            한동대학교 일대 (경북 포항시 북구 흥해읍 한동로 558)
          </div>
        </div>
        <p className="title">다양한 프로그램을 함께 즐겨요.</p>
        <div className="programs">
          <div className="program-title">공연</div>
          <div className="program-description">
            사랑의 마라토너만을 위해 준비된 멋진 무대를 맘껏 즐겨보세요.
          </div>
          <div className="program-title">레크레이션</div>
          <div className="program-description">
            흥이 넘치는 사회자와 함께하는 신나는 게임과 활동으로 에너지를
            채워보세요.
          </div>
          <div className="program-title">마라톤</div>
          <div className="program-description">
            걷거나 뛰는 방식에 상관없이 하나된 마음으로 함께 완주해요.
          </div>
          <div className="program-title">부스</div>
          <div className="program-description">
            마라톤 중 운영되는 재미있는 체험 부스의 기회를 놓치지 마세요!
          </div>
          <div className="program-title">네트워킹</div>
          <div className="program-description">
            참가자 가족들과 함께, 맛있는 식사와 교제를 나눠보아요.
          </div>
        </div>
        <p className="title">타임테이블</p>
        <div className="timetables">
          <img src={tt1} alt="Timetable 1"></img>
          <img src={tt2} alt="Timetable 2"></img>
        </div>
        <p className="title">지난 사랑의 마라톤 살펴보기</p>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/QNCErAy7jvA?si=GMkaw0214yk3rCHg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dHgcbFOYtB0?si=bvqSVyv2V_BvSnA8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </ThisYearWrapper>
  );
};

export default ThisYear;
