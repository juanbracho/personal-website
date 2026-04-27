// Desk — refined home, with real draggable cards and a "view" overlay.
// Cards: about, polaroid, 3 app cards, 3 article tickets, sticky note, book shelf.

function DeskHome({ onOpen }) {
  const J = window.JUAN;
  const [flipped, setFlipped] = React.useState({});
  const [dragging, setDragging] = React.useState(null);
  const [positions, setPositions] = React.useState({});
  const [zOrder, setZOrder] = React.useState([]);
  const [tip, setTip] = React.useState("psst — try dragging the cards");

  React.useEffect(() => {
    const tips = [
      "psst — drag the cards around",
      "click any card to flip it",
      "the apps open into detail views ↗",
      "the sticky note has a secret",
      "every card lives where you leave it",
    ];
    let i = 0;
    const id = setInterval(() => { i = (i+1) % tips.length; setTip(tips[i]); }, 4500);
    return () => clearInterval(id);
  }, []);

  const flip = id => setFlipped(f => ({ ...f, [id]: !f[id] }));
  const bringForward = id => setZOrder(z => [...z.filter(x => x !== id), id]);
  const zIndex = id => 10 + zOrder.indexOf(id);

  const startDrag = (id, e) => {
    e.preventDefault();
    bringForward(id);
    const start = { x: e.clientX, y: e.clientY };
    const cur = positions[id] || { x: 0, y: 0 };
    let moved = false;
    const move = ev => {
      const dx = ev.clientX - start.x, dy = ev.clientY - start.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
      setPositions(p => ({ ...p, [id]: { x: cur.x + dx, y: cur.y + dy } }));
      setDragging(id);
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      setDragging(null);
      if (!moved) flip(id);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  const cardProps = (id, baseTransform) => ({
    'data-flipped': !!flipped[id],
    style: {
      transition: dragging === id ? 'none' : 'transform 0.5s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.25s',
      transform: `translate(${(positions[id]?.x || 0)}px, ${(positions[id]?.y || 0)}px) ${baseTransform} ${flipped[id] ? 'rotateY(180deg)' : ''}`,
      transformStyle: 'preserve-3d',
      zIndex: zIndex(id),
      cursor: dragging === id ? 'grabbing' : 'grab',
      userSelect: 'none',
    },
  });
  const cardStyle = (id, baseTransform) => cardProps(id, baseTransform).style;

  return (
    <div style={{
      width: 1280, height: 1640,
      background: `
        radial-gradient(ellipse at 25% 25%, rgba(255,235,195,0.55), transparent 50%),
        radial-gradient(ellipse at 75% 80%, rgba(120,70,30,0.35), transparent 60%),
        linear-gradient(160deg, #b88454 0%, #8a5a32 50%, #6b4220 100%)
      `,
      fontFamily: '"Inter", -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      color: '#2a1f15',
      perspective: '1400px',
    }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Inter:wght@400;500;600;700&family=Special+Elite&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap" />
      <style>{`
        @keyframes drift { 0%,100% { translate: 0 0; } 50% { translate: 0 -3px; } }
        .desk-face { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; transition: visibility 0s linear 0.25s; }
        .desk-back { transform: rotateY(180deg); }
        .desk-card { position: absolute; }
        .desk-card[data-flipped="false"] > .desk-back { visibility: hidden; }
        .desk-card[data-flipped="true"] > .desk-face:not(.desk-back) { visibility: hidden; }
        .desk-card:hover { filter: brightness(1.02); }
      `}</style>

      {/* Wood grain overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(98deg, transparent 0px, transparent 30px, rgba(60,30,10,0.08) 30px, rgba(60,30,10,0.08) 31px),
                          repeating-linear-gradient(102deg, transparent 0px, transparent 80px, rgba(255,220,180,0.05) 80px, rgba(255,220,180,0.05) 82px)`,
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ position: 'absolute', top: 24, left: 32, right: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ fontFamily: '"Special Elite", monospace', color: '#fbeed8', fontSize: 14, letterSpacing: 2 }}>
          ▰ JUAN'S DESK · OPEN 24/7
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Home', 'Apps', 'Writing', 'About', 'Shelf'].map((t, i) => (
            <button key={t} onClick={() => onOpen && i > 0 && onOpen(['','apps','writing','about','shelf'][i])} style={{
              background: i === 0 ? 'rgba(251,238,216,0.95)' : 'rgba(0,0,0,0.25)',
              color: i === 0 ? '#2a1f15' : '#fbeed8',
              border: 'none', padding: '8px 16px', borderRadius: 999,
              fontFamily: '"Special Elite", monospace', fontSize: 12, letterSpacing: 1.5,
              cursor: 'pointer', backdropFilter: 'blur(8px)',
            }}>{t}</button>
          ))}
        </div>
        <div style={{
          background: 'rgba(0,0,0,0.3)', color: '#fbeed8',
          padding: '8px 16px', borderRadius: 999, fontSize: 14,
          fontFamily: '"Caveat", cursive', backdropFilter: 'blur(8px)',
          minWidth: 240, textAlign: 'center',
        }}>
          {tip} ✨
        </div>
      </div>

      {/* Nameplate */}
      <div style={{
        position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%) rotate(-1deg)',
        background: 'linear-gradient(180deg, #d4a056 0%, #a87830 50%, #d4a056 100%)',
        color: '#2a1808', padding: '14px 50px',
        fontFamily: '"Fraunces", serif', fontSize: 42, fontWeight: 600, letterSpacing: 2,
        textTransform: 'uppercase',
        borderRadius: 4,
        boxShadow: '0 12px 24px -6px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.2)',
        textShadow: '0 1px 0 rgba(255,255,255,0.3)',
        zIndex: 5,
      }}>
        Juan Bracho
      </div>
      <div style={{
        position: 'absolute', top: 168, left: '50%', transform: 'translateX(-50%)',
        fontFamily: '"Caveat", cursive', fontSize: 26, color: '#fbeed8',
        textShadow: '0 2px 4px rgba(0,0,0,0.4)', zIndex: 5,
      }}>
        builder · writer · jack-of-all-trades · 🇻🇪 → 🇦🇷 → 🇺🇸
      </div>

      {/* Coffee ring */}
      <div style={{
        position: 'absolute', top: 1180, left: 880, width: 110, height: 110,
        borderRadius: '50%', border: '8px solid rgba(60,30,10,0.18)',
        boxShadow: 'inset 0 0 0 4px rgba(60,30,10,0.08)',
        transform: 'rotate(15deg)', pointerEvents: 'none',
      }} />

      {/* Pen */}
      <div style={{
        position: 'absolute', top: 1320, left: 90, width: 280, height: 14,
        background: 'linear-gradient(180deg, #2a1f15 0%, #1a120a 50%, #2a1f15 100%)',
        borderRadius: 7,
        transform: 'rotate(-12deg)',
        boxShadow: '0 8px 16px -4px rgba(0,0,0,0.5)',
        pointerEvents: 'none',
      }}>
        <div style={{ position: 'absolute', right: -8, top: 3, width: 16, height: 8, background: '#d4a056', borderRadius: '50% 0 0 50%', clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
        <div style={{ position: 'absolute', left: 30, top: 3, width: 30, height: 8, background: '#c4633c', borderRadius: 2 }} />
      </div>

      {/* About card */}
      <div className="desk-card" data-flipped={!!flipped['about']} style={{ width: 360, height: 240, top: 250, left: 60, animation: 'drift 6s ease-in-out infinite', ...cardStyle('about', 'rotate(-3deg)') }} onMouseDown={e => startDrag('about', e)}>
        <div className="desk-face" style={{
          background: '#fffaf0',
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 23px, rgba(140,180,200,0.4) 23px, rgba(140,180,200,0.4) 24px)',
          borderTop: '12px solid #c4633c', padding: '24px 24px 16px',
          boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)', borderRadius: 2,
        }}>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#a04020', textTransform: 'uppercase' }}>№ 001 — about</div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 36, fontWeight: 600, lineHeight: 1, marginTop: 8, letterSpacing: -1 }}>Hi, I'm Juan.</div>
          <p style={{ fontSize: 13, lineHeight: 1.55, marginTop: 12, color: '#3a2f22' }}>{J.bioShort}</p>
          <div style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: '"Caveat", cursive', fontSize: 16, color: '#a04020' }}>flip me ↻</div>
        </div>
        <div className="desk-face desk-back" style={{ background: '#1f1d18', color: '#fbeed8', padding: 22, borderRadius: 2, boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)' }}>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#e8a878', textTransform: 'uppercase' }}>back of card</div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, marginTop: 8 }}>Briefly:</div>
          <ul style={{ fontSize: 12, lineHeight: 1.7, marginTop: 6, paddingLeft: 16 }}>
            <li>🇻🇪 Born + studied law in Maracaibo</li>
            <li>🇦🇷 Emigrated to Buenos Aires (2020)</li>
            <li>🇺🇸 Re-emigrated to Texas (2022)</li>
            <li>📊 Data analytics @ UT Austin (2024)</li>
            <li>📱 Started shipping apps (2025)</li>
          </ul>
          <div onClick={(e) => { e.stopPropagation(); onOpen && onOpen('about'); }} style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: '"Caveat", cursive', fontSize: 18, color: '#e8a878', cursor: 'pointer' }}>full story →</div>
        </div>
      </div>

      {/* Polaroid */}
      <div className="desk-card" data-flipped={!!flipped['polaroid']} style={{ width: 220, height: 290, top: 270, right: 90, ...cardStyle('polaroid', 'rotate(5deg)') }} onMouseDown={e => startDrag('polaroid', e)}>
        <div className="desk-face" style={{
          background: '#fff', padding: '14px 14px 50px',
          boxShadow: '0 24px 40px -12px rgba(40,20,10,0.6), 0 4px 8px rgba(40,20,10,0.2)',
          borderRadius: 2,
        }}>
          <div style={{ position: 'absolute', top: -16, left: 60, width: 100, height: 28, background: 'rgba(232,168,120,0.7)', transform: 'rotate(-3deg)', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} />
          <img src="assets/profile.png" style={{ width: '100%', height: 220, objectFit: 'cover', filter: 'sepia(0.2) saturate(0.85)' }} />
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, textAlign: 'center', marginTop: 8, color: '#3a2f22' }}>taken last fall ↑</div>
        </div>
        <div className="desk-face desk-back" style={{
          background: '#fffaf0', padding: 18, borderRadius: 2,
          boxShadow: '0 24px 40px -12px rgba(40,20,10,0.6)',
          fontFamily: '"Caveat", cursive', color: '#3a2f22',
        }}>
          <div style={{ fontSize: 22, fontWeight: 600, color: '#a04020' }}>postcard, back</div>
          <div style={{ fontSize: 18, lineHeight: 1.4, marginTop: 10 }}>
            currently:<br/>
            ☕ on book #33<br/>
            📱 shipping Kioku v2<br/>
            🇮🇹 learning italian<br/>
            ✏ next essay drafting<br/><br/>
            <span style={{ color: '#a04020' }}>say hi: hello@juan.app</span>
          </div>
        </div>
      </div>

      {/* App cards */}
      {J.apps.map((app, i) => {
        const baseLeft = 100 + i * 360;
        const baseTop = 580;
        const rot = [-3, 1.5, -1.5][i];
        return (
          <div key={app.id} className="desk-card" data-flipped={!!flipped[app.id]} style={{
            width: 230, height: 320, top: baseTop, left: baseLeft,
            ...cardStyle(app.id, `rotate(${rot}deg)`),
          }} onMouseDown={e => startDrag(app.id, e)}>
            <div className="desk-face" style={{
              background: `linear-gradient(160deg, ${app.color} 0%, ${shadeD(app.color, -35)} 100%)`,
              borderRadius: 16, padding: 22,
              boxShadow: '0 22px 40px -12px rgba(40,20,10,0.55), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 0 0 1px rgba(255,255,255,0.15)',
              color: '#fff',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, opacity: 0.8 }}>APP №0{i+1}</div>
                <div style={{ fontFamily: '"Caveat", cursive', fontSize: 16, opacity: 0.85 }}>↻ flip</div>
              </div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 80, fontWeight: 600, lineHeight: 0.9, marginTop: 130 }}>{app.glyph}</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 32, fontWeight: 600, marginTop: 12, letterSpacing: -0.5 }}>{app.name}</div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>{app.tag}</div>
            </div>
            <div className="desk-face desk-back" style={{
              background: '#fffaf0', borderRadius: 16, padding: 20,
              boxShadow: '0 22px 40px -12px rgba(40,20,10,0.55)',
              border: `4px solid ${app.color}`,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: app.color, textTransform: 'uppercase' }}>stats · {app.name.toLowerCase()}</div>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: '#3a2f22', marginTop: 10 }}>{app.blurb}</p>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {app.tech.map(t => (
                  <div key={t} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#5a4530', borderBottom: '1px dashed rgba(120,80,40,0.3)', paddingBottom: 2 }}>
                    <span>{t}</span><span>✓</span>
                  </div>
                ))}
              </div>
              <div onClick={(e) => { e.stopPropagation(); onOpen && onOpen('app:' + app.id); }} style={{
                marginTop: 12, padding: '10px 12px',
                background: app.color, color: '#fff',
                borderRadius: 6, textAlign: 'center', fontSize: 12, fontWeight: 600, letterSpacing: 1,
                cursor: 'pointer',
              }}>OPEN APP DETAIL ↗</div>
            </div>
          </div>
        );
      })}

      {/* Tickets */}
      {J.articles.slice(0, 3).map((a, i) => {
        const id = 'art-' + a.id;
        return (
          <div key={a.id} className="desk-card" data-flipped={!!flipped[id]} style={{
            width: 540, height: 80, top: 980 + i * 90, left: 60,
            ...cardStyle(id, `rotate(${[-0.8, 0.4, -0.3][i]}deg)`),
          }} onMouseDown={e => startDrag(id, e)}>
            <div className="desk-face" style={{
              background: '#fffaf0', padding: '14px 18px 14px 22px',
              boxShadow: '0 12px 24px -8px rgba(40,20,10,0.4)',
              display: 'flex', alignItems: 'center', gap: 16,
              clipPath: 'polygon(2% 0, 100% 0, 100% 100%, 2% 100%, 0% 90%, 1% 80%, 0 70%, 1% 60%, 0 50%, 1% 40%, 0 30%, 1% 20%, 0 10%)',
            }}>
              <div style={{
                fontFamily: '"Special Elite", monospace', fontSize: 11, color: '#a04020',
                borderRight: '1px dashed #c4633c', paddingRight: 16, lineHeight: 1.4, minWidth: 70,
              }}>
                {a.date}<br /><span style={{ color: '#5a4530' }}>{a.read}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: '"Fraunces", serif', fontSize: 18, fontWeight: 600, color: '#2a1f15', lineHeight: 1.15 }}>{a.title}</div>
                <div style={{ fontSize: 11, color: '#5a4530', marginTop: 3, lineHeight: 1.4 }}>{a.excerpt}</div>
              </div>
              <div onClick={(e) => { e.stopPropagation(); onOpen && onOpen('article:' + a.id); }} style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#c4633c', cursor: 'pointer', padding: '0 8px' }}>read →</div>
            </div>
            <div className="desk-face desk-back" style={{
              background: '#c4633c', color: '#fffaf0', padding: '14px 22px',
              fontFamily: '"Caveat", cursive', fontSize: 20, display: 'flex', alignItems: 'center',
              clipPath: 'polygon(2% 0, 100% 0, 100% 100%, 2% 100%, 0% 90%, 1% 80%, 0 70%, 1% 60%, 0 50%, 1% 40%, 0 30%, 1% 20%, 0 10%)',
            }}>
              ✦ {a.tags.join(' · ')} — drag me, or click "read"
            </div>
          </div>
        );
      })}

      <div style={{ position: 'absolute', top: 940, left: 60, fontFamily: '"Caveat", cursive', fontSize: 28, color: '#fbeed8', transform: 'rotate(-1deg)' }}>
        ✦ recent essays — read or drag
      </div>

      {/* Sticky note */}
      <div className="desk-card" data-flipped={!!flipped['sticky']} style={{
        width: 200, height: 200, top: 980, right: 480,
        ...cardStyle('sticky', 'rotate(-4deg)'),
      }} onMouseDown={e => startDrag('sticky', e)}>
        <div className="desk-face" style={{
          background: '#fef080', padding: 18,
          boxShadow: '0 14px 26px -8px rgba(40,20,10,0.45)',
          fontFamily: '"Caveat", cursive', fontSize: 18, color: '#3a2f22', lineHeight: 1.4,
        }}>
          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 6 }}>to-do today:</div>
          ☐ ship Kioku v2<br />
          ☐ finish "tools as crutches"<br />
          ☑ read 30 min<br />
          ☐ italian lesson<br />
          ☐ call mom 🇻🇪
        </div>
        <div className="desk-face desk-back" style={{
          background: '#fef080', padding: 18,
          boxShadow: '0 14px 26px -8px rgba(40,20,10,0.45)',
          fontFamily: '"Caveat", cursive', fontSize: 18, color: '#3a2f22', lineHeight: 1.4,
        }}>
          <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 6 }}>secret note:</div>
          if you're reading this, you found the easter egg. send me a screenshot for a coffee on me ☕
        </div>
      </div>

      {/* Shelf */}
      <div className="desk-card" data-flipped={!!flipped['shelf']} style={{
        width: 460, top: 1090, right: 90,
        ...cardStyle('shelf', 'rotate(0deg)'),
      }} onMouseDown={e => startDrag('shelf', e)}>
        <div style={{ fontFamily: '"Caveat", cursive', fontSize: 26, color: '#fbeed8', marginBottom: 10, textAlign: 'right' }}>
          shelf · 32 books · 2025 ✦
        </div>
        <div onClick={(e) => { e.stopPropagation(); onOpen && onOpen('shelf'); }} style={{
          display: 'flex', gap: 5, alignItems: 'flex-end', height: 180,
          padding: '0 14px 14px',
          borderBottom: '14px solid #5a3a1a',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          cursor: 'pointer',
        }}>
          {J.books.map((b, i) => {
            const palette = ['#c4633c', '#5e6b4a', '#a08456', '#7a5a30', '#8a3f28', '#6b5c44', '#3d4a35', '#a87850'];
            const heights = [165, 150, 178, 155, 170, 145, 174, 158];
            return (
              <div key={i} title={`${b.title} — ${b.author}`} style={{
                width: 32, height: heights[i],
                background: `linear-gradient(90deg, ${shadeD(palette[i], 20)} 0%, ${palette[i]} 8%, ${palette[i]} 92%, ${shadeD(palette[i], -25)} 100%)`,
                color: '#fbeed8', writingMode: 'vertical-rl',
                fontFamily: '"Fraunces", serif', fontSize: 10, fontWeight: 600,
                padding: '10px 0',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                letterSpacing: 0.5, textTransform: 'uppercase',
              }}>{b.title}</div>
            );
          })}
        </div>
        <div style={{ textAlign: 'right', fontFamily: '"Caveat", cursive', fontSize: 16, color: '#fef080', marginTop: 6 }}>
          click shelf for full list →
        </div>
      </div>

      {/* Reset button */}
      <button onClick={() => { setPositions({}); setFlipped({}); setZOrder([]); }} style={{
        position: 'absolute', bottom: 28, left: 32, zIndex: 100,
        background: 'rgba(0,0,0,0.35)', color: '#fbeed8',
        border: 'none', padding: '10px 18px', borderRadius: 999,
        fontFamily: '"Special Elite", monospace', fontSize: 12, letterSpacing: 1.5,
        cursor: 'pointer', backdropFilter: 'blur(8px)',
      }}>↻ tidy desk</button>

      {/* Footer signature */}
      <div style={{
        position: 'absolute', bottom: 28, right: 32, zIndex: 100,
        fontFamily: '"Caveat", cursive', fontSize: 28, color: '#fbeed8',
        textShadow: '0 2px 4px rgba(0,0,0,0.4)',
      }}>~ Juan</div>
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

window.DeskHome = DeskHome;
window.shadeD = shadeD;
