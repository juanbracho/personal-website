import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articles, articleContent } from '../components/articlesData';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const article = articles.find(a => a.id === articleId);

  if (!article || article.type === 'external') {
    return (
      <div className="content-wrapper article-not-found">
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist or is an external link.</p>
        <button className="brutal-button" onClick={() => navigate('/articles')}>
          ← Back to Articles
        </button>
      </div>
    );
  }

  const content = articleContent[articleId];

  return (
    <div className="content-wrapper article-detail">
      <button className="back-button brutal-button" onClick={() => navigate('/articles')}>
        ← Back to Articles
      </button>

      <article className="article-content">
        <header className="article-detail-header">
          <h1 className="article-detail-title">{content.title}</h1>
          <p className="article-detail-date mono">{content.date}</p>

          {article.tags && (
            <div className="article-detail-tags">
              {article.tags.map((tag, index) => (
                <span key={index} className="article-tag">{tag}</span>
              ))}
            </div>
          )}
        </header>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      </article>

      <footer className="article-detail-footer">
        <button className="brutal-button" onClick={() => navigate('/articles')}>
          ← Back to All Articles
        </button>
      </footer>
    </div>
  );
};

export default ArticleDetail;
