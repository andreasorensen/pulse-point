import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import ArticleDetail from '../ArticleDetails/ArticleDetails';
import ArticlesByCategory from '../ArticlesByCategory/ArticlesByCategory';
import { filterArticles } from '../../utils';
import './App.css'

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchTopHeadlines() {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e8f640ab533a41c0919ec63d9d53b6c4');
        const data = await response.json();

        const filtered = filterArticles(data.articles);
        setArticles(filtered);
      } catch (error) {
        console.error("There was an error fetching top headlines:", error);
      }
    }

    fetchTopHeadlines();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage articles={articles} />}/>
        <Route path="/category/:category" element={<ArticlesByCategory />} />
        <Route path="/article/:title" element={<ArticleDetail articles={articles}/>} />
      </Routes>
    </>
  );
}

export default App;
