// src/components/ThemeToggle.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faAdjust } from '@fortawesome/free-solid-svg-icons';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark'); // 'light', 'dark', 'contrast'

  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('light-mode', 'dark-mode', 'contrast-mode');

    // Add the current theme class
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else if (theme === 'contrast') {
      document.body.classList.add('contrast-mode');
    }
  }, [theme]);

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('contrast');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return faSun;
      case 'dark':
        return faMoon;
      case 'contrast':
        return faAdjust;
      default:
        return faMoon;
    }
  };

  const getTitle = () => {
    switch (theme) {
      case 'light':
        return 'Switch to Dark Mode';
      case 'dark':
        return 'Switch to Contrast Mode';
      case 'contrast':
        return 'Switch to Light Mode';
      default:
        return 'Toggle Theme';
    }
  };

  return (
    <div className="theme-toggle">
      <button
        className="theme-button"
        onClick={cycleTheme}
        aria-label={getTitle()}
        title={getTitle()}
      >
        <FontAwesomeIcon icon={getIcon()} />
      </button>
    </div>
  );
};

export default ThemeToggle;
