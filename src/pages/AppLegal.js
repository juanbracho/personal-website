import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BroadsheetShell from '../components/BroadsheetShell';
import { legalContent } from '../components/appLegalData';

export default function AppLegal({ legalType }) {
  const { appId } = useParams();
  const navigate = useNavigate();
  const legal = legalContent[appId]?.[legalType];

  if (!legal) {
    return (
      <BroadsheetShell pageTitle="Not Found">
        <p style={{ marginTop: 40 }}>
          Legal page not found. <span onClick={() => navigate('/apps')} style={{ cursor: 'pointer', color: 'var(--red)', textDecoration: 'underline' }}>Back to apps →</span>
        </p>
      </BroadsheetShell>
    );
  }

  return (
    <BroadsheetShell pageTitle={`${appId} · ${legalType}`}>
      <div className="bs-reader" style={{ marginTop: 20 }}>
        <div className="bs-kicker">{appId} · {legalType}</div>
        <h1 className="bs-hl" style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}>{legal.title}</h1>
        {legal.lastUpdated && <p style={{ fontStyle: 'italic', color: 'var(--mid)' }}>Last updated: {legal.lastUpdated}</p>}

        {legal.sections?.map((section, i) => (
          <div key={i} style={{ marginBottom: 22 }}>
            {section.heading && <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{section.heading}</h2>}
            {section.type === 'paragraph' && <p>{section.content}</p>}
            {section.type === 'intro' && <p style={{ fontStyle: 'italic', borderLeft: '3px solid var(--red)', paddingLeft: 14 }}>{section.content}</p>}
            {section.type === 'list' && (
              <div>
                {section.intro && <p>{section.intro}</p>}
                <ul style={{ paddingLeft: 20 }}>
                  {section.items?.map((item, j) => <li key={j} style={{ marginBottom: 6 }}>{item}</li>)}
                </ul>
                {section.footer && <p style={{ fontStyle: 'italic', color: 'var(--mid)' }}>{section.footer}</p>}
              </div>
            )}
          </div>
        ))}

        <p className="bs-el" style={{ fontSize: 13, color: 'var(--mid)' }}>Questions? Reach us at support@juan.app</p>
      </div>
    </BroadsheetShell>
  );
}
