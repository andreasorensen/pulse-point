import React from 'react';
import { NavLink } from 'react-router-dom';
import './ArticleCard.css'

const ArticleCard = ({ articles }) => {
  return (
    <div className="article-container">
      {articles.map((article, index) => (
        <div key={index} className='article-card'>
          <NavLink to={`/article/${article.title}`}>
            <h2 className='title'>{article.title}</h2>
            <img className='image' src={article.urlToImage} alt={article.title} />
            <p className='description'>{article.description}</p>
            <p className='date'>{new Date(article.publishedAt).toDateString()}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default ArticleCard;
