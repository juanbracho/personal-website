import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/home" className="footer-link">About</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
          <Link to="/resume" className="footer-link">Resume</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/juan-bracho-avila-71250a121/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/juanbracho" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
        <div className="footer-copyright">
          © 2024 Juan Bracho Avila. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
