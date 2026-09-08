import React from 'react';
import { useNavigate } from 'react-router-dom';
import BroadsheetShell from '../components/BroadsheetShell';
import { articles } from '../components/articlesData';

export default function Writing() {
  const navigate = useNavigate();

  const sorted = [...articles].sort((a, b) => {
    if (b.featured !== a.featured) return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    return new Date(b.date) - new Date(a.date);
  });

  const open = (a) => {
    if (a.type === 'external') window.open(a.externalUrl, '_blank', 'noopener,noreferrer');
    else navigate('/writing/' + a.id);
  };

  return (
    <BroadsheetShell pageTitle="From the Columns">
      <div className="bs-shead" style={{ marginTop: 20 }}>
        <h2>From the Columns</h2>
        <span className="bs-no">{articles.length} essays</span>
      </div>
      {sorted.map((a, i) => (
        <div className="bs-brief" key={a.id} onClick={() => open(a)} style={{ cursor: 'pointer' }}>
          <span className="bs-n">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{a.title}{a.type === 'external' ? ' ↗' : ''}</h3>
            <p>{a.description}</p>
          </div>
          <span className="bs-yr">{new Date(a.date).getFullYear()}</span>
        </div>
      ))}
    </BroadsheetShell>
  );
}
