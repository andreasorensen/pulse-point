import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from '../ArticleCard/ArticleCard';
import { filterArticles } from '../../utils';

const ArticlesByCategory = ({ apiKey }) => {
  const { category } = useParams();
  const [articlesByCategory, setArticlesByCategory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticlesByCategory() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`);
        const data = await response.json();
        const filtered = filterArticles(data.articles);
        setArticlesByCategory(filtered);
        setError(null);
      } catch (error) {
        setError(error.message)
      }
    }

    fetchArticlesByCategory();
  }, [category, apiKey]);

  return (
    <div>
      {error ? (
        <p className="error-msg">{error}</p>
      ) : (
        <>
          <h1 className='header'>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
          <ArticleCard articles={articlesByCategory} />
        </>
      )}
    </div>
  );
  

export default ArticlesByCategory;
