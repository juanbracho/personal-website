import React from 'react';
import Education from '../components/Education';
import Experience from '../components/Experience';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1>Resume</h1>
        <p className="mono">Professional experience and educational background</p>
      </div>

      <div className="content-wrapper">
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default Resume;
  