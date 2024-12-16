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
        <Link to="/home" className="header__button">About</Link>
        <Link to="/portfolio" className="header__button">Portfolio</Link>
        <Link to="/resume" className="header__button">Resume</Link>
      </div>
    </header>
  );
};

export default Header;
