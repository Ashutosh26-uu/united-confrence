import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ImportantDates from '../components/ImportantDates';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ImportantDates />
    </div>
  );
};

export default Home;