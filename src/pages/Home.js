import React from 'react';
import Hero from '../components/Hero';
import FeaturedApps from '../components/FeaturedApps';
import FeaturedBooks from '../components/FeaturedBooks';
import FeaturedArticles from '../components/FeaturedArticles';
import Skills from '../components/Skills';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <div className="content-wrapper">
        <FeaturedApps />
        <FeaturedBooks />
        <FeaturedArticles />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
