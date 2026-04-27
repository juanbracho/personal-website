// Direction 1 — Cuaderno
// A literal notebook left open. Lined cream paper, ink, taped polaroids,
// margin notes in handwritten, library-card index for archive.

const cuadernoStyles = {
  // serve a fragment that the host wraps. Page = single notebook spread.
};

function Cuaderno() {
  return (
    <div style={{
      width: 1280, height: 1640,
      fontFamily: '"Söhne", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
      background: '#ede5d3',
      backgroundImage: `
        radial-gradient(circle at 20% 10%, rgba(255,255,255,0.5), transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(180,140,90,0.15), transparent 50%)
      `,
      padding: 36,
      color: '#2b2419',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap" />

      {/* Tape strip ribbon */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 50,
        background: '#c4633c',
        clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
      }} />
      <div style={{ position: 'absolute', top: 12, left: 36, color: '#fbeed8', fontFamily: '"Caveat", cursive', fontSize: 22, letterSpacing: 0.5 }}>
        Juan Bracho · cuaderno · Austin TX
      </div>
      <div style={{ position: 'absolute', top: 14, right: 36, color: '#fbeed8', fontFamily: '"Inter", sans-serif', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
        Vol. 03 · 2026
      </div>

      {/* Notebook page */}
      <div style={{
        marginTop: 70,
        background: '#faf3e2',
        padding: '54px 64px',
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, rgba(80,60,40,0.08) 31px, rgba(80,60,40,0.08) 32px)',
        boxShadow: 'inset 0 0 80px rgba(120,80,40,0.08), 0 30px 60px -20px rgba(40,30,20,0.25)',
        position: 'relative',
        minHeight: 1450,
        borderRadius: 4,
      }}>
        {/* Red margin line */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 110, width: 1, background: '#c4633c', opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 113, width: 1, background: '#c4633c', opacity: 0.2 }} />

        {/* Hero / Index card pinned to the page */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', marginBottom: 40 }}>
          {/* Big handwritten name */}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#7a5a30', marginBottom: 4 }}>
              ~ hola, soy ~
            </div>
            <h1 style={{
              fontFamily: '"Fraunces", serif',
              fontSize: 96, lineHeight: 0.95, fontWeight: 500,
              margin: 0, letterSpacing: -3, color: '#2b2419',
            }}>
              Juan<br />Bracho.
            </h1>
            <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['🇻🇪 Venezuela', '🇦🇷 Argentina', '🇺🇸 Texas'].map((t, i) => (
                <span key={i} style={{
                  fontFamily: '"Inter", sans-serif', fontSize: 13,
                  padding: '5px 12px', background: '#fff', border: '1px solid #d4c2a0',
                  borderRadius: 999, color: '#5a4530', transform: `rotate(${[-1,0.5,-0.5][i]}deg)`,
                }}>{t}</span>
              ))}
            </div>
            <p style={{
              marginTop: 22, fontFamily: '"Inter", sans-serif',
              fontSize: 16, lineHeight: 1.65, color: '#3a2f22', maxWidth: 540,
            }}>
              {window.JUAN.bio}
            </p>
            <div style={{ marginTop: 18, fontFamily: '"Caveat", cursive', fontSize: 20, color: '#c4633c', transform: 'rotate(-1deg)' }}>
              p.s. — currently obsessed w/ tiny apps & old Stoics ✦
            </div>
          </div>

          {/* Polaroid */}
          <div style={{
            transform: 'rotate(3.5deg)', marginTop: 30,
            background: '#fff', padding: '14px 14px 50px',
            boxShadow: '0 18px 30px -12px rgba(40,30,20,0.4), 0 4px 8px rgba(40,30,20,0.15)',
            position: 'relative', width: 240,
          }}>
            <div style={{
              position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%) rotate(-2deg)',
              width: 90, height: 26, background: 'rgba(220,180,120,0.6)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }} />
            <img src="assets/profile.png" alt="" style={{ width: '100%', height: 240, objectFit: 'cover', filter: 'sepia(0.15) saturate(0.9)' }} />
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, textAlign: 'center', marginTop: 10, color: '#5a4530' }}>
              juan, oct '25
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '40px 0 24px' }}>
          <span style={{ fontFamily: '"Caveat", cursive', fontSize: 32, color: '#c4633c', transform: 'rotate(-2deg)' }}>§ apps</span>
          <div style={{ flex: 1, height: 1, background: '#c4633c', opacity: 0.3 }} />
          <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 12, color: '#7a5a30', letterSpacing: 2, textTransform: 'uppercase' }}>
            shipped on iOS + Android
          </span>
        </div>

        {/* Apps as taped index cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
          {window.JUAN.apps.map((app, i) => (
            <div key={app.id} style={{
              background: '#fff8ec',
              border: '1px solid #d4c2a0',
              padding: 18,
              transform: `rotate(${[-1.2, 0.6, -0.4][i]}deg)`,
              boxShadow: '0 12px 28px -16px rgba(40,30,20,0.4), 0 2px 4px rgba(40,30,20,0.1)',
              position: 'relative',
              borderRadius: 2,
            }}>
              {/* Tape on top */}
              <div style={{
                position: 'absolute', top: -10, left: 30, width: 56, height: 18,
                background: 'rgba(196,99,60,0.4)', transform: 'rotate(-3deg)',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }} />
              {/* Glyph badge */}
              <div style={{
                width: 64, height: 64, borderRadius: 16,
                background: app.color, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Fraunces", serif', fontSize: 24, fontWeight: 600,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 8px rgba(0,0,0,0.15)',
                marginBottom: 14,
              }}>{app.glyph}</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, fontWeight: 600, color: '#2b2419' }}>{app.name}</div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: 12, color: '#7a5a30', textTransform: 'uppercase', letterSpacing: 1, marginTop: 2 }}>
                {app.tag}
              </div>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 13, color: '#3a2f22', marginTop: 10, lineHeight: 1.5 }}>
                {app.blurb}
              </p>
              <div style={{ display: 'flex', gap: 4, marginTop: 12, flexWrap: 'wrap' }}>
                {app.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: '"Inter", sans-serif', fontSize: 10,
                    padding: '2px 8px', background: '#ede5d3', borderRadius: 999, color: '#5a4530',
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 14, fontFamily: '"Caveat", cursive', fontSize: 16, color: '#c4633c', transform: 'rotate(-1deg)' }}>
                ↗ download →
              </div>
            </div>
          ))}
        </div>

        {/* Articles section - library catalog */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '50px 0 20px' }}>
          <span style={{ fontFamily: '"Caveat", cursive', fontSize: 32, color: '#5e6b4a', transform: 'rotate(-1deg)' }}>§ writing</span>
          <div style={{ flex: 1, height: 1, background: '#5e6b4a', opacity: 0.3 }} />
          <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 12, color: '#5e6b4a', letterSpacing: 2, textTransform: 'uppercase' }}>
            essays · notes · long-form
          </span>
        </div>

        <div style={{ background: '#fff8ec', border: '1px solid #d4c2a0', borderRadius: 2, overflow: 'hidden' }}>
          {window.JUAN.articles.slice(0, 4).map((a, i) => (
            <div key={a.id} style={{
              display: 'grid', gridTemplateColumns: '90px 1fr auto',
              gap: 20, padding: '18px 22px', alignItems: 'center',
              borderBottom: i < 3 ? '1px dashed #d4c2a0' : 'none',
            }}>
              <div style={{
                fontFamily: '"Inter", sans-serif', fontSize: 11, letterSpacing: 1,
                textTransform: 'uppercase', color: '#7a5a30',
              }}>
                {a.date}<br />
                <span style={{ fontSize: 10, opacity: 0.7 }}>№ {String(i+1).padStart(3, '0')}</span>
              </div>
              <div>
                <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 500, color: '#2b2419' }}>
                  {a.title}
                </div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: 13, color: '#5a4530', marginTop: 3, lineHeight: 1.5 }}>
                  {a.excerpt}
                </div>
              </div>
              <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#c4633c' }}>
                {a.read} →
              </div>
            </div>
          ))}
        </div>

        {/* Books — taped book spines */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '50px 0 20px' }}>
          <span style={{ fontFamily: '"Caveat", cursive', fontSize: 32, color: '#a08456', transform: 'rotate(1deg)' }}>§ shelf</span>
          <div style={{ flex: 1, height: 1, background: '#a08456', opacity: 0.3 }} />
          <span style={{ fontFamily: '"Inter", sans-serif', fontSize: 12, color: '#a08456', letterSpacing: 2, textTransform: 'uppercase' }}>
            32 books · 2025–26 · ★ = 10/10
          </span>
        </div>

        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 180, marginBottom: 30 }}>
          {window.JUAN.books.map((b, i) => {
            const palette = ['#c4633c', '#5e6b4a', '#a08456', '#7a5a30', '#8a3f28', '#6b5c44', '#3d4a35', '#a87850'];
            const heights = [160, 145, 175, 150, 168, 140, 172, 155];
            return (
              <div key={i} style={{
                width: 38, height: heights[i],
                background: palette[i],
                color: '#fbeed8',
                writingMode: 'vertical-rl',
                fontFamily: '"Fraunces", serif',
                fontSize: 11, fontWeight: 600,
                padding: '12px 4px',
                boxShadow: 'inset -2px 0 0 rgba(0,0,0,0.15), inset 2px 0 0 rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                letterSpacing: 0.5,
              }}>
                <span style={{ opacity: 0.7, fontSize: 9 }}>{b.year}</span>
                <span style={{ flex: 1, textAlign: 'center', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                  {b.title}
                </span>
                <span style={{ fontSize: 9 }}>★</span>
              </div>
            );
          })}
          <div style={{ width: 38, height: 130, background: '#ede5d3', border: '1px dashed #a08456', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Caveat", cursive', color: '#7a5a30', fontSize: 14 }}>
            +24
          </div>
        </div>

        {/* Footer — signature */}
        <div style={{
          marginTop: 50, paddingTop: 30, borderTop: '1px dashed #c4633c',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        }}>
          <div>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#7a5a30' }}>
              find me at
            </div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 18, marginTop: 4 }}>
              linkedin · github · substack
            </div>
          </div>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 44, color: '#c4633c', transform: 'rotate(-3deg)' }}>
            ~ Juan
          </div>
        </div>
      </div>
    </div>
  );
}

window.Cuaderno = Cuaderno;
