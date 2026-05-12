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
    background: '#1f1d18', color: '#fbeed8',
    padding: 22, borderRadius: 4, boxSizing: 'border-box',
    boxShadow: '0 12px 24px -8px rgba(0,0,0,0.5)',
  };

  const labelStyle = {
    fontFamily: '"Special Elite", monospace', fontSize: 11,
    letterSpacing: 2, color: '#e8a878', textTransform: 'uppercase', marginBottom: 10,
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
          <div style={labelStyle}>get a letter</div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 17, lineHeight: 1.4, marginBottom: 14 }}>
            New essays, straight to your inbox.
          </div>
          <button
            onClick={() => setFlipped(true)}
            style={{
              width: '100%', padding: '10px', background: 'transparent',
              color: '#e8a878', border: '1px solid rgba(232,168,120,0.35)',
              borderRadius: 6, fontSize: 13, cursor: 'pointer',
              fontFamily: '"Special Elite", monospace', letterSpacing: 1,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,168,120,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            SUBSCRIBE →
          </button>
        </div>

        {/* ── Back ── */}
        <div style={{ ...cardBase, transform: 'rotateY(180deg)' }}>
          {status === 'done' ? (
            <>
              <div style={labelStyle}>you're on the list</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 17, lineHeight: 1.4 }}>
                I'll write to you soon.
              </div>
              <div style={{ fontFamily: '"Caveat", cursive', fontSize: 30, color: '#c4633c', marginTop: 10 }}>
                ~ Juan
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={labelStyle}>your email</div>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com"
                autoFocus={flipped}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  borderBottom: '1px solid rgba(232,168,120,0.4)',
                  color: '#fbeed8', fontFamily: '"Caveat", cursive', fontSize: 20,
                  padding: '6px 0', outline: 'none', marginBottom: 16, boxSizing: 'border-box',
                }}
              />
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => { setFlipped(false); setStatus('idle'); setEmail(''); }}
                  style={{
                    flex: 1, padding: '8px', background: 'transparent',
                    color: '#a08060', border: '1px solid rgba(160,128,96,0.3)',
                    borderRadius: 6, fontSize: 12, cursor: 'pointer',
                    fontFamily: '"Special Elite", monospace', letterSpacing: 1,
                  }}
                >
                  ← BACK
                </button>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    flex: 2, padding: '8px', background: '#c4633c',
                    color: '#fff', border: 'none', borderRadius: 6,
                    fontWeight: 600, fontSize: 12, cursor: status === 'sending' ? 'wait' : 'pointer',
                    fontFamily: '"Special Elite", monospace', letterSpacing: 1,
                  }}
                >
                  {status === 'sending' ? '...' : 'SEND →'}
                </button>
              </div>
              {status === 'error' && (
                <div style={{ fontFamily: '"Caveat", cursive', fontSize: 15, color: '#c4633c', marginTop: 8 }}>
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
