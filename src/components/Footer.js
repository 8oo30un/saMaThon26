import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const FooterComponent = styled.footer`
  background-color: black;
  color: white;
  padding: 20px 40px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Gowun Dodum", sans-serif;
  font-weight: 600;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 5px 0;
  }
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: white;
    font-size: 25px;
    text-decoration: none;

    &:hover {
      color: #ccc;
    }
  }
`;

const ContactButton = styled.a`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: black;
  }
`;

function Footer() {
  return (
    <FooterComponent>
      <FooterLeft>
        <p>한동대학교 사랑의 마라톤 TFT</p>
        <p>문의 내선번호: 054-260-1874</p>
        <p>© 2025 Love Marathon. All Rights Reserved.</p>
      </FooterLeft>
      <FooterRight>
        <SocialIcons>
          <a
            href="https://www.instagram.com/2025_lovemarathon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/lovemarathonforever/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://youtu.be/QNCErAy7jvA?si=osxkhnLXGGpUyPIv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </SocialIcons>
        <ContactButton href="mailto:2025lovemarathon@gmail.com">
          문의/후원 Email
        </ContactButton>
      </FooterRight>
    </FooterComponent>
  );
}

export default Footer;
