import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './DeskNav.css';

const NAV = [
  { label: 'Home',    path: '/home' },
  { label: 'Apps',    path: '/apps' },
  { label: 'Writing', path: '/writing' },
  { label: 'About',   path: '/about' },
  { label: 'Study',   path: '/study' },
];

export default function DeskNav({ variant = 'home', onBack }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path || (path !== '/home' && pathname.startsWith(path));

  if (variant === 'page') {
    return (
      <div className="desk-nav desk-nav--page">
        <button
          className="desk-nav__back"
          onClick={() => onBack ? onBack() : navigate('/home')}
        >
          ← back to desk
        </button>
        <div className="desk-nav__pills desk-nav__pills--page">
          {NAV.filter(n => n.path !== '/home').map(n => (
            <button
              key={n.path}
              className={`desk-nav__pill ${isActive(n.path) ? 'desk-nav__pill--active' : ''}`}
              onClick={() => navigate(n.path)}
            >
              {n.label}
            </button>
          ))}
        </div>
        <div className="desk-nav__sig">~ Juan</div>
      </div>
    );
  }

  return (
    <div className="desk-nav desk-nav--home">
      <div className="desk-nav__brand">▰ JUAN'S DESK · OPEN 24/7</div>
      <div className="desk-nav__pills">
        {NAV.map((n, i) => (
          <button
            key={n.path}
            className={`desk-nav__pill ${i === 0 || isActive(n.path) ? 'desk-nav__pill--active' : ''}`}
            onClick={() => navigate(n.path)}
          >
            {n.label}
          </button>
        ))}
      </div>
      <div className="desk-nav__tip" id="desk-tip" />
    </div>
  );
}
