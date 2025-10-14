import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../index";
import styled from "styled-components";

const NoticeWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 100px 20px;
  background-color: #fdfcf8;
  color: #333;
  font-family: Pretendard;
  h1 {
    text-align: center;
    font-family: Pretendard;
  }
`;

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoArticlesMessage = styled.div`
  text-align: center;
  color: #777;
  font-size: 18px;
  padding: 50px 0;
`;

const ArticleItem = styled.div`
  padding: 20px;
  border: 1px solid #ddd;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  &:not(:last-child) {
    border-bottom: none;
  }
`;

const ArticleContent = styled.div`
  max-width: 70%;
`;

const ArticleLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ArticleDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  margin-bottom: 0px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ArticleDate = styled.p`
  font-size: 14px;
  color: #999;
  white-space: nowrap;
  align-self: flex-start;
`;

const extractTextFromParagraphs = (htmlContent) => {
  const tmpDiv = document.createElement("div");
  tmpDiv.innerHTML = htmlContent;
  return tmpDiv.innerText;
};

const Notice = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const q = query(
        collection(db, "notices"),
        where("category", "==", "공지")
      );
      const articlesSnapshot = await getDocs(q);
      const articlesList = articlesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articlesList);
    };

    fetchArticles();
  }, []);

  return (
    <NoticeWrapper>
      <h1>Notice</h1>
      <ArticleList>
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleItem key={article.id}>
              <ArticleContent>
                <ArticleLink to={`/notice/${article.id}`}>
                  {article.title}
                </ArticleLink>
                <ArticleDescription>
                  {extractTextFromParagraphs(article.content)}
                </ArticleDescription>
              </ArticleContent>
              <ArticleDate>
                {article.createdAt?.toDate().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </ArticleDate>
            </ArticleItem>
          ))
        ) : (
          <NoArticlesMessage>글이 존재하지 않습니다.</NoArticlesMessage>
        )}
      </ArticleList>
    </NoticeWrapper>
  );
};

export default Notice;
