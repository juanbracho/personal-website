import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Contact() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [status, setStatus]   = useState('idle'); // idle | sending | done | error

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5b1d6eca-0c7c-42d5-8d86-d16264e6d08e',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name} via juanbracho.com`,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%', background: 'none', border: 'none',
    borderBottom: '1px solid rgba(90,69,48,0.35)',
    fontFamily: '"Caveat", cursive', fontSize: 22, color: '#1f1d18',
    padding: '8px 0', outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <PageShell title="▰ WRITING ROOM">
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>

        {/* Letter */}
        <div style={{
          width: '100%', maxWidth: 680,
          background: '#fffaf0',
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(140,180,200,0.3) 31px, rgba(140,180,200,0.3) 32px)',
          padding: isMobile ? '40px 24px 48px' : '52px 60px 60px',
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(90,69,48,0.1)',
          borderRadius: 2, transform: isMobile ? 'none' : 'rotate(-0.5deg)',
          position: 'relative',
        }}>
          {/* Tape strip at top */}
          <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%) rotate(-2deg)', width: 120, height: 26, background: 'rgba(212,160,86,0.55)', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} />

          {/* Pen decoration */}
          <div style={{
            position: 'absolute', right: -16, top: '30%', width: 14, height: 200,
            background: 'linear-gradient(180deg, #2a1f15 0%, #1a120a 50%, #2a1f15 100%)',
            borderRadius: 7, transform: 'rotate(4deg)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
          }}>
            <div style={{ position: 'absolute', bottom: -8, left: 2, width: 10, height: 12, background: '#d4a056', borderRadius: '50% 50% 80% 80%' }} />
          </div>

          {done(status) ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 52, color: '#c4633c', fontWeight: 600 }}>✓</div>
              <h2 style={{ fontFamily: '"Fraunces", serif', fontSize: 36, fontWeight: 600, color: '#1f1d18', marginTop: 16 }}>
                Letter sent!
              </h2>
              <p style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#5a4530', marginTop: 12, lineHeight: 1.5 }}>
                Thank you for reaching out. I'll write back soon.<br />
                — Juan
              </p>
              <button onClick={() => navigate('/home')} style={{ marginTop: 28, padding: '12px 28px', background: '#c4633c', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: '"Special Elite", monospace', letterSpacing: 1 }}>
                BACK TO DESK →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Letterhead */}
              <div style={{ borderBottom: '2px solid rgba(90,69,48,0.2)', paddingBottom: 20, marginBottom: 28 }}>
                <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: '#a04020', textTransform: 'uppercase' }}>
                  A LETTER FOR JUAN
                </div>
                <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 600, color: '#1f1d18', marginTop: 4 }}>
                  Austin, TX
                </div>
                <div style={{ fontFamily: '"Caveat", cursive', fontSize: 18, color: '#5a4530', marginTop: 4 }}>
                  {today}
                </div>
              </div>

              {/* Salutation */}
              <div style={{ fontFamily: '"Caveat", cursive', fontSize: 24, color: '#1f1d18', marginBottom: 24 }}>
                Dear Juan,
              </div>

              {/* Fields */}
              <div style={{ marginBottom: 22 }}>
                <label style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 2, color: '#a04020', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>My name is</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name here..."
                  style={inputStyle}
                  onFocus={e => e.target.style.borderBottomColor = '#c4633c'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(90,69,48,0.35)'}
                />
              </div>

              <div style={{ marginBottom: 22 }}>
                <label style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 2, color: '#a04020', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>You can reach me at</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderBottomColor = '#c4633c'}
                  onBlur={e => e.target.style.borderBottomColor = 'rgba(90,69,48,0.35)'}
                />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 2, color: '#a04020', textTransform: 'uppercase', display: 'block', marginBottom: 4 }}>I wanted to say</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  placeholder="Write your message here..."
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    borderBottom: 'none',
                    background: 'transparent',
                    lineHeight: 2,
                  }}
                  onFocus={e => e.target.style.outline = 'none'}
                />
              </div>

              {/* Closing */}
              <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#1f1d18', marginBottom: 28 }}>
                Warm regards,<br />
                <span style={{ fontSize: 28, borderBottom: form.name ? 'none' : '2px dashed rgba(90,69,48,0.3)', minWidth: 160, display: 'inline-block', color: form.name ? '#1f1d18' : 'rgba(90,69,48,0.4)' }}>
                  {form.name || '_____________'}
                </span>
              </div>

              {/* Send button — wax seal style */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: status === 'sending' ? '#a08456' : '#c4633c',
                    color: '#fff', border: 'none', cursor: status === 'sending' ? 'wait' : 'pointer',
                    fontFamily: '"Caveat", cursive', fontSize: 16, fontWeight: 700,
                    boxShadow: '0 8px 20px -4px rgba(196,99,60,0.6)',
                    transition: 'background 0.2s, transform 0.15s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column', lineHeight: 1.2,
                  }}
                  onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  {status === 'sending' ? '...' : <>send<br />→</>}
                </button>
              </div>

              {status === 'error' && (
                <p style={{ fontFamily: '"Caveat", cursive', fontSize: 18, color: '#c4633c', marginTop: 16, textAlign: 'center' }}>
                  Something went wrong. Try emailing me directly at hello@juan.app
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </PageShell>
  );
}

function done(s) { return s === 'done'; }
