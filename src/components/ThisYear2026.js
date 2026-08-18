import React from "react";
import styled, { keyframes } from "styled-components";
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
import preview1 from "../assets/img/2026/preview/preview-1.png";
import preview2 from "../assets/img/2026/preview/preview-2.png";
import preview3 from "../assets/img/2026/preview/preview-3.png";
import preview4 from "../assets/img/2026/preview/preview-4.png";
import preview5 from "../assets/img/2026/preview/preview-5.png";
import preview6 from "../assets/img/2026/preview/preview-6.png";
import introMain from "../assets/img/2026/intro-main.png";
import timetableDesktop from "../assets/img/2026/timetable/timetable-desktop.png";
import timetablePhone from "../assets/img/2026/timetable/timetable-phone.png";

/* 피그마 Main(1440) 기준 — 크기·위치 동일 비율로 환산 */
const d = (px) => `calc(${px} / 1440 * 100vw)`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(36px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Page = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  background: #fff;
  color: #000;
  font-family: Pretendard, sans-serif;
  overflow-x: clip;
  overflow-y: visible;
  box-sizing: border-box;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: clip;
  overflow-y: visible;
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

/*
 * ============================================================
 * 히어로 워터마크 조정 가이드
 * ============================================================
 *   deco-left        → 좌측 상단
 *   deco-right       → 우측
 *   deco-bottom-left → 좌측 하단
 * 조정: left / top / width / height  (↑ = 오른쪽·아래·크게)
 * ============================================================
 */
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

  /* [1] deco-left — 좌측 상단 초록 별 */
  .deco-left {
    width: ${d(432.533)}; /* 크기 */
    height: ${d(432.533)};
    top: ${d(-194.77)}; /* 세로 (음수=위로) */
    left: calc(6.25% + ${d(66.69)}); /* 가로 */
  }

  /* [2] deco-right — 우측 초록 별 */
  .deco-right {
    width: ${d(621.473)};
    height: ${d(621.473)};
    top: ${d(105.26)};
    left: calc(75% + ${d(7.36)});
  }

  /* [3] deco-bottom-left — 좌측 하단 초록 별 */
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
    opacity: 0;
    animation: ${fadeUp} 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
  }

  .hero-logo {
    width: min(780px, 90vw);
    height: auto;
    display: block;
    opacity: 0;
    animation: ${fadeUp} 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards;
  }

  .verse-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    opacity: 0;
    animation: ${fadeUp} 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards;
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

/*
 * ============================================================
 * 인사말(Intro) 워터마크 조정 가이드 — 사진 위 별 2개
 * ============================================================
 *   img-deco-1 → 사진 왼쪽 위
 *   img-deco-2 → 사진 오른쪽 아래 (밖으로 살짝 삐져나옴)
 *
 * 조정 값: left / top / width / height
 *   left·top ↑ = 오른쪽·아래로 이동
 *   width·height 는 같은 값으로 유지 권장
 * d(px) = 1440 기준 비례 환산 / 고정이면 100px 처럼 직접 기입
 * ============================================================
 */
const Intro = styled(Section)`
  /* 피그마 Desktop 1029:439 — 텍스트 좌측 + 이미지 우측 */
  padding: 125px 92px 100px;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
  z-index: 1;

  .inner {
    position: relative;
    z-index: 1;
    max-width: 1210px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
  }

  .content {
    flex: 1;
    max-width: 497px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    text-align: left;
  }

  .content > div:first-child {
    align-self: flex-start;
    width: auto;
    justify-content: flex-start;
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    text-align: left;
  }

  .desc p {
    margin: 0;
    color: #6d7183;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.9;
    letter-spacing: -0.56px;
    text-align: left;
  }

  .desc strong {
    font-weight: 700;
    color: #6d7183;
  }

  .intro-image {
    position: relative;
    width: min(580px, 100%);
    height: 650px;
    flex-shrink: 0;
    overflow: visible; /* 별이 사진 밖으로 살짝 나오게 */
  }

  .intro-image-frame {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    background: #eaecf5;
  }

  .intro-image-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
    display: block;
  }

  /* ----- Desktop: 사진 위 별 (피그마 1029:459 / 1029:464) ----- */
  .img-deco-1 {
    /* [1] 사진 왼쪽 위 — left↑오른쪽 / top↑아래 / width·height=크기 */
    width: 227px;
    height: 227px;
    left: 176px;
    top: 27px;
    z-index: 2;
    opacity: 0.55;
    filter: brightness(0) invert(1); /* 사진 위 밝은 워터마크 */
  }

  .img-deco-2 {
    /* [2] 사진 오른쪽 아래 — left↑오른쪽 / top↑아래 */
    width: 403px;
    height: 403px;
    left: 390px;
    top: 325px;
    z-index: 2;
    opacity: 0.55;
    filter: brightness(0) invert(1);
  }

  /*
   * 피그마 Tablet 1066:1127 (810)
   * 세로 스택: 태그(중앙) → 본문(좌측) → 사진
   * padding 40 / 130, 본문↔사진 gap 80, 본문 글자 24px
   */
  @media (max-width: 1024px) {
    padding: 130px 40px;

    .inner {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 80px;
      max-width: 730px;
    }

    .content {
      max-width: 100%;
      width: 100%;
      align-items: center;
      gap: 60px;
    }

    .content > div:first-child {
      align-self: center; /* 태블릿: 인사말 태그 중앙 */
    }

    .desc p {
      font-size: 24px;
      letter-spacing: -0.71px;
    }

    .intro-image {
      width: 100%;
      height: auto;
      aspect-ratio: 730 / 818;
    }

    .intro-image-frame {
      border-radius: 25px;
    }

    /* ----- Tablet: 사진 위 별 (피그마 1066:1147 / 1066:1152) ----- */
    .img-deco-1 {
      /* [1] 왼쪽 위 — %는 사진 박스 기준 */
      width: 39%;
      height: auto;
      aspect-ratio: 1;
      left: -9%;
      top: 4%;
    }

    .img-deco-2 {
      /* [2] 오른쪽 아래 */
      width: 69%;
      height: auto;
      aspect-ratio: 1;
      left: 53%;
      top: 50%;
    }
  }

  @media (max-width: 768px) {
    padding: 80px 20px;

    .inner {
      gap: 40px;
    }

    .content {
      gap: 32px;
    }

    .desc p {
      font-size: 16px;
      letter-spacing: -0.56px;
    }

    .intro-image-frame {
      border-radius: 20px;
    }

    .img-deco-1 {
      width: 42%;
      left: -8%;
      top: 3%;
    }

    .img-deco-2 {
      width: 72%;
      left: 48%;
      top: 48%;
    }
  }
`;

const Preview = styled(Section)`
  background: linear-gradient(180deg, #f8f9fc 0%, #f8f9fc 83.64%, #fff 100%);
  padding: 160px 40px 120px;
  min-height: 1400px;
  overflow: visible;
  box-sizing: border-box;

  /*
   * 미리보기 워터마크 (파란 별 3개) — left/top/width/height 로 직접 조정
   *   deco-1 왼쪽 위 / deco-2 오른쪽 / deco-3 왼쪽 아래
   */
  .deco-1 {
    /* [1] 왼쪽 위 */
    width: ${d(463.068)}; /* 크기 */
    height: ${d(463.068)};
    top: calc(${d(71.08)} - 40px); /* 세로 */
    left: calc(${d(-62.35)} + 60px); /* 가로 */
  }

  .deco-2 {
    /* [2] 오른쪽 */
    width: ${d(463.068)};
    height: ${d(463.068)};
    top: calc(${d(438.01)} - 45px);
    left: calc(75% + ${d(-58.55)} + 60px);
  }

  .deco-3 {
    /* [3] 왼쪽 아래 */
    width: ${d(463.068)};
    height: ${d(463.068)};
    top: calc(${d(974.15)} - 32px);
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
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 28px;
    row-gap: 56px;
    justify-items: center;
    align-items: start;
    box-sizing: border-box;
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
    padding: 100px 32px;

    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 20px;
      row-gap: 28px;
      max-width: 720px;
    }

    .grid > * {
      margin-top: 0 !important;
    }
  }

  @media (max-width: 768px) {
    padding: 80px 24px;

    .grid {
      grid-template-columns: minmax(0, 1fr);
      max-width: 343px;
      column-gap: 0;
      row-gap: 24px;
    }
  }
`;

const ImageCard = styled.div`
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 20px;
  padding: 20px 20px 24px;
  width: 100%;
  max-width: 343px;
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
    overflow: hidden;
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
    display: block;
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
    font-family: "Nanum NeuRisNeuRisCe", cursive;
    font-size: 26px;
    line-height: 1.5;
    letter-spacing: -0.56px;
    color: #000;
    word-break: keep-all;
    white-space: nowrap;
  }

  .caption img {
    width: 52px;
    height: 12px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    transform: none;
    max-width: none;

    &:hover {
      transform: translateY(-4px);
    }

    .thumb {
      height: 220px;
    }

    .caption p {
      font-size: 22px;
      white-space: normal;
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
    width: min(1260px, 100%);
    max-width: 100%;
    height: auto;
    pointer-events: none;
    z-index: 0;
  }

  .inner {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    box-sizing: border-box;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
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
    word-break: keep-all;
  }

  @media (max-width: 768px) {
    padding: 80px 24px;

    .bg {
      width: min(640px, 140%);
      opacity: 0.7;
    }

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

  /*
   * 타임테이블 워터마크 (파란 별) — left/top/width/height 로 직접 조정
   *   deco-1 섹션 우측 / deco-2 이미지 좌하단(.image-wrap 기준)
   */
  .deco-1 {
    /* [1] 우측 별 */
    width: ${d(226)}; /* 크기 */
    height: ${d(226)};
    top: ${d(108)}; /* 세로 */
    left: 75.25%; /* 가로 (%도 가능) */
  }

  .inner {
    position: relative;
    z-index: 1;
    max-width: 1256px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .title {
    justify-content: flex-start;
    margin-bottom: 60px;
  }

  .content {
    display: flex;
    gap: 60px;
    align-items: center;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  /*
   * 이미지 래퍼
   * - overflow: visible 필수 (별이 이미지 밖으로 살짝 나옴)
   * - hidden 이면 deco-2 가 전부 잘려서 안 보임
   */
  .image-wrap {
    position: relative;
    flex-shrink: 0;
    width: min(580px, 100%);
    max-width: 100%;
    overflow: visible;
  }

  /*
   * [2] deco-2 — 타임테이블 이미지 좌하단 (.image-wrap 기준)
   * 피그마 1029:644 → 이미지(x:92) 대비 left:103 / bottom:-77.6
   *
   * 조정:
   *   left↑ = 오른쪽 / bottom↑(값 커짐) = 위로 / width·height = 크기
   *   z-index 는 이미지(1)보다 커야 사진 위에 보임 (지금은 2)
   */
  .deco-2 {
    width: ${d(158.192)}; /* 크기 */
    height: ${d(158.192)};
    left: ${d(-60)}; /* 가로 — 피그마 absolute 195 - 이미지 92 */
    bottom: ${d(-74.6)}; /* 세로 — 이미지 아래로 77.6 걸침 */
    top: auto;
    z-index: 2; /* 1 이하면 timetable-image 뒤로 가려짐 */
  }

  .timetable-image {
    position: relative;
    z-index: 1;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(180deg, #d8ddf1 0%, #eaecf5 100%);
  }

  .timetable-image img {
    width: 100%;
    height: auto;
    display: block;
  }

  .timetable-image .desktop {
    display: block;
  }

  .timetable-image .phone {
    display: none;
  }

  .programs {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .row {
    display: grid;
    grid-template-columns: 90px minmax(0, 1fr);
    gap: 20px;
    align-items: start;
  }

  .row-title {
    margin: 0;
    color: #5170ff;
    font-size: 15px;
    font-weight: 700;
    line-height: 28px;
  }

  .row-desc {
    margin: 0;
    color: #5d606d;
    font-size: 15px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.5px;
    word-break: keep-all;
  }

  @media (max-width: 1024px) {
    padding: 80px 24px 100px;

    .deco-1,
    .deco-2 {
      display: none;
    }

    .content {
      flex-direction: column;
      gap: 40px;
    }

    .image-wrap {
      width: 100%;
      overflow: visible;
    }

    .timetable-image .desktop {
      display: none;
    }

    .timetable-image .phone {
      display: block;
    }

    .row {
      grid-template-columns: 72px minmax(0, 1fr);
      gap: 12px;
    }

    .row-title,
    .row-desc {
      font-size: 14px;
      line-height: 1.55;
    }
  }
`;

const Videos = styled(Section)`
  /* 피그마 Section 1029:649 — tag y:120, 하단 여백 ~180, 높이 1812 */
  padding: 120px 24px 180px;
  overflow: visible;

  /*
   * 영상 섹션 워터마크 (초록 별 3개) — left/top/width/height 로 직접 조정
   *   deco-1 오른쪽 위 / deco-2 왼쪽 중간 / deco-3 오른쪽 아래(bottom:0)
   * 주의: deco-3 는 top 대신 bottom 사용 → 푸터와 안 겹치게
   */
  .deco-1 {
    /* [1] 오른쪽 위 */
    width: ${d(396.572)}; /* 크기 */
    height: ${d(396.572)};
    top: ${d(-5.71)}; /* 세로 */
    left: calc(75% + ${d(41.71)}); /* 가로 */
  }

  .deco-2 {
    /*
     * [2] 왼쪽 중간 (두 영상 사이) — 왼쪽 가장자리에서 반쯤 걸침
     *
     * 안 보이던 이유:
     *   left: 234 이면 별 전체가 max-width:1200 영상 리스트(.list z-index:1) 안으로 들어가
     *   z-index:0 인 별이 영상에 완전히 가려짐.
     *   → 왼쪽(음수~작은 값)으로 빼서 영상 바깥/사이로 보이게 함
     *
     * 조정: left↑오른쪽 / top↑아래 / width·height=크기
     */
    width: ${d(359.95)}; /* 크기 */
    height: ${d(359.95)};
    top: 39%; /* 세로 — 두 영상 사이쯤 (↑면 아래) */
    left: ${d(-110)}; /* 가로 — 음수여야 왼쪽 끝에서 걸침 */
    z-index: 0; /* 영상(.list=1) 뒤. 왼쪽 밖으로 나온 부분만 보임 */
  }

  .deco-3 {
    /* [3] 오른쪽 아래 — bottom 기준으로 푸터 침범 방지 */
    width: ${d(278.681)};
    height: ${d(278.681)};
    top: auto;
    bottom: 0; /* 0=섹션 하단 정렬 / 숫자↑=위로 */
    left: calc(81.25% + ${d(10.66)});
  }

  .title {
    margin-bottom: 60px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .list {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-sizing: border-box;
  }

  .video {
    position: relative;
    width: 100%;
    max-width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 16px;
    background: #111;
    box-sizing: border-box;
  }

  .video iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    border: 0;
  }

  @media (max-width: 768px) {
    padding: 80px 24px 100px;

    .deco-1,
    .deco-2,
    .deco-3 {
      display: none;
    }

    .title {
      margin-bottom: 36px;
    }
  }
`;

const previewCards = [
  {
    caption: "짝꿍과 함께 맞잡은 두 손",
    image: preview1,
    rotate: "5deg",
  },
  {
    caption: "즐거운 가족 네트워킹 시간!",
    image: preview2,
    rotate: "-4.3deg",
  },
  {
    caption: "맛있는 식사로 충전하는 시간!",
    image: preview3,
    rotate: "-5.7deg",
  },
  {
    caption: "무더운 날씨도 함께라면 괜찮아",
    image: preview4,
    rotate: "-1.5deg",
  },
  {
    caption: "실내 프로그램도 즐겁게 즐기기",
    image: preview5,
    rotate: "3.4deg",
  },
  {
    caption: "우리의 웃음으로 만들어가는 사마톤",
    image: preview6,
    rotate: "-9.8deg",
  },
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
          <p className="theme" id="hero-theme-2026">
            각자의 모습으로, 같은 길을
          </p>
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
          <div className="intro-image">
            <div className="intro-image-frame">
              <img src={introMain} alt="사랑의 마라톤 메인 소개" />
            </div>
            {/* 사진 위 별 — 위치는 Intro styled .img-deco-1/2 주석에서 조정 */}
            <Deco className="img-deco-1" src={decoStarGreen} alt="" />
            <Deco className="img-deco-2" src={decoStarGreen} alt="" />
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
              <div className="thumb">
                <img src={card.image} alt={card.caption} />
              </div>
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
              <div className="timetable-image">
                <img
                  className="desktop"
                  src={timetableDesktop}
                  alt="2026 사랑의 마라톤 일정 타임테이블"
                />
                <img
                  className="phone"
                  src={timetablePhone}
                  alt="2026 사랑의 마라톤 일정 타임테이블"
                />
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
              src="https://www.youtube.com/embed/Jtwwh_6Sfzo"
              title="제17회 사랑의 마라톤"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/QNCErAy7jvA"
              title="제16회 사랑의 마라톤"
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
