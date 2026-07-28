import React from "react";
import styled from "styled-components";
import heroLogo from "../assets/img/2026/hero-logo.svg";
import decoHeroLeft from "../assets/img/2026/deco-hero-left.svg";
import decoHeroRight from "../assets/img/2026/deco-hero-right.svg";
import decoMid from "../assets/img/2026/deco-mid.svg";
import decoStarBlue from "../assets/img/2026/deco-star-blue.svg";
import decoStarGreen from "../assets/img/2026/deco-star-green.svg";
import tagStar from "../assets/img/2026/tag-star.svg";
import cardStars from "../assets/img/2026/card-stars.svg";
import verseStars from "../assets/img/2026/verse-stars.svg";
import eventDeco from "../assets/img/2026/event-deco.svg";

/* 피그마 Main(1440) 기준 — 크기·위치 동일 비율로 환산 */
const d = (px) => `calc(${px} / 1440 * 100vw)`;

const Page = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  color: #000;
  font-family: Pretendard, sans-serif;
  overflow-x: hidden;
  overflow-y: visible;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: visible;
`;

/* 피그마 boolean Union 데코: rotate(180) + scaleY(-1) */
const Deco = styled.img`
  position: absolute;
  pointer-events: none;
  user-select: none;
  z-index: 0;
  transform: rotate(180deg) scaleY(-1);
  transform-origin: center center;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: relative;
  z-index: 1;

  img {
    width: 14px;
    height: 14px;
  }

  span {
    color: #5170ff;
    font-weight: 700;
    font-size: ${(props) => props.size || "22px"};
    letter-spacing: -0.8px;
    line-height: 1;
    text-align: center;
  }
`;

const Hero = styled(Section)`
  position: relative;
  z-index: 0;
  min-height: 832px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 140px 24px 80px;
  box-sizing: border-box;
  overflow: visible;

  /* 피그마 1001:56 — 좌측 상단 초록 별 */
  .deco-left {
    width: ${d(432.533)};
    height: ${d(432.533)};
    top: ${d(-194.77)};
    left: calc(6.25% + ${d(66.69)});
  }

  /* 피그마 1001:51 — 우측 중간 초록 별 */
  .deco-right {
    width: ${d(621.473)};
    height: ${d(621.473)};
    top: ${d(105.26)};
    left: calc(75% + ${d(37.36)});
  }

  /* 피그마 1001:451 — 히어로 좌하단 초록 별 (left: -111.38, top: 427.63) */
  .deco-bottom-left {
    width: ${d(578.768)};
    height: ${d(578.768)};
    top: ${d(427.63)};
    left: ${d(-111.38)};
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;
    width: 100%;
    max-width: 1048px;
  }

  .theme {
    color: #5170ff;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.8px;
    text-align: center;
    margin: 0;
  }

  .hero-logo {
    width: min(780px, 90vw);
    height: auto;
    display: block;
  }

  .verse-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .verse-stars {
    width: 44px;
    height: 10px;
  }

  .verse {
    color: #6d7183;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.56px;
    text-align: center;
    margin: 0;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 120px 20px 60px;

    .theme {
      font-size: 16px;
    }

    .verse {
      font-size: 14px;
    }
  }
`;

const Intro = styled(Section)`
  padding: 125px 24px 100px;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
  z-index: 1;

  .inner {
    position: relative;
    z-index: 1;
    max-width: 1210px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
  }

  .content {
    flex: 1;
    max-width: 497px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .desc p {
    margin: 0;
    color: #6d7183;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.9;
    letter-spacing: -0.56px;
  }

  .desc strong {
    font-weight: 700;
    color: #6d7183;
  }

  .image-placeholder {
    width: min(580px, 100%);
    height: 650px;
    background: #eaecf5;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .image-placeholder span {
    color: #646778;
    opacity: 0.2;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -1.8px;
  }

  @media (max-width: 1024px) {
    padding: 80px 20px;

    .inner {
      flex-direction: column;
      gap: 40px;
    }

    .content {
      max-width: 100%;
      gap: 32px;
    }

    .desc p {
      font-size: 16px;
    }

    .image-placeholder {
      width: 100%;
      height: 360px;
    }

    .image-placeholder span {
      font-size: 28px;
    }
  }
`;

const Preview = styled(Section)`
  background: linear-gradient(180deg, #f8f9fc 0%, #f8f9fc 83.64%, #fff 100%);
  padding: 160px 24px 120px;
  min-height: 1400px;
  overflow: hidden;

  /* 피그마 1012:2517 / 2522 / 2527 — 데코 위치 조정 */
  .deco-1 {
    width: ${d(463.068)};
    height: ${d(463.068)};
    top: calc(${d(71.08)} - 40px);
    left: calc(${d(-62.35)} + 60px);
  }

  .deco-2 {
    width: ${d(463.068)};
    height: ${d(463.068)};
    top: calc(${d(438.01)} - 45px);
    left: calc(75% + ${d(52.55)} + 60px);
  }

  .deco-3 {
    width: ${d(463.068)};
    height: ${d(463.068)};
    top: calc(${d(1004.15)} - 32px);
    left: calc(12.5% + ${d(88.65)} + 41px);
  }

  .title {
    position: relative;
    z-index: 1;
    margin-bottom: 80px;
  }

  .grid {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 28px;
    row-gap: 56px;
    justify-items: center;
    align-items: start;
  }

  .grid > *:nth-child(2) {
    margin-top: 48px;
  }

  .grid > *:nth-child(3) {
    margin-top: 12px;
  }

  .grid > *:nth-child(4) {
    margin-top: 8px;
  }

  .grid > *:nth-child(5) {
    margin-top: 36px;
  }

  .grid > *:nth-child(6) {
    margin-top: 24px;
  }

  @media (max-width: 1024px) {
    min-height: auto;
    padding: 100px 20px;

    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 28px 16px;
      max-width: 100%;
    }

    .grid > * {
      margin-top: 0 !important;
    }
  }

  @media (max-width: 640px) {
    padding: 80px 16px;

    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

const ImageCard = styled.div`
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 20px;
  padding: 20px 20px 24px;
  width: min(343px, 100%);
  box-sizing: border-box;
  box-shadow: 0 12px 40px rgba(81, 112, 255, 0.08);
  transform: rotate(${(props) => props.$rotate || "0deg"});
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: rotate(0deg) translateY(-6px);
    box-shadow: 0 18px 48px rgba(81, 112, 255, 0.12);
  }

  .thumb {
    width: 100%;
    height: 280px;
    background: #f5f5f5;
    border-radius: 10px;
  }

  .caption {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .caption p {
    margin: 0;
    font-family: "Nanum Pen Script", "Gaegu", cursive;
    font-size: 26px;
    line-height: 1.4;
    letter-spacing: -0.5px;
    color: #000;
  }

  .caption img {
    width: 52px;
    height: 12px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    transform: none;

    &:hover {
      transform: translateY(-4px);
    }

    .thumb {
      height: 220px;
    }

    .caption p {
      font-size: 22px;
    }
  }
`;

const EventInfo = styled(Section)`
  padding: 120px 24px;
  text-align: center;

  .bg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    width: min(1260px, 95vw);
    pointer-events: none;
    z-index: 0;
  }

  .inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .label {
    margin: 0;
    color: #4f5059;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.9;
    letter-spacing: -0.56px;
  }

  .value {
    margin: 0;
    color: #5d606d;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.56px;
    white-space: pre-line;
  }

  @media (max-width: 768px) {
    padding: 80px 20px;

    .inner {
      gap: 48px;
    }

    .label,
    .value {
      font-size: 16px;
    }
  }
`;

const Timetable = styled(Section)`
  padding: 100px 24px 120px;
  overflow: visible;

  /* 피그마 1001:297 — 우측 파란 별 (left: 81.25%) */
  .deco-1 {
    width: ${d(226)};
    height: ${d(226)};
    top: ${d(196)};
    left: 81.25%;
  }

  .inner {
    position: relative;
    z-index: 1;
    max-width: 1256px;
    margin: 0 auto;
  }

  .title {
    justify-content: flex-start;
    margin-bottom: 60px;
  }

  .content {
    display: flex;
    gap: 60px;
    align-items: center;
  }

  /* 이미지 기준 앵커 — 피그마에서 별이 이미지 좌하단에 걸침 */
  .image-wrap {
    position: relative;
    flex-shrink: 0;
    width: min(580px, 100%);
  }

  /* 피그마 1001:337: 이미지(x:92) 대비 left -55.19 / bottom -77.6 */
  .deco-2 {
    width: ${d(158.192)};
    height: ${d(158.192)};
    left: ${d(-55.19)};
    bottom: ${d(-77.6)};
    top: auto;
    z-index: 0;
  }

  .image-placeholder {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 497px;
    background: #eaecf5;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-placeholder span {
    color: #646778;
    opacity: 0.2;
    font-size: 40px;
    font-weight: 600;
  }

  .programs {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .row {
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: 20px;
    align-items: start;
  }

  .row-title {
    margin: 0;
    color: #5170ff;
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;
  }

  .row-desc {
    margin: 0;
    color: #5d606d;
    font-size: 18px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: -0.5px;
  }

  @media (max-width: 1024px) {
    .content {
      flex-direction: column;
      gap: 40px;
    }

    .image-wrap {
      width: 100%;
    }

    .image-placeholder {
      height: 280px;
    }

    .row {
      grid-template-columns: 80px 1fr;
      gap: 12px;
    }

    .row-title,
    .row-desc {
      font-size: 15px;
      line-height: 1.6;
    }
  }
`;

const Videos = styled(Section)`
  padding: 100px 24px 120px;
  overflow: hidden;

  /* 피그마 1001:343 / 348 / 353 — 전부 초록 별 (#8BD348) */
  .deco-1 {
    width: ${d(396.572)};
    height: ${d(396.572)};
    top: ${d(25.71)};
    left: calc(75% + ${d(41.71)});
  }

  .deco-2 {
    width: ${d(359.95)};
    height: ${d(359.95)};
    top: ${d(747.9)};
    left: ${d(-125.8)};
  }

  .deco-3 {
    width: ${d(278.681)};
    height: ${d(278.681)};
    top: ${d(1533.32)};
    left: calc(81.25% + ${d(10.66)});
  }

  .title {
    margin-bottom: 60px;
  }

  .list {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .video {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 16px;
    background: #111;
  }

  .video iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 768px) {
    padding: 80px 16px 100px;

    .title {
      margin-bottom: 36px;
    }
  }
`;

const previewCards = [
  { caption: "짝꿍과 함께 맞잡은 두 손", rotate: "5deg" },
  { caption: "즐거운 가족 네트워킹 시간!", rotate: "-4.3deg" },
  { caption: "지쳐도 괜찮아, 응원의 시간", rotate: "-5.7deg" },
  { caption: "무더운 여름도 함께라면 괜찮아", rotate: "-1.5deg" },
  { caption: "결승점에 골인하는 빛나는 순간!", rotate: "3.4deg" },
  { caption: "우리의 웃음으로 만들어가는 사마톤", rotate: "-9.8deg" },
];

const programs = [
  {
    title: "공연",
    desc: "사랑의 마라톤을 축하하는 공연을 통해 사마톤만의 기쁨을 느껴보세요!",
  },
  {
    title: "레크레이션",
    desc: "흥이 넘치는 사회자와 함께하는 신나는 게임과 활동으로 에너지를 채워보세요!",
  },
  {
    title: "마라톤",
    desc: "걷거나 뛰는 방식에 상관없이 하나된 마음으로 함께 완주해보세요!",
  },
  {
    title: "부스",
    desc: "마라톤과 함께 운영되는 재미있는 부스를 체험해보세요!",
  },
  {
    title: "네트워킹",
    desc: "참가자 가족들과 함께, 맛있는 식사와 교제를 나눠보아요!",
  },
  {
    title: "장기자랑",
    desc: "참가자들의 끼를 무대에서 맘껏 보여주세요!",
  },
];

const SectionTag = ({ children, size }) => (
  <Tag size={size}>
    <img src={tagStar} alt="" />
    <span>{children}</span>
    <img src={tagStar} alt="" />
  </Tag>
);

const ThisYear2026 = () => {
  return (
    <Page>
      <Hero>
        <Deco className="deco-left" src={decoHeroLeft} alt="" />
        <Deco className="deco-right" src={decoHeroRight} alt="" />
        <Deco className="deco-bottom-left" src={decoMid} alt="" />
        <div className="hero-inner">
          <p className="theme">각자의 모습으로, 같은 길을</p>
          <img className="hero-logo" src={heroLogo} alt="사랑의 마라톤" />
          <div className="verse-wrap">
            <img className="verse-stars" src={verseStars} alt="" />
            <p className="verse">
              그는 화평이신지라 둘로 하나가 되게 하사 막힌 담을 허시고
              <br />
              [에베소서 2장 14절]
            </p>
          </div>
        </div>
      </Hero>

      <Intro>
        <div className="inner">
          <div className="content">
            <SectionTag>인사말</SectionTag>
            <div className="desc">
              <p>
                포항 지역 장애인 참가자와 한동대학교 학생이 짝을 이루어 함께
                완주하는 ‘사랑의 마라톤’이 여러 기관과 단체, 그리고 많은 분들의
                후원과 기도 속에 올해로 제18회를 맞이했습니다.
              </p>
              <p>
                이번 사랑의 마라톤은{" "}
                <strong>‘각자의 모습으로, 같은 길을’</strong>
                이라는 주제 아래, 서로 다른 모습 그대로를 존중하며 함께
                걸어가는 기쁨을 담고자 합니다. 장애인과 비장애인의 구분 없이 그
                만남이 서로에게 기쁨이 되어 같은 길을 함께 걸어가는 따뜻한
                시간이 되기를 소망합니다.
              </p>
            </div>
          </div>
          <div className="image-placeholder">
            <span>메인 소개 이미지</span>
          </div>
        </div>
      </Intro>

      <Preview>
        <Deco className="deco-1" src={decoStarBlue} alt="" />
        <Deco className="deco-2" src={decoStarBlue} alt="" />
        <Deco className="deco-3" src={decoStarBlue} alt="" />
        <div className="title">
          <SectionTag size="24px">사랑의 마라톤 미리보기</SectionTag>
        </div>
        <div className="grid">
          {previewCards.map((card) => (
            <ImageCard key={card.caption} $rotate={card.rotate}>
              <div className="thumb" />
              <div className="caption">
                <p>{card.caption}</p>
                <img src={cardStars} alt="" />
              </div>
            </ImageCard>
          ))}
        </div>
      </Preview>

      <EventInfo>
        <img className="bg" src={eventDeco} alt="" />
        <div className="inner">
          <SectionTag size="24px">행사 정보</SectionTag>
          <div className="body">
            <div className="item">
              <p className="label">일시</p>
              <p className="value">2026년 10월 10일(토) 09:00~17:00</p>
            </div>
            <div className="item">
              <p className="label">장소</p>
              <p className="value">
                한동대학교 일대
                {"\n"}
                (경상북도 포항시 북구 흥해읍 한동로 558)
              </p>
            </div>
          </div>
        </div>
      </EventInfo>

      <Timetable>
        <Deco className="deco-1" src={decoStarBlue} alt="" />
        <div className="inner">
          <div className="title">
            <SectionTag size="24px">일정 및 타임테이블</SectionTag>
          </div>
          <div className="content">
            <div className="image-wrap">
              <Deco className="deco-2" src={decoStarBlue} alt="" />
              <div className="image-placeholder">
                <span>타임테이블 이미지</span>
              </div>
            </div>
            <div className="programs">
              {programs.map((program) => (
                <div className="row" key={program.title}>
                  <p className="row-title">{program.title}</p>
                  <p className="row-desc">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Timetable>

      <Videos>
        <Deco className="deco-1" src={decoStarGreen} alt="" />
        <Deco className="deco-2" src={decoStarGreen} alt="" />
        <Deco className="deco-3" src={decoStarGreen} alt="" />
        <div className="title">
          <SectionTag size="24px">지난 사랑의 마라톤 살펴보기</SectionTag>
        </div>
        <div className="list">
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/QNCErAy7jvA"
              title="15년간 이어져 오는 사랑 그 잡채! 한 마음으로 함께 모인 날, 사랑의 마라톤"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/dHgcbFOYtB0"
              title="함께 마음을 맞추고, 발걸음을 맞추는 16번째 사랑의 마라톤"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </Videos>
    </Page>
  );
};

export default ThisYear2026;
