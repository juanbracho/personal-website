import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BroadsheetShell from '../components/BroadsheetShell';
import { books } from '../components/booksData';
import { assignments, projects, webApps } from '../components/projectsData';

const SPINE_PALETTE = ['#7c3f2a', '#2c4356', '#5e6b4a', '#8a5a32', '#a8321f', '#3f4a6b', '#6b5a2a', '#4a3550', '#2f5a4a', '#7a3550', '#3a4a3a', '#6b4220'];

const CABINET = [
  { id: 'webapps', label: 'Web Applications', items: webApps },
  { id: 'projects', label: 'Major Projects', items: projects },
  { id: 'bootcamp', label: 'Bootcamp Work', items: assignments },
];

function BookSpine({ book, index }) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState(null);
  const ref = useRef(null);
  const color = SPINE_PALETTE[index % SPINE_PALETTE.length];
  const height = 100 + ((index * 37) % 42) + 60;

  const onEnter = () => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos({ x: r.left + r.width / 2, y: r.top - 8 });
    }
    setHovered(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div ref={ref} className="bs-spine" style={{ background: color, height }} onMouseEnter={onEnter} onMouseLeave={() => setHovered(false)}>
        <span>{book.title}</span>
      </div>
      {hovered && pos && (
        <div style={{
          position: 'fixed', left: pos.x - 100, top: pos.y - 130, width: 200, zIndex: 999,
          background: '#fdfbf5', border: '1px solid var(--rule)', boxShadow: '0 12px 28px rgba(0,0,0,.3)',
          padding: 14, pointerEvents: 'none', borderTop: `4px solid ${color}`,
        }}>
          <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 15, fontWeight: 700, lineHeight: 1.25 }}>{book.title}</div>
          <div style={{ fontSize: 12, fontStyle: 'italic', color: 'var(--mid)', marginTop: 3 }}>by {book.author}</div>
          <div className="bs-el" style={{ fontSize: 11, color: 'var(--red)', marginTop: 8 }}>{book.rating}/10 · {book.yearRead}</div>
        </div>
      )}
    </div>
  );
}

function YearShelf({ year, list }) {
  if (list.length === 0) return null;
  return (
    <div style={{ marginBottom: 24 }}>
      <div className="bs-el" style={{ fontSize: 11, letterSpacing: '.12em', color: 'var(--faint)', marginBottom: 8 }}>
        {year} · {list.length} books
      </div>
      <div className="bs-shelf">
        <div className="bs-spines">
          {list.map((b, i) => <BookSpine key={b.id} book={b} index={i} />)}
        </div>
      </div>
    </div>
  );
}

function CabinetSection({ drawer, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--rule)' }}>
      <button
        onClick={onToggle}
        className="bs-el"
        style={{
          width: '100%', textAlign: 'left', padding: '14px 0', background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--ink)',
        }}
      >
        <span style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 20, fontWeight: 700, letterSpacing: 0 }}>{drawer.label}</span>
        <span style={{ fontSize: 11, color: 'var(--faint)' }}>{drawer.items.length} entries {isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div style={{ paddingBottom: 18 }}>
          {drawer.items.map((item, i) => (
            <div className="bs-brief" key={item.id || i} style={{ alignItems: 'flex-start' }}>
              <span className="bs-n">{String(i + 1).padStart(2, '0')}</span>
              <div style={{ flex: 1 }}>
                <h3><a href={item.github} target="_blank" rel="noopener noreferrer">{item.name}</a></h3>
                {item.description && <p>{item.description}</p>}
                {item.tech && (
                  <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 6 }}>
                    {item.tech.slice(0, 4).map(t => <span className="bs-el" key={t} style={{ fontSize: 9, color: 'var(--mid)', border: '1px solid var(--rule)', padding: '2px 7px' }}>{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Study() {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(null);
  const [rerollIdx, setRerollIdx] = useState(0);

  const books2025 = books.filter(b => b.yearRead === 2025).sort((a, b) => (a.order || 0) - (b.order || 0));
  const books2026 = books.filter(b => b.yearRead === 2026).sort((a, b) => (a.order || 0) - (b.order || 0));

  const recBooks = [...books].filter(b => b.rating >= 9).sort((a, b) => b.rating - a.rating);
  const totalGroups = Math.max(1, Math.ceil(recBooks.length / 3));
  const featuredBooks = recBooks.slice(rerollIdx * 3, rerollIdx * 3 + 3);

  return (
    <BroadsheetShell pageTitle="The Study">
      <p style={{ marginTop: 20 }} className="bs-el">
        <span onClick={() => document.getElementById('cv-section')?.scrollIntoView({ behavior: 'smooth' })} style={{ fontSize: 11, color: 'var(--red)', cursor: 'pointer', letterSpacing: '.08em', textTransform: 'uppercase' }}>
          Just here for the résumé? Jump to the CV →
        </span>
      </p>

      <div className="bs-shead">
        <h2>On the Shelf</h2>
        <span className="bs-no">{books.length} books read since 2025</span>
      </div>
      <YearShelf year={2025} list={books2025} />
      <YearShelf year={2026} list={books2026} />

      <div className="bs-shead">
        <h2>Recommendations</h2>
        <span className="bs-no" style={{ cursor: 'pointer' }} onClick={() => setRerollIdx(i => (i + 1) % totalGroups)}>don't like these? reroll ↻</span>
      </div>
      <div className="bs-previews">
        {featuredBooks.map(b => (
          <div className="bs-preview" key={b.id}>
            <div className="bs-k">★ {b.rating}/10 · {b.yearRead}</div>
            <h3 style={{ fontSize: 20 }}>{b.title}</h3>
            <p style={{ fontStyle: 'italic' }}>by {b.author}</p>
            <p>{b.review?.split('.')[0]}.</p>
          </div>
        ))}
      </div>

      <div className="bs-shead">
        <h2>The Cabinet</h2>
        <span className="bs-no">projects, bootcamp work, web apps — collapsed by default</span>
      </div>
      {CABINET.map(drawer => (
        <CabinetSection
          key={drawer.id}
          drawer={drawer}
          isOpen={openDrawer === drawer.id}
          onToggle={() => setOpenDrawer(o => o === drawer.id ? null : drawer.id)}
        />
      ))}

      <div className="bs-shead" id="cv-section">
        <h2>The CV</h2>
        <span className="bs-no">printable, one page</span>
      </div>
      <div className="bs-preview" onClick={() => navigate('/curriculum')} style={{ cursor: 'pointer', maxWidth: 320 }}>
        <div className="bs-k">Employment · Credentials · Skills</div>
        <h3>Full Résumé</h3>
        <p>Every role, degree, and skill, filed neatly, just in case you're hiring.</p>
        <span className="bs-go">Read the file →</span>
      </div>
    </BroadsheetShell>
  );
}
