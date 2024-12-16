import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <ThemeToggle />
        <div className="header__info">
          <h1>Juan Bracho Avila</h1>
          <p>Data Analytics Portfolio</p>
        </div>
      </div>
      <div className="header__right">
        <Link to="/" className="header__button">About</Link>
        <Link to="/portfolio" className="header__button">Portfolio</Link>
        <div className="header__dropdown">
          <button className="header__button" aria-haspopup="menu">
            Resume
          </button>
          <div className="dropdown__menu">
            <Link to="/education" className="dropdown__item">Education</Link>
            <Link to="/experience" className="dropdown__item">Experience</Link>
            <Link to="/contact" className="dropdown__item">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
