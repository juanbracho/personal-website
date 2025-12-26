import React from 'react';
import { mobileApps } from '../components/appsData';
import './Apps.css';

const Apps = () => {
  return (
    <div className="content-wrapper apps-page">
      <div className="apps-header">
        <h1>Mobile Applications</h1>
        <p>Building cross-platform mobile experiences for iOS and Android</p>
      </div>

      <div className="apps-grid">
        {mobileApps.map((app) => (
          <div key={app.id} className="app-card brutal-card">
            <div className="app-card-content">
              <div className="app-header-section">
                <h2 className="app-name">{app.name}</h2>
                <div className="app-platforms">
                  {app.platforms.map((platform, index) => (
                    <span key={index} className="platform-badge mono">{platform}</span>
                  ))}
                </div>
              </div>

              <p className="app-tagline">{app.tagline}</p>
              <p className="app-description">{app.description}</p>

              <div className="app-tech">
                {app.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="app-store-buttons">
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-button store-button"
                >
                  App Store →
                </a>
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-button store-button play-store"
                >
                  {app.playStoreStatus ? `Play Store (${app.playStoreStatus})` : 'Play Store →'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="apps-footer">
        <h3>Tech Stack</h3>
        <p>Cross-platform mobile applications built with diverse technologies: <strong>Kaizen</strong> uses React + TypeScript as a PWA, <strong>Kage</strong> combines native SwiftUI for iOS with React/Capacitor for Android, and <strong>Kioku</strong> leverages Flutter for true cross-platform development. All apps prioritize offline-first architecture, modern state management, and mobile-optimized UX.</p>
      </div>
    </div>
  );
};

export default Apps;
