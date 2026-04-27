// Direction 2 — Atelier
// Editorial workshop. Massive sans display + handwritten accent.
// Olive/sand/clay palette. Apps as objects on a workbench.
// Confident, gallery-quiet.

function Atelier() {
  const J = window.JUAN;
  return (
    <div style={{
      width: 1280, height: 1640,
      background: '#e8e0cc',
      color: '#1f1d18',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" />

      {/* Top bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '24px 56px',
        borderBottom: '1px solid rgba(31,29,24,0.15)',
        fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase',
      }}>
        <div style={{ fontWeight: 600 }}>Juan Bracho</div>
        <div style={{ display: 'flex', gap: 32, color: '#5a5440' }}>
          <span>Apps</span>
          <span>Writing</span>
          <span>Books</span>
          <span>About</span>
        </div>
        <div style={{ color: '#5a5440' }}>Austin, TX · 26°C ☀</div>
      </div>

      {/* HERO */}
      <div style={{ padding: '60px 56px 0', position: 'relative' }}>
        <div style={{
          display: 'flex', gap: 6, marginBottom: 28,
          fontFamily: '"Caveat", cursive', fontSize: 28, color: '#5e6b4a',
        }}>
          <span style={{ transform: 'rotate(-2deg)' }}>builder.</span>
          <span style={{ transform: 'rotate(1deg)' }}>writer.</span>
          <span style={{ transform: 'rotate(-1deg)' }}>traveler.</span>
        </div>

        <h1 style={{
          fontFamily: '"Instrument Serif", "Times New Roman", serif',
          fontSize: 220, lineHeight: 0.88,
          margin: 0, fontWeight: 400, letterSpacing: -8,
          color: '#1f1d18',
        }}>
          A jack<br />
          of all <span style={{ fontStyle: 'italic', color: '#a04020' }}>trades</span>,
        </h1>
        <h2 style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 56, lineHeight: 1, margin: '12px 0 0',
          fontWeight: 400, color: '#5a5440', letterSpacing: -1,
        }}>
          shipping small apps from a kitchen table.
        </h2>

        {/* Stats strip */}
        <div style={{
          marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0,
          borderTop: '1px solid rgba(31,29,24,0.2)', borderBottom: '1px solid rgba(31,29,24,0.2)',
          padding: '24px 0',
        }}>
          {[
            { n: '3', l: 'apps shipped' },
            { n: '32', l: 'books read · ’25' },
            { n: '11', l: 'essays written' },
            { n: '3', l: 'languages' },
            { n: '2', l: 'emigrations' },
          ].map((s, i) => (
            <div key={i} style={{
              borderRight: i < 4 ? '1px solid rgba(31,29,24,0.15)' : 'none',
              padding: '0 20px',
            }}>
              <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 64, lineHeight: 1, color: '#a04020' }}>
                {s.n}
              </div>
              <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', color: '#5a5440', marginTop: 6 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* APPS — workbench */}
      <div style={{ padding: '70px 56px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
          <h3 style={{
            fontFamily: '"Instrument Serif", serif', fontSize: 48,
            margin: 0, fontWeight: 400, letterSpacing: -1,
          }}>
            On the workbench<span style={{ color: '#a04020' }}>.</span>
          </h3>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#5e6b4a' }}>
            three apps, all on iOS + Android →
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {J.apps.map((app, i) => (
            <div key={app.id} style={{
              background: '#f4eeda',
              border: '1px solid rgba(31,29,24,0.12)',
              borderRadius: 8,
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Phone mock */}
              <div style={{
                background: `linear-gradient(155deg, ${app.color} 0%, ${shade(app.color, -25)} 100%)`,
                height: 280,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: 130, height: 240,
                  background: '#fff',
                  borderRadius: 22,
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.35), 0 0 0 4px rgba(255,255,255,0.4)',
                  padding: 14,
                  position: 'relative',
                  transform: i === 1 ? 'rotate(-3deg) translateY(8px)' : i === 2 ? 'rotate(2deg)' : 'rotate(-1deg)',
                }}>
                  <div style={{
                    width: 40, height: 4, background: '#1f1d18', borderRadius: 2,
                    margin: '4px auto 18px', opacity: 0.8,
                  }} />
                  <div style={{
                    fontFamily: '"Instrument Serif", serif', fontSize: 28,
                    color: app.color, lineHeight: 1, fontWeight: 600,
                  }}>{app.glyph}</div>
                  <div style={{ fontSize: 11, color: '#5a5440', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>{app.name}</div>
                  {/* fake content rows */}
                  <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {[1,2,3,4].map(k => (
                      <div key={k} style={{
                        height: 18, background: `${app.color}15`,
                        borderRadius: 4, display: 'flex', alignItems: 'center', padding: '0 6px', gap: 4,
                      }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: app.color }} />
                        <div style={{ flex: 1, height: 3, background: `${app.color}40`, borderRadius: 2 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ padding: 22 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 36, fontWeight: 500, lineHeight: 1 }}>
                    {app.name}
                  </div>
                  <div style={{ fontFamily: '"Caveat", cursive', fontSize: 18, color: app.color }}>
                    №0{i+1}
                  </div>
                </div>
                <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', color: '#5a5440', marginTop: 4 }}>
                  {app.tag}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: '#3a352a', marginTop: 14 }}>
                  {app.blurb}
                </p>
                <div style={{
                  marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(31,29,24,0.1)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {app.tech.slice(0, 2).map(t => (
                      <span key={t} style={{ fontSize: 11, color: '#5a5440', letterSpacing: 0.5 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: app.color }}>
                    Open ↗
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WRITING */}
      <div style={{ padding: '70px 56px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
          <h3 style={{ fontFamily: '"Instrument Serif", serif', fontSize: 48, margin: 0, fontWeight: 400, letterSpacing: -1 }}>
            Recent writing<span style={{ color: '#a04020' }}>.</span>
          </h3>
          <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', color: '#5a5440' }}>
            view all 11 →
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 20 }}>
          {/* Featured big */}
          <a style={{
            background: '#1f1d18', color: '#f4eeda', borderRadius: 8,
            padding: 28, display: 'flex', flexDirection: 'column', minHeight: 320,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.6 }}>
              Featured · {J.articles[0].date}
            </div>
            <h4 style={{
              fontFamily: '"Instrument Serif", serif', fontSize: 56, lineHeight: 0.95,
              margin: '14px 0 0', fontWeight: 400, letterSpacing: -1.5,
            }}>
              {J.articles[0].title}
            </h4>
            <p style={{ fontSize: 15, lineHeight: 1.55, marginTop: 'auto', maxWidth: 400, opacity: 0.85 }}>
              {J.articles[0].excerpt}
            </p>
            <div style={{ marginTop: 16, fontFamily: '"Caveat", cursive', fontSize: 24, color: '#e8a878' }}>
              read essay → {J.articles[0].read}
            </div>
          </a>

          {J.articles.slice(1, 3).map(a => (
            <a key={a.id} style={{
              background: '#f4eeda', borderRadius: 8, padding: 24,
              display: 'flex', flexDirection: 'column', minHeight: 320,
              border: '1px solid rgba(31,29,24,0.1)',
            }}>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#5a5440' }}>
                {a.date} · {a.read}
              </div>
              <h4 style={{
                fontFamily: '"Instrument Serif", serif', fontSize: 32, lineHeight: 1,
                margin: '12px 0 0', fontWeight: 400, letterSpacing: -0.5,
              }}>
                {a.title}
              </h4>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: '#3a352a', marginTop: 14 }}>
                {a.excerpt}
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 6, paddingTop: 16 }}>
                {a.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 10, padding: '3px 9px', border: '1px solid rgba(31,29,24,0.2)',
                    borderRadius: 999, color: '#5a5440', letterSpacing: 0.5,
                  }}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* TIMELINE / ABOUT footer */}
      <div style={{ padding: '70px 56px 50px' }}>
        <h3 style={{
          fontFamily: '"Instrument Serif", serif', fontSize: 36,
          margin: '0 0 28px', fontWeight: 400, letterSpacing: -0.5,
        }}>
          A trajectory<span style={{ color: '#a04020' }}>.</span>
        </h3>
        <div style={{ position: 'relative', paddingLeft: 30 }}>
          <div style={{ position: 'absolute', left: 4, top: 6, bottom: 6, width: 1, background: 'rgba(31,29,24,0.2)' }} />
          {J.timeline.map((t, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 200px 1fr', gap: 20, padding: '8px 0', position: 'relative' }}>
              <div style={{ position: 'absolute', left: -30, top: 14, width: 9, height: 9, background: '#a04020', borderRadius: '50%' }} />
              <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: 22, color: '#a04020' }}>{t.year}</div>
              <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', color: '#5a5440', paddingTop: 6 }}>{t.where}</div>
              <div style={{ fontSize: 15, color: '#1f1d18' }}>{t.what}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function shade(hex, amt) {
  const h = hex.replace('#', '');
  const r = Math.max(0, Math.min(255, parseInt(h.slice(0,2),16) + amt));
  const g = Math.max(0, Math.min(255, parseInt(h.slice(2,4),16) + amt));
  const b = Math.max(0, Math.min(255, parseInt(h.slice(4,6),16) + amt));
  return '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
}

window.Atelier = Atelier;
