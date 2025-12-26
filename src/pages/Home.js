import React from 'react';
import Hero from '../components/Hero';
import FeaturedApps from '../components/FeaturedApps';
import About from '../components/About';
import FeaturedArticles from '../components/FeaturedArticles';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <div className="content-wrapper">
        <FeaturedApps />
        <About />
        <FeaturedArticles />
        <Skills />
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
