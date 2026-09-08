import React from 'react';
import { useNavigate } from 'react-router-dom';
import BroadsheetShell from '../components/BroadsheetShell';
import { mobileApps } from '../components/appsData';

export default function Apps() {
  const navigate = useNavigate();

  return (
    <BroadsheetShell pageTitle="The Workshop">
      <div className="bs-shead" style={{ marginTop: 20 }}>
        <h2>The Workshop</h2>
        <span className="bs-no">Advertisement · apps built 2025</span>
      </div>
      <div className="bs-ads">
        {mobileApps.map(app => (
          <div className="bs-ad" key={app.id} onClick={() => navigate('/apps/' + app.id)} style={{ cursor: 'pointer' }}>
            <div className="bs-k">Now on {app.platforms.join(' & ')}</div>
            <h3>{app.name}</h3>
            <p>{app.tagline}. {app.description.split('.')[0]}.</p>
            <span className="bs-buy">Get it →</span>
          </div>
        ))}
      </div>

      <div className="bs-shead">
        <h2>The Philosophy</h2>
        <span className="bs-no">why these exist</span>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--mid)', maxWidth: 720 }}>
        Each app started as something I needed but couldn't find. Small, focused, local-first, no accounts.
        Built solo, mostly with AI assistance — shipped because they worked for me, shared in case they work for you.
      </p>
    </BroadsheetShell>
  );
}
