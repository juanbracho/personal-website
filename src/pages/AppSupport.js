import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supportContent } from '../components/appSupportData';
import { appDetailData } from '../components/appDetailData';
import './AppSupport.css';

const AppSupport = () => {
  const { appId } = useParams();
  const navigate = useNavigate();
  const [openFaqs, setOpenFaqs] = useState({});

  const app = appDetailData[appId];
  const support = supportContent[appId];

  if (!app || !support) {
    return (
      <div className="content-wrapper support-not-found">
        <h1>Page Not Found</h1>
        <p>The support page you're looking for doesn't exist.</p>
        <button className="brutal-button" onClick={() => navigate('/apps')}>
          ← Back to Apps
        </button>
      </div>
    );
  }

  const toggleFaq = (categoryKey, faqIndex) => {
    const key = `${categoryKey}-${faqIndex}`;
    setOpenFaqs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="content-wrapper app-support" style={{ '--app-color': app.colors.primary }}>
      <button className="back-button brutal-button" onClick={() => navigate(`/apps/${appId}`)}>
        ← Back to {app.name}
      </button>

      <div className="support-breadcrumbs mono">
        <Link to="/home">Home</Link>
        <span> / </span>
        <Link to="/apps">Apps</Link>
        <span> / </span>
        <Link to={`/apps/${appId}`}>{app.name}</Link>
        <span> / </span>
        <span>Support</span>
      </div>

      {/* Header */}
      <div className="support-header">
        <h1 className="support-title">{app.name} Support & FAQ</h1>
        <p className="support-subtitle">Get help with {app.name}</p>
      </div>

      {/* Contact Section */}
      <div className="support-contact-section">
        <h2>📧 Contact Support</h2>
        <p>Have questions about {app.name}? Need help with features? We're here to help!</p>
        <div className="contact-info-box">
          <div className="email-link">
            <a href={`mailto:${support.email}?subject=${app.name} Support`}>
              {support.email}
            </a>
          </div>
          <div className="response-time">
            <strong>Response Time:</strong> We typically respond within {support.responseTime}
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="support-faq-content">
        <h2>Frequently Asked Questions</h2>

        {Object.entries(support.categories).map(([categoryKey, category]) => (
          <div key={categoryKey} className="faq-category">
            <h3>{category.title}</h3>

            {category.faqs.map((faq, index) => {
              const faqKey = `${categoryKey}-${index}`;
              const isOpen = openFaqs[faqKey];

              return (
                <div key={index} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleFaq(categoryKey, index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggleFaq(categoryKey, index)}
                  >
                    <h4>{faq.question}</h4>
                    <svg
                      className={`chevron ${isOpen ? 'rotated' : ''}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Bug Reports */}
      <div className="support-bug-reports">
        <h2>🐛 Bug Reports & Feature Requests</h2>
        <p>Found a bug or have a feature request? We'd love to hear from you!</p>
        <p>When reporting bugs, please include:</p>
        <ul>
          <li>Device model and operating system version</li>
          <li>App version number (found in Settings)</li>
          <li>Steps to reproduce the issue</li>
          <li>Screenshots if possible</li>
        </ul>
        <p className="bug-contact-note">
          Send your bug reports or feature suggestions to <strong>{support.email}</strong>
        </p>
      </div>

      {/* Quick Links */}
      <div className="support-quick-nav">
        <h3>Related</h3>
        <div className="support-nav-grid">
          <Link to={`/apps/${appId}`} className="brutal-button support-nav-link">
            ← {app.name} Home
          </Link>
          <Link to={`/apps/${appId}/privacy`} className="brutal-button support-nav-link">
            Privacy Policy →
          </Link>
          <Link to={`/apps/${appId}/terms`} className="brutal-button support-nav-link">
            Terms of Service →
          </Link>
        </div>
      </div>

      <footer className="support-footer">
        <button className="brutal-button" onClick={() => navigate(`/apps/${appId}`)}>
          ← Back to {app.name}
        </button>
      </footer>
    </div>
  );
};

export default AppSupport;
