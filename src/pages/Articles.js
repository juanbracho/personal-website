import React from 'react';
import { useNavigate } from 'react-router-dom';
import { articles } from '../components/articlesData';
import './Articles.css';

const Articles = () => {
  const navigate = useNavigate();

  const handleArticleClick = (article) => {
    if (article.type === 'external') {
      window.open(article.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigate(`/articles/${article.id}`);
    }
  };

  return (
    <div className="content-wrapper articles-page">
      <div className="articles-header">
        <h1>Writing & Articles</h1>
        <p>Thoughts on data analytics, iOS development, and continuous learning</p>
      </div>

      <div className="articles-grid">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-card brutal-card"
            onClick={() => handleArticleClick(article)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleArticleClick(article)}
          >
            <div className="article-header">
              <span className="article-date mono">{article.date}</span>
              <span className="article-type mono">
                {article.type === 'external' ? '↗' : '→'}
              </span>
            </div>

            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>

            <div className="article-tags">
              {article.tags.map((tag, index) => (
                <span key={index} className="article-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="no-articles">
          <p>Articles coming soon! Check back later for insights on data analytics and iOS development.</p>
        </div>
      )}
    </div>
  );
};

export default Articles;
