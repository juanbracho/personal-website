import React, { useState, useRef, useEffect } from 'react';
import PageShell from '../components/PageShell';
import { useIsMobile } from '../hooks/useIsMobile';
import { books } from '../components/booksData';
import { assignments, projects, webApps } from '../components/projectsData';
import { experiences, education } from '../components/data';
import { shadeD } from '../utils/color';

// ── Palette ───────────────────────────────────────────────────────────────

const SPINE_PALETTE = [
  '#c4633c','#5e6b4a','#a08456','#7a5a30','#8a3f28','#6b5c44','#3d4a35','#a87850',
  '#9a4530','#7a8055','#b08c66','#544540','#c4633c','#5e6b4a','#a08456','#7a5a30',
  '#8a3f28','#6b5c44','#3d4a35','#a87850','#9a4530','#7a8055','#b08c66','#544540',
];

const DRAWER_DATA = [
  {
    id: 'webapps',
    label: 'WEB APPLICATIONS',
    icon: '🌐',
    items: webApps,
    color: '#06b6d4',
  },
  {
    id: 'projects',
    label: 'MAJOR PROJECTS',
    icon: '⭐',
    items: projects,
    color: '#667eea',
  },
  {
    id: 'bootcamp',
    label: 'BOOTCAMP WORK',
    icon: '📚',
    items: assignments,
    color: '#5e6b4a',
  },
];

// ── Book Spine Component ──────────────────────────────────────────────────

function BookSpine({ book, index }) {
  const [hovered, setHovered]   = useState(false);
  const [popupPos, setPopupPos] = useState(null);
  const spineRef = useRef(null);
  const color = SPINE_PALETTE[index % SPINE_PALETTE.length];
  const h = 160 + ((index * 17) % 65);

  const handleMouseEnter = () => {
    if (spineRef.current) {
      const rect = spineRef.current.getBoundingClientRect();
      setPopupPos({ x: rect.left + rect.width / 2, y: rect.top - 8 });
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setPopupPos(null);
  };

  // keep popup position in sync if user scrolls while hovering
  useEffect(() => {
    if (!hovered) return;
    const update = () => {
      if (spineRef.current) {
        const rect = spineRef.current.getBoundingClientRect();
        setPopupPos({ x: rect.left + rect.width / 2, y: rect.top - 8 });
      }
    };
    window.addEventListener('scroll', update, true);
    return () => window.removeEventListener('scroll', update, true);
  }, [hovered]);

  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      <div
        ref={spineRef}
        title={`${book.title} — ${book.author}`}
        style={{
          width: 34, height: h,
          background: `linear-gradient(90deg, ${shadeD(color, 25)} 0%, ${color} 8%, ${color} 92%, ${shadeD(color, -30)} 100%)`,
          color: '#fbeed8', writingMode: 'vertical-rl',
          fontFamily: '"Fraunces", serif', fontSize: 10, fontWeight: 600,
          padding: '12px 0',
          boxShadow: hovered ? '0 0 0 2px rgba(255,255,255,0.3), 4px 0 12px rgba(0,0,0,0.3)' : '0 4px 8px rgba(0,0,0,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          letterSpacing: 0.5, textTransform: 'uppercase',
          cursor: 'pointer', overflow: 'hidden',
          transform: hovered ? 'translateY(-14px)' : 'translateY(0)',
          transition: 'transform 0.22s ease, box-shadow 0.22s ease',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span style={{ flex: 1, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'clip', maxHeight: '100%' }}>{book.title}</span>
      </div>

      {/* Hover card — fixed position escapes overflow container */}
      {hovered && popupPos && (
        <div style={{
          position: 'fixed',
          left: popupPos.x - 100,
          top: popupPos.y - 195,
          width: 200,
          background: '#fffaf0',
          padding: 14, borderRadius: 4,
          boxShadow: '0 16px 32px -8px rgba(0,0,0,0.6)',
          zIndex: 9999, pointerEvents: 'none',
          borderTop: `4px solid ${color}`,
        }}>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 15, fontWeight: 600, color: '#1f1d18', lineHeight: 1.25 }}>{book.title}</div>
          <div style={{ fontSize: 12, color: '#5a4530', marginTop: 3, fontStyle: 'italic' }}>by {book.author}</div>
          <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 16, color: color, fontWeight: 600 }}>
              {'★'.repeat(Math.round(book.rating / 2))}
            </div>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 18, fontWeight: 600, color: color }}>{book.rating}/10</div>
          </div>
          {book.tags && (
            <div style={{ marginTop: 8, fontSize: 10, color: '#7a5530', fontFamily: '"Special Elite", monospace', letterSpacing: 0.5 }}>
              {book.tags.slice(0, 2).join(' · ')}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Project Card ──────────────────────────────────────────────────────────

function ProjectCard({ item, color }) {
  return (
    <a
      href={item.github}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: '#fffaf0',
        border: `2px solid ${color}20`,
        borderRadius: 8, padding: '16px 18px',
        display: 'flex', flexDirection: 'column', gap: 8,
        textDecoration: 'none', color: 'inherit',
        transition: 'border-color 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = color + '20'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ fontFamily: '"Fraunces", serif', fontSize: 16, fontWeight: 600, color: '#1f1d18', lineHeight: 1.2 }}>{item.name}</div>
      {item.description && (
        <p style={{ fontSize: 12, lineHeight: 1.55, color: '#5a4530', margin: 0 }}>{item.description}</p>
      )}
      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 4 }}>
        {item.tech?.slice(0, 3).map(t => (
          <span key={t} style={{ padding: '2px 8px', background: color + '18', color: color, borderRadius: 999, fontSize: 10, fontFamily: '"Special Elite", monospace', letterSpacing: 0.5 }}>{t}</span>
        ))}
      </div>
      <div style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color: color, marginTop: 'auto' }}>
        GitHub ↗
      </div>
    </a>
  );
}

// ── Book Modal ────────────────────────────────────────────────────────────

function BookModal({ book, color, onClose }) {
  if (!book) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(20,12,6,0.75)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fffaf0', borderRadius: 4, padding: '36px 40px',
          maxWidth: 580, width: '100%',
          boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7)',
          borderLeft: `6px solid ${color}`,
          position: 'relative', maxHeight: '80vh', overflowY: 'auto',
        }}
      >
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: '"Caveat", cursive', fontSize: 22, color: '#a08456',
        }}>✕</button>
        <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 2, color, textTransform: 'uppercase' }}>
          ★ {book.rating}/10 · {book.yearRead}
        </div>
        <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, fontWeight: 600, color: '#1f1d18', lineHeight: 1.15, marginTop: 6 }}>{book.title}</div>
        <div style={{ fontSize: 14, color: '#5a4530', fontStyle: 'italic', marginTop: 4 }}>by {book.author}</div>
        {book.review && (
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 17, color: '#3a2f22', marginTop: 20, lineHeight: 1.65 }}>
            {book.review}
          </div>
        )}
        {book.tags && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 20 }}>
            {book.tags.map(t => (
              <span key={t} style={{ padding: '3px 10px', background: color + '18', color, borderRadius: 999, fontSize: 11, fontFamily: '"Special Elite", monospace', letterSpacing: 0.5 }}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Drawer ────────────────────────────────────────────────────────────────

function CabinetDrawer({ drawer, isOpen, onToggle }) {
  return (
    <div style={{ marginBottom: 4 }}>
      {/* Handle */}
      <button
        onClick={onToggle}
        style={{
          width: '100%', padding: '18px 28px',
          background: isOpen ? '#3a2410' : 'linear-gradient(180deg, #4a3020 0%, #3a2410 100%)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => { if (!isOpen) e.currentTarget.style.background = '#4a3020'; }}
        onMouseLeave={e => { if (!isOpen) e.currentTarget.style.background = 'linear-gradient(180deg, #4a3020 0%, #3a2410 100%)'; }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Drawer handle bar */}
          <div style={{
            width: 60, height: 14,
            background: 'linear-gradient(180deg, #d4a056 0%, #a87830 50%, #d4a056 100%)',
            borderRadius: 7,
            boxShadow: '0 3px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
          }} />
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 12, letterSpacing: 2, color: '#fbeed8' }}>
            {drawer.icon} {drawer.label}
          </div>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color: 'rgba(251,238,216,0.5)' }}>
            {drawer.items.length} items
          </div>
        </div>
        <div style={{
          fontFamily: '"Caveat", cursive', fontSize: 28, color: drawer.color,
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s',
        }}>+</div>
      </button>

      {/* Content — grid-template-rows for smooth open/close without layout snap */}
      <div style={{
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            background: '#2a1f15',
            padding: '24px 24px 28px',
            borderTop: `2px solid ${drawer.color}40`,
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: 14,
            }}>
              {drawer.items.map(item => (
                <ProjectCard key={item.id} item={item} color={drawer.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Study Page ───────────────────────────────────────────────────────

export default function Study() {
  const isMobile = useIsMobile();
  const [openDrawer,    setOpenDrawer]    = useState(null);
  const [activeTab,     setActiveTab]     = useState('experience');
  const [rerollIdx,     setRerollIdx]     = useState(0);
  const [expandedEdu,   setExpandedEdu]   = useState({});
  const [selectedBook,  setSelectedBook]  = useState(null);

  const toggleEdu  = (i) => setExpandedEdu(prev => ({ ...prev, [i]: !prev[i] }));

  const toggleDrawer = (id) => setOpenDrawer(prev => prev === id ? null : id);

  const books2025 = books.filter(b => b.yearRead === 2025).sort((a, b) => a.order - b.order);
  const books2026 = books.filter(b => b.yearRead === 2026).sort((a, b) => a.order - b.order);

  const recBooks   = [...books].filter(b => b.rating >= 9).sort((a, b) => b.rating - a.rating);
  const totalGroups = Math.ceil(recBooks.length / 3);
  const featuredBooks = recBooks.slice(rerollIdx * 3, rerollIdx * 3 + 3);
  const reroll = () => setRerollIdx(i => (i + 1) % totalGroups);

  return (
    <PageShell title="▰ THE STUDY ROOM">
      <div style={{ marginTop: 20 }}>

        {/* ── Title ── */}
        <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 38 : 56, fontWeight: 600, color: '#fbeed8', letterSpacing: -2, lineHeight: 1 }}>
          The Study<span style={{ color: '#d4a056' }}>.</span>
        </h1>
        <p style={{ fontFamily: '"Caveat", cursive', fontSize: 22, color: '#fbeed8', opacity: 0.85, marginTop: 8 }}>
          Books read · projects built · résumé filed.
        </p>

        {/* ════════════════════════════════════════════════════════
            ZONE A — BOOKSHELF
        ════════════════════════════════════════════════════════ */}
        <div style={{ marginTop: 56 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
            <h2 style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 26 : 36, fontWeight: 600, color: '#fbeed8', letterSpacing: -1 }}>
              The Shelf
            </h2>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 20, color: 'rgba(251,238,216,0.7)' }}>
              {books.length} books read in 2025–2026
            </div>
          </div>

          {/* 2025 shelf */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: 'rgba(251,238,216,0.6)', marginBottom: 10 }}>
              ─── 2025 ─── {books2025.length} books
            </div>
            <div style={{
              display: 'flex', gap: 5, alignItems: 'flex-end',
              minHeight: 250, padding: '0 20px 12px',
              borderBottom: '18px solid #5a3a1a',
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.12) 100%)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
              flexWrap: 'nowrap', overflowX: 'auto',
            }}>
              {books2025.map((b, i) => (
                <BookSpine key={b.id} book={b} index={i} />
              ))}
            </div>
          </div>

          {/* 2026 shelf */}
          {books2026.length > 0 && (
            <div style={{ marginBottom: 40 }}>
              <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: 'rgba(251,238,216,0.6)', marginBottom: 10 }}>
                ─── 2026 ─── {books2026.length} books so far
              </div>
              <div style={{
                display: 'flex', gap: 5, alignItems: 'flex-end',
                minHeight: 220, padding: '0 20px 12px',
                borderBottom: '18px solid #5a3a1a',
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.12) 100%)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                flexWrap: 'nowrap', overflowX: 'auto',
              }}>
                {books2026.map((b, i) => (
                  <BookSpine key={b.id} book={b} index={books2025.length + i} />
                ))}
              </div>
            </div>
          )}

          {/* Featured trio */}
          <div style={{ marginTop: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontFamily: '"Caveat", cursive', fontSize: 26, color: '#fef080' }}>
                ✦ any year recommendations
              </div>
              <button onClick={reroll} style={{
                fontFamily: '"Caveat", cursive', fontSize: 18, color: '#fef080',
                background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(254,240,128,0.3)',
                borderRadius: 999, padding: '6px 18px', cursor: 'pointer',
                backdropFilter: 'blur(8px)', transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.45)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.25)'}
              >don't like these? ↻</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 18 }}>
              {featuredBooks.map((b, i) => {
                const color = SPINE_PALETTE[i % SPINE_PALETTE.length];
                return (
                  <div
                    key={b.id}
                    onClick={() => setSelectedBook({ book: b, color })}
                    style={{
                      background: '#fffaf0', padding: '20px 22px', borderRadius: 4,
                      boxShadow: '0 14px 28px -10px rgba(0,0,0,0.5)',
                      borderLeft: `6px solid ${color}`,
                      cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 36px -10px rgba(0,0,0,0.6)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 14px 28px -10px rgba(0,0,0,0.5)'; }}
                  >
                    <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 2, color: color, textTransform: 'uppercase' }}>
                      ★ {b.rating}/10 · {b.yearRead}
                    </div>
                    <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 600, marginTop: 6, lineHeight: 1.15, letterSpacing: -0.3 }}>{b.title}</div>
                    <div style={{ fontSize: 13, color: '#5a4530', fontStyle: 'italic', marginTop: 2 }}>by {b.author}</div>
                    <div style={{ fontFamily: '"Caveat", cursive', fontSize: 16, color, marginTop: 10, lineHeight: 1.5 }}>
                      {b.review?.split('\n\n')[0].slice(0, 120)}...
                    </div>
                    <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 1, color, marginTop: 10, opacity: 0.7 }}>click to read full review →</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            ZONE B — FILING CABINET
        ════════════════════════════════════════════════════════ */}
        <div style={{ marginTop: 72 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
            <h2 style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 26 : 36, fontWeight: 600, color: '#fbeed8', letterSpacing: -1 }}>
              The Cabinet
            </h2>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 20, color: 'rgba(251,238,216,0.7)' }}>
              projects, bootcamp work, web apps
            </div>
          </div>

          {/* Cabinet body */}
          <div style={{
            background: 'linear-gradient(180deg, #3a2410 0%, #2a1808 100%)',
            borderRadius: '6px 6px 10px 10px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,160,86,0.2)',
          }}>
            {/* Cabinet top */}
            <div style={{
              height: 20, background: 'linear-gradient(180deg, #5a3a1a 0%, #4a2e14 100%)',
              borderBottom: '2px solid rgba(212,160,86,0.3)',
            }} />

            {DRAWER_DATA.map(drawer => (
              <CabinetDrawer
                key={drawer.id}
                drawer={drawer}
                isOpen={openDrawer === drawer.id}
                onToggle={() => toggleDrawer(drawer.id)}
              />
            ))}

            {/* Cabinet bottom */}
            <div style={{ height: 16, background: '#2a1808', borderTop: '2px solid rgba(212,160,86,0.15)' }} />
          </div>

          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 18, color: 'rgba(251,238,216,0.6)', marginTop: 12, textAlign: 'right' }}>
            click a drawer to open it →
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            ZONE C — CV TABLE
        ════════════════════════════════════════════════════════ */}
        <div style={{ marginTop: 72 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 56 }}>
            <h2 style={{ fontFamily: '"Fraunces", serif', fontSize: isMobile ? 26 : 36, fontWeight: 600, color: '#fbeed8', letterSpacing: -1 }}>
              The CV
            </h2>
            <div style={{ fontFamily: '"Caveat", cursive', fontSize: 20, color: 'rgba(251,238,216,0.7)' }}>
              work history &amp; education
            </div>
          </div>

          {/* Manila folder */}
          <div style={{
            background: '#d4a056',
            borderRadius: '0 8px 8px 8px',
            padding: '0 0 4px',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
            position: 'relative',
          }}>
            {/* Folder top tabs */}
            <div style={{ display: 'flex', gap: 0, position: 'absolute', top: -40 }}>
              {[
                { key: 'experience', label: '📋 EXPERIENCE' },
                { key: 'education',  label: '🎓 EDUCATION' },
              ].map(t => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  style={{
                    padding: '10px 28px',
                    background: activeTab === t.key ? '#d4a056' : '#b08830',
                    border: 'none', cursor: 'pointer',
                    fontFamily: '"Special Elite", monospace', fontSize: 12,
                    letterSpacing: 1.5, color: activeTab === t.key ? '#2a1808' : '#e8c878',
                    borderRadius: '6px 6px 0 0',
                    boxShadow: activeTab === t.key ? '0 -4px 8px rgba(0,0,0,0.2)' : 'none',
                    marginRight: 4,
                    transition: 'background 0.2s',
                  }}
                >{t.label}</button>
              ))}
            </div>

            {/* Folder content */}
            <div style={{
              background: '#fdf3d8',
              borderRadius: '0 6px 6px 6px',
              padding: '36px 44px 48px',
              minHeight: 400,
            }}>

              {activeTab === 'experience' && (
                <div>
                  <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: '#7a5530', textTransform: 'uppercase', marginBottom: 24 }}>
                    — WORK EXPERIENCE
                  </div>
                  <div style={{ position: 'relative', paddingLeft: 30 }}>
                    <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: 1, background: 'rgba(196,99,60,0.25)' }} />
                    {experiences.map((exp, i) => (
                      <div key={i} style={{ marginBottom: 32, position: 'relative' }}>
                        <div style={{ position: 'absolute', left: -30, top: 6, width: 13, height: 13, background: '#c4633c', borderRadius: '50%', boxShadow: '0 0 0 4px #fdf3d8' }} />
                        <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 1.5, color: '#a04020', textTransform: 'uppercase' }}>
                          {exp.date}
                        </div>
                        <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 600, color: '#1f1d18', marginTop: 3, lineHeight: 1.2 }}>
                          {exp.title}
                        </div>
                        <div style={{ fontSize: 14, color: '#7a5530', marginTop: 2, fontWeight: 500 }}>
                          {exp.organization} · {exp.location}
                        </div>
                        <ul style={{ marginTop: 10, paddingLeft: 18 }}>
                          {exp.responsibilities.slice(0, 4).map((r, j) => (
                            <li key={j} style={{ fontSize: 13, lineHeight: 1.65, color: '#3a2f22', marginBottom: 4, fontFamily: '"Fraunces", serif' }}>
                              {r}
                            </li>
                          ))}
                          {exp.responsibilities.length > 4 && (
                            <li style={{ fontSize: 12, color: '#a08456', fontStyle: 'italic', fontFamily: '"Fraunces", serif' }}>
                              +{exp.responsibilities.length - 4} more...
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div>
                  <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 2, color: '#7a5530', textTransform: 'uppercase', marginBottom: 24 }}>
                    — EDUCATION
                  </div>
                  <div style={{ position: 'relative', paddingLeft: 30 }}>
                    <div style={{ position: 'absolute', left: 7, top: 8, bottom: 8, width: 1, background: 'rgba(94,107,74,0.3)' }} />
                    {education.map((edu, i) => (
                      <div key={i} style={{ marginBottom: 32, position: 'relative' }}>
                        <div style={{ position: 'absolute', left: -30, top: 6, width: 13, height: 13, background: '#5e6b4a', borderRadius: '50%', boxShadow: '0 0 0 4px #fdf3d8' }} />
                        <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 10, letterSpacing: 1.5, color: '#5e6b4a', textTransform: 'uppercase' }}>
                          {edu.date}
                        </div>
                        <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 600, color: '#1f1d18', marginTop: 3, lineHeight: 1.2 }}>
                          {edu.title}
                        </div>
                        <div style={{ fontSize: 14, color: '#7a5530', marginTop: 2, fontWeight: 500 }}>
                          {edu.organization} · {edu.location}
                        </div>
                        {edu.description && (
                          <p style={{ fontSize: 13, lineHeight: 1.65, color: '#3a2f22', marginTop: 8, fontFamily: '"Fraunces", serif' }}>
                            {edu.description}
                          </p>
                        )}
                        {edu.thesis && (
                          <div style={{ marginTop: 8, padding: '8px 12px', background: 'rgba(94,107,74,0.1)', borderLeft: '3px solid #5e6b4a', borderRadius: '0 4px 4px 0' }}>
                            <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 9, letterSpacing: 1.5, color: '#5e6b4a', textTransform: 'uppercase', marginBottom: 3 }}>Thesis</div>
                            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 13, fontStyle: 'italic', color: '#3a2f22', lineHeight: 1.5 }}>"{edu.thesis}"</div>
                          </div>
                        )}
                        {edu.coursework && (
                          <div style={{ marginTop: 10 }}>
                            <button
                              onClick={() => toggleEdu(i)}
                              style={{
                                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                                fontFamily: '"Special Elite", monospace', fontSize: 10,
                                letterSpacing: 1.5, color: '#5e6b4a', textTransform: 'uppercase',
                                display: 'flex', alignItems: 'center', gap: 6,
                              }}
                            >
                              <span style={{ display: 'inline-block', transition: 'transform 0.2s', transform: expandedEdu[i] ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                              {expandedEdu[i] ? 'hide' : `${edu.coursework.length} modules`}
                            </button>
                            <div style={{
                              display: 'grid',
                              gridTemplateRows: expandedEdu[i] ? '1fr' : '0fr',
                              transition: 'grid-template-rows 0.35s cubic-bezier(0.4,0,0.2,1)',
                            }}>
                              <div style={{ overflow: 'hidden' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, paddingTop: 10 }}>
                                  {edu.coursework.map(c => (
                                    <span key={c} style={{
                                      padding: '3px 10px', borderRadius: 999,
                                      background: 'rgba(94,107,74,0.12)', color: '#5e6b4a',
                                      fontSize: 11, fontFamily: '"Special Elite", monospace',
                                      letterSpacing: 0.5,
                                    }}>{c}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Folder footer */}
              <div style={{ marginTop: 24, borderTop: '1px dashed rgba(90,69,48,0.3)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: '"Caveat", cursive', fontSize: 20, color: '#7a5530' }}>
                  ~ Juan Bracho · Austin, TX
                </div>
                <a
                  href="https://www.linkedin.com/in/juan-bracho-avila-71250a121/"
                  target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, letterSpacing: 1.5, color: '#a04020', textDecoration: 'underline' }}
                >
                  VIEW ON LINKEDIN ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom signature */}
        <div style={{ marginTop: 60, textAlign: 'right' }}>
          <div style={{ fontFamily: '"Caveat", cursive', fontSize: 32, color: '#fbeed8', textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>~ Juan</div>
          <div style={{ fontFamily: '"Special Elite", monospace', fontSize: 11, color: 'rgba(251,238,216,0.4)', letterSpacing: 2, marginTop: 4 }}>
            ALWAYS BUILDING · ALWAYS LEARNING
          </div>
        </div>
      </div>

      {selectedBook && (
        <BookModal book={selectedBook.book} color={selectedBook.color} onClose={() => setSelectedBook(null)} />
      )}
    </PageShell>
  );
}
