// Desk inner pages: AppDetail, ArticleReader, About, Shelf.
// All keep the desk's wood/cream/terracotta language but use distinct
// metaphors per page: open drawer, torn paper, passport, library card.

const woodBg = `radial-gradient(ellipse at 25% 25%, rgba(255,235,195,0.55), transparent 50%),
                radial-gradient(ellipse at 75% 80%, rgba(120,70,30,0.35), transparent 60%),
                linear-gradient(160deg, #b88454 0%, #8a5a32 50%, #6b4220 100%)`;
const woodGrain = `repeating-linear-gradient(98deg, transparent 0px, transparent 30px, rgba(60,30,10,0.08) 30px, rgba(60,30,10,0.08) 31px),
                    repeating-linear-gradient(102deg, transparent 0px, transparent 80px, rgba(255,220,180,0.05) 80px, rgba(255,220,180,0.05) 82px)`;

function PageShell({ children, onBack, title }) {
  return (
    <div style={{ width: 1280, height: 1640, background: woodBg, position: 'relative', overflow: 'hidden', fontFamily: '"Inter", sans-serif', color: '#2a1f15' }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Inter:wght@400;500;600;700&family=Special+Elite&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap" />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: woodGrain, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 24, left: 32, right: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 50 }}>
        <button onClick={onBack} style={{
          background: 'rgba(251,238,216,0.95)', border: 'none', padding: '8px 16px', borderRadius: 999,
          fontFamily: '"Special Elite", monospace', fontSize: 12, letterSpacing: 1.5, cursor: 'pointer', color: '#2a1f15',
        }}>← back to desk</button>
        <div style={{ fontFamily: '"Special Elite", monospace', color: '#fbeed8', fontSize: 13, letterSpacing: 2 }}>{title}</div>
        <div style={{ fontFamily: '"Caveat", cursive', color: '#fbeed8', fontSize: 22 }}>~ Juan</div>
      </div>
      {children}
    </div>
  );
}

// ──────────── APP DETAIL — open drawer ────────────
function AppDetail({ app, onBack }) {
  if (!app) return null;
  return (
    <PageShell onBack={onBack} title={`▰ APP · ${app.name.toUpperCase()}`}>
      {/* Drawer pulled out */}
      <div style={{
        position: 'absolute', top: 100, left: 60, right: 60, bottom: 60,
        background: '#fffaf0',
        borderRadius: '4px 4px 18px 18px',
        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6), inset 0 -8px 0 rgba(120,80,40,0.1)',
        display: 'grid',
        gridTemplateColumns: '440px 1fr',
        overflow: 'hidden',
      }}>
        {/* Drawer handle */}
        <div style={{ position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)', width: 80, height: 14, background: '#d4a056', borderRadius: '4px 4px 0 0', boxShadow: '0 -2px 4px rgba(0,0,0,0.2)' }} />

        {/* Left — phone mock */}
        <div style={{
          background: `linear-gradient(165deg, ${app.color} 0%, ${window.shadeD(app.color, -45)} 100%)`,
          padding: 60, display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          <div style={{
            width: 280, height: 580,
            background: '#1f1d18',
            borderRadius: 38,
            padding: 8,
            boxShadow: '0 30px 60px -10px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,255,255,0.1)',
          }}>
            <div style={{
              width: '100%', height: '100%', background: '#fffaf0', borderRadius: 32,
              padding: 20, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ width: 100, height: 4, background: '#1f1d18', borderRadius: 2, margin: '0 auto 28px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <div>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, fontWeight: 600, color: app.color, lineHeight: 1 }}>{app.glyph}</div>
                  <div style={{ fontSize: 11, color: '#5a4530', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>{app.name}</div>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: app.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: app.color, fontWeight: 700 }}>+</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[1,2,3,4,5,6].map(k => (
                  <div key={k} style={{
                    padding: '12px 14px', background: `${app.color}10`, borderRadius: 10,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <div>
                      <div style={{ height: 8, width: 90, background: app.color, borderRadius: 2, opacity: 0.8 }} />
                      <div style={{ height: 5, width: 60, background: app.color, borderRadius: 2, opacity: 0.4, marginTop: 5 }} />
                    </div>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', border: `2px solid ${app.color}`, opacity: k <= 3 ? 1 : 0.3, background: k <= 3 ? app.color : 'transparent' }} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 'auto', padding: 12, background: app.color, borderRadius: 12, color: '#fff', textAlign: 'center', fontSize: 13, fontWeight: 600 }}>
                start session
              </div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%) rotate(-2deg)', fontFamily: '"Caveat", cursive', fontSize: 24, color: 'rgba(255,255,255,0.85)' }}>
            actual screen ↑
          </div>
        </div>

        {/* Right — content */}
        <div style={{ padding: '60px 50px', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: app.color, textTransform: 'uppercase' }}>file № 0{['kaizen','kage','kioku'].indexOf(app.id)+1} · pulled from drawer</div>
          <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: 80, lineHeight: 0.95, margin: '12px 0 0', fontWeight: 600, letterSpacing: -2 }}>
            {app.name}<span style={{ color: app.color }}>.</span>
          </h1>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 28, color: app.color, marginTop: 4 }}>{app.tag}</div>

          <p style={{ fontSize: 16, lineHeight: 1.65, color: '#3a2f22', marginTop: 26, fontFamily: '"Fraunces", serif' }}>
            {app.blurb} A small, focused tool I built for myself first — the kind of utility I wished existed but couldn't find. Now on iOS and Android.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 12, marginTop: 26 }}>
            <button style={{
              padding: '14px 22px', borderRadius: 12, border: 'none',
              background: app.color, color: '#fff', fontWeight: 600, fontSize: 14, letterSpacing: 0.5,
              boxShadow: `0 8px 20px -4px ${app.color}80`, cursor: 'pointer',
            }}>App Store ↗</button>
            <button style={{
              padding: '14px 22px', borderRadius: 12,
              background: 'transparent', border: `2px solid ${app.color}`, color: app.color,
              fontWeight: 600, fontSize: 14, letterSpacing: 0.5, cursor: 'pointer',
            }}>Google Play ↗</button>
          </div>

          {/* Tech stack */}
          <div style={{ marginTop: 30 }}>
            <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#5a4530' }}>built with</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
              {app.tech.map(t => (
                <span key={t} style={{
                  padding: '6px 14px', background: app.color + '15', color: app.color,
                  borderRadius: 999, fontSize: 13, fontWeight: 500,
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Receipts / facts */}
          <div style={{ marginTop: 28, padding: 22, background: '#f5e8d4', borderRadius: 12, border: '1px dashed #c4633c' }}>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#a04020', marginBottom: 8 }}>~ behind the build</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
              {[
                { l: 'first commit', v: 'Aug 2025' },
                { l: 'shipped', v: 'Oct 2025' },
                { l: 'rewrites', v: '2' },
                { l: 'lines of code', v: '~8.3k' },
                { l: 'built solo', v: 'with AI' },
                { l: 'caffeine', v: '∞' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, color: app.color, fontWeight: 600 }}>{s.v}</div>
                  <div style={{ fontSize: 11, color: '#5a4530', textTransform: 'uppercase', letterSpacing: 1 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 20, fontFamily: '"Caveat", cursive', fontSize: 20, color: '#5a4530' }}>
            ← drag back the drawer to return to the desk
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// ──────────── ARTICLE READER — torn cream paper ────────────
function ArticleReader({ article, onBack }) {
  if (!article) return null;
  const body = `It started, as most of these things do, with a small inconvenience. I needed something that didn't quite exist. Or rather — it existed in a dozen versions, none of them quite right.

For years I told myself this was a normal feeling. Then I read something that stuck: the friction between what tools give you and what you actually need is where everything interesting happens. That's where I live now.

I've been a lawyer in Venezuela. A project administrator in Argentina. An executive assistant in Texas. Each of those careers gave me one thing: a way of seeing problems that the next career didn't have.

The legal training taught me to read a room and to take notes that mattered. The project work taught me that "ship it" beats "perfect it" almost every time. The data work taught me that most of what people call intuition is just pattern-matching with no audit trail.

And now, the apps. Three of them, in a year. None of them ambitious. All of them mine.

There's a thing I keep coming back to — that the people who win in any given decade are the people who refuse to specialize until very late, and then specialize hard. I'm not sure that's me yet. But it's the bet I'm making.`;

  return (
    <PageShell onBack={onBack} title="▰ READING ROOM">
      <div style={{ position: 'absolute', top: 90, left: 60, right: 60, bottom: 60, display: 'grid', gridTemplateColumns: '1fr 320px', gap: 30 }}>
        {/* Main paper */}
        <div style={{
          background: '#fffaf0',
          padding: '60px 80px 80px',
          borderRadius: '2px',
          boxShadow: '0 40px 60px -20px rgba(0,0,0,0.5)',
          position: 'relative',
          overflow: 'auto',
          // torn top edge
          maskImage: 'linear-gradient(black, black)',
        }}>
          {/* Torn top edge effect via SVG */}
          <svg width="100%" height="20" style={{ position: 'absolute', top: -1, left: 0, color: '#fffaf0' }}>
            <path d="M0,20 Q40,8 80,16 T160,12 T240,18 T320,10 T400,14 T480,16 T560,8 T640,18 T720,12 T800,16 T880,10 T960,14 T1040,18 T1120,8 T1200,12 L1200,0 L0,0 Z" fill="currentColor" />
          </svg>

          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, color: '#a04020', letterSpacing: 2, textTransform: 'uppercase' }}>
            Essay № 011 · {article.date} · {article.read}
          </div>
          <h1 style={{
            fontFamily: '"Fraunces", serif', fontSize: 72, lineHeight: 1.0, fontWeight: 600,
            margin: '14px 0 0', letterSpacing: -2, color: '#1f1d18',
          }}>{article.title}</h1>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 26, color: '#5a4530', marginTop: 12, fontStyle: 'italic' }}>
            {article.excerpt}
          </div>

          {/* Drop cap first paragraph */}
          <div style={{ marginTop: 36, fontFamily: '"Fraunces", serif', fontSize: 20, lineHeight: 1.7, color: '#2a1f15' }}>
            <span style={{
              float: 'left', fontFamily: '"Fraunces", serif', fontSize: 96, lineHeight: 0.85,
              color: '#c4633c', fontWeight: 600, padding: '6px 12px 0 0',
            }}>I</span>
            {body.split('\n\n')[0].slice(2)}
          </div>
          {body.split('\n\n').slice(1).map((p, i) => (
            <p key={i} style={{ fontFamily: '"Fraunces", serif', fontSize: 19, lineHeight: 1.7, color: '#2a1f15', marginTop: 22 }}>{p}</p>
          ))}

          {/* Margin doodle */}
          <div style={{
            position: 'absolute', top: 360, right: 30, transform: 'rotate(8deg)',
            fontFamily: '"Caveat", cursive', fontSize: 22, color: '#a04020',
            border: '2px solid #a04020', borderRadius: 999, padding: '6px 14px',
          }}>
            ★ key idea
          </div>

          {/* Signature */}
          <div style={{ marginTop: 50, fontFamily: '"Caveat", cursive', fontSize: 44, color: '#c4633c', transform: 'rotate(-3deg)' }}>
            ~ Juan
          </div>
        </div>

        {/* Side rail — meta + related */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ background: '#fef080', padding: 18, transform: 'rotate(2deg)', boxShadow: '0 12px 24px -8px rgba(0,0,0,0.4)', fontFamily: '"Caveat", cursive', color: '#3a2f22', fontSize: 18, lineHeight: 1.5 }}>
            <b style={{ fontSize: 22 }}>tags:</b><br />
            {article.tags.map(t => `# ${t.toLowerCase()}`).join('  ')}
          </div>
          <div style={{ background: '#fffaf0', padding: 22, borderRadius: 4, boxShadow: '0 12px 24px -8px rgba(0,0,0,0.4)', borderLeft: '6px solid #5e6b4a' }}>
            <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: '#5e6b4a', textTransform: 'uppercase' }}>also reading</div>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {window.JUAN.articles.slice(1, 4).map(a => (
                <div key={a.id} style={{ borderBottom: '1px dashed #c4633c50', paddingBottom: 10 }}>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 16, fontWeight: 600, color: '#2a1f15', lineHeight: 1.2 }}>{a.title}</div>
                  <div style={{ fontSize: 11, color: '#5a4530', marginTop: 3 }}>{a.date} · {a.read}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            background: '#1f1d18', color: '#fbeed8', padding: 22, borderRadius: 4,
            boxShadow: '0 12px 24px -8px rgba(0,0,0,0.5)',
          }}>
            <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: '#e8a878', textTransform: 'uppercase' }}>subscribe</div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 18, marginTop: 8, lineHeight: 1.3 }}>get new essays in your inbox. one a month, max.</div>
            <input placeholder="you@email.com" style={{
              width: '100%', marginTop: 12, padding: '10px 14px', borderRadius: 6,
              border: 'none', background: '#fbeed8', color: '#1f1d18', fontFamily: 'inherit', fontSize: 13, boxSizing: 'border-box',
            }} />
            <button style={{ width: '100%', marginTop: 8, padding: '10px', background: '#c4633c', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>send →</button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// ──────────── ABOUT — passport / timeline ────────────
function About({ onBack }) {
  const J = window.JUAN;
  return (
    <PageShell onBack={onBack} title="▰ ABOUT · PASSPORT">
      <div style={{ position: 'absolute', top: 100, left: 60, right: 60, bottom: 60, display: 'grid', gridTemplateColumns: '420px 1fr', gap: 30 }}>
        {/* Passport */}
        <div style={{
          background: 'linear-gradient(160deg, #5a3a1a, #3a2410)',
          color: '#d4a056',
          borderRadius: 8,
          padding: 36,
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.6), inset 0 0 0 2px rgba(212,160,86,0.3)',
          display: 'flex', flexDirection: 'column',
          position: 'relative',
        }}>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 3, opacity: 0.7 }}>PASAPORTE · PASSPORT · PASSAPORTO</div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 48, fontWeight: 600, lineHeight: 1, marginTop: 6 }}>JUAN<br/>BRACHO</div>
          <div style={{ marginTop: 16, fontSize: 13, color: '#fbeed8', opacity: 0.85, lineHeight: 1.6 }}>
            Born Maracaibo, VE.<br />
            Currently Austin, TX.<br />
            Languages — ES · EN · IT.
          </div>
          {/* Photo placeholder */}
          <div style={{
            marginTop: 22, width: 180, height: 220,
            background: '#fbeed8', borderRadius: 4, padding: 6,
          }}>
            <img src="assets/profile.png" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.3) contrast(0.95)' }} />
          </div>
          {/* Stamp */}
          <div style={{
            position: 'absolute', top: 240, right: 30, transform: 'rotate(-15deg)',
            border: '3px solid #c4633c', color: '#c4633c',
            fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 2,
            padding: '8px 14px', borderRadius: 4, opacity: 0.85,
          }}>
            ★ AUSTIN TX ★<br />
            <span style={{ fontSize: 14, fontWeight: 700, display: 'block', textAlign: 'center', marginTop: 2 }}>2022</span>
          </div>
          <div style={{ marginTop: 'auto', fontFamily: '"Caveat", cursive', fontSize: 20, color: '#fbeed8', opacity: 0.85 }}>
            ~ a builder, twice emigrated ~
          </div>
        </div>

        {/* Right — long-form bio + timeline */}
        <div style={{ background: '#fffaf0', padding: '40px 44px', borderRadius: 4, boxShadow: '0 30px 60px -15px rgba(0,0,0,0.4)', overflow: 'auto' }}>
          <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: 56, lineHeight: 1, fontWeight: 600, margin: 0, letterSpacing: -1.5 }}>
            The long version<span style={{ color: '#c4633c' }}>.</span>
          </h1>
          <p style={{ fontFamily: '"Fraunces", serif', fontSize: 17, lineHeight: 1.65, color: '#3a2f22', marginTop: 18 }}>
            {J.bio}
          </p>

          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: '#a04020', textTransform: 'uppercase', marginTop: 30 }}>
            ~ trajectory
          </div>
          <div style={{ marginTop: 14, position: 'relative', paddingLeft: 26 }}>
            <div style={{ position: 'absolute', left: 5, top: 8, bottom: 8, width: 1, background: '#c4633c40' }} />
            {J.timeline.map((t, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 16, padding: '10px 0', position: 'relative' }}>
                <div style={{ position: 'absolute', left: -26, top: 16, width: 11, height: 11, background: '#c4633c', borderRadius: '50%', boxShadow: '0 0 0 4px #fffaf0' }} />
                <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 600, color: '#c4633c' }}>{t.year}</div>
                <div>
                  <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: '#7a5530' }}>{t.where}</div>
                  <div style={{ fontSize: 14, color: '#2a1f15', marginTop: 2 }}>{t.what}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 30, padding: 20, background: '#f5e8d4', borderRadius: 6, border: '1px dashed #c4633c' }}>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#a04020' }}>~ get in touch ~</div>
            <div style={{ display: 'flex', gap: 14, marginTop: 8, flexWrap: 'wrap', fontSize: 14, color: '#3a2f22' }}>
              <span>📨 hello@juan.app</span>
              <span>· LinkedIn</span>
              <span>· GitHub</span>
              <span>· Substack</span>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// ──────────── SHELF — full library ────────────
function Shelf({ onBack }) {
  const allBooks = [
    ...window.JUAN.books,
    { title: "Stillness Is the Key", author: "Ryan Holiday", rating: 9, year: 2025 },
    { title: "Essentialism", author: "Greg McKeown", rating: 9, year: 2025 },
    { title: "Slow Productivity", author: "Cal Newport", rating: 8, year: 2025 },
    { title: "Scarcity Brain", author: "Michael Easter", rating: 9, year: 2025 },
    { title: "Think Again", author: "Adam Grant", rating: 8, year: 2025 },
    { title: "Discipline Is Destiny", author: "Ryan Holiday", rating: 9, year: 2025 },
    { title: "Million Dollar Weekend", author: "Noah Kagan", rating: 9, year: 2025 },
    { title: "The Obstacle Is the Way", author: "Ryan Holiday", rating: 9, year: 2025 },
    { title: "Die With Zero", author: "Bill Perkins", rating: 8, year: 2026 },
    { title: "Becoming Bulletproof", author: "Evy Poumpouras", rating: 8, year: 2025 },
    { title: "Hooked", author: "Nir Eyal", rating: 7, year: 2025 },
    { title: "Tiny Habits", author: "B.J. Fogg", rating: 10, year: 2025 },
  ];
  const palette = ['#c4633c','#5e6b4a','#a08456','#7a5a30','#8a3f28','#6b5c44','#3d4a35','#a87850','#9a4530','#7a8055','#b08c66','#544540'];
  return (
    <PageShell onBack={onBack} title="▰ SHELF · LIBRARY">
      <div style={{ position: 'absolute', top: 100, left: 60, right: 60, bottom: 60 }}>
        <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: 64, fontWeight: 600, letterSpacing: -2, margin: 0, color: '#fbeed8' }}>
          The Shelf<span style={{ color: '#e8a878' }}>.</span>
        </h1>
        <div style={{ fontFamily: '"Caveat", cursive', fontSize: 24, color: '#fef080', marginTop: 4 }}>
          32 books read in 2025 · already 4 deep into 2026
        </div>

        {/* Two shelves */}
        {[2025, 2026].map((yr, idx) => {
          const books = allBooks.filter(b => b.year === yr);
          return (
            <div key={yr} style={{ marginTop: 30 }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 12, letterSpacing: 2, color: '#fbeed8', marginBottom: 8, opacity: 0.8 }}>
                ─── {yr} ─── {books.length} books
              </div>
              <div style={{
                display: 'flex', gap: 6, alignItems: 'flex-end', minHeight: 240,
                padding: '0 20px 12px',
                borderBottom: '18px solid #5a3a1a',
                boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
                overflow: 'hidden',
              }}>
                {books.map((b, i) => {
                  const c = palette[i % palette.length];
                  const h = 170 + ((i * 13) % 60);
                  return (
                    <div key={i} title={`${b.title} — ${b.author} · ${b.rating}/10`} style={{
                      width: 36, height: h,
                      background: `linear-gradient(90deg, ${window.shadeD(c, 25)} 0%, ${c} 8%, ${c} 92%, ${window.shadeD(c, -30)} 100%)`,
                      color: '#fbeed8', writingMode: 'vertical-rl',
                      fontFamily: '"Fraunces", serif', fontSize: 11, fontWeight: 600,
                      padding: '14px 0',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      letterSpacing: 0.5, textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-12px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <span style={{ fontSize: 9, opacity: 0.7 }}>{b.rating}/10</span>
                      <span style={{ flex: 1, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{b.title}</span>
                      <span style={{ fontSize: 9, opacity: 0.7 }}>★</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Featured trio */}
        <div style={{ marginTop: 40 }}>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 26, color: '#fef080', marginBottom: 14 }}>
            ✦ this year's favorites
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {window.JUAN.books.slice(0, 3).map((b, i) => (
              <div key={i} style={{
                background: '#fffaf0', padding: 20, borderRadius: 4,
                boxShadow: '0 14px 28px -10px rgba(0,0,0,0.5)',
                borderLeft: `6px solid ${palette[i]}`,
              }}>
                <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 2, color: palette[i], textTransform: 'uppercase' }}>
                  ★ {b.rating}/10 · {b.year}
                </div>
                <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 600, marginTop: 6, lineHeight: 1.15, letterSpacing: -0.3 }}>{b.title}</div>
                <div style={{ fontSize: 13, color: '#5a4530', fontStyle: 'italic', marginTop: 2 }}>by {b.author}</div>
                <div style={{ fontFamily: '"Caveat", cursive', fontSize: 18, color: palette[i], marginTop: 10 }}>
                  see notes →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

window.AppDetail = AppDetail;
window.ArticleReader = ArticleReader;
window.About = About;
window.Shelf = Shelf;
