import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useIsMobile } from '../hooks/useIsMobile';
import { mobileApps } from '../components/appsData';
import { appDetailData } from '../components/appDetailData';
import { shadeD } from '../utils/color';

const APP_META = {
  kaizen: { glyph: '改', color: '#667eea' },
  kage:   { glyph: '影', color: '#FF7101' },
  kioku:  { glyph: '記', color: '#06b6d4' },
};

export default function Apps() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <PageShell title="▰ APPS">
      <div style={{ marginTop: 20 }}>
        <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 38 : 56, fontWeight: 600, color: '#fbeed8', letterSpacing: -2, lineHeight: 1 }}>
          The Apps<span style={{ color: '#d4a056' }}>.</span>
        </h1>
        <p style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#fbeed8', opacity: 0.85, marginTop: 8 }}>
          Three tools I built for myself first — now on iOS &amp; Android.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 28, marginTop: 48 }}>
          {mobileApps.map((app) => {
            const meta   = APP_META[app.id];
            const detail = appDetailData[app.id];
            return (
              <div key={app.id} style={{
                background: '#fffaf0', borderRadius: 20, overflow: 'hidden',
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5)',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 40px 80px -20px rgba(0,0,0,0.6)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0,0,0,0.5)'; }}
              >
                {/* Color header */}
                <div style={{
                  background: `linear-gradient(160deg, ${meta.color} 0%, ${shadeD(meta.color, -40)} 100%)`,
                  padding: '40px 30px 30px', color: '#fff', position: 'relative',
                }}>
                  <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, opacity: 0.8, textTransform: 'uppercase' }}>
                    {app.platforms.join(' · ')}
                  </div>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 72, fontWeight: 600, lineHeight: 1, marginTop: 16 }}>{meta.glyph}</div>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 34, fontWeight: 600, marginTop: 10, letterSpacing: -0.5 }}>{app.name}</div>
                  <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>{app.tagline}</div>
                </div>

                {/* Body */}
                <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: 13, lineHeight: 1.65, color: '#3a2f22' }}>
                    {detail?.fullDescription || app.description}
                  </p>

                  {/* Tech stack */}
                  <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {app.tech.map(t => (
                      <span key={t} style={{
                        padding: '4px 12px', background: meta.color + '18',
                        color: meta.color, borderRadius: 999, fontSize: 12, fontWeight: 500,
                      }}>{t}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ marginTop: 'auto', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <button
                      onClick={() => navigate('/apps/' + app.id)}
                      style={{
                        padding: '12px', background: meta.color, color: '#fff',
                        borderRadius: 10, border: 'none', fontWeight: 600,
                        fontSize: 14, cursor: 'pointer', letterSpacing: 0.5,
                        boxShadow: `0 8px 20px -4px ${meta.color}60`,
                      }}
                    >
                      View Details ↗
                    </button>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" style={{
                        flex: 1, padding: '10px', borderRadius: 10,
                        border: `2px solid ${meta.color}`, color: meta.color,
                        textAlign: 'center', fontSize: 12, fontWeight: 600,
                        letterSpacing: 0.5, display: 'block',
                      }}>App Store</a>
                      <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" style={{
                        flex: 1, padding: '10px', borderRadius: 10,
                        border: `2px solid ${meta.color}`, color: meta.color,
                        textAlign: 'center', fontSize: 12, fontWeight: 600,
                        letterSpacing: 0.5, display: 'block',
                      }}>Google Play{app.playStoreStatus ? ' *' : ''}</a>
                    </div>
                    {app.playStoreStatus && (
                      <div style={{ fontFamily: '"Caveat", cursive', fontSize: 13, color: '#a04020', textAlign: 'center' }}>
                        * {app.playStoreStatus}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 60, padding: '28px 32px', background: 'rgba(0,0,0,0.2)', borderRadius: 12, backdropFilter: 'blur(8px)' }}>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 24, color: '#fbeed8' }}>~ the philosophy behind these apps</div>
          <p style={{ fontFamily: '"Fraunces", serif', fontSize: 17, lineHeight: 1.65, color: '#fbeed8', opacity: 0.9, marginTop: 12, maxWidth: 760 }}>
            Each app started as something I needed but couldn't find. Small, focused, local-first.
            No accounts. No subscriptions. Just tools that respect your time and stay out of your way.
            Built solo with AI — shipped because they worked for me, shared in case they work for you.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
