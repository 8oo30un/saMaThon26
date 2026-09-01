import React, { useState, useEffect } from "react";
import homeLogo from "../assets/img/2026/home-logo.png";
import styled from "styled-components";

import bgVideo from "../assets/video/bgvideo.mp4";
import home1 from "../assets/img/home1.png";
import home2 from "../assets/img/home2.png";
import home3 from "../assets/img/home3.png";
const HomeWrapper = styled.div`
  height: 100vh;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 10%;
  padding-right: 10%;
  position: relative;
  overflow: hidden;
  align-items: center;

  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    transition: opacity 0.5s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2); /* 20% 투명도 */
    z-index: 2;
  }

  .content {
    position: relative;
    z-index: 3;
    padding-bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 28px;
  }

  .theme {
    margin: 0;
    color: #fff;
    text-align: center;
    font-family: Pretendard, sans-serif;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.8px;
    line-height: 1;
  }

  .homelogo {
    width: min(666px, 90vw);
    height: auto;
    display: block;
    object-fit: contain;
  }

  .desc {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    letter-spacing: -1.2px;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    margin: 0;
  }

  .apply {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 38px;
    gap: 10px;
    width: 170px;
    margin-top: 60px;
    background: #3300ff;
    border-radius: 25px;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    text-decoration: none;
    text-align: center;
    color: #dadcfa;
  }

  .carousel-indicators {
    bottom: 10%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.5;
  }

  .indicator.active {
    opacity: 1;
    width: 17px;
    border-radius: 15px;
  }

  @media screen and (max-width: 768px) {
    .content {
      padding-bottom: 20%;
      gap: 20px;
    }

    .theme {
      font-size: 18px;
    }

    .title {
      font-size: 32px;
      line-height: 43px;
    }

    .desc {
      font-size: 30px;
      line-height: 170%;
      word-break: keep-all;
    }

    .homelogo {
      width: 100%;
    }
  }
`;

const CardSection = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1048px;
  margin: 50px auto;
  padding: 0 5%;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;

  max-width: 300px;
  flex: 1;

  .texts {
    padding: 10px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 0;
  }

  p {
    text-align: start;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 0;
  }

  img {
    border-radius: 16px;
    width: 100%;
    height: 220px;
    object-fit: contain;
    background: #fff;
    display: block;
  }
`;

function Home() {
  const descriptions = [
    "서로 손을 맞잡고 <br /> 함께 걸음을 맞추는",
    "사랑과 연대의 <br /> 귀한 만남의 장",
    "사랑의 마라톤으로 <br /> 당신을 초대합니다",
  ];
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isVideoLoaded) {
      intervalId = setInterval(() => {
        setCurrentDescriptionIndex(
          (prevIndex) => (prevIndex + 1) % descriptions.length
        );
      }, 3000); // 3초마다 멘트 변경
    }

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [isVideoLoaded, descriptions.length]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>
      <HomeWrapper>
        <video
          className="video-background"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoaded} // 비디오 로드 완료 시 호출
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        <div className="content">
          <p className="theme">각자의 모습으로, 같은 길을</p>
          <img src={homeLogo} className="homelogo" alt="사랑의 마라톤" />
          <p
            className="desc"
            dangerouslySetInnerHTML={{
              __html: descriptions[currentDescriptionIndex],
            }}
          ></p>
          <div className="carousel-indicators">
            {descriptions.map((_, index) => (
              <div
                key={index}
                className={`indicator ${
                  index === currentDescriptionIndex ? "active" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </HomeWrapper>

      {/* Card Section */}
      <CardSection>
        <Card>
          <img src={home1} alt="Icon 1" />
          <div className="texts">
            <h3>설립취지</h3>
            <p>
              사랑의 마라톤은 한동대학교 총학생회 소속의 사랑의 마라톤 TFT가
              주관하여 2008년부터 시작된 사업으로 포항지역 장애인 참가자와
              한동대학교 학생이 하나가 되어 마라톤 코스를 완주하며 사랑과 나눔을
              실천하는 행사입니다. 매년 많은 기관과 단체, 개인의 후원과 기도로
              운영되고 있습니다. 이 행사를 통해 한동대학교의 교훈(사랑, 겸손,
              봉사)을 포항 지역의 장애인들과 함께 나누며 또 그 사랑을 누릴 수
              있는 자리를 마련하고자 합니다.
            </p>
          </div>
        </Card>
        <Card>
          <img src={home2} alt="Icon 2" />
          <div className="texts">
            <h3>미션</h3>
            <p>
              사랑의 마라톤은 포항시 장애인 분들과 한동대학교 학생이 함께 어울려
              마라톤을 통하여 사랑과 나눔의 가치를 실천하고, 지역사회 내 소통과
              이해를 증진시키는 것을 목표로 합니다. 장애인 참가자와 학생이 함께
              마라톤 코스를 완주하며 장애에 대한 인식을 개선하고, 포항 지역에서
              사랑과 연대를 경험하고 확산시키는 계기를 마련합니다. 이러한 과정
              안에서 궁극적으로 기독교 정신에 입각하여 예수님의 사랑을 전하는
              것을 우리의 미션으로 두고 있습니다.
            </p>
          </div>
        </Card>
        <Card>
          <img src={home3} alt="Icon 3" />

          <div className="texts">
            <h3>비전</h3>
            <p>
              사랑의 마라톤은 매년 포항 지역 내 장애인과 한동대학교 학생이 함께
              하는 행사를 개최하여 지속적인 지역사회의 협력을 이끌고, 장애인에
              대한 사회적 관심을 촉진하는 지속 가능한 플랫폼을 구축하고자
              합니다. 이를 통해 지역 사회가 서로의 다양성을 존중하며, 사랑과
              함께함의 가치를 중심으로 소외계층 없이 공존할 수 있는 사회로
              발전하는 것을 비전으로 두고 있습니다.
            </p>
          </div>
        </Card>
      </CardSection>
    </>
  );
}

export default Home;

