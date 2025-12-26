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
          <p>Data Analyst | Mobile Developer</p>
        </div>
      </div>
      <div className="header__right">
        <Link to="/home" className="header__button">About</Link>
        <Link to="/resume" className="header__button">Resume</Link>
        <Link to="/apps" className="header__button">Apps</Link>
        <Link to="/books" className="header__button">Books</Link>
        <Link to="/articles" className="header__button">Articles</Link>
        <Link to="/portfolio" className="header__button">Portfolio</Link>
      </div>
    </header>
  );
};

export default Header;
