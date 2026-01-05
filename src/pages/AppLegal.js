import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { legalContent } from '../components/appLegalData';
import { appDetailData } from '../components/appDetailData';
import './AppLegal.css';

const AppLegal = ({ legalType }) => {
  const { appId } = useParams();
  const navigate = useNavigate();

  const app = appDetailData[appId];
  const legal = legalContent[appId]?.[legalType];

  if (!app || !legal) {
    return (
      <div className="content-wrapper legal-not-found">
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <button className="brutal-button" onClick={() => navigate('/apps')}>
          ← Back to Apps
        </button>
      </div>
    );
  }

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'intro':
        return (
          <p key={index} className="legal-intro">
            <strong>{section.content}</strong>
          </p>
        );

      case 'paragraph':
        return (
          <div key={index} className="legal-section">
            {section.heading && <h2>{section.heading}</h2>}
            <p>{section.content}</p>
          </div>
        );

      case 'list':
        return (
          <div key={index} className="legal-section">
            {section.heading && <h2>{section.heading}</h2>}
            {section.intro && <p>{section.intro}</p>}
            <ul className="legal-list">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
            {section.footer && <p className="legal-list-footer"><strong>{section.footer}</strong></p>}
          </div>
        );

      case 'guarantee':
        return (
          <div key={index} className="legal-guarantee" style={{ borderLeftColor: app.colors.primary }}>
            <h3>🔒 {section.heading}</h3>
            <p><strong>{section.content}</strong></p>
          </div>
        );

      case 'contact':
        return (
          <div key={index} className="legal-contact">
            <h3>{section.heading}</h3>
            <p>{section.content}</p>
          </div>
        );

      case 'acknowledgment':
        return (
          <div key={index} className="legal-acknowledgment">
            <p><em>{section.content}</em></p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="content-wrapper app-legal" style={{ '--app-color': app.colors.primary }}>
      <button className="back-button brutal-button" onClick={() => navigate(`/apps/${appId}`)}>
        ← Back to {app.name}
      </button>

      <div className="legal-breadcrumbs mono">
        <Link to="/home">Home</Link>
        <span> / </span>
        <Link to="/apps">Apps</Link>
        <span> / </span>
        <Link to={`/apps/${appId}`}>{app.name}</Link>
        <span> / </span>
        <span>{legalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</span>
      </div>

      <div className="legal-content">
        <div className="legal-header">
          <h1 className="legal-title">{legal.title}</h1>
          <p className="legal-last-updated mono">Last Updated: {legal.lastUpdated}</p>
        </div>

        <div className="legal-body">
          {legal.sections.map((section, index) => renderSection(section, index))}
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="legal-quick-nav">
        <h3>Related</h3>
        <div className="legal-nav-grid">
          <Link to={`/apps/${appId}`} className="brutal-button legal-nav-link">
            ← {app.name} Home
          </Link>
          <Link
            to={`/apps/${appId}/${legalType === 'privacy' ? 'terms' : 'privacy'}`}
            className="brutal-button legal-nav-link"
          >
            {legalType === 'privacy' ? 'Terms of Service' : 'Privacy Policy'} →
          </Link>
          <Link to={`/apps/${appId}/support`} className="brutal-button legal-nav-link">
            Support & FAQ →
          </Link>
        </div>
      </div>

      <footer className="legal-footer">
        <button className="brutal-button" onClick={() => navigate(`/apps/${appId}`)}>
          ← Back to {app.name}
        </button>
      </footer>
    </div>
  );
};

export default AppLegal;
