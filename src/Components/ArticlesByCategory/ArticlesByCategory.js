import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from '../ArticleCard/ArticleCard';
import { filterArticles } from '../../utils';

const ArticlesByCategory = () => {
  const { category } = useParams();
  const [articlesByCategory, setArticlesByCategory] = useState([]);

  useEffect(() => {
    async function fetchArticlesByCategory() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=735e143035ed491b801796553b059fd6`);
        const data = await response.json();
        const filtered = filterArticles(data.articles);
        setArticlesByCategory(filtered);
      } catch (error) {
        console.error(`There was an error fetching articles for category ${category}:`, error);
      }
    }

    fetchArticlesByCategory();
  }, [category]);

  return (
    <div>
      <h1 className='header'>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      <ArticleCard articles={articlesByCategory} />
    </div>
  );
}

export default ArticlesByCategory;
