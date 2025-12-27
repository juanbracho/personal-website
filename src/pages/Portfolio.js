// src/pages/Portfolio.js
import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import { assignments, projects, webApps } from '../components/projectsData';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1>Data Analytics Portfolio</h1>
        <p className="mono">Web applications, bootcamp projects, and data science work</p>
      </div>

      <div className="content-wrapper">
        <ProjectGrid
          projects={webApps}
          title="Web Applications"
          columns={3}
        />

        <ProjectGrid
          projects={projects}
          title="Major Projects"
          columns={3}
        />

        <ProjectGrid
          projects={assignments}
          title="Bootcamp Assignments"
          columns={3}
        />
      </div>
    </div>
  );
};

export default Portfolio;
