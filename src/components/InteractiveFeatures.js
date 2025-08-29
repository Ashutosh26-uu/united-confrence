import React, { useState, useEffect } from 'react';
import './InteractiveFeatures.css';

export const TypewriterText = ({ text, speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  return <span className="typewriter">{displayText}<span className="cursor">|</span></span>;
};

export const StatsCounter = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          stats.forEach((stat, index) => {
            let start = 0;
            const increment = stat.value / 100;
            const timer = setInterval(() => {
              start += increment;
              if (start >= stat.value) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.value;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(start);
                  return newCounts;
                });
              }
            }, 20);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [stats, isVisible]);

  return (
    <div id="stats-section" className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-number">{counts[index]}{stat.suffix}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export const InteractiveTimeline = ({ events }) => {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {events.map((event, index) => (
        <div 
          key={index}
          className={`timeline-item ${index === activeEvent ? 'active' : ''}`}
          onClick={() => setActiveEvent(index)}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>{event.title}</h4>
            <p className="timeline-date">{event.date}</p>
            {index === activeEvent && (
              <p className="timeline-description">{event.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const FloatingActionButton = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fab-container ${isOpen ? 'open' : ''}`}>
      <div className="fab-main" onClick={() => setIsOpen(!isOpen)}>
        <span className={`fab-icon ${isOpen ? 'rotate' : ''}`}>+</span>
      </div>
      <div className="fab-actions">
        {actions.map((action, index) => (
          <div 
            key={index}
            className="fab-action"
            onClick={action.onClick}
            title={action.title}
          >
            {action.icon}
          </div>
        ))}
      </div>
    </div>
  );
};