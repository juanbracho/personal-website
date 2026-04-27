import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PageShell from '../components/PageShell';
import { useIsMobile } from '../hooks/useIsMobile';
import { articles } from '../components/articlesData';

const fmt = (d) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default function ArticleDetail() {
  const { articleId } = useParams();
  const navigate      = useNavigate();
  const isMobile      = useIsMobile();
  const article       = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <PageShell title="NOT FOUND">
        <div style={{ color: '#fbeed8', fontFamily: '"Fraunces", serif', fontSize: 28, marginTop: 40 }}>
          Essay not found. <span onClick={() => navigate('/writing')} style={{ cursor: 'pointer', color: '#d4a056', textDecoration: 'underline' }}>Back to writing →</span>
        </div>
      </PageShell>
    );
  }

  if (article.type === 'external') {
    window.open(article.externalUrl, '_blank');
    navigate('/writing');
    return null;
  }

  const related = articles
    .filter(a => a.id !== article.id && a.type === 'internal')
    .slice(0, 3);

  return (
    <PageShell title="▰ READING ROOM">
      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 300px', gap: 28, alignItems: 'start' }}>

        {/* ── Main paper ── */}
        <div style={{
          background: '#fffaf0',
          padding: isMobile ? '36px 24px 48px' : '56px 72px 72px',
          borderRadius: 2,
          boxShadow: '0 40px 60px -20px rgba(0,0,0,0.5)',
          position: 'relative',
        }}>
          {/* Torn top edge SVG */}
          <svg width="100%" height="20" style={{ position: 'absolute', top: -1, left: 0, color: '#fffaf0', display: 'block' }}>
            <path d="M0,20 Q40,8 80,16 T160,12 T240,18 T320,10 T400,14 T480,16 T560,8 T640,18 T720,12 T800,16 T880,10 T960,14 T1040,18 T1120,8 T1200,12 L1200,0 L0,0 Z" fill="currentColor" />
          </svg>

          {/* Metadata */}
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, color: '#a04020', letterSpacing: 2, textTransform: 'uppercase' }}>
            {fmt(article.date)} · 5 min read
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 36 : 60, lineHeight: 1.02, fontWeight: 600, margin: '14px 0 0', letterSpacing: isMobile ? -1 : -2, color: '#1f1d18' }}>
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.description && (
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 24, color: '#5a4530', marginTop: 14, fontStyle: 'italic', lineHeight: 1.4 }}>
              {article.description}
            </div>
          )}

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(90,69,48,0.2)', margin: '28px 0' }} />

          {/* Drop cap first para + body */}
          <div className="desk-prose" style={{ position: 'relative' }}>
            {/* Margin doodle */}
            {!isMobile && (
              <div style={{
                position: 'absolute', top: 40, right: -20, transform: 'rotate(8deg)',
                fontFamily: '"Caveat", cursive', fontSize: 20, color: '#a04020',
                border: '2px solid #a04020', borderRadius: 999,
                padding: '5px 12px', background: '#fffaf0',
              }}>
                ★ key idea
              </div>
            )}

            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content || ''}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {article.tags && (
            <div style={{ display: 'flex', gap: 8, marginTop: 36, flexWrap: 'wrap' }}>
              {article.tags.map(t => (
                <span key={t} style={{
                  padding: '5px 14px', borderRadius: 999,
                  background: 'rgba(196,99,60,0.12)', color: '#c4633c',
                  fontSize: 12, fontFamily: '"Special Elite", monospace', letterSpacing: 0.5,
                }}>#{t}</span>
              ))}
            </div>
          )}

          {/* Signature */}
          <div style={{ marginTop: 48, fontFamily: '"Caveat", cursive', fontSize: 48, color: '#c4633c', transform: 'rotate(-3deg)', display: 'inline-block' }}>
            ~ Juan
          </div>

          {/* Bottom nav */}
          <div style={{ marginTop: 36, borderTop: '1px dashed rgba(90,69,48,0.25)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={() => navigate('/writing')} style={{ fontFamily: '"Special Elite", monospace', fontSize: 12, letterSpacing: 1.5, background: 'none', border: 'none', color: '#a04020', cursor: 'pointer', textDecoration: 'underline' }}>
              ← ALL ESSAYS
            </button>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 18, color: '#5a4530' }}>
              read more below ↓
            </div>
          </div>
        </div>

        {/* ── Side rail ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: isMobile ? 'relative' : 'sticky', top: isMobile ? 0 : 80 }}>

          {/* Tags sticky note */}
          {article.tags && (
            <div style={{
              background: '#fef080', padding: 18, transform: 'rotate(2deg)',
              boxShadow: '0 12px 24px -8px rgba(0,0,0,0.4)',
              fontFamily: '"Caveat", cursive', color: '#3a2f22', fontSize: 18, lineHeight: 1.6,
            }}>
              <div style={{ fontWeight: 700, fontSize: 21, marginBottom: 6 }}>tags:</div>
              {article.tags.map(t => `#${t.toLowerCase()}`).join('  ')}
            </div>
          )}

          {/* Related */}
          {related.length > 0 && (
            <div style={{
              background: '#fffaf0', padding: 22, borderRadius: 4,
              boxShadow: '0 12px 24px -8px rgba(0,0,0,0.4)',
              borderLeft: '6px solid #5e6b4a',
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: '#5e6b4a', textTransform: 'uppercase', marginBottom: 14 }}>
                also reading
              </div>
              {related.map(a => (
                <div key={a.id} onClick={() => navigate('/writing/' + a.id)} style={{ borderBottom: '1px dashed rgba(196,99,60,0.3)', paddingBottom: 12, marginBottom: 12, cursor: 'pointer' }}>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 16, fontWeight: 600, color: '#1f1d18', lineHeight: 1.25 }}>{a.title}</div>
                  <div style={{ fontSize: 11, color: '#5a4530', marginTop: 3, fontFamily: '"Special Elite", monospace', letterSpacing: 0.5 }}>
                    {new Date(a.date).getFullYear()}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contact card */}
          <div style={{
            background: '#1f1d18', color: '#fbeed8', padding: 22, borderRadius: 4,
            boxShadow: '0 12px 24px -8px rgba(0,0,0,0.5)',
          }}>
            <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: '#e8a878', textTransform: 'uppercase', marginBottom: 10 }}>
              say something
            </div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 17, lineHeight: 1.4, marginBottom: 14 }}>
              Thoughts on this essay? I'd love to hear them.
            </div>
            <button onClick={() => navigate('/contact')} style={{
              width: '100%', padding: '10px', background: '#c4633c',
              color: '#fff', border: 'none', borderRadius: 6,
              fontWeight: 600, fontSize: 13, cursor: 'pointer',
              fontFamily: '"Special Elite", monospace', letterSpacing: 1,
            }}>
              WRITE TO ME →
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
