import React from 'react';
import './Speakers.css';

const Speakers = () => {
  const chiefGuest = {
    name: "Prof(Dr). R.N. Gupta",
    title: "President, Indian Pharmaceutical Association",
    designation: "Chief Guest",
    company: "",
    image: "/images/Dr.R.N. gupta.png"
  };

  const guestOfHonour = {
    name: "Prof(Dr). Roop Krishan Khar",
    title: "Director, B.S. Anangpuria Institute of Pharmacy, Faridabad, Haryana",
    designation: "Guest of Honour / Keynote Speaker",
    company: "",
    image: "/images/Dr. Roop k. khar.png"
  };

  const speakers = [
    {
      name: "Prof(Dr). Harvinder Popli",
      title: "Director & Dean (Research Innovation & International Affairs)",
      company: "Delhi Pharmaceutical Science and Research University (DPSRU), New Delhi",
      image: "/images/prof-harvinder-popli.png"
    },
    {
      name: "Prof(Dr). S.P. Vyas",
      title: "Ex. Vice Chancellor, Professor (Retd.)",
      company: "H.S. Gaur Central University, Sagar",
      image: "/images/Dr. S.P.VYAS.png"
    },
    {
      name: "Prof. (Dr.) Atul Kumar Nasa",
      title: "Pro Vice-Chancellor",
      company: "Shree Guru Gobind Singh Tricentenary University (SGT), Gurugram, Haryana",
      image: "/images/Prof. Atul Nasa.png"
    },
    {
      name: "Prof. (Dr.) Milind Parle",
      title: "Distinguished Speaker",
      company: "",
      image: "/images/millind parle.png"
    }
  ];

  const renderSpeakerImage = (speaker) => {
    return (
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
        <p className="speaker-name-label">{speaker.name}</p>
      </div>
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
          <div className="chief-guest-card">
            {renderSpeakerImage(chiefGuest)}
            <div className="speaker-info">
              <p className="speaker-title">{chiefGuest.title}</p>
              <span className="speaker-designation">{chiefGuest.designation}</span>
            </div>
          </div>
        </div>

        {/* Guest of Honour / Keynote Speaker */}
        <div className="guest-honour-section">
          <h3 className="section-title">Guest of Honour / Keynote Speaker</h3>
          <div className="chief-guest-card">
            {renderSpeakerImage(guestOfHonour)}
            <div className="speaker-info">
              <p className="speaker-title">{guestOfHonour.title}</p>
              <span className="speaker-designation">{guestOfHonour.designation}</span>
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
                <div className="speaker-info">
                  <p className="speaker-title">{speaker.title}</p>
                  {speaker.company && <p className="speaker-company">{speaker.company}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;