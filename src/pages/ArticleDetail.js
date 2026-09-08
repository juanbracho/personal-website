import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import BroadsheetShell from '../components/BroadsheetShell';
import { articles } from '../components/articlesData';
import GetALetterCard from '../components/GetALetterCard';

const fmt = (d) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default function ArticleDetail() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <BroadsheetShell pageTitle="Not Found">
        <p style={{ marginTop: 40 }}>
          Essay not found. <span onClick={() => navigate('/writing')} style={{ cursor: 'pointer', color: 'var(--red)', textDecoration: 'underline' }}>Back to writing →</span>
        </p>
      </BroadsheetShell>
    );
  }

  if (article.type === 'external') {
    window.open(article.externalUrl, '_blank', 'noopener,noreferrer');
    navigate('/writing');
    return null;
  }

  const related = articles.filter(a => a.id !== article.id && a.type === 'internal').slice(0, 3);

  return (
    <BroadsheetShell pageTitle={article.title}>
      <div className="bs-region" style={{ marginTop: 20 }}>
        <div className="bs-reader">
          <div className="bs-kicker">{fmt(article.date)} · 5 min read</div>
          <h1 className="bs-hl" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>{article.title}</h1>
          {article.description && (
            <p style={{ fontStyle: 'italic', color: 'var(--mid)', borderBottom: '1px solid var(--rule)', paddingBottom: 16, marginBottom: 20 }}>
              {article.description}
            </p>
          )}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content || ''}</ReactMarkdown>

          {article.tags && (
            <div style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
              {article.tags.map(t => <span className="bs-el" key={t} style={{ fontSize: 11, color: 'var(--mid)', border: '1px solid var(--rule)', padding: '3px 9px' }}>#{t}</span>)}
            </div>
          )}

          <div className="bs-byline" style={{ marginTop: 32 }}>
            <span onClick={() => navigate('/writing')} style={{ cursor: 'pointer', color: 'var(--red)' }}>← All essays</span>
          </div>
        </div>

        <div>
          {related.length > 0 && (
            <div className="bs-stampbox" style={{ marginBottom: 22 }}>
              <h4>Also Reading</h4>
              {related.map(a => (
                <div key={a.id} onClick={() => navigate('/writing/' + a.id)} style={{ cursor: 'pointer', borderBottom: '1px solid var(--rule)', paddingBottom: 10, marginBottom: 10 }}>
                  <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 16, fontWeight: 700, lineHeight: 1.25 }}>{a.title}</div>
                  <div className="bs-el" style={{ fontSize: 10, color: 'var(--faint)', marginTop: 3 }}>{new Date(a.date).getFullYear()}</div>
                </div>
              ))}
            </div>
          )}
          <div className="bs-stampbox" style={{ marginBottom: 22 }}>
            <h4>Say Something</h4>
            <p style={{ fontSize: 14, color: 'var(--mid)', marginBottom: 12 }}>Thoughts on this essay? I'd love to hear them.</p>
            <button onClick={() => navigate('/contact')} className="bs-el" style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--red)', background: 'none', border: '2px solid var(--red)', padding: '9px 16px', cursor: 'pointer' }}>
              Write to me →
            </button>
          </div>
          <GetALetterCard />
        </div>
      </div>
    </BroadsheetShell>
  );
}
