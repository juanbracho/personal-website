// src/pages/Portfolio.js
import React from 'react';
import Hero from '../components/Hero';
import AssignmentsCarousel from '../components/AssignmentsCarousel';
import ProjectsCarousel from '../components/ProjectsCarousel';

const Portfolio = () => {
  return (
    <section>
      <div className="App">
        <main>
          <Hero />
          <AssignmentsCarousel />
          <ProjectsCarousel />
        </main>
      </div>
    </section>
  );
};

export default Portfolio;
