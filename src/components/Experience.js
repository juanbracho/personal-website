import React from 'react';
import { experiences } from './data';
import './ResumeCarousel.css';

const Experience = () => {
  return (
    <section className="experience-container">
      <div className="experience-header">
        <span className="experience-bg-text">MY EXPERIENCE</span>
        <h2>
          MY <span>EXPERIENCE</span>
        </h2>
      </div>
      <div className="carousel">
        <div className="carousel-track">
          {experiences.map((exp, index) => (
            <div className="carousel-card" key={index}>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-date">{exp.date}</p>
              <p className="experience-organization">{exp.organization}</p>
              <p className="experience-location">{exp.location}</p>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
          {experiences.map((exp, index) => (
            <div className="carousel-card" key={`duplicate-${index}`}>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-date">{exp.date}</p>
              <p className="experience-organization">{exp.organization}</p>
              <p className="experience-location">{exp.location}</p>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
          {experiences.map((exp, index) => (
            <div className="carousel-card" key={`duplicate-${index}`}>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-date">{exp.date}</p>
              <p className="experience-organization">{exp.organization}</p>
              <p className="experience-location">{exp.location}</p>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
          {experiences.map((exp, index) => (
            <div className="carousel-card" key={`duplicate-${index}`}>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-date">{exp.date}</p>
              <p className="experience-organization">{exp.organization}</p>
              <p className="experience-location">{exp.location}</p>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
