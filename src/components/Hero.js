import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">Juan Bracho Avila</h1>
        <p className="hero-title mono">Data Analyst <span className="hero-separator">|</span> Mobile Developer</p>

        <p className="hero-description">
          Building data-driven solutions and cross-platform mobile applications.
          Transforming complex data into actionable insights while creating intuitive
          user experiences across iOS and Android platforms.
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
