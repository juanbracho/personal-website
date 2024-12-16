import React from 'react';
import '../pages/Home.css';

const Skills = () => {
  return (
    <section>
      <h4 className="stats-title">My Skills</h4>
      <div className="about-stats">
        {[
          { title: 'Front-End', width: '80%' },
          { title: 'SQL', width: '70%' },
          { title: 'JavaScript', width: '75%' },
          { title: 'Tableau', width: '75%' },
          { title: 'Data Analysis w/ Python', width: '80%' },
          { title: 'Organizational Skills', width: '90%' },
          { title: 'Microsoft Office', width: '85%' },
          { title: 'Willingnes to Learn', width: '99%' },
        ].map((skill, index) => (
          <div key={index} className="progress-bar">
            <p className="progress-title">{skill.title}</p>
            <div className="progress-con">
              <p className="progress-text">{skill.width}</p>
              <div className="progress">
                <span style={{ width: skill.width }}></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
