import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { articles } from './articlesData';
import './FeaturedArticles.css';

const FeaturedArticles = () => {
  const navigate = useNavigate();
  const featuredArticles = articles.filter(article => article.featured).slice(0, 3);

  const handleArticleClick = (article) => {
    if (article.type === 'external') {
      window.open(article.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigate(`/articles/${article.id}`);
    }
  };

  return (
    <section className="featured-articles">
      <div className="featured-articles-header">
        <h2>Recent Writing</h2>
        <Link to="/articles" className="brutal-button">View All Articles →</Link>
      </div>

      <div className="featured-articles-grid">
        {featuredArticles.map((article) => (
          <div
            key={article.id}
            className="featured-article-card brutal-card"
            onClick={() => handleArticleClick(article)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleArticleClick(article)}
          >
            <div className="featured-article-header">
              <span className="featured-article-date mono">{article.date}</span>
              <span className="featured-article-type mono">
                {article.type === 'external' ? '↗' : '→'}
              </span>
            </div>

            <h3 className="featured-article-title">{article.title}</h3>

            <div className="featured-article-tags">
              {article.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="featured-article-tag mono">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
