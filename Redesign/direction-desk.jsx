// Direction 4 — Desk
// Interactive easter-egg homepage. A literal desk with index cards, polaroids,
// book spines, ticket stubs. Cards drift slightly, hover-tilt, click to "lift"
// them and reveal back-of-card content. Deeply playful.

function Desk() {
  const J = window.JUAN;
  const [flipped, setFlipped] = React.useState({});
  const [tip, setTip] = React.useState("psst — try clicking the cards");

  React.useEffect(() => {
    const tips = [
      "psst — try clicking the cards",
      "the orange one ↗ flips too",
      "books in the bottom corner →",
      "every card has a back",
    ];
    let i = 0;
    const id = setInterval(() => { i = (i+1) % tips.length; setTip(tips[i]); }, 4000);
    return () => clearInterval(id);
  }, []);

  const flip = id => setFlipped(f => ({ ...f, [id]: !f[id] }));

  return (
    <div style={{
      width: 1280, height: 1640,
      background: `
        radial-gradient(ellipse at 30% 30%, rgba(255,235,195,0.6), transparent 50%),
        radial-gradient(ellipse at 70% 80%, rgba(120,70,30,0.3), transparent 60%),
        linear-gradient(160deg, #b88454 0%, #8a5a32 50%, #6b4220 100%)
      `,
      fontFamily: '"Inter", -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      color: '#2a1f15',
    }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Inter:wght@400;500;600;700&family=Special+Elite&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap" />
      <style>{`
        @keyframes drift1 { 0%,100% { transform: rotate(-4deg) translateY(0); } 50% { transform: rotate(-3.5deg) translateY(-3px); } }
        @keyframes drift2 { 0%,100% { transform: rotate(2deg) translateY(0); } 50% { transform: rotate(2.5deg) translateY(-4px); } }
        @keyframes drift3 { 0%,100% { transform: rotate(-1.5deg) translateY(0); } 50% { transform: rotate(-2deg) translateY(-2px); } }
        .desk-card { transition: transform 0.6s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.3s; transform-style: preserve-3d; cursor: pointer; }
        .desk-card:hover { box-shadow: 0 28px 48px -16px rgba(40,20,10,0.55) !important; }
        .desk-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .desk-back { transform: rotateY(180deg); }
      `}</style>

      {/* Wood grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(98deg, transparent 0px, transparent 30px, rgba(60,30,10,0.08) 30px, rgba(60,30,10,0.08) 31px),
                          repeating-linear-gradient(102deg, transparent 0px, transparent 80px, rgba(255,220,180,0.05) 80px, rgba(255,220,180,0.05) 82px)`,
        pointerEvents: 'none',
      }} />

      {/* Header strip */}
      <div style={{ position: 'absolute', top: 24, left: 32, right: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 5 }}>
        <div style={{ fontFamily: '"Special Elite", monospace', color: '#fbeed8', fontSize: 14, letterSpacing: 2 }}>
          ▰ JUAN'S DESK · OPEN 24/7
        </div>
        <div style={{
          background: 'rgba(0,0,0,0.3)', color: '#fbeed8',
          padding: '8px 16px', borderRadius: 999, fontSize: 13,
          fontFamily: '"Caveat", cursive', backdropFilter: 'blur(8px)',
        }}>
          {tip} ✨
        </div>
      </div>

      {/* Big nameplate (engraved brass-feeling) */}
      <div style={{
        position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%) rotate(-1deg)',
        background: 'linear-gradient(180deg, #d4a056 0%, #a87830 50%, #d4a056 100%)',
        color: '#2a1808', padding: '14px 50px',
        fontFamily: '"Fraunces", serif', fontSize: 42, fontWeight: 600, letterSpacing: 2,
        textTransform: 'uppercase',
        borderRadius: 4,
        boxShadow: '0 12px 24px -6px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.2)',
        textShadow: '0 1px 0 rgba(255,255,255,0.3)',
      }}>
        Juan Bracho
      </div>
      <div style={{
        position: 'absolute', top: 168, left: '50%', transform: 'translateX(-50%)',
        fontFamily: '"Caveat", cursive', fontSize: 26, color: '#fbeed8',
        textShadow: '0 2px 4px rgba(0,0,0,0.4)',
      }}>
        builder · writer · jack-of-all-trades
      </div>

      {/* Coffee ring stain */}
      <div style={{
        position: 'absolute', top: 1180, left: 880, width: 110, height: 110,
        borderRadius: '50%', border: '8px solid rgba(60,30,10,0.18)',
        boxShadow: 'inset 0 0 0 4px rgba(60,30,10,0.08)',
        transform: 'rotate(15deg)',
      }} />

      {/* CARD: About / index card */}
      <div className="desk-card" onClick={() => flip('about')} style={{
        position: 'absolute', top: 240, left: 60, width: 360, height: 240,
        animation: 'drift1 6s ease-in-out infinite',
        transform: flipped.about ? 'rotateY(180deg)' : '',
      }}>
        <div className="desk-face" style={{
          position: 'absolute', inset: 0,
          background: '#fffaf0',
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 23px, rgba(140,180,200,0.4) 23px, rgba(140,180,200,0.4) 24px)',
          borderTop: '12px solid #c4633c',
          padding: '24px 24px 16px',
          boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)',
          borderRadius: 2,
        }}>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#a04020', textTransform: 'uppercase' }}>
            № 001 — about
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 36, fontWeight: 600, lineHeight: 1, marginTop: 8, letterSpacing: -1 }}>
            Hi, I'm Juan.
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.55, marginTop: 12, color: '#3a2f22' }}>
            {J.bioShort}
          </p>
          <div style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: '"Caveat", cursive', fontSize: 16, color: '#a04020' }}>
            flip me ↻
          </div>
        </div>
        <div className="desk-face desk-back" style={{
          position: 'absolute', inset: 0,
          background: '#1f1d18', color: '#fbeed8',
          padding: 24, borderRadius: 2,
          boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)',
        }}>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#e8a878', textTransform: 'uppercase' }}>
            back of card
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, marginTop: 10 }}>The journey, briefly:</div>
          <ul style={{ fontSize: 12, lineHeight: 1.7, marginTop: 8, paddingLeft: 16 }}>
            <li>🇻🇪 Born + studied law in Maracaibo</li>
            <li>🇦🇷 Emigrated to Buenos Aires (2020)</li>
            <li>🇺🇸 Re-emigrated to Texas (2022)</li>
            <li>📊 Data analytics @ UT Austin (2024)</li>
            <li>📱 Started shipping apps (2025)</li>
          </ul>
        </div>
      </div>

      {/* CARD: Polaroid */}
      <div style={{
        position: 'absolute', top: 270, right: 90, width: 220,
        background: '#fff', padding: '14px 14px 50px',
        boxShadow: '0 24px 40px -12px rgba(40,20,10,0.6), 0 4px 8px rgba(40,20,10,0.2)',
        transform: 'rotate(5deg)',
        animation: 'drift2 7s ease-in-out infinite',
      }}>
        <div style={{
          position: 'absolute', top: -16, left: 60, width: 100, height: 28,
          background: 'rgba(232,168,120,0.7)', transform: 'rotate(-3deg)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
        }} />
        <img src="assets/profile.png" style={{ width: '100%', height: 220, objectFit: 'cover', filter: 'sepia(0.2) saturate(0.85)' }} />
        <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, textAlign: 'center', marginTop: 8, color: '#3a2f22' }}>
          taken last fall ↑
        </div>
      </div>

      {/* CARDS: Apps as 3 vertical "trading cards" */}
      <div style={{ position: 'absolute', top: 540, left: 60, right: 60, display: 'flex', justifyContent: 'center', gap: 18 }}>
        {J.apps.map((app, i) => (
          <div key={app.id} className="desk-card" onClick={() => flip(app.id)} style={{
            width: 230, height: 320,
            transform: flipped[app.id] ? `rotateY(180deg) translateY(${[-10,0,-5][i]}px)` : `rotate(${[-3, 1.5, -1.5][i]}deg) translateY(${[-10,0,-5][i]}px)`,
            position: 'relative',
          }}>
            <div className="desk-face" style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(160deg, ${app.color} 0%, ${shadeD(app.color, -35)} 100%)`,
              borderRadius: 16,
              padding: 22,
              boxShadow: '0 22px 40px -12px rgba(40,20,10,0.55), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 0 0 1px rgba(255,255,255,0.15)',
              color: '#fff',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, opacity: 0.8 }}>
                  APP №0{i+1}
                </div>
                <div style={{ fontFamily: '"Caveat", cursive', fontSize: 16, opacity: 0.85 }}>
                  ↻ flip
                </div>
              </div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 80, fontWeight: 600, lineHeight: 0.9, marginTop: 'auto' }}>
                {app.glyph}
              </div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 32, fontWeight: 600, marginTop: 12, letterSpacing: -0.5 }}>
                {app.name}
              </div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>{app.tag}</div>
            </div>
            <div className="desk-face desk-back" style={{
              position: 'absolute', inset: 0,
              background: '#fffaf0',
              borderRadius: 16,
              padding: 22,
              boxShadow: '0 22px 40px -12px rgba(40,20,10,0.55)',
              border: `4px solid ${app.color}`,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: app.color, textTransform: 'uppercase' }}>
                stats · {app.name.toLowerCase()}
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: '#3a2f22', marginTop: 12 }}>
                {app.blurb}
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {app.tech.map(t => (
                  <div key={t} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#5a4530', borderBottom: '1px dashed rgba(120,80,40,0.3)', paddingBottom: 3 }}>
                    <span>{t}</span><span>✓</span>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: 12, padding: '8px 12px',
                background: app.color, color: '#fff',
                borderRadius: 6, textAlign: 'center', fontSize: 12, fontWeight: 600, letterSpacing: 1,
              }}>
                DOWNLOAD ↗
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TICKETS / Articles as torn ticket stubs */}
      <div style={{ position: 'absolute', top: 920, left: 60, width: 540 }}>
        <div style={{ fontFamily: '"Caveat", cursive', fontSize: 28, color: '#fbeed8', marginBottom: 12, transform: 'rotate(-1deg)' }}>
          ✦ recent essays
        </div>
        {J.articles.slice(0, 3).map((a, i) => (
          <div key={a.id} style={{
            background: '#fffaf0',
            marginBottom: 10,
            padding: '14px 18px 14px 22px',
            position: 'relative',
            transform: `rotate(${[-0.8, 0.4, -0.3][i]}deg)`,
            boxShadow: '0 12px 24px -8px rgba(40,20,10,0.4)',
            display: 'flex', alignItems: 'center', gap: 16,
            // perforated left edge
            backgroundImage: 'radial-gradient(circle at 0 50%, transparent 6px, #fffaf0 6.5px)',
            clipPath: 'polygon(2% 0, 100% 0, 100% 100%, 2% 100%, 0% 90%, 1% 80%, 0 70%, 1% 60%, 0 50%, 1% 40%, 0 30%, 1% 20%, 0 10%)',
          }}>
            <div style={{
              fontFamily: '"Special Elite", monospace', fontSize: 11, color: '#a04020',
              borderRight: '1px dashed #c4633c', paddingRight: 16, lineHeight: 1.4,
              minWidth: 70,
            }}>
              {a.date}<br />
              <span style={{ color: '#5a4530' }}>{a.read}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 18, fontWeight: 600, color: '#2a1f15', lineHeight: 1.15 }}>
                {a.title}
              </div>
              <div style={{ fontSize: 11, color: '#5a4530', marginTop: 3, lineHeight: 1.4 }}>
                {a.excerpt}
              </div>
            </div>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#c4633c' }}>→</div>
          </div>
        ))}
      </div>

      {/* BOOK SPINES — bottom right */}
      <div style={{ position: 'absolute', bottom: 80, right: 80, width: 460 }}>
        <div style={{ fontFamily: '"Caveat", cursive', fontSize: 26, color: '#fbeed8', marginBottom: 10, textAlign: 'right' }}>
          shelf · 32 books read this year ✦
        </div>
        <div style={{
          display: 'flex', gap: 5, alignItems: 'flex-end', height: 200,
          padding: '0 14px 14px',
          borderBottom: '14px solid #5a3a1a',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}>
          {J.books.map((b, i) => {
            const palette = ['#c4633c', '#5e6b4a', '#a08456', '#7a5a30', '#8a3f28', '#6b5c44', '#3d4a35', '#a87850'];
            const heights = [180, 165, 195, 170, 188, 160, 192, 175];
            return (
              <div key={i} title={`${b.title} — ${b.author}`} style={{
                width: 32, height: heights[i],
                background: `linear-gradient(90deg, ${shadeD(palette[i], 20)} 0%, ${palette[i]} 8%, ${palette[i]} 92%, ${shadeD(palette[i], -25)} 100%)`,
                color: '#fbeed8',
                writingMode: 'vertical-rl',
                fontFamily: '"Fraunces", serif',
                fontSize: 10, fontWeight: 600,
                padding: '10px 0',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                letterSpacing: 0.5, textTransform: 'uppercase',
                cursor: 'pointer',
              }}>
                {b.title}
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky note bottom-left */}
      <div style={{
        position: 'absolute', bottom: 80, left: 80,
        background: '#fef080',
        padding: 18,
        width: 200, minHeight: 180,
        transform: 'rotate(-4deg)',
        animation: 'drift3 9s ease-in-out infinite',
        boxShadow: '0 14px 26px -8px rgba(40,20,10,0.45)',
        fontFamily: '"Caveat", cursive', fontSize: 18, color: '#3a2f22',
        lineHeight: 1.4,
      }}>
        <div style={{ fontWeight: 600, fontSize: 22, marginBottom: 6 }}>currently:</div>
        ☕ on book #33<br />
        🏗 building Kioku v2<br />
        🇮🇹 learning italian<br />
        ✏ next essay: <i>tools as crutches</i><br />
        <div style={{ marginTop: 10, fontSize: 14, color: '#a04020' }}>
          → say hi: hello@juan.app
        </div>
      </div>
    </div>
  );
}

function shadeD(hex, amt) {
  const h = hex.replace('#', '');
  const r = Math.max(0, Math.min(255, parseInt(h.slice(0,2),16) + amt));
  const g = Math.max(0, Math.min(255, parseInt(h.slice(2,4),16) + amt));
  const b = Math.max(0, Math.min(255, parseInt(h.slice(4,6),16) + amt));
  return '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
}

window.Desk = Desk;
