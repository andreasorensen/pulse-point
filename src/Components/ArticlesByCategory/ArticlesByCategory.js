import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticlesByCategory = () => {
  const { category } = useParams();
  const [articlesByCategory, setArticlesByCategory] = useState([]);

  // useEffect(() => {
  //   async function fetchArticlesByCategory() {
  //     try {
  //       const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e8f640ab533a41c0919ec63d9d53b6c4`);
  //       const data = await response.json();
  //       setArticlesByCategory(data.articles);
  //     } catch (error) {
  //       console.error(`There was an error fetching articles for category ${category}:`, error);
  //     }
  //   }

  //   fetchArticlesByCategory();
  // }, [category]);

  return (
    <div>
      <h1 className='category'>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      <ArticleCard articles={articlesByCategory} />
    </div>
  );
}

export default ArticlesByCategory;
