import React from 'react';
import { education } from './data';
import './ResumeCarousel.css';

const Education = () => {
  return (
    <section className="experience-container">
      <div className="experience-header">
        <span className="experience-bg-text">MY EDUCATION</span>
        <h2>
          MY <span>EDUCATION</span>
        </h2>
      </div>
      <div className="carousel">
        <div className="carousel-track">
          {education.map((edu, index) => (
            <div className="carousel-card" key={index}>
              <h3 className="education-title">{edu.title}</h3>
              <p className="education-date">{edu.date}</p>
              <p className="education-organization">{edu.organization}</p>
              <p className="education-location">{edu.location}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
          {education.map((edu, index) => (
            <div className="carousel-card" key={`duplicate-${index}`}>
              <h3 className="education-title">{edu.title}</h3>
              <p className="education-date">{edu.date}</p>
              <p className="education-organization">{edu.organization}</p>
              <p className="education-location">{edu.location}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
          {education.map((edu, index) => (
            <div className="carousel-card" key={`duplicate-${index}`}>
              <h3 className="education-title">{edu.title}</h3>
              <p className="education-date">{edu.date}</p>
              <p className="education-organization">{edu.organization}</p>
              <p className="education-location">{edu.location}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
          {education.map((edu, index) => (
            <div className="carousel-card" key={`duplicate-${index}`}>
              <h3 className="education-title">{edu.title}</h3>
              <p className="education-date">{edu.date}</p>
              <p className="education-organization">{edu.organization}</p>
              <p className="education-location">{edu.location}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
