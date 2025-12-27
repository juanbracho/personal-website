import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">Juan Bracho</h1>
        <p className="hero-title mono">Constant learner <span className="hero-separator">|</span> AI enabled App Builder</p>

        <p className="hero-description">
          Building apps for fun to solve my own problems, leveraging AI throughout the process.
          I share them on iOS and Android hoping they might solve someone else's problem too.
          By day, I try to pursue my passions, learning new languages, writting my thoughts and hoardering knowledge through books.
        </p>

        <div className="hero-cta">
          <Link to="/apps" className="brutal-button">View Apps</Link>
          <Link to="/articles" className="brutal-button">Read Articles</Link>
          <Link to="/portfolio" className="brutal-button">View Portfolio</Link>
        </div>

        <div className="hero-links mono">
          <a href="https://www.linkedin.com/in/juan-bracho-avila-71250a121/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <span className="hero-separator">|</span>
          <a href="https://github.com/juanbracho" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
