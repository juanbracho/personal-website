import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/broadsheet.css';

const NAV = [
  { label: 'Home',    path: '/home' },
  { label: 'Apps',    path: '/apps' },
  { label: 'Writing', path: '/writing' },
  { label: 'About',   path: '/about' },
  { label: 'Study',   path: '/study' },
];

function todayLine() {
  const d = new Date();
  return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BroadsheetShell({ big, pageTitle, children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path || (path !== '/home' && pathname.startsWith(path));

  return (
    <div className="bs-page">
      <div className="bs-sheet">
        <div className="bs-dateline">
          <span>Austin, Texas · {todayLine()}</span>
          <span>Vol. XXXI · No. 3</span>
          <span>Weather: 30% chance of paperwork</span>
        </div>

        {big ? (
          <div className="bs-wordmark">
            <h1>Juan Bracho</h1>
            <div className="bs-sub">Welcome to my website</div>
          </div>
        ) : (
          <div className="bs-masthead-sm">
            <div className="bs-name">Juan Bracho</div>
            {pageTitle && <div className="bs-page-title">{pageTitle}</div>}
          </div>
        )}

        <div className="bs-nav">
          {NAV.map(n => (
            <button
              key={n.path}
              className={isActive(n.path) ? 'active' : ''}
              onClick={() => navigate(n.path)}
            >
              {n.label}
            </button>
          ))}
        </div>

        {children}

        <BroadsheetFooter />
      </div>
    </div>
  );
}

export function BroadsheetFooter() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bs-classified">
        <div>
          <h4>Correspondence</h4>
          <p><a href="mailto:juanbracho16@gmail.com">juanbracho16@gmail.com</a></p>
          <p><a href="https://www.linkedin.com/in/juan-d-bracho/" target="_blank" rel="noopener noreferrer">linkedin.com/in/juan-d-bracho</a></p>
          <p><a href="https://github.com/juanbracho" target="_blank" rel="noopener noreferrer">github.com/juanbracho</a></p>
        </div>
        <div>
          <h4>Also Inside</h4>
          <p><span onClick={() => navigate('/study')} style={{ cursor: 'pointer', color: 'var(--red)' }}>The full shelf</span> — everything read, rated</p>
          <p><span onClick={() => navigate('/study')} style={{ cursor: 'pointer', color: 'var(--red)' }}>Projects</span> — the rest of the work</p>
          <p><span onClick={() => navigate('/curriculum')} style={{ cursor: 'pointer', color: 'var(--red)' }}>The résumé</span> — printable, one page</p>
        </div>
        <div>
          <h4>Notice</h4>
          <p className="bs-hand" style={{ fontSize: 19, lineHeight: 1.35 }}>
            Somewhere on this site there is a small game about crossing three borders. Good luck.
          </p>
        </div>
      </div>
      <div className="bs-colophon">Set in Bodoni Moda, Source Serif &amp; Special Elite · juanbracho.com</div>
    </>
  );
}
