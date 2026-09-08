import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BroadsheetShell from '../components/BroadsheetShell';
import { appDetailData } from '../components/appDetailData';
import { mobileApps } from '../components/appsData';
import kageImg from '../assets/apps/kage.png';
import kaizenImg from '../assets/apps/kaizen.png';
import kiokuImg from '../assets/apps/kioku.png';

const APP_SCREENS = { kage: kageImg, kaizen: kaizenImg, kioku: kiokuImg };

const BUILD_STATS = {
  kaizen: [{ l: 'first commit', v: 'Aug 2025' }, { l: 'shipped', v: 'Oct 2025' }, { l: 'rewrites', v: '2' }, { l: 'loc', v: '~9k' }, { l: 'built solo', v: 'w/ AI' }, { l: 'caffeine', v: '∞' }],
  kage: [{ l: 'first commit', v: 'Jul 2025' }, { l: 'shipped', v: 'Sep 2025' }, { l: 'rewrites', v: '3' }, { l: 'loc', v: '~7k' }, { l: 'built solo', v: 'w/ AI' }, { l: 'caffeine', v: '∞' }],
  kioku: [{ l: 'first commit', v: 'Sep 2025' }, { l: 'shipped', v: 'Nov 2025' }, { l: 'rewrites', v: '2' }, { l: 'loc', v: '~8.3k' }, { l: 'built solo', v: 'w/ AI' }, { l: 'caffeine', v: '∞' }],
};

export default function AppDetail() {
  const { appId } = useParams();
  const navigate = useNavigate();
  const detail = appDetailData[appId];
  const app = mobileApps.find(a => a.id === appId);

  if (!detail || !app) {
    return (
      <BroadsheetShell pageTitle="Not Found">
        <p style={{ marginTop: 40 }}>
          App not found. <span onClick={() => navigate('/apps')} style={{ cursor: 'pointer', color: 'var(--red)', textDecoration: 'underline' }}>Back to apps →</span>
        </p>
      </BroadsheetShell>
    );
  }

  const stats = BUILD_STATS[appId] || BUILD_STATS.kaizen;

  return (
    <BroadsheetShell pageTitle={app.name}>
      <div className="bs-region" style={{ marginTop: 20, gridTemplateColumns: '320px 1fr' }}>
        <div className="bs-polaroid" style={{ maxWidth: 260, transform: 'rotate(1.5deg)' }}>
          <img src={APP_SCREENS[app.id]} alt={app.name} style={{ objectPosition: 'top' }} />
          <div className="bs-cap">actual screen ↑</div>
        </div>

        <div>
          <div className="bs-kicker">Now on {app.platforms.join(' & ')}</div>
          <h1 className="bs-hl" style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}>{app.name}</h1>
          <p style={{ fontStyle: 'italic', color: 'var(--mid)', marginBottom: 20 }}>{app.tagline}</p>
          <p>{detail.fullDescription}</p>
          <p style={{ fontStyle: 'italic', color: 'var(--mid)' }}>{detail.philosophy}</p>

          <div style={{ display: 'flex', gap: 14, margin: '20px 0' }}>
            <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="bs-el" style={{ border: '2px solid var(--ink)', padding: '9px 18px', color: 'var(--ink)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' }}>App Store ↗</a>
            <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="bs-el" style={{ border: '2px solid var(--ink)', padding: '9px 18px', color: 'var(--ink)', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' }}>
              Google Play {app.playStoreStatus ? `(${app.playStoreStatus})` : '↗'}
            </a>
          </div>

          <div className="bs-shead"><h2 style={{ fontSize: 18 }}>Built With</h2></div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {app.tech.map(t => <span className="bs-el" key={t} style={{ fontSize: 10, color: 'var(--mid)', border: '1px solid var(--rule)', padding: '3px 9px' }}>{t}</span>)}
          </div>

          <div className="bs-shead"><h2 style={{ fontSize: 18 }}>Behind the Build</h2></div>
          <div className="bs-strip" style={{ borderTop: 'none' }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 22, fontWeight: 700, color: 'var(--ink)' }}>{s.v}</div>
                <div className="bs-el" style={{ fontSize: 10, color: 'var(--faint)', textTransform: 'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, display: 'flex', gap: 16 }}>
            <span className="bs-el" onClick={() => navigate(`/apps/${appId}/privacy`)} style={{ fontSize: 10, color: 'var(--red)', cursor: 'pointer', textDecoration: 'underline' }}>Privacy Policy</span>
            <span className="bs-el" onClick={() => navigate(`/apps/${appId}/terms`)} style={{ fontSize: 10, color: 'var(--red)', cursor: 'pointer', textDecoration: 'underline' }}>Terms</span>
            <span className="bs-el" onClick={() => navigate(`/apps/${appId}/support`)} style={{ fontSize: 10, color: 'var(--red)', cursor: 'pointer', textDecoration: 'underline' }}>Support</span>
          </div>
        </div>
      </div>
    </BroadsheetShell>
  );
}
