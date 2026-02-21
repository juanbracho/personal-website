import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { articles } from '../components/articlesData';
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

  return (
    <div className="content-wrapper article-detail">
      <button className="back-button brutal-button" onClick={() => navigate('/articles')}>
        ← Back to Articles
      </button>

      <article className="article-content">
        <header className="article-detail-header">
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="article-cover-image"
            />
          )}

          <h1 className="article-detail-title">{article.title}</h1>
          <p className="article-detail-date mono">{article.date}</p>

          {article.tags && (
            <div className="article-detail-tags">
              {article.tags.map((tag, index) => (
                <span key={index} className="article-tag">{tag}</span>
              ))}
            </div>
          )}
        </header>

        <div className="article-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>
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
