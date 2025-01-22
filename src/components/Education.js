import React from 'react';
import './ResumeCarousel.css';

const Education = () => {
  React.useEffect(() => {
    const scrollers = document.querySelectorAll(".education-scroller-track");
    scrollers.forEach((track) => {
      track.innerHTML += track.innerHTML; // Duplicate content for smooth scroll
    });
  }, []);

  return (
    <div className="experience-container">
      <div className="experience-header">
        <span className="experience-bg-text">MY EDUCATION</span>
        <h2>
          MY <span>EDUCATION</span>
        </h2>
      </div>
      <div className="education-scroller">
        <div className="education-scroller-track">
          <div className="scroller-card">
            <h3>Bootcamp In Data Analytics</h3>
            <p>June 2024 - December 2024</p>
            <p>University of Texas at Austin</p>
            <p>Austin, TX, Dallas</p>
            <p>Bootcamp in Data Analytics with focus on using Python, SQL, Tableau, JavaScript, among others.</p>
          </div>
          <div className="scroller-card">
            <h3>Master of Arts</h3>
            <p>April 2020 - December 2022</p>
            <p>Universidad Argentina de la Empresa</p>
            <p>Buenos Aires, Argentina</p>
            <p>Corporate Law specialization with focus on international business law.</p>
          </div>
          <div className="scroller-card">
            <h3>Bachelor of Arts</h3>
            <p>May 2014 - May 2018</p>
            <p>Universidad Rafael Urdaneta</p>
            <p>Maracaibo, Venezuela</p>
            <p>Comprehensive legal education with focus on civil and corporate law.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
