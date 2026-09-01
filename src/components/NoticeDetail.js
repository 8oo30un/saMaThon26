import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../index";
import styled from "styled-components";

const ArticleDetailWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 20px;
  min-height: 100vh;
  background-color: #fdfcf8;
  color: #333;
  font-family: Pretendard;
`;

const ArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const ArticleDate = styled.span`
  font-size: 16px;
  color: #999;
  margin-bottom: 10px;
`;

const ArticleTitle = styled.h1`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const WriterInfo = styled.span`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

const CategoryTag = styled.span`
  background-color: transparent;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;

const ArticleContent = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  color: #333;
  line-height: 1.6;
  border: 1px solid #ddd;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 5px;
  }

  p {
    margin: 10px 0;
  }
`;

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, "notices", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <ArticleDetailWrapper>Loading...</ArticleDetailWrapper>;
  }

  return (
    <ArticleDetailWrapper>
      <ArticleHeader>
        <ArticleDate>
          {article.createdAt?.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </ArticleDate>
        <ArticleTitle>{article.title}</ArticleTitle>
        <WriterInfo>Written by {article.writer}</WriterInfo>
        <CategoryTag>{article.category}</CategoryTag>
      </ArticleHeader>
      <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }} />
    </ArticleDetailWrapper>
  );
};

export default ArticleDetail;
