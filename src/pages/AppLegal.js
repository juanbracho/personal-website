import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { legalContent } from '../components/appLegalData';
import { appDetailData } from '../components/appDetailData';

export default function AppLegal({ legalType }) {
  const { appId } = useParams();
  const navigate  = useNavigate();
  const detail    = appDetailData[appId];
  const legal     = legalContent[appId]?.[legalType];

  if (!legal) {
    return (
      <PageShell title="NOT FOUND">
        <div style={{ color: '#fbeed8', fontFamily: '"Fraunces", serif', fontSize: 28, marginTop: 40 }}>
          Legal page not found. <span onClick={() => navigate('/apps')} style={{ cursor: 'pointer', color: '#d4a056', textDecoration: 'underline' }}>Back to apps →</span>
        </div>
      </PageShell>
    );
  }

  const appColor = detail?.colors?.primary || '#c4633c';

  return (
    <PageShell title={`▰ ${appId?.toUpperCase()} · ${legalType?.toUpperCase()}`}>
      <div style={{ marginTop: 20, maxWidth: 800 }}>
        {/* Paper */}
        <div style={{
          background: '#fffaf0',
          padding: '48px 56px 56px',
          borderRadius: 4,
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5)',
        }}>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: appColor, textTransform: 'uppercase' }}>
            {appId} · {legalType}
          </div>
          <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: 44, fontWeight: 600, letterSpacing: -1, marginTop: 10, color: '#1f1d18' }}>
            {legal.title}
          </h1>
          {legal.lastUpdated && (
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 18, color: '#5a4530', marginTop: 6 }}>
              Last updated: {legal.lastUpdated}
            </div>
          )}

          <div style={{ marginTop: 32 }}>
            {legal.sections?.map((section, i) => (
              <div key={i} style={{ marginBottom: 26 }}>
                {section.heading && (
                  <h2 style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 600, color: '#1f1d18', marginBottom: 10 }}>
                    {section.heading}
                  </h2>
                )}
                {section.type === 'paragraph' && (
                  <p style={{ fontFamily: '"Fraunces", serif', fontSize: 16, lineHeight: 1.7, color: '#3a2f22' }}>{section.content}</p>
                )}
                {section.type === 'intro' && (
                  <p style={{ fontFamily: '"Fraunces", serif', fontSize: 16, lineHeight: 1.7, color: '#3a2f22', fontStyle: 'italic', borderLeft: `4px solid ${appColor}`, paddingLeft: 16 }}>{section.content}</p>
                )}
                {section.type === 'list' && (
                  <div>
                    {section.intro && <p style={{ fontFamily: '"Fraunces", serif', fontSize: 15, color: '#3a2f22', marginBottom: 8 }}>{section.intro}</p>}
                    <ul style={{ paddingLeft: 20 }}>
                      {section.items?.map((item, j) => (
                        <li key={j} style={{ fontFamily: '"Fraunces", serif', fontSize: 15, lineHeight: 1.65, color: '#3a2f22', marginBottom: 4 }}>{item}</li>
                      ))}
                    </ul>
                    {section.footer && <p style={{ fontFamily: '"Fraunces", serif', fontSize: 14, color: '#5a4530', marginTop: 8, fontStyle: 'italic' }}>{section.footer}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, padding: '16px 20px', background: '#f5e8d4', borderRadius: 8, border: '1px dashed #c4633c' }}>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 18, color: '#a04020' }}>
              Questions? Reach us at support@juan.app
            </div>
          </div>

          <div style={{ marginTop: 32, fontFamily: '"Caveat", cursive', fontSize: 28, color: '#c4633c', transform: 'rotate(-2deg)', display: 'inline-block' }}>
            ~ Juan
          </div>
        </div>
      </div>
    </PageShell>
  );
}
