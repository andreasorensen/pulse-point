import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetails.css'

const ArticleDetail = ({ articles, apiKey }) => {
  const { title } = useParams();
  
  const [fetchedArticle, setFetchedArticle] = useState(null);
  const [error, setError] = useState(null);
  
  const article = articles.find(article => article.title === title);

  useEffect(() => {
    async function fetchArticleDetails() {
      try {
        const encodedTitle = encodeURIComponent(title);
        const response = await fetch(`https://newsapi.org/v2/everything?q=${encodedTitle}&searchIn=title&pageSize=1&apiKey=${apiKey}`);
        
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          setFetchedArticle(data.articles[0]);
          setError(null);
        } else {
          throw new Error("No articles found.");
        }
      } catch (error) {
        setError(error.message);
      }
    }

    if (!article) {
      fetchArticleDetails();
    }
  }, [title, apiKey, article]);

  const displayedArticle = article || fetchedArticle;

  if (error) {
    return <p className="error-msg">{error}</p>;
  }

  if (!displayedArticle) {
    return <p>Loading...</p>;
  }

  return (
    <div className='details-container'>
      <h1 className='article-title'>{displayedArticle.title}</h1>
      <img className='article-image' src={displayedArticle.urlToImage} alt={displayedArticle.title} />
      <p className='article-date'>{new Date(displayedArticle.publishedAt).toDateString()}</p>
      <p className='article-source'>Source: {displayedArticle.source.name}</p>
      <p className='content'>{displayedArticle.content}</p>
    </div>
  );
}

export default ArticleDetail;
