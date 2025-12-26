import React from "react";
import { experiences } from "./data";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="resume-section">
      <h2 className="section-title">Professional Experience</h2>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card brutal-card">
            <div className="experience-header-card">
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-date mono">{exp.date}</p>
            </div>

            <div className="experience-meta">
              <p className="experience-org mono">{exp.organization}</p>
              <p className="experience-location mono">{exp.location}</p>
            </div>

            <ul className="experience-responsibilities">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
