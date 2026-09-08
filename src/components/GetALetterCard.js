import React, { useState } from 'react';

const API_KEY = '696e212e-3d70-4936-b53a-9b36c44ca756';

export default function GetALetterCard() {
  const [flipped, setFlipped] = useState(false);
  const [email,   setEmail]   = useState('');
  const [status,  setStatus]  = useState('idle'); // idle | sending | done | error

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!email || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.buttondown.email/v1/subscribers', {
        method:  'POST',
        headers: {
          'Authorization': `Token ${API_KEY}`,
          'Content-Type':  'application/json',
        },
        body: JSON.stringify({ email_address: email, type: 'regular' }),
      });
      const data = await res.json();
      if (res.ok || res.status === 201) {
        setStatus('done');
      } else {
        console.error('Buttondown error:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setStatus('error');
    }
  };

  const cardBase = {
    position: 'absolute', width: '100%', height: '100%',
    backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
    background: 'rgba(255,253,247,.6)', border: '1px solid var(--rule)',
    padding: 18, boxSizing: 'border-box',
  };

  const labelStyle = {
    fontFamily: "'Special Elite', monospace", fontSize: 10,
    letterSpacing: '.18em', color: 'var(--mid)', textTransform: 'uppercase',
    marginBottom: 10, paddingBottom: 7, borderBottom: '1px solid var(--rule)',
  };

  return (
    <div style={{ perspective: 900 }}>
      <div style={{
        position: 'relative', height: 174,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>

        {/* ── Front ── */}
        <div style={cardBase}>
          <div style={labelStyle}>Get a Letter</div>
          <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 17, fontWeight: 700, lineHeight: 1.3, marginBottom: 14, color: 'var(--ink)' }}>
            New essays, straight to your inbox.
          </div>
          <button
            onClick={() => setFlipped(true)}
            className="bs-el"
            style={{
              width: '100%', padding: '10px', background: 'none',
              color: 'var(--red)', border: '2px solid var(--red)',
              fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', cursor: 'pointer',
            }}
          >
            Subscribe →
          </button>
        </div>

        {/* ── Back ── */}
        <div style={{ ...cardBase, transform: 'rotateY(180deg)' }}>
          {status === 'done' ? (
            <>
              <div style={labelStyle}>You're On the List</div>
              <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 17, fontWeight: 700, lineHeight: 1.3, color: 'var(--ink)' }}>
                I'll write to you soon.
              </div>
              <div className="bs-hand" style={{ fontSize: 24, color: 'var(--red)', marginTop: 10 }}>
                ~ Juan
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={labelStyle}>Your Email</div>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                autoFocus={flipped}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  borderBottom: '1px solid var(--rule)',
                  color: 'var(--ink)', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 15,
                  padding: '6px 0', outline: 'none', marginBottom: 16, boxSizing: 'border-box',
                }}
              />
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => { setFlipped(false); setStatus('idle'); setEmail(''); }}
                  className="bs-el"
                  style={{
                    flex: 1, padding: '8px', background: 'none',
                    color: 'var(--faint)', border: '1px solid var(--rule)',
                    fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', cursor: 'pointer',
                  }}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bs-el"
                  style={{
                    flex: 2, padding: '8px', background: 'none',
                    color: 'var(--red)', border: '2px solid var(--red)',
                    fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', cursor: status === 'sending' ? 'wait' : 'pointer',
                  }}
                >
                  {status === 'sending' ? '…' : 'Send →'}
                </button>
              </div>
              {status === 'error' && (
                <div style={{ fontSize: 12, color: 'var(--red)', marginTop: 8 }}>
                  Something went wrong. Try again.
                </div>
              )}
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
