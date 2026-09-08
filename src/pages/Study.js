import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BroadsheetShell from '../components/BroadsheetShell';
import { books } from '../components/booksData';
import { assignments, projects, webApps } from '../components/projectsData';

const SPINE_PALETTE = ['#7c3f2a', '#2c4356', '#5e6b4a', '#8a5a32', '#a8321f', '#3f4a6b', '#6b5a2a', '#4a3550', '#2f5a4a', '#7a3550', '#3a4a3a', '#6b4220'];

const CABINET = [
  { label: 'Web Applications', items: webApps },
  { label: 'Major Projects', items: projects },
  { label: 'Bootcamp Work', items: assignments },
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

export default function Study() {
  const navigate = useNavigate();
  const sorted = [...books].sort((a, b) => (a.yearRead - b.yearRead) || ((a.order || 0) - (b.order || 0)));

  return (
    <BroadsheetShell pageTitle="The Study">
      <div className="bs-shead" style={{ marginTop: 20 }}>
        <h2>On the Shelf</h2>
        <span className="bs-no">{books.length} books read since 2025</span>
      </div>
      <div className="bs-shelf">
        <div className="bs-spines">
          {sorted.map((b, i) => <BookSpine key={b.id} book={b} index={i} />)}
        </div>
        <div className="bs-cap">hover a spine for rating &amp; year</div>
      </div>

      {CABINET.map(drawer => (
        <React.Fragment key={drawer.label}>
          <div className="bs-shead">
            <h2>{drawer.label}</h2>
            <span className="bs-no">{drawer.items.length} entries</span>
          </div>
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
        </React.Fragment>
      ))}

      <div className="bs-shead">
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
