import React from 'react';
import '../pages/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  const timelineData = [
    { year: '2025-Present', role: 'Executive Assistant', company: 'HydroGraph Clean Power Inc.', location: 'Austin, TX, USA (Remote)', icon: faBriefcase },
    { year: '2022-2025', role: 'Project Administrator', company: 'Atwell LLC', location: 'North Richland Hills, TX, USA', icon: faBriefcase },
    { year: '2024-2024', role: 'Freelance PM/Consultant', company: 'Southern Pulse', location: 'Dallas, TX, USA (Remote)', icon: faBriefcase },
    { year: '2020-2021', role: 'Project Administrator', company: 'Avaya', location: 'Buenos Aires, Argentina', icon: faBriefcase },
    { year: '2018-2020', role: 'Store Manager', company: 'Mascotas de la Abadia', location: 'Buenos Aires, Argentina', icon: faBriefcase },
    { year: '2024-2024', role: 'Bootcamp in Data Analytics', company: 'University of Texas at Austin', location: 'Austin, TX, USA', icon: faBuildingColumns },
    { year: '2020-2022', role: 'MA in Corporate Law', company: 'Universidad Argentina de la Empresa', location: 'Buenos Aires, Argentina', icon: faBuildingColumns },
    { year: '2014-2018', role: 'Law School', company: 'Universidad Rafael Urdaneta', location: 'Maracaibo, Venezuela', icon: faBuildingColumns },
  ];

  return (
    <section className='content-wrapper'>
      <h4 className="stats-title">My Timeline</h4>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <p className="timeline-duration">{item.year}</p>
            <h5>
              {item.role} <span>- {item.company}</span>
            </h5>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
