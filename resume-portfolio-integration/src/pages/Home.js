import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import './Home.css';

const Home = () => {
  return (
    <div className="content-wrapper">
      <About />
      <Skills />
      <Timeline />
    </div>
  );
};

export default Home;
