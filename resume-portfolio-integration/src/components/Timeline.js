import React from 'react';
import '../pages/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  const timelineData = [
    { year: '2020-2021', role: 'Project Administrator', company: 'Avaya', location: 'Buenos Aires, Argentina', icon: faBriefcase },
    { year: '2019-2020', role: 'Store Manager', company: 'Mascotas de la Abadia', location: 'Buenos Aires, Argentina', icon: faBriefcase },
    { year: '2018', role: 'Intern', company: 'MYRO Associates', location: 'Maracaibo, Venezuela', icon: faBriefcase },
    { year: '2014-2018', role: 'Law School', company: 'Universidad Rafael Urdaneta', location: 'Maracaibo, Venezuela', icon: faBuildingColumns },
    { year: '2020-2022', role: 'MA in Corporate Law', company: 'Universidad Argentina de la Empresa', location: 'Buenos Aires, Argentina', icon: faBuildingColumns },
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
