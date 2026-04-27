import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { supportContent } from '../components/appSupportData';
import { appDetailData } from '../components/appDetailData';

export default function AppSupport() {
  const { appId } = useParams();
  const detail    = appDetailData[appId];
  const support   = supportContent?.[appId];
  const [open, setOpen] = useState(null);

  const appColor = detail?.colors?.primary || '#c4633c';

  return (
    <PageShell title={`▰ ${appId?.toUpperCase()} · SUPPORT`}>
      <div style={{ marginTop: 20, maxWidth: 800 }}>
        <div style={{
          background: '#fffaf0',
          padding: '48px 56px 56px',
          borderRadius: 4,
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5)',
        }}>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: appColor, textTransform: 'uppercase' }}>
            {appId} · support
          </div>
          <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: 44, fontWeight: 600, letterSpacing: -1, marginTop: 10, color: '#1f1d18' }}>
            {support?.title || `${appId} Support`}
          </h1>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 20, color: '#5a4530', marginTop: 6 }}>
            {support?.subtitle || 'How can we help?'}
          </div>

          {/* FAQ */}
          {support?.faqs?.length > 0 && (
            <div style={{ marginTop: 36 }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: '#5a4530', textTransform: 'uppercase', marginBottom: 16 }}>
                — frequently asked
              </div>
              {support.faqs.map((faq, i) => (
                <div key={i} style={{ marginBottom: 8, borderBottom: '1px solid rgba(90,69,48,0.15)' }}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: '100%', textAlign: 'left', padding: '14px 0',
                      background: 'none', border: 'none', cursor: 'pointer',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}
                  >
                    <span style={{ fontFamily: '"Fraunces", serif', fontSize: 17, fontWeight: 600, color: '#1f1d18', lineHeight: 1.3 }}>
                      {faq.question}
                    </span>
                    <span style={{ color: appColor, fontSize: 20, fontFamily: '"Caveat", cursive', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0, marginLeft: 16 }}>+</span>
                  </button>
                  {open === i && (
                    <div style={{ paddingBottom: 16 }}>
                      <p style={{ fontFamily: '"Fraunces", serif', fontSize: 15, lineHeight: 1.65, color: '#3a2f22' }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Contact */}
          <div style={{ marginTop: 40, padding: '24px', background: '#f5e8d4', borderRadius: 10, border: '1px dashed #c4633c' }}>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#a04020', marginBottom: 8 }}>~ still need help?</div>
            <p style={{ fontFamily: '"Fraunces", serif', fontSize: 15, lineHeight: 1.65, color: '#3a2f22', marginBottom: 12 }}>
              {support?.contactIntro || 'Reach out directly and I\'ll get back to you as soon as I can.'}
            </p>
            <a href="mailto:support@juan.app" style={{
              display: 'inline-block', padding: '10px 22px',
              background: appColor, color: '#fff', borderRadius: 8,
              fontWeight: 600, fontSize: 14,
            }}>
              support@juan.app →
            </a>
          </div>

          <div style={{ marginTop: 32, fontFamily: '"Caveat", cursive', fontSize: 28, color: '#c4633c', transform: 'rotate(-2deg)', display: 'inline-block' }}>~ Juan</div>
        </div>
      </div>
    </PageShell>
  );
}
