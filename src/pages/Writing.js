import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useIsMobile } from '../hooks/useIsMobile';
import { articles } from '../components/articlesData';

const TAG_COLORS = {
  'Stoicism & Philosophy': '#5e6b4a',
  'Writing & Reflection': '#a08456',
  'AI': '#667eea',
  'Development': '#667eea',
  'Productivity': '#7a5a30',
  'Privacy': '#06b6d4',
  'Law': '#06b6d4',
  'Research': '#06b6d4',
  'Personal Growth': '#c4633c',
  'Resilience': '#c4633c',
  'Immigration': '#8a3f28',
  'Mental Health': '#5e6b4a',
  'Habits': '#5e6b4a',
};

const tagColor = (tag) => TAG_COLORS[tag] || '#a08456';

const fmt = (d) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export default function Writing() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  const open = (a) => {
    if (a.type === 'external') window.open(a.externalUrl, '_blank');
    else navigate('/writing/' + a.id);
  };

  return (
    <PageShell title="▰ WRITING ROOM">
      <div style={{ marginTop: 20 }}>
        <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 38 : 56, fontWeight: 600, color: '#fbeed8', letterSpacing: -2, lineHeight: 1 }}>
          Writing<span style={{ color: '#d4a056' }}>.</span>
        </h1>
        <p style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#fbeed8', opacity: 0.85, marginTop: 8 }}>
          Essays on work, life, technology, and what it means to keep moving.
        </p>

        {/* Tickets */}
        <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {sorted.map((a, i) => (
            <div
              key={a.id}
              onClick={() => open(a)}
              style={{
                background: '#fffaf0',
                padding: isMobile ? '16px 18px 16px 22px' : '20px 26px 20px 28px',
                boxShadow: '0 12px 28px -8px rgba(40,20,10,0.35)',
                display: isMobile ? 'block' : 'flex', alignItems: 'flex-start', gap: 20,
                cursor: 'pointer',
                transform: isMobile ? 'none' : `rotate(${[-0.4, 0.3, -0.2, 0.4, -0.3, 0.2, -0.4, 0.3][i % 8]}deg)`,
                transition: 'transform 0.2s, box-shadow 0.2s',
                clipPath: 'polygon(1.5% 0, 100% 0, 100% 100%, 1.5% 100%, 0% 90%, 0.8% 80%, 0 70%, 0.8% 60%, 0 50%, 0.8% 40%, 0 30%, 0.8% 20%, 0 10%)',
                position: 'relative',
              }}
              onMouseEnter={isMobile ? undefined : e => { e.currentTarget.style.transform = 'rotate(0deg) translateX(6px)'; e.currentTarget.style.boxShadow = '0 18px 36px -10px rgba(40,20,10,0.5)'; }}
              onMouseLeave={isMobile ? undefined : e => { e.currentTarget.style.transform = `rotate(${[-0.4, 0.3, -0.2, 0.4, -0.3, 0.2, -0.4, 0.3][i % 8]}deg)`; e.currentTarget.style.boxShadow = '0 12px 28px -8px rgba(40,20,10,0.35)'; }}
            >
              {isMobile ? (
                /* ── Mobile: full-width title layout ── */
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, color: '#a04020', lineHeight: 1.4 }}>
                      {fmt(a.date)} · <span style={{ color: '#5a4530' }}>{a.type === 'external' ? 'LinkedIn' : '5 min'}</span>
                    </div>
                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#c4633c', flexShrink: 0 }}>
                      {a.type === 'external' ? 'open ↗' : 'read →'}
                    </div>
                  </div>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 20, fontWeight: 600, color: '#1f1d18', lineHeight: 1.2 }}>
                    {a.title}
                  </div>
                  <p style={{ fontSize: 13, color: '#5a4530', marginTop: 6, lineHeight: 1.55 }}>
                    {a.description}
                  </p>
                  {a.tags && (
                    <div style={{ display: 'flex', gap: 5, marginTop: 10, flexWrap: 'wrap' }}>
                      {a.tags.map(t => (
                        <span key={t} style={{
                          padding: '2px 9px', borderRadius: 999,
                          background: tagColor(t) + '20', color: tagColor(t),
                          fontSize: 10, fontFamily: '"Special Elite", monospace', letterSpacing: 0.5,
                        }}>#{t}</span>
                      ))}
                    </div>
                  )}
                  {a.featured && (
                    <div style={{
                      position: 'absolute', top: 0, right: 0,
                      background: '#d4a056', color: '#2a1808',
                      fontFamily: '"Special Elite", monospace', fontSize: 9,
                      letterSpacing: 1, padding: '3px 10px',
                    }}>★ FEATURED</div>
                  )}
                </>
              ) : (
                /* ── Desktop: horizontal date column layout ── */
                <>
                  <div style={{
                    fontFamily: '"Special Elite", monospace', fontSize: 11,
                    color: '#a04020', minWidth: 90, lineHeight: 1.5,
                    borderRight: '1px dashed #c4633c', paddingRight: 20,
                  }}>
                    {fmt(a.date)}<br />
                    <span style={{ color: '#5a4530' }}>{a.type === 'external' ? 'LinkedIn ↗' : '5 min read'}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 600, color: '#1f1d18', lineHeight: 1.2 }}>
                      {a.title}
                    </div>
                    <p style={{ fontSize: 13, color: '#5a4530', marginTop: 6, lineHeight: 1.6 }}>
                      {a.description}
                    </p>
                    {a.tags && (
                      <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                        {a.tags.map(t => (
                          <span key={t} style={{
                            padding: '3px 10px', borderRadius: 999,
                            background: tagColor(t) + '20', color: tagColor(t),
                            fontSize: 11, fontFamily: '"Special Elite", monospace', letterSpacing: 0.5,
                          }}>#{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div style={{ fontFamily: '"Caveat", cursive', fontSize: 26, color: '#c4633c', flexShrink: 0, alignSelf: 'center' }}>
                    {a.type === 'external' ? 'open ↗' : 'read →'}
                  </div>
                  {a.featured && (
                    <div style={{
                      position: 'absolute', top: 0, right: 0,
                      background: '#d4a056', color: '#2a1808',
                      fontFamily: '"Special Elite", monospace', fontSize: 10,
                      letterSpacing: 1, padding: '4px 12px',
                    }}>★ FEATURED</div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Signature */}
        <div style={{ marginTop: 60, textAlign: 'right' }}>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 32, color: '#fbeed8', textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
            ~ Juan
          </div>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, color: 'rgba(251,238,216,0.5)', letterSpacing: 2, marginTop: 4 }}>
            {articles.length} ESSAYS TOTAL · MORE DRAFTING
          </div>
        </div>
      </div>
    </PageShell>
  );
}
