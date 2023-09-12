import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';

const HomePage = ({ articles }) => {
  return (
    <div>
      <h1 className='header'>Top Headlines</h1>
      <ArticleCard articles={articles} />
    </div>
  );
}

export default HomePage;
