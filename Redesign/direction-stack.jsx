// Direction 3 — Stack
// Soft glassy modernism. Layered cards floating on warm gradient.
// iOS-app-store warmth. Tilt-on-hover, smooth springs.

function Stack() {
  const J = window.JUAN;
  const [hover, setHover] = React.useState(null);
  return (
    <div style={{
      width: 1280, height: 1640,
      background: 'linear-gradient(160deg, #f5e8d4 0%, #ecd6b8 35%, #e0bd95 70%, #c89878 100%)',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#2a1f15',
      position: 'relative',
      overflow: 'hidden',
      padding: 40,
    }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Inter:wght@300;400;500;600;700;800&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&display=swap" />

      {/* Ambient blobs */}
      <div style={{ position: 'absolute', top: 200, left: -120, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,99,60,0.35), transparent 70%)', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', top: 700, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(94,107,74,0.3), transparent 70%)', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', bottom: -100, left: 200, width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(160,132,86,0.25), transparent 70%)', filter: 'blur(50px)' }} />

      {/* Top nav glass pill */}
      <div style={{
        position: 'relative', zIndex: 2,
        margin: '0 auto', maxWidth: 720,
        background: 'rgba(255,250,240,0.55)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.6)',
        borderRadius: 999,
        padding: '12px 28px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        boxShadow: '0 8px 32px -8px rgba(120,80,40,0.25), inset 0 1px 0 rgba(255,255,255,0.8)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #c4633c, #a04020)', boxShadow: '0 2px 8px rgba(196,99,60,0.5)' }} />
          <div style={{ fontWeight: 700, fontSize: 15 }}>juan.app</div>
        </div>
        <div style={{ display: 'flex', gap: 6, fontSize: 13, fontWeight: 500 }}>
          {['Home','Apps','Writing','Books','About'].map((t, i) => (
            <span key={t} style={{
              padding: '6px 14px', borderRadius: 999,
              background: i === 0 ? 'rgba(255,255,255,0.7)' : 'transparent',
              color: i === 0 ? '#2a1f15' : '#5a4530',
              cursor: 'pointer',
            }}>{t}</span>
          ))}
        </div>
        <div style={{ fontSize: 13, color: '#5a4530' }}>EN · ES · IT</div>
      </div>

      {/* HERO STACK */}
      <div style={{
        position: 'relative', zIndex: 2, marginTop: 60,
        display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 32,
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,250,240,0.55)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: 999, padding: '6px 14px',
            fontSize: 13, color: '#5a4530', fontWeight: 500,
            boxShadow: '0 4px 12px rgba(120,80,40,0.1)',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#5e6b4a', boxShadow: '0 0 0 4px rgba(94,107,74,0.2)' }} />
            available · austin, tx
          </div>
          <h1 style={{
            fontFamily: '"Fraunces", serif',
            fontSize: 108, lineHeight: 0.92, margin: '20px 0 0',
            fontWeight: 600, letterSpacing: -4,
          }}>
            Hi, I'm <span style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #c4633c 0%, #a04020 60%, #5e6b4a 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Juan</span>.
          </h1>
          <p style={{
            fontSize: 19, lineHeight: 1.55, marginTop: 24, maxWidth: 540,
            color: '#3a2f22',
          }}>
            I build <b>tiny apps</b> that solve my own problems and ship them on iOS + Android.
            By day I run ops at a clean-power startup; by night I'm on book #33.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            <button style={{
              padding: '14px 24px', borderRadius: 999, border: 'none',
              background: 'linear-gradient(135deg, #c4633c, #a04020)',
              color: '#fff', fontSize: 15, fontWeight: 600,
              boxShadow: '0 8px 24px -4px rgba(196,99,60,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
              cursor: 'pointer',
            }}>See the apps →</button>
            <button style={{
              padding: '14px 24px', borderRadius: 999,
              background: 'rgba(255,250,240,0.55)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.6)',
              color: '#2a1f15', fontSize: 15, fontWeight: 600,
              cursor: 'pointer',
            }}>Read latest essay</button>
          </div>
        </div>

        {/* Floating card stack — phones */}
        <div style={{ position: 'relative', height: 460 }}>
          {J.apps.map((app, i) => (
            <div key={app.id} style={{
              position: 'absolute',
              top: i * 30 + 20, left: i * 60 + 20,
              width: 200, height: 380,
              borderRadius: 32,
              background: `linear-gradient(155deg, ${app.color}, ${shadeS(app.color, -30)})`,
              boxShadow: `
                0 30px 60px -20px rgba(40,30,20,0.5),
                0 0 0 1px rgba(255,255,255,0.2),
                inset 0 1px 0 rgba(255,255,255,0.3)
              `,
              padding: 20,
              transform: `rotate(${[-6, 0, 6][i]}deg)`,
              zIndex: i,
            }}>
              <div style={{
                fontFamily: '"Fraunces", serif', fontSize: 60,
                color: 'rgba(255,255,255,0.9)', fontWeight: 600, lineHeight: 1,
              }}>{app.glyph}</div>
              <div style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 700, fontSize: 22, marginTop: 'auto', position: 'absolute', bottom: 50, left: 20 }}>
                {app.name}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, position: 'absolute', bottom: 24, left: 20, letterSpacing: 0.5 }}>
                {app.tag}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* APP ROW DETAIL */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: 70 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
          <h3 style={{ fontFamily: '"Fraunces", serif', fontSize: 40, fontWeight: 600, margin: 0, letterSpacing: -1 }}>
            Apps
          </h3>
          <span style={{ fontSize: 13, color: '#5a4530' }}>3 live · 2 in beta</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {J.apps.map((app, i) => (
            <div key={app.id}
              onMouseEnter={() => setHover(app.id)}
              onMouseLeave={() => setHover(null)}
              style={{
                background: 'rgba(255,250,240,0.55)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.6)',
                borderRadius: 24,
                padding: 22,
                boxShadow: hover === app.id
                  ? '0 24px 48px -12px rgba(120,80,40,0.35), inset 0 1px 0 rgba(255,255,255,0.8)'
                  : '0 8px 24px -8px rgba(120,80,40,0.2), inset 0 1px 0 rgba(255,255,255,0.7)',
                transform: hover === app.id ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer',
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: `linear-gradient(135deg, ${app.color}, ${shadeS(app.color, -20)})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 600, color: '#fff',
                  boxShadow: `0 6px 16px -4px ${app.color}80, inset 0 1px 0 rgba(255,255,255,0.3)`,
                }}>{app.glyph}</div>
                <div>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 24, fontWeight: 600, lineHeight: 1 }}>
                    {app.name}
                  </div>
                  <div style={{ fontSize: 12, color: '#5a4530', marginTop: 4 }}>{app.tag}</div>
                </div>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: '#3a2f22', margin: 0 }}>{app.blurb}</p>
              <div style={{
                marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(120,80,40,0.15)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {app.tech.slice(0,2).map(t => (
                    <span key={t} style={{
                      fontSize: 10, padding: '3px 8px',
                      background: 'rgba(120,80,40,0.1)', borderRadius: 999, color: '#5a4530',
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: app.color, display: 'flex', alignItems: 'center', gap: 4 }}>
                  Get app
                  <span style={{ transform: hover === app.id ? 'translateX(2px)' : 'none', transition: 'transform 0.2s' }}>↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WRITING — magazine-ish */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: 60 }}>
        <h3 style={{ fontFamily: '"Fraunces", serif', fontSize: 40, fontWeight: 600, margin: '0 0 20px', letterSpacing: -1 }}>
          Writing
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {J.articles.slice(0, 4).map((a, i) => (
            <div key={a.id} style={{
              background: 'rgba(255,250,240,0.5)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.6)',
              borderRadius: 20,
              padding: 22,
              display: 'flex', gap: 16,
              boxShadow: '0 8px 24px -8px rgba(120,80,40,0.2)',
            }}>
              <div style={{
                width: 90, height: 90, borderRadius: 14, flexShrink: 0,
                background: `linear-gradient(135deg, ${['#c4633c','#5e6b4a','#a08456','#7a5a30'][i]}, ${shadeS(['#c4633c','#5e6b4a','#a08456','#7a5a30'][i], -30)})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Fraunces", serif', fontSize: 28, color: '#fff', fontWeight: 600,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
              }}>{a.title[0]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: '#7a5530', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>
                  {a.date} · {a.read}
                </div>
                <div style={{ fontFamily: '"Fraunces", serif', fontSize: 19, fontWeight: 600, marginTop: 4, lineHeight: 1.15, letterSpacing: -0.3 }}>
                  {a.title}
                </div>
                <p style={{ fontSize: 12, color: '#5a4530', margin: '6px 0 0', lineHeight: 1.5 }}>{a.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom strip — books glance */}
      <div style={{
        position: 'relative', zIndex: 2, marginTop: 50,
        background: 'rgba(255,250,240,0.55)', backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.6)', borderRadius: 24,
        padding: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        boxShadow: '0 12px 32px -8px rgba(120,80,40,0.2)',
      }}>
        <div>
          <div style={{ fontSize: 12, color: '#7a5530', letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>
            Currently reading
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 24, fontWeight: 600, marginTop: 4 }}>
            When Breath Becomes Air <span style={{ color: '#7a5530', fontStyle: 'italic', fontWeight: 400, fontSize: 18 }}>by Paul Kalanithi</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[...Array(8)].map((_, i) => (
            <div key={i} style={{
              width: 8, height: 32,
              background: ['#c4633c','#5e6b4a','#a08456','#7a5a30','#8a3f28','#6b5c44','#a87850','#ddc5a0'][i],
              borderRadius: 2,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function shadeS(hex, amt) {
  const h = hex.replace('#', '');
  const r = Math.max(0, Math.min(255, parseInt(h.slice(0,2),16) + amt));
  const g = Math.max(0, Math.min(255, parseInt(h.slice(2,4),16) + amt));
  const b = Math.max(0, Math.min(255, parseInt(h.slice(4,6),16) + amt));
  return '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
}

window.Stack = Stack;
