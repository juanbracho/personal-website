import React from 'react';
import './ProjectGrid.css';

const ProjectGrid = ({ projects, title, columns = 3 }) => {
  return (
    <section className="project-grid-section">
      {title && <h2 className="project-grid-title">{title}</h2>}

      <div className={`project-grid project-grid-${columns}`}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card brutal-card"
            onClick={() => window.open(project.github, '_blank')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && window.open(project.github, '_blank')}
          >
            <div className="project-thumbnail">
              <img src={project.thumbnail} alt={`${project.name} thumbnail`} />
            </div>

            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>

              {project.description && (
                <p className="project-description">{project.description}</p>
              )}

              {project.tech && (
                <div className="project-tech">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-badge mono">{tech}</span>
                  ))}
                </div>
              )}

              <div className="project-link mono">
                View on GitHub ↗
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
