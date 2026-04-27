import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDraggable } from '../hooks/useDraggable';
import { useIsMobile } from '../hooks/useIsMobile';
import { shadeD } from '../utils/color';
import { mobileApps } from '../components/appsData';
import { articles } from '../components/articlesData';
import { books } from '../components/booksData';
import profileImg from '../assets/profile.jpeg';
import { FaInstagram } from 'react-icons/fa';

const APP_META = {
  kaizen: { glyph: '改', color: '#667eea', tag: 'workout tracking' },
  kage:   { glyph: '影', color: '#FF7101', tag: 'habit tracker' },
  kioku:  { glyph: '記', color: '#06b6d4', tag: 'visual scheduling' },
};

const SPINE_PALETTE = ['#c4633c','#5e6b4a','#a08456','#7a5a30','#8a3f28','#6b5c44','#3d4a35','#a87850'];
const SPINE_HEIGHTS = [165, 150, 178, 155, 170, 145, 174, 158];

const TIPS = [
  'psst — drag the cards around ✦',
  'click any card to flip it',
  'the apps open into detail views ↗',
  'the sticky note has a secret',
  'every card lives where you leave it',
  'check Study for all books & projects',
];

const SKILLS = [
  { cat: 'Spoken',     items: 'Spanish · English · Italian · FR · JP (learning)' },
  { cat: 'Code',       items: 'Python · SQL · JavaScript' },
  { cat: 'Technical',  items: 'Data Analytics · ML · Flutter' },
  { cat: 'Admin',      items: 'Project Mgmt · Process Automation' },
  { cat: 'PM',         items: 'Agile · Operations · Budgeting' },
  { cat: 'Compliance', items: 'ISO9001 · Legal Review' },
  { cat: 'AI',         items: 'Prompt Engineering · AI Dev' },
];

const NAV = [
  { label: 'Home',    path: '/home' },
  { label: 'Apps',    path: '/apps' },
  { label: 'Writing', path: '/writing' },
  { label: 'About',   path: '/about' },
  { label: 'Study',   path: '/study' },
];

export default function Home() {
  const navigate = useNavigate();
  const { startDrag, cardStyle, flipped, reset, wasDragged, flipCard } = useDraggable();
  const isMobile = useIsMobile();
  const [tip, setTip] = useState(TIPS[0]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % TIPS.length;
      setTip(TIPS[i]);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const recentArticles = [...articles]
    .filter(a => a.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const shelfBooks = books.slice(0, 8);

  const fmt = (d) => new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  const woodBg = {
    background: `
      radial-gradient(ellipse at 25% 25%, rgba(255,235,195,0.55), transparent 50%),
      radial-gradient(ellipse at 75% 80%, rgba(120,70,30,0.35), transparent 60%),
      linear-gradient(160deg, #b88454 0%, #8a5a32 50%, #6b4220 100%)
    `,
  };

  // Mobile card style — flip only, no drag offset
  const mFlip = (id) => ({
    position: 'relative',
    transformStyle: 'preserve-3d',
    transform: flipped[id] ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transition: 'transform 0.5s cubic-bezier(0.2,0.8,0.2,1)',
    cursor: 'pointer',
    userSelect: 'none',
  });

  return (
    <div style={{
      minHeight: '100vh', width: '100%',
      ...woodBg,
      position: 'relative', overflow: 'hidden',
      fontFamily: '"Inter", sans-serif', color: '#2a1f15',
      perspective: '1400px', paddingBottom: 100,
    }}>

      {/* Wood grain overlay */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          repeating-linear-gradient(98deg, transparent 0px, transparent 30px, rgba(60,30,10,0.08) 30px, rgba(60,30,10,0.08) 31px),
          repeating-linear-gradient(102deg, transparent 0px, transparent 80px, rgba(255,220,180,0.05) 80px, rgba(255,220,180,0.05) 82px)
        `,
      }} />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 200,
        height: isMobile ? 52 : 62,
        display: 'flex', alignItems: 'center',
        justifyContent: isMobile ? 'flex-end' : 'space-between',
        padding: isMobile ? '0 16px' : '0 28px',
        gap: isMobile ? 0 : undefined,
      }}>
        {!isMobile && (
          <div style={{ fontFamily: '"Special Elite", monospace', color: '#fbeed8', fontSize: 13, letterSpacing: 2 }}>
            ▰ JUAN'S DESK · OPEN 24/7
          </div>
        )}
        <div style={{
          display: 'flex', gap: 6,
          ...(isMobile ? {
            flex: 1,
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            justifyContent: 'flex-end',
          } : {}),
        }}>
          {NAV.map((n, i) => (
            <button key={n.path} onClick={() => navigate(n.path)} style={{
              fontFamily: '"Special Elite", monospace', fontSize: 12, letterSpacing: 1.5,
              padding: isMobile ? '6px 12px' : '7px 16px',
              borderRadius: 999, border: 'none',
              background: i === 0 ? 'rgba(251,238,216,0.95)' : 'rgba(0,0,0,0.25)',
              color: i === 0 ? '#2a1f15' : '#fbeed8',
              cursor: 'pointer', backdropFilter: 'blur(8px)',
              flexShrink: 0, whiteSpace: 'nowrap',
            }}>{n.label}</button>
          ))}
        </div>
        {!isMobile && (
          <div style={{
            fontFamily: '"Caveat", cursive', color: '#fbeed8', fontSize: 17,
            background: 'rgba(0,0,0,0.25)', padding: '6px 16px',
            borderRadius: 999, backdropFilter: 'blur(8px)',
            minWidth: 260, textAlign: 'center',
          }}>
            {tip}
          </div>
        )}
      </div>

      {/* ── NAMEPLATE ───────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 5, textAlign: 'center', marginTop: isMobile ? 8 : 16 }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(180deg, #d4a056 0%, #a87830 50%, #d4a056 100%)',
          color: '#2a1808', padding: isMobile ? '10px 28px' : '13px 50px',
          fontFamily: '"Fraunces", serif', fontSize: isMobile ? 30 : 42, fontWeight: 600,
          letterSpacing: 2, textTransform: 'uppercase', borderRadius: 4,
          boxShadow: '0 12px 24px -6px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.4)',
          textShadow: '0 1px 0 rgba(255,255,255,0.3)', transform: 'rotate(-1deg)',
        }}>
          Juan Bracho
        </div>
        <div style={{
          fontFamily: '"Caveat", cursive', fontSize: isMobile ? 18 : 26, color: '#fbeed8',
          marginTop: 10, textShadow: '0 2px 4px rgba(0,0,0,0.4)',
          padding: isMobile ? '0 16px' : 0,
        }}>
          Polyglot · Writes Sometimes · Builds with AI · 🇻🇪 → 🇦🇷 → 🇺🇸
        </div>
      </div>

      {/* ── CARD SURFACE ────────────────────────────────────── */}
      {isMobile ? (
        /* ─ Mobile: vertical feed ─ */
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: '0 16px', paddingBottom: 40, position: 'relative', marginTop: 24, zIndex: 10 }}>

          {/* ─ About ─ */}
          <div className="desk-card" data-flipped={!!flipped['about']}
            style={{ width: '100%', height: 220, ...mFlip('about') }}
            onClick={() => flipCard('about')}>
            <div className="desk-face desk-front" style={{
              background: '#fffaf0',
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 23px, rgba(140,180,200,0.4) 23px, rgba(140,180,200,0.4) 24px)',
              borderTop: '12px solid #c4633c', padding: '18px 20px 14px',
              boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)', borderRadius: 2,
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#a04020', textTransform: 'uppercase' }}>№ 001 — about</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 30, fontWeight: 600, lineHeight: 1, marginTop: 8, letterSpacing: -1 }}>Hi, I'm Juan.</div>
              <p style={{ fontSize: 13, lineHeight: 1.55, marginTop: 10, color: '#3a2f22' }}>
                Lawyer with a Master's in Business Law, now building software. I make apps for problems I actually run into — and share them publicly in case they're useful to someone else. Books help too.
              </p>
              <div style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: '"Caveat", cursive', fontSize: 16, color: '#a04020' }}>flip me ↻</div>
            </div>
            <div className="desk-face desk-back" style={{
              background: '#1f1d18', color: '#fbeed8', padding: 22,
              borderRadius: 2, boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)',
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#e8a878', textTransform: 'uppercase' }}>the journey</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 20, marginTop: 8 }}>Briefly:</div>
              <ul style={{ fontSize: 12, lineHeight: 1.75, marginTop: 6, paddingLeft: 16 }}>
                <li>🇻🇪 Law degree · Maracaibo</li>
                <li>🇦🇷 Corporate Law M.A. · Buenos Aires</li>
                <li>🇺🇸 Re-emigrated to Texas (2022)</li>
                <li>📊 Data Analytics bootcamp · UT Austin</li>
                <li>📱 5 productivity apps built (2025)</li>
              </ul>
              <div onClick={e => { e.stopPropagation(); navigate('/about'); }} style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: '"Caveat", cursive', fontSize: 18, color: '#e8a878', cursor: 'pointer' }}>full story →</div>
            </div>
          </div>

          {/* ─ Skills ─ */}
          <div className="desk-card" data-flipped={!!flipped['skills']}
            style={{ width: '100%', height: 220, ...mFlip('skills') }}
            onClick={() => flipCard('skills')}>
            <div className="desk-face desk-front" style={{
              background: '#fffaf0', borderTop: '12px solid #5e6b4a',
              padding: '18px 20px 14px',
              boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)', borderRadius: 2,
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#5e6b4a', textTransform: 'uppercase' }}>№ 002 — skills</div>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {SKILLS.map(s => (
                  <div key={s.cat} style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                    <span style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, color: '#5e6b4a', letterSpacing: 1, minWidth: 70, textTransform: 'uppercase' }}>{s.cat}</span>
                    <span style={{ fontSize: 11, color: '#3a2f22' }}>{s.items}</span>
                  </div>
                ))}
              </div>
              <div style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: '"Caveat", cursive', fontSize: 15, color: '#5e6b4a' }}>flip me ↻</div>
            </div>
            <div className="desk-face desk-back" style={{
              background: '#5e6b4a', color: '#fbeed8',
              padding: '22px 20px', borderRadius: 2,
              boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)',
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#fef080', textTransform: 'uppercase', marginBottom: 10 }}>tools i reach for</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px', fontSize: 11 }}>
                {['Python','Flutter / Dart','SQL / PostgreSQL','React / TypeScript','Tableau','Machine Learning','Data Pipelines','App Development','Project Mgmt','AI-Assisted Dev'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ color: '#fef080' }}>·</span>{t}</div>
                ))}
              </div>
            </div>
          </div>

          {/* ─ App Cards ─ */}
          {mobileApps.map((app, i) => {
            const meta = APP_META[app.id];
            return (
              <div key={app.id} className="desk-card" data-flipped={!!flipped[app.id]}
                style={{ width: '100%', height: 300, ...mFlip(app.id) }}
                onClick={() => flipCard(app.id)}>
                <div className="desk-face desk-front" style={{
                  background: `linear-gradient(160deg, ${meta.color} 0%, ${shadeD(meta.color, -40)} 100%)`,
                  borderRadius: 16, padding: 22, color: '#fff',
                  boxShadow: '0 22px 40px -12px rgba(40,20,10,0.55), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, opacity: 0.8 }}>APP №0{i + 1}</div>
                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: 15, opacity: 0.85 }}>↻ flip</div>
                  </div>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 80, fontWeight: 600, lineHeight: 0.9, marginTop: 50 }}>{meta.glyph}</div>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, fontWeight: 600, marginTop: 12, letterSpacing: -0.5 }}>{app.name}</div>
                  <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>{meta.tag}</div>
                </div>
                <div className="desk-face desk-back" style={{
                  background: '#fffaf0', borderRadius: 16, padding: 20,
                  boxShadow: '0 22px 40px -12px rgba(40,20,10,0.55)',
                  border: `4px solid ${meta.color}`,
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: meta.color, textTransform: 'uppercase' }}>stats · {app.name.toLowerCase()}</div>
                  <p style={{ fontSize: 12, lineHeight: 1.5, color: '#3a2f22', marginTop: 10 }}>{app.tagline}</p>
                  <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {app.tech.map(t => (
                      <div key={t} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#5a4530', borderBottom: '1px dashed rgba(120,80,40,0.3)', paddingBottom: 3 }}>
                        <span>{t}</span><span style={{ color: meta.color }}>✓</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={e => { e.stopPropagation(); navigate('/apps/' + app.id); }} style={{
                    marginTop: 'auto', padding: '10px 12px',
                    background: meta.color, color: '#fff', borderRadius: 8, border: 'none',
                    fontSize: 11, fontWeight: 600, letterSpacing: 1, cursor: 'pointer',
                    fontFamily: '"Special Elite", monospace',
                  }}>OPEN DETAIL ↗</button>
                </div>
              </div>
            );
          })}

          {/* ─ Article Tickets ─ */}
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#fbeed8' }}>
            ✦ recent essays — tap to read
          </div>
          {recentArticles.map((a) => {
            const id = 'art-' + a.id;
            return (
              <div key={a.id} className="desk-card" data-flipped={!!flipped[id]}
                style={{ width: '100%', height: 90, ...mFlip(id) }}
                onClick={() => { if (a.type === 'external') window.open(a.externalUrl, '_blank'); else navigate('/writing/' + a.id); }}>
                <div className="desk-face desk-front" style={{
                  background: '#fffaf0', padding: '14px 16px 14px 20px',
                  boxShadow: '0 12px 24px -8px rgba(40,20,10,0.4)',
                  display: 'flex', alignItems: 'center', gap: 12,
                  clipPath: 'polygon(2% 0, 100% 0, 100% 100%, 2% 100%, 0% 90%, 1% 80%, 0 70%, 1% 60%, 0 50%, 1% 40%, 0 30%, 1% 20%, 0 10%)',
                }}>
                  <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, color: '#a04020', borderRight: '1px dashed #c4633c', paddingRight: 12, lineHeight: 1.5, minWidth: 58, flexShrink: 0 }}>
                    {fmt(a.date)}<br /><span style={{ color: '#5a4530' }}>5 min</span>
                  </div>
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <div style={{ fontFamily: '"Fraunces", serif', fontSize: 15, fontWeight: 600, color: '#2a1f15', lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: '#5a4530', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.description}</div>
                  </div>
                  <div style={{ fontFamily: '"Caveat", cursive', fontSize: 20, color: '#c4633c', flexShrink: 0 }}>→</div>
                </div>
                <div className="desk-face desk-back" style={{
                  background: '#c4633c', color: '#fffaf0', padding: '14px 20px',
                  fontFamily: '"Caveat", cursive', fontSize: 17, display: 'flex', alignItems: 'center',
                  clipPath: 'polygon(2% 0, 100% 0, 100% 100%, 2% 100%, 0% 90%, 1% 80%, 0 70%, 1% 60%, 0 50%, 1% 40%, 0 30%, 1% 20%, 0 10%)',
                }}>
                  ✦ {a.tags ? a.tags.join(' · ') : ''}
                </div>
              </div>
            );
          })}

          {/* ─ Polaroid + Sticky side by side ─ */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <div className="desk-card" data-flipped={!!flipped['polaroid']}
              style={{ width: 180, height: 260, flexShrink: 0, ...mFlip('polaroid') }}
              onClick={() => flipCard('polaroid')}>
              <div className="desk-face desk-front" style={{
                background: '#fff', padding: '12px 12px 44px',
                boxShadow: '0 24px 40px -12px rgba(40,20,10,0.6)', borderRadius: 2,
              }}>
                <div style={{ position: 'absolute', top: -14, left: 44, width: 90, height: 24, background: 'rgba(232,168,120,0.7)', transform: 'rotate(-3deg)', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} />
                <img src={profileImg} alt="Juan" style={{ width: '100%', height: 160, objectFit: 'cover', filter: 'sepia(0.2) saturate(0.85)' }} />
                <div style={{ fontFamily: '"Caveat", cursive', fontSize: 16, textAlign: 'center', marginTop: 6, color: '#3a2f22' }}>last fall · Granada ↑</div>
              </div>
              <div className="desk-face desk-back" style={{
                background: '#fffaf0', padding: 16, borderRadius: 2,
                boxShadow: '0 24px 40px -12px rgba(40,20,10,0.6)',
                fontFamily: '"Caveat", cursive', color: '#3a2f22',
              }}>
                <div style={{ fontSize: 18, fontWeight: 600, color: '#a04020' }}>currently:</div>
                <div style={{ fontSize: 15, lineHeight: 1.65, marginTop: 8 }}>
                  📖 Reading<br />
                  🔧 Solving a problem<br />
                  🇫🇷 Learning a language<br />
                  ✏ Writing something
                </div>
                <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6, color: '#a04020', fontSize: 13 }}>
                  <FaInstagram size={14} />
                  <span>juanbracho16</span>
                </div>
              </div>
            </div>

            <div className="desk-card" data-flipped={!!flipped['sticky']}
              style={{ width: 180, height: 200, flexShrink: 0, alignSelf: 'flex-end', ...mFlip('sticky') }}
              onClick={() => flipCard('sticky')}>
              <div className="desk-face desk-front" style={{ background: '#fef080', padding: 16, boxShadow: '0 14px 26px -8px rgba(40,20,10,0.45)', fontFamily: '"Caveat", cursive', fontSize: 16, color: '#3a2f22', lineHeight: 1.45 }}>
                <div style={{ fontWeight: 700, fontSize: 19, marginBottom: 8 }}>to-do today:</div>
                ☐ walk dogs<br />☑ read 30 min<br />☐ French class<br />☐ don't be an asshole<br />☐ call a friend
              </div>
              <div className="desk-face desk-back" style={{ background: '#fef080', padding: 16, boxShadow: '0 14px 26px -8px rgba(40,20,10,0.45)', fontFamily: '"Caveat", cursive', fontSize: 14, color: '#3a2f22', lineHeight: 1.5 }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>secret note:</div>
                if you're reading this, you found the easter egg. now go be nice to someone today — pay forward what others have given you. it costs nothing and means everything.
              </div>
            </div>
          </div>

          {/* ─ Shelf Preview ─ */}
          <div className="desk-card" data-flipped={false}
            style={{ width: '100%', position: 'relative', transformStyle: 'preserve-3d', userSelect: 'none', cursor: 'pointer' }}
            onClick={() => navigate('/study')}>
            <div>
              <div style={{ fontFamily: '"Caveat", cursive', fontSize: 20, color: '#fbeed8', marginBottom: 12 }}>
                shelf · {books.length} books · 2025–26 ✦
              </div>
              <div style={{
                display: 'flex', gap: 4, alignItems: 'flex-end',
                height: 160, overflow: 'hidden',
                padding: '0 10px 8px',
                borderBottom: '12px solid #5a3a1a',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }}>
                {shelfBooks.map((b, i) => (
                  <div key={i} title={b.title} style={{
                    width: 30, height: Math.round(SPINE_HEIGHTS[i] * 0.85),
                    background: `linear-gradient(90deg, ${shadeD(SPINE_PALETTE[i], 20)} 0%, ${SPINE_PALETTE[i]} 8%, ${SPINE_PALETTE[i]} 92%, ${shadeD(SPINE_PALETTE[i], -25)} 100%)`,
                    color: '#fbeed8', writingMode: 'vertical-rl',
                    fontFamily: '"Fraunces", serif', fontSize: 8, fontWeight: 600,
                    padding: '8px 0', boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    letterSpacing: 0.5, textTransform: 'uppercase', overflow: 'hidden',
                    flexShrink: 0,
                  }}>{b.title}</div>
                ))}
              </div>
              <div style={{ textAlign: 'right', fontFamily: '"Caveat", cursive', fontSize: 15, color: '#fef080', marginTop: 6 }}>
                tap for the full study room →
              </div>
            </div>
          </div>

        </div>
      ) : (
        /* ─ Desktop: absolute card canvas ─ */
        <div style={{ position: 'relative', marginTop: 36, minHeight: 1200, zIndex: 10 }}>

          {/* ─ About Card ─ */}
          <div
            className="desk-card"
            data-flipped={!!flipped['about']}
            style={{ width: 360, height: 240, top: 0, left: 60, animation: 'drift 6s ease-in-out infinite', ...cardStyle('about', 'rotate(-3deg)') }}
            onMouseDown={e => startDrag('about', e)}
          >
            <div className="desk-face desk-front" style={{
              background: '#fffaf0',
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 23px, rgba(140,180,200,0.4) 23px, rgba(140,180,200,0.4) 24px)',
              borderTop: '12px solid #c4633c', padding: '20px 22px 14px',
              boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)', borderRadius: 2,
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#a04020', textTransform: 'uppercase' }}>№ 001 — about</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 34, fontWeight: 600, lineHeight: 1, marginTop: 8, letterSpacing: -1 }}>Hi, I'm Juan.</div>
              <p style={{ fontSize: 13, lineHeight: 1.55, marginTop: 10, color: '#3a2f22' }}>
                Lawyer with a Master's in Business Law, now building software. I make apps for problems I actually run into — and share them publicly in case they're useful to someone else. Books help too.
              </p>
              <div style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: '"Caveat", cursive', fontSize: 16, color: '#a04020' }}>flip me ↻</div>
            </div>
            <div className="desk-face desk-back" style={{
              background: '#1f1d18', color: '#fbeed8', padding: 22,
              borderRadius: 2, boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)',
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#e8a878', textTransform: 'uppercase' }}>the journey</div>
              <div style={{ fontFamily: '"Fraunces", serif', fontSize: 20, marginTop: 8 }}>Briefly:</div>
              <ul style={{ fontSize: 12, lineHeight: 1.75, marginTop: 6, paddingLeft: 16 }}>
                <li>🇻🇪 Law degree · Maracaibo</li>
                <li>🇦🇷 Corporate Law M.A. · Buenos Aires</li>
                <li>🇺🇸 Re-emigrated to Texas (2022)</li>
                <li>📊 Data Analytics bootcamp · UT Austin</li>
                <li>📱 5 productivity apps built (2025)</li>
              </ul>
              <div onClick={e => { e.stopPropagation(); navigate('/about'); }} style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: '"Caveat", cursive', fontSize: 18, color: '#e8a878', cursor: 'pointer' }}>full story →</div>
            </div>
          </div>

          {/* ─ Skills Card ─ */}
          <div
            className="desk-card"
            data-flipped={!!flipped['skills']}
            style={{ width: 280, height: 240, top: 0, left: 470, ...cardStyle('skills', 'rotate(2deg)') }}
            onMouseDown={e => startDrag('skills', e)}
          >
            <div className="desk-face desk-front" style={{
              background: '#fffaf0', borderTop: '12px solid #5e6b4a',
              padding: '20px 20px 14px',
              boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)', borderRadius: 2,
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#5e6b4a', textTransform: 'uppercase' }}>№ 002 — skills</div>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 5 }}>
                {SKILLS.map(s => (
                  <div key={s.cat} style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                    <span style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, color: '#5e6b4a', letterSpacing: 1, minWidth: 70, textTransform: 'uppercase' }}>{s.cat}</span>
                    <span style={{ fontSize: 11, color: '#3a2f22' }}>{s.items}</span>
                  </div>
                ))}
              </div>
              <div style={{ position: 'absolute', bottom: 12, right: 16, fontFamily: '"Caveat", cursive', fontSize: 15, color: '#5e6b4a' }}>flip me ↻</div>
            </div>
            <div className="desk-face desk-back" style={{
              background: '#5e6b4a', color: '#fbeed8',
              padding: '22px 20px', borderRadius: 2,
              boxShadow: '0 18px 36px -10px rgba(40,20,10,0.5)',
            }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: '#fef080', textTransform: 'uppercase', marginBottom: 10 }}>tools i reach for</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px', fontSize: 11 }}>
                {['Python','Flutter / Dart','SQL / PostgreSQL','React / TypeScript','Tableau','Machine Learning','Data Pipelines','App Development','Project Mgmt','AI-Assisted Dev'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ color: '#fef080' }}>·</span>{t}</div>
                ))}
              </div>
            </div>
          </div>

          {/* ─ Polaroid ─ */}
          <div
            className="desk-card"
            data-flipped={!!flipped['polaroid']}
            style={{ width: 220, height: 290, top: 315, left: 1050, ...cardStyle('polaroid', 'rotate(5deg)') }}
            onMouseDown={e => startDrag('polaroid', e)}
          >
            <div className="desk-face desk-front" style={{
              background: '#fff', padding: '14px 14px 50px',
              boxShadow: '0 24px 40px -12px rgba(40,20,10,0.6)', borderRadius: 2,
            }}>
              <div style={{ position: 'absolute', top: -16, left: 60, width: 100, height: 28, background: 'rgba(232,168,120,0.7)', transform: 'rotate(-3deg)', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }} />
              <img src={profileImg} alt="Juan" style={{ width: '100%', height: 192, objectFit: 'cover', filter: 'sepia(0.2) saturate(0.85)' }} />
              <div style={{ fontFamily: '"Caveat", cursive', fontSize: 20, textAlign: 'center', marginTop: 8, color: '#3a2f22' }}>last fall · Granada, Spain ↑</div>
            </div>
            <div className="desk-face desk-back" style={{
              background: '#fffaf0', padding: 18, borderRadius: 2,
              boxShadow: '0 24px 40px -12px rgba(40,20,10,0.6)',
              fontFamily: '"Caveat", cursive', color: '#3a2f22',
            }}>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#a04020' }}>currently:</div>
              <div style={{ fontSize: 17, lineHeight: 1.65, marginTop: 10 }}>
                📖 Reading<br />
                🔧 Solving a problem<br />
                🇫🇷 Learning a language<br />
                ✏ Writing something
              </div>
              <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 6, color: '#a04020', fontSize: 15 }}>
                <FaInstagram size={16} />
                <span>juanbracho16</span>
              </div>
            </div>
          </div>

          {/* ─ App Cards ─ */}
          {mobileApps.map((app, i) => {
            const meta = APP_META[app.id];
            const rot  = [-3, 1.5, -1.5][i];
            return (
              <div
                key={app.id}
                className="desk-card"
                data-flipped={!!flipped[app.id]}
                style={{ width: 240, height: 330, top: 280, left: [80, 320, 560][i], ...cardStyle(app.id, `rotate(${rot}deg)`) }}
                onMouseDown={e => startDrag(app.id, e)}
              >
                <div className="desk-face desk-front" style={{
                  background: `linear-gradient(160deg, ${meta.color} 0%, ${shadeD(meta.color, -40)} 100%)`,
                  borderRadius: 16, padding: 22, color: '#fff',
                  boxShadow: '0 22px 40px -12px rgba(40,20,10,0.55), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, opacity: 0.8 }}>APP №0{i + 1}</div>
                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: 15, opacity: 0.85 }}>↻ flip</div>
                  </div>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 88, fontWeight: 600, lineHeight: 0.9, marginTop: 116 }}>{meta.glyph}</div>
                  <div style={{ fontFamily: '"Fraunces", serif', fontSize: 30, fontWeight: 600, marginTop: 14, letterSpacing: -0.5 }}>{app.name}</div>
                  <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>{meta.tag}</div>
                </div>
                <div className="desk-face desk-back" style={{
                  background: '#fffaf0', borderRadius: 16, padding: 20,
                  boxShadow: '0 22px 40px -12px rgba(40,20,10,0.55)',
                  border: `4px solid ${meta.color}`,
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1, color: meta.color, textTransform: 'uppercase' }}>stats · {app.name.toLowerCase()}</div>
                  <p style={{ fontSize: 12, lineHeight: 1.5, color: '#3a2f22', marginTop: 10 }}>{app.tagline}</p>
                  <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {app.tech.map(t => (
                      <div key={t} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#5a4530', borderBottom: '1px dashed rgba(120,80,40,0.3)', paddingBottom: 3 }}>
                        <span>{t}</span><span style={{ color: meta.color }}>✓</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={e => { e.stopPropagation(); navigate('/apps/' + app.id); }} style={{
                    marginTop: 'auto', padding: '10px 12px',
                    background: meta.color, color: '#fff', borderRadius: 8, border: 'none',
                    fontSize: 11, fontWeight: 600, letterSpacing: 1, cursor: 'pointer',
                    fontFamily: '"Special Elite", monospace',
                  }}>OPEN DETAIL ↗</button>
                </div>
              </div>
            );
          })}

          {/* ─ Article Tickets ─ */}
          <div style={{ position: 'absolute', top: 650, left: 60, fontFamily: '"Caveat", cursive', fontSize: 26, color: '#fbeed8', transform: 'rotate(-1deg)', zIndex: 5, pointerEvents: 'none' }}>
            ✦ recent essays — read or drag
          </div>
          {recentArticles.map((a, i) => {
            const id  = 'art-' + a.id;
            const rot = [-0.8, 0.4, -0.3][i];
            return (
              <div
                key={a.id}
                className="desk-card"
                data-flipped={!!flipped[id]}
                style={{ width: 540, height: 82, top: 690 + i * 94, left: 60, ...cardStyle(id, `rotate(${rot}deg)`) }}
                onMouseDown={e => startDrag(id, e)}
              >
                <div className="desk-face desk-front" style={{
                  background: '#fffaf0', padding: '14px 18px 14px 22px',
                  boxShadow: '0 12px 24px -8px rgba(40,20,10,0.4)',
                  display: 'flex', alignItems: 'center', gap: 16,
                  clipPath: 'polygon(2% 0, 100% 0, 100% 100%, 2% 100%, 0% 90%, 1% 80%, 0 70%, 1% 60%, 0 50%, 1% 40%, 0 30%, 1% 20%, 0 10%)',
                }}>
                  <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, color: '#a04020', borderRight: '1px dashed #c4633c', paddingRight: 16, lineHeight: 1.5, minWidth: 72 }}>
                    {fmt(a.date)}<br /><span style={{ color: '#5a4530' }}>5 min</span>
                  </div>
                  <div style={{ flex: 1, overflow: 'hidden' }}>
                    <div style={{ fontFamily: '"Fraunces", serif', fontSize: 17, fontWeight: 600, color: '#2a1f15', lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: '#5a4530', marginTop: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.description}</div>
                  </div>
                  <button onClick={e => { e.stopPropagation(); if (a.type === 'external') window.open(a.externalUrl, '_blank'); else navigate('/writing/' + a.id); }} style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#c4633c', cursor: 'pointer', background: 'none', border: 'none', padding: '0 8px', flexShrink: 0 }}>read →</button>
                </div>
                <div className="desk-face desk-back" style={{
                  background: '#c4633c', color: '#fffaf0', padding: '14px 22px',
                  fontFamily: '"Caveat", cursive', fontSize: 18, display: 'flex', alignItems: 'center',
                  clipPath: 'polygon(2% 0, 100% 0, 100% 100%, 2% 100%, 0% 90%, 1% 80%, 0 70%, 1% 60%, 0 50%, 1% 40%, 0 30%, 1% 20%, 0 10%)',
                }}>
                  ✦ {a.tags ? a.tags.join(' · ') : ''} — drag me, or click "read"
                </div>
              </div>
            );
          })}

          {/* ─ Sticky Note ─ */}
          <div
            className="desk-card"
            data-flipped={!!flipped['sticky']}
            style={{ width: 200, height: 200, top: 355, left: 790, ...cardStyle('sticky', 'rotate(-4deg)') }}
            onMouseDown={e => startDrag('sticky', e)}
          >
            <div className="desk-face desk-front" style={{ background: '#fef080', padding: 18, boxShadow: '0 14px 26px -8px rgba(40,20,10,0.45)', fontFamily: '"Caveat", cursive', fontSize: 17, color: '#3a2f22', lineHeight: 1.45 }}>
              <div style={{ fontWeight: 700, fontSize: 21, marginBottom: 8 }}>to-do today:</div>
              ☐ walk dogs<br />☑ read 30 min<br />☐ French class<br />☐ don't be an asshole<br />☐ call a friend
            </div>
            <div className="desk-face desk-back" style={{ background: '#fef080', padding: 18, boxShadow: '0 14px 26px -8px rgba(40,20,10,0.45)', fontFamily: '"Caveat", cursive', fontSize: 16, color: '#3a2f22', lineHeight: 1.5 }}>
              <div style={{ fontWeight: 700, fontSize: 19, marginBottom: 8 }}>secret note:</div>
              if you're reading this, you found the easter egg. now go be nice to someone today — pay forward what others have given you. it costs nothing and means everything.
            </div>
          </div>

          {/* ─ Shelf Preview ─ */}
          <div
            className="desk-card"
            data-flipped={false}
            style={{ width: 460, top: 0, left: 820, ...cardStyle('shelf') }}
            onMouseDown={e => startDrag('shelf', e)}
          >
            <div>
              <div style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#fbeed8', marginBottom: 14, textAlign: 'right' }}>
                shelf · {books.length} books · 2025–26 ✦
              </div>
              <div
                onClick={e => { e.stopPropagation(); if (!wasDragged()) navigate('/study'); }}
                style={{
                  display: 'flex', gap: 5, alignItems: 'flex-end',
                  height: 190, overflow: 'hidden',
                  padding: '0 14px 10px',
                  borderBottom: '14px solid #5a3a1a',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                }}
              >
                {shelfBooks.map((b, i) => (
                  <div key={i} title={`${b.title} — ${b.author}`} style={{
                    width: 34, height: SPINE_HEIGHTS[i],
                    background: `linear-gradient(90deg, ${shadeD(SPINE_PALETTE[i], 20)} 0%, ${SPINE_PALETTE[i]} 8%, ${SPINE_PALETTE[i]} 92%, ${shadeD(SPINE_PALETTE[i], -25)} 100%)`,
                    color: '#fbeed8', writingMode: 'vertical-rl',
                    fontFamily: '"Fraunces", serif', fontSize: 9, fontWeight: 600,
                    padding: '10px 0', boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    letterSpacing: 0.5, textTransform: 'uppercase', overflow: 'hidden',
                    flexShrink: 0,
                  }}>{b.title}</div>
                ))}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(251,238,216,0.5)', fontFamily: '"Caveat", cursive', fontSize: 15, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>+ {books.length - 8} more →</div>
              </div>
              <div style={{ textAlign: 'right', fontFamily: '"Caveat", cursive', fontSize: 15, color: '#fef080', marginTop: 6 }}>
                click for the full study room →
              </div>
            </div>
          </div>

          {/* ─ Decorative props ─ */}
          <div style={{ position: 'absolute', top: 820, left: 860, width: 100, height: 100, borderRadius: '50%', border: '8px solid rgba(60,30,10,0.18)', boxShadow: 'inset 0 0 0 4px rgba(60,30,10,0.08)', transform: 'rotate(15deg)', pointerEvents: 'none', zIndex: 1 }} />
          <div style={{ position: 'absolute', top: 848, left: 800, width: 260, height: 12, background: 'linear-gradient(180deg, #2a1f15 0%, #1a120a 50%, #2a1f15 100%)', borderRadius: 6, transform: 'rotate(-12deg)', boxShadow: '0 8px 16px -4px rgba(0,0,0,0.5)', pointerEvents: 'none', zIndex: 1 }}>
            <div style={{ position: 'absolute', right: -7, top: 3, width: 14, height: 7, background: '#d4a056', borderRadius: '50% 0 0 50%', clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
            <div style={{ position: 'absolute', left: 28, top: 3, width: 28, height: 6, background: '#c4633c', borderRadius: 2 }} />
          </div>

        </div>
      )}

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      {!isMobile && (
        <div style={{ position: 'relative', zIndex: 200, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px', marginTop: 20 }}>
          <button onClick={reset} style={{ background: 'rgba(0,0,0,0.35)', color: '#fbeed8', border: 'none', padding: '10px 18px', borderRadius: 999, fontFamily: '"Special Elite", monospace', fontSize: 12, letterSpacing: 1.5, cursor: 'pointer', backdropFilter: 'blur(8px)' }}>↻ tidy desk</button>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 28, color: '#fbeed8', textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>~ Juan</div>
        </div>
      )}

    </div>
  );
}
