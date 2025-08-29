import React from 'react';
import './Speakers.css';

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. John Smith",
      title: "AI Research Director",
      company: "Tech Corp",
      topic: "Future of Artificial Intelligence",
      bio: "Leading AI researcher with 15+ years experience"
    },
    {
      name: "Prof. Sarah Johnson",
      title: "Computer Science Professor",
      company: "MIT",
      topic: "Machine Learning in Education",
      bio: "Expert in educational technology and ML applications"
    },
    {
      name: "Mr. David Chen",
      title: "CTO",
      company: "StartupXYZ",
      topic: "Innovation in Tech Startups",
      bio: "Serial entrepreneur and technology innovator"
    }
  ];

  return (
    <section id="speakers" className="section speakers">
      <h2>Keynote Speakers</h2>
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <div className="speaker-image">
              <div className="placeholder-image">
                {speaker.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <h3>{speaker.name}</h3>
            <p className="speaker-title">{speaker.title}</p>
            <p className="speaker-company">{speaker.company}</p>
            <h4>"{speaker.topic}"</h4>
            <p className="speaker-bio">{speaker.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;