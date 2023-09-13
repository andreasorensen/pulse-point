import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetails.css'

const ArticleDetail = ({ articles }) => {
  const { title } = useParams();

  const article = articles.find(article => article.title === title);

  if (!article) {
    return <p className='not-found'>Article not found!</p>;
  }

  return (
    <div className='details-container'>
      <h1 className='article-title'>{article.title}</h1>
      <img className='article-image' src={article.urlToImage} alt={article.title} />
      <p className='article-date'>{new Date(article.publishedAt).toDateString()}</p>
      <p className='article-source' >Source: {article.source.name}</p>
      <p className='content'>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
