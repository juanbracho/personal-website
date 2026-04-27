import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeskNav from './DeskNav';
import './PageShell.css';

export default function PageShell({ children, title }) {
  const navigate = useNavigate();

  return (
    <div className="page-shell">
      {/* Wood grain overlay */}
      <div className="page-shell__grain" />

      {/* Nav */}
      <DeskNav variant="page" onBack={() => navigate('/home')} />

      {/* Page title bar */}
      {title && (
        <div className="page-shell__title">
          <span className="page-shell__title-text">{title}</span>
        </div>
      )}

      {/* Content */}
      <div className="page-shell__content">
        {children}
      </div>
    </div>
  );
}
