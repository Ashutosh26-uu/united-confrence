import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const sponsors = [
    { name: "TechCorp", level: "Platinum", description: "Leading technology solutions provider" },
    { name: "InnovateLab", level: "Gold", description: "Innovation and research company" },
    { name: "DataSoft", level: "Gold", description: "Data analytics and software solutions" },
    { name: "CloudTech", level: "Silver", description: "Cloud computing services" },
    { name: "StartupHub", level: "Silver", description: "Startup incubation platform" },
    { name: "EduTech", level: "Bronze", description: "Educational technology solutions" }
  ];

  const getSponsorsByLevel = (level) => sponsors.filter(s => s.level === level);

  return (
    <section id="sponsors" className="section sponsors">
      <h2>Our Sponsors</h2>
      
      <div className="sponsor-levels">
        <div className="sponsor-level">
          <h3 className="platinum">Platinum Sponsors</h3>
          <div className="sponsors-grid platinum-grid">
            {getSponsorsByLevel("Platinum").map((sponsor, index) => (
              <div key={index} className="sponsor-card platinum-card">
                <div className="sponsor-logo">{sponsor.name}</div>
                <p>{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-level">
          <h3 className="gold">Gold Sponsors</h3>
          <div className="sponsors-grid gold-grid">
            {getSponsorsByLevel("Gold").map((sponsor, index) => (
              <div key={index} className="sponsor-card gold-card">
                <div className="sponsor-logo">{sponsor.name}</div>
                <p>{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-level">
          <h3 className="silver">Silver Sponsors</h3>
          <div className="sponsors-grid silver-grid">
            {getSponsorsByLevel("Silver").map((sponsor, index) => (
              <div key={index} className="sponsor-card silver-card">
                <div className="sponsor-logo">{sponsor.name}</div>
                <p>{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-level">
          <h3 className="bronze">Bronze Sponsors</h3>
          <div className="sponsors-grid bronze-grid">
            {getSponsorsByLevel("Bronze").map((sponsor, index) => (
              <div key={index} className="sponsor-card bronze-card">
                <div className="sponsor-logo">{sponsor.name}</div>
                <p>{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="become-sponsor">
        <h3>Become a Sponsor</h3>
        <p>Join us in supporting academic excellence and innovation</p>
        <button className="btn">Contact Us</button>
      </div>
    </section>
  );
};

export default Sponsors;