import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './HomePage.css'

const HomePage = ({ articles }) => {
  return (
    <div className='homepage'>
      <h1 className='header'>Top Headlines</h1>
      <ArticleCard articles={articles} />
    </div>
  );
}

export default HomePage;
