import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import ArticleDetail from "../ArticleDetails/ArticleDetails";
import ArticlesByCategory from "../ArticlesByCategory/ArticlesByCategory";
import { filterArticles } from "../../utils";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    async function fetchTopHeadlines() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        const data = await response.json();

        const filtered = filterArticles(data.articles);
        setArticles(filtered);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchTopHeadlines();
  }, [apiKey]);

  return (
    <>
      <Navbar />
      {error ? (
        <p className="error-msg">{error}</p>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage articles={articles} />} />
          <Route
            path="/category/:category"
            element={<ArticlesByCategory apiKey={apiKey} />}
          />
          <Route
            path="/article/:title"
            element={<ArticleDetail articles={articles} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
