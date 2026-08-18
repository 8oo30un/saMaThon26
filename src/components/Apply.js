import React from "react";
import styled from "styled-components";
import cardPersonal from "../assets/img/2026/apply/card-personal.png";
import cardOrg from "../assets/img/2026/apply/card-org.png";
import cardStudent from "../assets/img/2026/apply/card-student.png";
import arrowIcon from "../assets/img/2026/apply/arrow.svg";
import decoLeft from "../assets/img/2026/apply/deco-left.svg";
import decoRight from "../assets/img/2026/apply/deco-right.svg";
import decoTop from "../assets/img/2026/apply/deco-top.svg";
import titleStar from "../assets/img/2026/apply/title-star.svg";

const CARDS = [
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdiQ9xk6A3YqYFM-AMTT4ggb1X_rIU6YLgl9rwie1PzzOtqeQ/viewform?usp=dialog",
    image: cardPersonal,
    tag: "장애인 개인 신청",
    tagColor: "#5170ff",
    title: "개인 참가자 모집",
    desc: (
      <>
        한동대학교 학생들과 1:1로 짝이 되어,
        <br />
        함께 달릴 장애인 마라토너를
        <br />
        모집합니다.
      </>
    ),
  },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfGzCMams1YWJXhMa6kkHVKcPwv_Tu-rnAG_YM_cDJyCIu8Rw/viewform?usp=dialog",
    image: cardOrg,
    tag: "장애인 기관 신청",
    tagColor: "#5170ff",
    title: "기관 참가자 모집",
    desc: (
      <>
        한동대학교 학생들과 1:1로 짝이 되어,
        <br />
        함께 달릴 장애인 마라토너를
        <br />
        모집합니다.
      </>
    ),
  },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdungbOar-wradcnKKzFuNB3QuU2fQMfDvVGGg2w6pNJCaErA/formResponse",
    image: cardStudent,
    tag: "한동대학교 학생 신청",
    tagColor: "#7dbf40",
    title: "짝꿍/운영도우미 모집",
    desc: (
      <>
        사랑의 마라톤을 적극 지원할,
        <br />
        짝꿍과 운영 도우미를
        <br />
        모집합니다.
      </>
    ),
  },
];

/*
 * ============================================================
 * /apply 워터마크(초록 별) 위치 조정 가이드
 * ============================================================
 * 별 3개가 Stage(최대 1440px 박스) 기준 absolute로 붙습니다.
 *
 *   deco-top   → 화면 위쪽 / 타이틀 뒤
 *   deco-left  → 카드 뒤쪽 중앙~아래
 *   deco-right → 오른쪽 바깥에서 살짝 비침
 *
 * 조정할 때 주로 바꾸는 값:
 *   left / top     → 위치 (숫자↑ = 오른쪽/아래로 이동)
 *   width / height → 크기 (둘 다 같은 숫자 유지 권장)
 *   opacity        → 진하기 (SVG에 이미 0.1이 있어서 보통 1 유지)
 *
 * d(숫자) = 1440 디자인 기준 px를 화면 너비에 비례 환산
 *   예) d(100) ≈ 화면이 1440일 때 100px
 *   고정 px를 쓰려면 d(...) 대신 그냥 100px 처럼 적어도 됨
 * ============================================================
 */
const d = (px) => `calc(${px} / 1440 * 100vw)`;

const Page = styled.section`
  width: 100%;
  background: #ffffff;
  overflow-x: clip;
  overflow-y: visible;
`;

const Stage = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 180px 200px 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;

  @media (max-width: 1100px) {
    padding: 140px 40px 64px;
  }

  @media (max-width: 900px) {
    padding: 120px 20px 64px;
  }
`;

const Deco = styled.img`
  position: absolute;
  pointer-events: none;
  z-index: 0;
  user-select: none;
  display: block;
  opacity: 1; /* 더 진하게: 1 초과 불가 / 더 연하게: 0.5 등으로 ↓ */
  transform: rotate(180deg) scaleY(-1); /* 피그마 Union 방향 — 보통 건드리지 않음 */
  transform-origin: center center;

  /*
   * [1] deco-top — 상단 워터마크
   * 위치: 타이틀("2026 사랑의 마라톤 신청하기") 뒤 / 화면 위쪽
   * 조정:
   *   left  ↑ → 오른쪽으로   ↓ → 왼쪽으로
   *   top   ↑ → 아래로       ↓(음수) → 위로 (헤더 쪽으로)
   *   width/height ↑ → 크게
   */
  &.deco-top {
    width: ${d(432.533)}; /* 크기 */
    height: ${d(432.533)}; /* 크기 (width와 동일 권장) */
    left: ${d(170.219)}; /* 가로 위치 */
    top: ${d(-190.975)}; /* 세로 위치 (음수 = Stage 위쪽으로 삐져나감) */
  }

  /*
   * [2] deco-left — 중앙/하단 워터마크
   * 위치: 신청 카드들 뒤 (페이지 중앙~아래)
   * 조정:
   *   left  ↑ → 오른쪽으로   ↓ → 왼쪽으로
   *   top   ↑ → 아래로       ↓ → 위로
   *   width/height ↑ → 크게
   */
  &.deco-left {
    width: ${d(470.768)}; /* 크기 */
    height: ${d(470.768)}; /* 크기 (width와 동일 권장) */
    left: ${d(-57.384)}; /* 가로 위치 */
    top: ${d(357.418)}; /* 세로 위치 */
  }

  /*
   * [3] deco-right — 우측 워터마크
   * 위치: 오른쪽 가장자리에서 살짝 보이는 별
   * 조정:
   *   left 의 75% / 37.36 숫자 변경
   *     - 75% 를 70% 로 ↓ → 더 안쪽(왼쪽)으로
   *     - 37.36 을 ↑ → 더 오른쪽으로
   *   top ↑ → 아래로 / ↓ → 위로
   *   또는 left: auto; right: -120px; 처럼 right 기준으로 바꿔도 됨
   */
  &.deco-right {
    width: ${d(621.473)}; /* 크기 */
    height: ${d(621.473)}; /* 크기 (width와 동일 권장) */
    left: calc(75% + ${d(47.36)}); /* 가로 위치 */
    top: ${d(95.055)}; /* 세로 위치 */
  }

  /* ----- 태블릿 (~1100px) : 아래 값만 따로 조정 ----- */
  @media (max-width: 1100px) {
    &.deco-top {
      width: 300px; /* 크기 */
      height: 300px;
      left: 18%; /* 가로 */
      top: -120px; /* 세로 */
    }

    &.deco-left {
      width: 360px;
      height: 360px;
      left: 20%;
      top: 55%;
    }

    &.deco-right {
      width: 380px;
      height: 380px;
      left: auto;
      right: -140px; /* 오른쪽 기준 (음수 = 바깥으로) */
      top: 120px;
    }
  }

  /* ----- 모바일 (~900px) : 아래 값만 따로 조정 ----- */
  @media (max-width: 900px) {
    &.deco-top {
      width: 240px;
      height: 240px;
      left: 10%;
      top: -80px;
    }

    &.deco-left {
      width: 280px;
      height: 280px;
      left: -40px;
      top: auto;
      bottom: -20px; /* top 대신 하단 기준 */
    }

    &.deco-right {
      width: 260px;
      height: 260px;
      right: -80px;
      top: 200px;
    }
  }
`;

const Title = styled.h1`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 0 0 60px;
  color: #5170ff;
  font-family: Pretendard, sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.8px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;

  img {
    width: 14px;
    height: 14px;
    display: block;
    flex-shrink: 0;
  }

  @media (max-width: 900px) {
    font-size: 18px;
    margin-bottom: 36px;
    white-space: normal;
  }
`;

const Cards = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 70px;
  width: 100%;
  max-width: 1040px;

  @media (max-width: 1100px) {
    gap: 28px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const Card = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  flex: 0 0 300px;
  width: 300px;
  height: 440px;
  padding: 24px 24px 28px;
  box-sizing: border-box;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  background: #fff;
  box-shadow: none;
  transition: box-shadow 0.3s ease;

  .card-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    pointer-events: none;
  }

  .card-dim {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    transition: background 0.3s ease;
    pointer-events: none;
  }

  .arrow {
    position: relative;
    z-index: 2;
    width: 32px;
    height: 32px;
    display: block;
    /* 기본: 오른쪽 위 대각 (↗) */
    transform: none;
    transition: transform 0.3s ease;
  }

  .card-text {
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    border-radius: 4px;
    background: ${(props) => props.$tagColor};
    color: #fff;
    font-family: Pretendard, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: -0.56px;
    line-height: 1.9;
    white-space: nowrap;
  }

  .title {
    margin: 0;
    color: #fff;
    font-family: Pretendard, sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.56px;
    line-height: 1.9;
  }

  .desc {
    margin: 0;
    color: #e0e2e9;
    font-family: Pretendard, sans-serif;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.56px;
    line-height: 1.6;
    word-break: keep-all;
  }

  &:hover {
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.3);

    .card-dim {
      background: linear-gradient(
        180deg,
        rgba(27, 39, 93, 0.1) 0%,
        rgba(27, 39, 93, 0.8) 100%
      );
    }

    .arrow {
      /* 호버: 오른쪽 (→) */
      transform: rotate(45deg);
    }
  }

  @media (max-width: 900px) {
    flex: none;
    width: min(100%, 340px);
    height: 380px;
  }
`;

function Apply() {
  return (
    <Page>
      <Stage>
        {/* 워터마크 — 위치/크기는 파일 상단 Deco styled 주석에서 조정
            deco-top: 상단 / deco-left: 중앙~하단 / deco-right: 우측 */}
        <Deco className="deco-top" src={decoTop} alt="" />
        <Deco className="deco-left" src={decoLeft} alt="" />
        <Deco className="deco-right" src={decoRight} alt="" />

        <Title>
          <img src={titleStar} alt="" />
          2026 사랑의 마라톤 신청하기
          <img src={titleStar} alt="" />
        </Title>

        <Cards>
          {CARDS.map((card) => (
            <Card
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              $tagColor={card.tagColor}
            >
              <img className="card-bg" src={card.image} alt="" />
              <div className="card-dim" />
              <img className="arrow" src={arrowIcon} alt="" />
              <div className="card-text">
                <span className="tag">{card.tag}</span>
                <h2 className="title">{card.title}</h2>
                <p className="desc">{card.desc}</p>
              </div>
            </Card>
          ))}
        </Cards>
      </Stage>
    </Page>
  );
}

export default Apply;
