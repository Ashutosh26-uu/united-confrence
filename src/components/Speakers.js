import React from 'react';
import './Speakers.css';

const Speakers = () => {
  const chiefGuest = {
    name: "Prof(Dr). R.N. Gupta",
    image: "/images/Dr.R.N. gupta.png"
  };

  const guestOfHonour = {
    name: "Prof(Dr). Roop Krishan Khar",
    image: "/images/Dr.Roop. k. Khar.jpg"
  };

  const speakers = [
    {
      name: "Prof. (Dr.) S.P. Vyas",
      image: "/images/S.P.VYAS_.jpg"
    },
    {
      name: "Prof. (Dr.) Atul Kumar Nasa",
      image: "/images/Prof. Atul Nasa.png"
    },
    {
      name: "Prof. (Dr.) Arun Garg",
      image: "/images/Prof. (Dr.) Arun Garg.jpg"
    },
    {
      name: "Prof. (Dr.) Milind Parle",
      image: "/images/millind parle.png"
    },
    {
      name: "Prof. (Dr.) Harvinder Popli",
      image: "/images/prof-harvinder-popli.png"
    }
  ];

  const renderSpeakerImage = (speaker) => {
    return (
      <>
        <p className="speaker-name-label">{speaker.name}</p>
        <div className="speaker-image-container">
          <div className="speaker-image">
            <img
              src={speaker.image}
              alt={speaker.name}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="speaker-initials" style={{ display: 'none' }}>
              {speaker.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section id="speakers" className="section speakers">
      <div className="speakers-container">
        <div className="speakers-header">
          <h2>EMINENT SPEAKERS</h2>
          <p>Renowned experts in pharmaceutical sciences</p>
        </div>

        {/* Chief Guest */}
        <div className="chief-guest-section">
          <h3 className="section-title">Chief Guest</h3>
          <div className="hover-card-container">
            <div className="hover-card">
              <div className="card-image">
                <img
                  src={chiefGuest.image}
                  alt={chiefGuest.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-initials" style={{ display: 'none' }}>
                  {chiefGuest.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="card-overlay">
                <div className="card-content">
                  <h4 className="card-name">{chiefGuest.name}</h4>
                  <p className="card-title">{chiefGuest.title}</p>
                  <span className="card-designation">{chiefGuest.designation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest of Honour / Keynote Speaker */}
        <div className="guest-honour-section">
          <h3 className="section-title">Guest of Honour / Keynote Speaker</h3>
          <div className="hover-card-container">
            <div className="hover-card">
              <div className="card-image">
                <img
                  src={guestOfHonour.image}
                  alt={guestOfHonour.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-initials" style={{ display: 'none' }}>
                  {guestOfHonour.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="card-overlay">
                <div className="card-content">
                  <h4 className="card-name">{guestOfHonour.name}</h4>
                  <p className="card-title">{guestOfHonour.title}</p>
                  <span className="card-designation">{guestOfHonour.designation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Speakers */}
        <div className="other-speakers-section">
          <h3 className="section-title">Speakers</h3>
          <div className="speakers-grid">
            {speakers.map((speaker, index) => (
              <div key={index} className="speaker-card">
                {renderSpeakerImage(speaker)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;