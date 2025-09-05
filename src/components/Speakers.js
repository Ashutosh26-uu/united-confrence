import React from 'react';
import './Speakers.css';

const Speakers = () => {
  const chiefGuest = {
    name: "Prof.(Dr). R.N. Gupta",
    image: "/images/Dr.R.N. gupta.png"
  };

  const guestOfHonour = {
    name: "Prof.(Dr). Roop Krishen Khar",
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

  const renderSpeakerCard = (speaker) => {
    return (
      <div className="uniform-speaker-card">
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
        <div className="speaker-name-below">
          <h4>{speaker.name}</h4>
        </div>
      </div>
    );
  };

  return (
    <section id="speakers" className="section speakers">
      <div className="speakers-container">
        <div className="speakers-header">
          <h2>EMINENT SPEAKERS</h2>
          <p>Renowned experts in Pharmaceutical Sciences</p>
        </div>

        {/* Chief Guest */}
        <div className="chief-guest-section">
          <h3 className="section-title">Chief Guest</h3>
          <div className="speakers-grid">
            <div className="uniform-speaker-card chief-guest-card">
              <div className="speaker-image-container">
                <div className="speaker-image">
                  <img
                    src={chiefGuest.image}
                    alt={chiefGuest.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="speaker-initials" style={{ display: 'none' }}>
                    {chiefGuest.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="speaker-name-below">
                <h4>{chiefGuest.name}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Guest of Honour / Keynote Speaker */}
        <div className="guest-honour-section">
          <h3 className="section-title">Guest of Honour / Keynote Speaker</h3>
          <div className="speakers-grid">
            <div className="uniform-speaker-card keynote-speaker-card">
              <div className="speaker-image-container">
                <div className="speaker-image">
                  <img
                    src={guestOfHonour.image}
                    alt={guestOfHonour.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="speaker-initials" style={{ display: 'none' }}>
                    {guestOfHonour.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="speaker-name-below">
                <h4>{guestOfHonour.name}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Other Speakers */}
        <div className="other-speakers-section">
          <h3 className="section-title">Speakers</h3>
          <div className="speakers-grid">
            {speakers.map((speaker, index) => (
              <div key={index}>
                {renderSpeakerCard(speaker)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;