import React, { useState } from "react";
import { experiences } from "./data";
import "./Experience.css";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExperience = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="resume-section">
      <h2 className="section-title">Professional Experience</h2>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-card brutal-card ${expandedIndex === index ? 'expanded' : 'collapsed'}`}
          >
            <button
              className="experience-header-button"
              onClick={() => toggleExperience(index)}
              aria-expanded={expandedIndex === index}
              aria-controls={`experience-details-${index}`}
            >
              <div className="experience-header-card">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-date mono">{exp.date}</p>
              </div>

              <div className="experience-meta">
                <p className="experience-org mono">{exp.organization}</p>
                <p className="experience-location mono">{exp.location}</p>
              </div>

              <span className="expand-icon-exp">{expandedIndex === index ? '−' : '+'}</span>
            </button>

            <div
              id={`experience-details-${index}`}
              className="experience-details"
              aria-hidden={expandedIndex !== index}
            >
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
