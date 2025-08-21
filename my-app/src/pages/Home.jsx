import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ImportantDates from '../components/ImportantDates';
import CounterSection from '../components/CounterSection';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <CounterSection />
      <ImportantDates />
    </div>
  );
};

export default Home;