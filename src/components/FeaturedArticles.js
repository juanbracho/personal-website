import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { articles } from './articlesData';
import './FeaturedArticles.css';

const FeaturedArticles = () => {
  const navigate = useNavigate();

  // Always show the Master's thesis
  const thesis = articles.find(article => article.id === 'right-to-be-forgotten');

  // Get the 2 most recent articles (excluding the thesis)
  const recentArticles = articles
    .filter(article => article.id !== 'right-to-be-forgotten' && article.featured)
    .slice(0, 2);

  // Combine: thesis first, then recent articles
  const featuredArticles = thesis ? [thesis, ...recentArticles] : recentArticles;

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
