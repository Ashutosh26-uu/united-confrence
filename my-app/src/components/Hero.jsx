import React from 'react';

const CONFERENCE_CONFIG = {
  abstractDeadline: 'August 15, 2025',
  title: 'United University Pharmacy Conference 2025',
  subtitle: 'Innovative Approaches in Pharmaceutical Research and Patient Care',
  theme: 'Bridging Science and Practice',
  dates: 'October 15-17, 2025',
  organizer: 'Department of Pharmacy',
  institution: 'United University, Uttar Pradesh, India'
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000"
        style={{ 
          backgroundImage: 'url(/images/university-building-bg.jpg), url(/images/image1.jpg)',
          transform: 'translateY(var(--scroll-y, 0) * 0.5px)'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in">
        
        <h1 className="text-4xl md:text-7xl font-bold text-yellow-400 mb-6 leading-tight hover:scale-105 transition-transform duration-300 animate-pulse">
          {CONFERENCE_CONFIG.title}
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-blue-300 mb-4">
          {CONFERENCE_CONFIG.subtitle}
        </h2>
        
        <h3 className="text-2xl md:text-4xl font-bold text-pink-400 mb-8">
          {CONFERENCE_CONFIG.theme}
        </h3>
        
        <p className="text-xl md:text-2xl text-green-400 font-semibold mb-4">
          {CONFERENCE_CONFIG.dates} | Organized by
        </p>
        
        <p className="text-lg md:text-xl text-pink-300 font-medium">
          {CONFERENCE_CONFIG.organizer}<br/>
          {CONFERENCE_CONFIG.institution}
        </p>
      </div>
    </section>
  );
};

export default Hero;
