import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../index"; // Firebase 설정이 있는 파일
import styled from "styled-components";

// Styled components
const FormWrapper = styled.div`
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  padding: 100px;
  background-color: #fdfcf8;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #005bca;
  }
`;

const FileInput = styled.input`
  display: block;
  margin-top: 10px;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #333;
  margin-left: 10px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #005bca;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0042a3;
  }
`;

const BannerManagement = () => {
  const [bannerData, setBannerData] = useState({
    bgImage: "",
    text: "",
    buttonText1: "",
    link1: "",
    buttonText2: "",
    link2: "",
  });
  const [bgImageFile, setBgImageFile] = useState(null);
  const [useBgImage, setUseBgImage] = useState(true);

  useEffect(() => {
    const fetchBannerData = async () => {
      const docRef = doc(db, "banner", "current");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setBannerData(data);
        setUseBgImage(Boolean(data.bgImage)); // Set checkbox state based on whether bgImage exists
      } else {
        console.log("No such document!");
      }
    };

    fetchBannerData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBannerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBgImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setBannerData((prevData) => ({
        ...prevData,
        bgImage: reader.result, // base64 encoded image
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCheckboxChange = (e) => {
    setUseBgImage(e.target.checked);
    if (!e.target.checked) {
      setBannerData((prevData) => ({
        ...prevData,
        bgImage: "", // Clear bgImage if checkbox is unchecked
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "banner", "current"), bannerData);
    alert("배너가 성공적으로 업데이트되었습니다.");
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <CheckboxWrapper>
          <input
            type="checkbox"
            checked={useBgImage}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel>배경 이미지 사용</CheckboxLabel>
        </CheckboxWrapper>

        {useBgImage && (
          <FormField>
            <Label>배경 이미지 업로드:</Label>
            <FileInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </FormField>
        )}

        <FormField>
          <Label>텍스트:</Label>
          <Input
            type="text"
            name="text"
            value={bannerData.text}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label>첫 번째 버튼 텍스트:</Label>
          <Input
            type="text"
            name="buttonText1"
            value={bannerData.buttonText1}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label>첫 번째 버튼 링크:</Label>
          <Input
            type="text"
            name="link1"
            value={bannerData.link1}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label>두 번째 버튼 텍스트:</Label>
          <Input
            type="text"
            name="buttonText2"
            value={bannerData.buttonText2}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label>두 번째 버튼 링크:</Label>
          <Input
            type="text"
            name="link2"
            value={bannerData.link2}
            onChange={handleChange}
          />
        </FormField>
        <SubmitButton type="submit">배너 업데이트</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default BannerManagement;
