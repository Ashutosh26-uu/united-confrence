import React, { useState, useEffect, useRef } from 'react';
import { Users, Calendar, Award, Globe } from 'lucide-react';

const CounterSection = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: Users, label: 'Expected Attendees', target: 500, suffix: '+' },
    { icon: Calendar, label: 'Conference Days', target: 3, suffix: '' },
    { icon: Award, label: 'Expert Speakers', target: 25, suffix: '+' },
    { icon: Globe, label: 'Universities', target: 50, suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const timers = [];
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 30);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  };

  return (
    <section ref={sectionRef} className="py-20 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;