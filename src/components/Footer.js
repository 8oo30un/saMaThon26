import styled from "styled-components";
import footerLogo from "../assets/img/2026/footer-logo.svg";

const FooterRoot = styled.footer`
  background-color: #0e0e0f;
  color: #fff;
  width: 100%;
  padding: 40px 44px 24px;
  box-sizing: border-box;
  font-family: Pretendard, sans-serif;

  @media (max-width: 768px) {
    padding: 36px 20px 20px;
  }
`;

const Inner = styled.div`
  max-width: 1352px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Logo = styled.img`
  width: 237px;
  height: 60px;
  display: block;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 180px;
    height: auto;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    margin: 0;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 1;
  }
`;

const EmailButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #5170ff;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 1;
  padding: 12px 16px;
  border-radius: 8px;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background: #3f5cf0;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
`;

const Copyright = styled.p`
  margin: 0;
  color: #747881;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 1;
`;

function Footer() {
  return (
    <FooterRoot>
      <Inner>
        <Top>
          <Logo src={footerLogo} alt="사랑의마라톤" />
          <InfoRow>
            <Info>
              <p>담당  |  한동대학교 사랑의 마라톤 TFT</p>
              <p>문의  |  054-260-1874</p>
            </Info>
            <EmailButton href="mailto:2025lovemarathon@gmail.com">
              문의 / 후원 Email
            </EmailButton>
          </InfoRow>
        </Top>
        <Bottom>
          <Divider />
          <Copyright>© 2026 Love Marathon. All Rights Reserved.</Copyright>
        </Bottom>
      </Inner>
    </FooterRoot>
  );
}

export default Footer;
