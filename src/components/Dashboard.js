import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../index";
import { getAuth } from "firebase/auth";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { parse } from "node-html-parser";

const DashboardWrapper = styled.div`
  background-color: #fdfcf8;
  padding: 100px 0;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Pretendard;
  min-height: 100vh;

  h1 {
    text-align: center;
    font-family: Pretendard;
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
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
`;

const ArticleImage = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  margin-bottom: 20px;
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: ${(props) => (props.delete ? "#d9534f" : "#0275d8")};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.delete ? "#c9302c" : "#025aa5")};
  }
`;

const WriteButton = styled(Link)`
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 30px auto;
  padding: 10px 0;
  text-align: center;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #555;
  }
`;

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, "notices");
      const articlesSnapshot = await getDocs(articlesCollection);
      const articlesList = articlesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articlesList);
      setFilteredArticles(articlesList);
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const checkAdmin = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const adminDoc = await getDoc(doc(db, "admin", user.uid));
          if (adminDoc.exists()) {
            const adminData = adminDoc.data();
            if (adminData.isAdmin) {
              setLoading(false);
            } else {
              alert(
                "관리자가 권한을 부여하기 전에는 이 기능을 사용할 수 없습니다."
              );
              navigate("/admin");
            }
          } else {
            alert(
              "관리자가 권한을 부여하기 전에는 이 기능을 사용할 수 없습니다."
            );
            navigate("/admin");
          }
        } else {
          navigate("/admin");
        }
      });

      return () => unsubscribe();
    };

    checkAdmin();
  }, [auth, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this article?"
    );
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "notices", id));
        setArticles(articles.filter((article) => article.id !== id));
        setFilteredArticles(
          filteredArticles.filter((article) => article.id !== id)
        );
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  return (
    <DashboardWrapper>
      <h1>Admin Dashboard</h1>
      <FilterChips>
        <Chip
          active={activeCategory === "all"}
          onClick={() => handleFilterChange("all")}
        >
          All
        </Chip>
        <Chip
          active={activeCategory === "공지"}
          onClick={() => handleFilterChange("공지")}
        >
          공지
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
      <WriteButton to="/write">글쓰기 페이지</WriteButton>
      <WriteButton to="/banner">배너 관리 페이지</WriteButton>
      <Grid>
        {filteredArticles.map((article) => (
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
            <ArticleTitle to={`/notice/${article.id}`}>
              {article.title}
            </ArticleTitle>
            <ArticleDescription>
              {extractTextFromParagraphs(article.content)}
            </ArticleDescription>
            <ButtonGroup>
              <Button onClick={() => navigate(`/edit/${article.id}`)}>
                Edit
              </Button>
              <Button delete onClick={() => handleDelete(article.id)}>
                Delete
              </Button>
            </ButtonGroup>
          </ArticleCard>
        ))}
      </Grid>
    </DashboardWrapper>
  );
};

export default Dashboard;
