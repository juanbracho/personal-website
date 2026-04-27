import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useIsMobile } from '../hooks/useIsMobile';
import { appDetailData } from '../components/appDetailData';
import { mobileApps } from '../components/appsData';
import { shadeD } from '../utils/color';
import kageImg   from '../assets/apps/kage.png';
import kaizenImg from '../assets/apps/kaizen.png';
import kiokuImg  from '../assets/apps/kioku.png';

const APP_SCREENS = { kage: kageImg, kaizen: kaizenImg, kioku: kiokuImg };

const APP_META = {
  kaizen: { glyph: '改', color: '#667eea', no: '01' },
  kage:   { glyph: '影', color: '#FF7101', no: '02' },
  kioku:  { glyph: '記', color: '#06b6d4', no: '03' },
};

const BUILD_STATS = {
  kaizen: [
    { l: 'first commit', v: 'Aug 2025' },
    { l: 'shipped',      v: 'Oct 2025' },
    { l: 'rewrites',     v: '2' },
    { l: 'loc',          v: '~9k' },
    { l: 'built solo',   v: 'w/ AI' },
    { l: 'caffeine',     v: '∞' },
  ],
  kage: [
    { l: 'first commit', v: 'Jul 2025' },
    { l: 'shipped',      v: 'Sep 2025' },
    { l: 'rewrites',     v: '3' },
    { l: 'loc',          v: '~7k' },
    { l: 'built solo',   v: 'w/ AI' },
    { l: 'caffeine',     v: '∞' },
  ],
  kioku: [
    { l: 'first commit', v: 'Sep 2025' },
    { l: 'shipped',      v: 'Nov 2025' },
    { l: 'rewrites',     v: '2' },
    { l: 'loc',          v: '~8.3k' },
    { l: 'built solo',   v: 'w/ AI' },
    { l: 'caffeine',     v: '∞' },
  ],
};

export default function AppDetail() {
  const { appId }  = useParams();
  const navigate   = useNavigate();
  const isMobile   = useIsMobile();
  const detail     = appDetailData[appId];
  const app        = mobileApps.find(a => a.id === appId);
  const meta       = APP_META[appId];

  if (!detail || !app || !meta) {
    return (
      <PageShell title="NOT FOUND">
        <div style={{ color: '#fbeed8', fontFamily: '"Fraunces", serif', fontSize: 32, marginTop: 40 }}>
          App not found. <span onClick={() => navigate('/apps')} style={{ cursor: 'pointer', textDecoration: 'underline', color: '#d4a056' }}>Back to apps →</span>
        </div>
      </PageShell>
    );
  }

  const stats = BUILD_STATS[appId] || BUILD_STATS.kaizen;

  return (
    <PageShell title={`▰ APP · ${app.name.toUpperCase()}`}>
      <div style={{ marginTop: 20 }}>

        {/* Drawer metaphor container */}
        <div style={{
          background: '#fffaf0',
          borderRadius: '4px 4px 20px 20px',
          boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6), inset 0 -8px 0 rgba(120,80,40,0.1)',
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '420px 1fr',
          overflow: 'hidden', position: 'relative',
          minHeight: isMobile ? 'auto' : 640,
        }}>
          {/* Drawer handle — click to go back */}
          <div
            onClick={() => navigate('/apps')}
            title="Back to apps"
            style={{
              position: 'absolute', top: -20, left: '50%',
              transform: 'translateX(-50%)',
              width: 80, height: 14,
              background: '#d4a056',
              borderRadius: '4px 4px 0 0',
              boxShadow: '0 -2px 4px rgba(0,0,0,0.2)',
              cursor: 'pointer',
            }}
          />
          {/* Back button — top right */}
          <button
            onClick={() => navigate('/apps')}
            style={{
              position: 'absolute', top: 16, right: 16, zIndex: 10,
              background: 'rgba(90,69,48,0.12)', border: 'none',
              borderRadius: 999, padding: '8px 18px',
              fontFamily: '"Special Elite", monospace', fontSize: 11,
              letterSpacing: 1.5, color: '#5a4530', cursor: 'pointer',
            }}
          >← CLOSE</button>

          {/* Left — phone mock */}
          <div style={{
            background: `linear-gradient(165deg, ${meta.color} 0%, ${shadeD(meta.color, -50)} 100%)`,
            padding: '60px 48px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Phone shell */}
            <div style={{
              width: 260, height: 540,
              background: '#1f1d18', borderRadius: 36, padding: 8,
              boxShadow: '0 30px 60px -10px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,255,255,0.1)',
            }}>
              <div style={{
                width: '100%', height: '100%',
                borderRadius: 30, overflow: 'hidden',
              }}>
                <img
                  src={APP_SCREENS[app.id]}
                  alt={app.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                />
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%) rotate(-2deg)', fontFamily: '"Caveat", cursive', fontSize: 22, color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap' }}>
              actual screen ↑
            </div>
          </div>

          {/* Right — content */}
          <div style={{ padding: isMobile ? '36px 24px 32px' : '52px 44px 40px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: meta.color, textTransform: 'uppercase' }}>
              file № {meta.no} · pulled from drawer
            </div>
            <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 48 : 72, lineHeight: 0.95, margin: '12px 0 0', fontWeight: 600, letterSpacing: -2, color: '#1f1d18' }}>
              {app.name}<span style={{ color: meta.color }}>.</span>
            </h1>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 26, color: meta.color, marginTop: 6 }}>{app.tagline}</div>

            <p style={{ fontFamily: '"Fraunces", serif', fontSize: 16, lineHeight: 1.65, color: '#3a2f22', marginTop: 24 }}>
              {detail.fullDescription}
            </p>
            <p style={{ fontFamily: '"Fraunces", serif', fontSize: 15, lineHeight: 1.65, color: '#5a4530', marginTop: 14, fontStyle: 'italic' }}>
              {detail.philosophy}
            </p>

            {/* Store buttons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" style={{
                padding: '13px 22px', borderRadius: 12, border: 'none',
                background: meta.color, color: '#fff', fontWeight: 600,
                fontSize: 14, letterSpacing: 0.5,
                boxShadow: `0 8px 20px -4px ${meta.color}80`,
                display: 'inline-block',
              }}>App Store ↗</a>
              <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" style={{
                padding: '13px 22px', borderRadius: 12,
                background: 'transparent', border: `2px solid ${meta.color}`,
                color: meta.color, fontWeight: 600, fontSize: 14,
                letterSpacing: 0.5, display: 'inline-block',
              }}>Google Play {app.playStoreStatus ? `(${app.playStoreStatus})` : '↗'}</a>
            </div>

            {/* Tech stack */}
            <div style={{ marginTop: 28 }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#5a4530' }}>built with</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
                {app.tech.map(t => (
                  <span key={t} style={{ padding: '6px 14px', background: meta.color + '18', color: meta.color, borderRadius: 999, fontSize: 13, fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Behind the build */}
            <div style={{ marginTop: 28, padding: 22, background: '#f5e8d4', borderRadius: 12, border: '1px dashed #c4633c' }}>
              <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#a04020', marginBottom: 12 }}>~ behind the build</div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: 14 }}>
                {stats.map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, color: meta.color, fontWeight: 600 }}>{s.v}</div>
                    <div style={{ fontSize: 11, color: '#5a4530', textTransform: 'uppercase', letterSpacing: 1 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal links */}
            <div style={{ marginTop: 24, display: 'flex', gap: 16, fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1 }}>
              <span onClick={() => navigate(`/apps/${appId}/privacy`)} style={{ color: '#a04020', cursor: 'pointer', textDecoration: 'underline' }}>PRIVACY POLICY</span>
              <span onClick={() => navigate(`/apps/${appId}/terms`)} style={{ color: '#a04020', cursor: 'pointer', textDecoration: 'underline' }}>TERMS</span>
              <span onClick={() => navigate(`/apps/${appId}/support`)} style={{ color: '#a04020', cursor: 'pointer', textDecoration: 'underline' }}>SUPPORT</span>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 20, fontFamily: '"Caveat", cursive', fontSize: 20, color: '#5a4530' }}>
              
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
