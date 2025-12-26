import React from 'react';
import { Link } from 'react-router-dom';
import { mobileApps } from './appsData';
import './FeaturedApps.css';

const FeaturedApps = () => {
  const featuredApps = mobileApps.filter(app => app.featured).sort((a, b) => a.order - b.order);

  return (
    <section className="featured-apps">
      <div className="featured-apps-header">
        <h2>Mobile Applications</h2>
        <Link to="/apps" className="brutal-button">View All Apps →</Link>
      </div>

      <div className="featured-apps-grid">
        {featuredApps.map((app) => (
          <div key={app.id} className="featured-app-card brutal-card">
            <div className="featured-app-header">
              <h3 className="featured-app-name">{app.name}</h3>
              <div className="featured-app-platforms">
                {app.platforms.map((platform, index) => (
                  <span key={index} className="platform-badge-small mono">{platform}</span>
                ))}
              </div>
            </div>

            <p className="featured-app-tagline mono">{app.tagline}</p>

            <div className="featured-app-links">
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="app-link"
              >
                App Store ↗
              </a>
              <a
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="app-link"
              >
                {app.playStoreStatus ? `Play Store*` : 'Play Store ↗'}
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="featured-apps-note mono">* In Review</p>
    </section>
  );
};

export default FeaturedApps;
