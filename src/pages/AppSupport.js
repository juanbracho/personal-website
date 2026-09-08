import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BroadsheetShell from '../components/BroadsheetShell';
import { supportContent } from '../components/appSupportData';

export default function AppSupport() {
  const { appId } = useParams();
  const support = supportContent?.[appId];
  const [open, setOpen] = useState(null);

  return (
    <BroadsheetShell pageTitle={`${appId} · Support`}>
      <div className="bs-reader" style={{ marginTop: 20 }}>
        <div className="bs-kicker">{appId} · support</div>
        <h1 className="bs-hl" style={{ fontSize: 'clamp(26px, 4vw, 36px)' }}>{support?.title || `${appId} Support`}</h1>
        <p style={{ fontStyle: 'italic', color: 'var(--mid)' }}>{support?.subtitle || 'How can we help?'}</p>

        {support?.faqs?.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <div className="bs-el" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: 10 }}>Frequently Asked</div>
            {support.faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--rule)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', padding: '14px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 17, fontWeight: 700 }}>{faq.question}</span>
                  <span className="bs-el" style={{ color: 'var(--red)', fontSize: 16 }}>{open === i ? '−' : '+'}</span>
                </button>
                {open === i && <p style={{ paddingBottom: 16 }}>{faq.answer}</p>}
              </div>
            ))}
          </div>
        )}

        <div className="bs-stampbox" style={{ marginTop: 30, maxWidth: 420 }}>
          <h4>Still Need Help?</h4>
          <p style={{ fontSize: 14, color: 'var(--mid)', marginBottom: 10 }}>{support?.contactIntro || "Reach out directly and I'll get back to you as soon as I can."}</p>
          <a href="mailto:support@juan.app" className="bs-el" style={{ fontSize: 11, color: 'var(--red)' }}>support@juan.app →</a>
        </div>
      </div>
    </BroadsheetShell>
  );
}
