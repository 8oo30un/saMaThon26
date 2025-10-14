import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  font-family: "SF Pro", sans-serif;
  flex-direction: column;
  max-width: 1140px;
  padding-left: 51px;
  padding-right: 51px;
  height: 100vh;
  margin: 0px auto;

  @media screen and (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  .title {
    font-size: 36px;
    line-height: 57px;
    font-weight: 700;
    color: #e6e1e6;
    margin-bottom: 10px;
    margin-top: 135px;
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: 24px;
      line-height: 30px;
      font-weight: 700;
      color: #e6e1e6;
      margin-bottom: 10px;
      margin-top: 135px;
    }
  }

  .subtitle {
    font-size: 20px;
    line-height: 31px;
    color: #e6e1e6;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 768px) {
    .subtitle {
      font-size: 14px;
      line-height: 20px;
      color: #e6e1e6;
    }
  }
`;

function Soon() {
  return (
    <Section>
      <p className="title">Comming soon</p>
      <p className="subtitle">아직 공개되지 않은 페이지입니다. </p>
    </Section>
  );
}

export default Soon;
