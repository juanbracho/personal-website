import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { appDetailData } from '../components/appDetailData';
import './AppDetail.css';

const AppDetail = () => {
  const { appId } = useParams();
  const navigate = useNavigate();

  const app = appDetailData[appId];

  if (!app) {
    return (
      <div className="content-wrapper app-not-found">
        <h1>App Not Found</h1>
        <p>The app you're looking for doesn't exist.</p>
        <button className="brutal-button" onClick={() => navigate('/apps')}>
          ← Back to Apps
        </button>
      </div>
    );
  }

  return (
    <div className="content-wrapper app-detail" style={{ '--app-color': app.colors.primary, '--app-color-secondary': app.colors.secondary }}>
      <button className="back-button brutal-button" onClick={() => navigate('/apps')}>
        ← Back to All Apps
      </button>

      {/* Hero Section */}
      <div className="app-detail-hero">
        <h1 className="app-detail-title">{app.name}</h1>
        <p className="app-detail-tagline mono">{app.tagline}</p>

        <div className="app-platforms">
          {app.platforms.map((platform, index) => (
            <span key={index} className="platform-badge mono">{platform}</span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="app-section">
        <h2>About {app.name}</h2>
        <p className="app-full-description">{app.fullDescription}</p>

        {app.philosophy && (
          <div className="app-philosophy">
            <h3>Philosophy</h3>
            <p>{app.philosophy}</p>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="app-section">
        <h2>Key Features</h2>
        <ul className="app-features-list">
          {app.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="app-section">
        <h2>Built With</h2>
        <div className="app-tech-stack">
          {app.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      {/* Store Links */}
      <div className="app-section app-download">
        <h2>Download {app.name}</h2>
        <div className="store-buttons-container">
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-button store-button-large"
          >
            App Store →
          </a>
          <a
            href={app.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-button store-button-large play-store"
          >
            {app.playStoreStatus ? `Play Store (${app.playStoreStatus})` : 'Play Store →'}
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="app-section app-legal-links">
        <h2>Documentation</h2>
        <div className="legal-links-grid">
          <Link to={`/apps/${appId}/privacy`} className="brutal-button legal-link">
            Privacy Policy
          </Link>
          <Link to={`/apps/${appId}/terms`} className="brutal-button legal-link">
            Terms of Service
          </Link>
          <Link to={`/apps/${appId}/support`} className="brutal-button legal-link">
            Support & FAQ
          </Link>
        </div>
      </div>

      <footer className="app-detail-footer">
        <button className="brutal-button" onClick={() => navigate('/apps')}>
          ← Back to All Apps
        </button>
      </footer>
    </div>
  );
};

export default AppDetail;
