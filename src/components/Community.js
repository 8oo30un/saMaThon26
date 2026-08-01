import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { parse } from "node-html-parser";

const CommunityWrapper = styled.div`
  background-color: #fdfcf8;
  padding: 100px 0;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Pretendard;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  h1 {
    text-align: center;
    font-family: Pretendard;
  }

  @media (max-width: 768px) {
    padding: 100px 16px 100px;
  }
`;

const FilterChips = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Chip = styled.button`
  background-color: transparent;
  color: ${(props) => (props.active ? "#000" : "#777")};
  border: 1px solid ${(props) => (props.active ? "#000" : "#555")};
  border-radius: 20px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoArticlesMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  color: #777;
  font-size: 18px;
  padding: 50px 0;
`;

const ArticleCard = styled.div`
  background-color: #fdfcf8;
  border: 1px solid #ddd;
  display: flex;
  padding: 40px 30px;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:not(:nth-child(3n + 1)) {
    border-left: none; /* Remove left border for all but the first item in a row */
  }

  &:not(:nth-last-child(-n + 3)) {
    border-bottom: none; /* Remove bottom border for all but the last row */
  }
`;

const ArticleDateCategory = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  font-size: 14px;
  align-items: center;
  color: #444;
`;

const ArticleDate = styled.span`
  font-size: 14px;
  color: #444;
`;

const CategoryTag = styled.span`
  background-color: transparent;
  color: ${(props) => (props.active ? "#000" : "#555")};
  border: 1px solid ${(props) => (props.active ? "#000" : "#444")};
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ArticleTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: bold;
  line-height: 1.3;
`;

const ArticleDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 8px 0px;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5;
`;

const ReadMoreLink = styled(Link)`
  text-decoration: none;
  color: #555;
  font-weight: bold;
  margin-top: auto;
  align-self: flex-start;
  padding-top: 15px;

  &:hover {
    color: #555;
  }
`;

const Community = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, "notices");
      const articlesSnapshot = await getDocs(articlesCollection);
      const articlesList = articlesSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((article) => article.category !== "공지"); // Filter out articles with "공지" category
      setArticles(articlesList);
      setFilteredArticles(articlesList);
    };

    fetchArticles();
  }, []);

  const extractTextFromParagraphs = (content) => {
    if (!content) return "No description available.";

    const sanitizedContent = DOMPurify.sanitize(content);
    const root = parse(sanitizedContent);
    const paragraphTexts = root
      .querySelectorAll("p")
      .map((p) => p.text)
      .join(" ");

    return paragraphTexts || "No description available.";
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleFilterChange = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
        articles.filter((article) => article.category === category)
      );
    }
  };

  return (
    <CommunityWrapper>
      <h1>Community</h1>
      <FilterChips>
        <Chip
          active={activeCategory === "all"}
          onClick={() => handleFilterChange("all")}
        >
          All
        </Chip>
        <Chip
          active={activeCategory === "후기"}
          onClick={() => handleFilterChange("후기")}
        >
          후기
        </Chip>
        <Chip
          active={activeCategory === "현장스케치"}
          onClick={() => handleFilterChange("현장스케치")}
        >
          현장스케치
        </Chip>
      </FilterChips>
      <Grid>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <ArticleCard key={article.id}>
              <ArticleDateCategory>
                <ArticleDate>
                  {article.createdAt && formatDate(article.createdAt.toDate())}
                </ArticleDate>
                <CategoryTag>{article.category}</CategoryTag>
              </ArticleDateCategory>
              {article.thumbnailUrl && (
                <ArticleImage src={article.thumbnailUrl} alt={article.title} />
              )}
              <ArticleContent>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>
                  {extractTextFromParagraphs(article.content)}
                </ArticleDescription>
              </ArticleContent>
              <ReadMoreLink to={`/notice/${article.id}`}>
                Read More
              </ReadMoreLink>
            </ArticleCard>
          ))
        ) : (
          <NoArticlesMessage>글이 존재하지 않습니다.</NoArticlesMessage>
        )}
      </Grid>
    </CommunityWrapper>
  );
};

export default Community;
