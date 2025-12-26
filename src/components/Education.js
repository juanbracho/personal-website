import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bootcamp in Data Analytics',
      date: 'June 2024 - December 2024',
      institution: 'University of Texas at Austin',
      location: 'Austin, TX, USA',
      description: 'Bootcamp in Data Analytics with focus on using Python, SQL, Tableau, JavaScript, among others.'
    },
    {
      degree: 'Master of Arts in Corporate Law',
      date: 'April 2020 - December 2022',
      institution: 'Universidad Argentina de la Empresa',
      location: 'Buenos Aires, Argentina',
      description: 'Corporate Law specialization with focus on international business law.'
    },
    {
      degree: 'Bachelor of Arts in Law',
      date: 'May 2014 - May 2018',
      institution: 'Universidad Rafael Urdaneta',
      location: 'Maracaibo, Venezuela',
      description: 'Comprehensive legal education with focus on civil and corporate law.'
    }
  ];

  return (
    <section className="resume-section">
      <h2 className="section-title">Education</h2>

      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card brutal-card">
            <div className="education-header-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-date mono">{edu.date}</p>
            </div>

            <div className="education-meta">
              <p className="education-institution mono">{edu.institution}</p>
              <p className="education-location mono">{edu.location}</p>
            </div>

            <p className="education-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
