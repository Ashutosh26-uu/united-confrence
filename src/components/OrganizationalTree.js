import React, { useState } from 'react';
import './OrganizationalTree.css';

const OrganizationalTree = () => {
  const [showAdditionalCommittees, setShowAdditionalCommittees] = useState(false);
  const [selectedCommittee, setSelectedCommittee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Organizing Committee (Main Committee - Always Visible)
  const organizingCommittee = {
    title: "ORGANIZING COMMITTEE",
    rows: [
      // First Row - Dr. Jagdish Gulati (Patron)
      [
        {
          name: "Dr. Jagdish Gulati",
          title: "Patron",
          image: "/images/Drgulati.png"
        }
      ],
      // Second Row - Prof. A. M. Agrawal (Chairperson) and Dr. Amit Kumar Singh (Co-Chairperson)
      [
        {
          name: "Prof. (Dr.) A. M. Agrawal",
          title: "Chairperson",
          image: "/images/Dr. A.M. Agarwal.png"
        },
        {
          name: "Dr. Amit Kumar Singh",
          title: "Co-Chairperson",
          image: "/images/Dr. Amit Kumar Singh.jpg"
        }
      ],
      // Third Row - Dr. Roohi Kesharwani (Convener), Mr. Vineet Srivastava (Co-Convener), Dr. Shahnawaz Sameem (Organizing Secretary)
      [
        {
          name: "Dr. Roohi Kesharwani",
          title: "Convener",
          image: "/images/Dr. Roohi Kesarwani.jpg"
        },
        {
          name: "Mr. Vineet Srivastava",
          title: "Co-Convener",
          image: "/images/Mr. Vineet Shrivastava.jpg"
        },
        {
          name: "Dr. Shahnawaz Sameem",
          title: "Organizing Secretary",
          image: "/images/Dr. Shahnawaz Shameem.png"
        }
      ]
    ]
  };

  // Conference Advisory Committee
  const conferenceAdvisoryCommittee = {
    title: "CONFERENCE ADVISORY COMMITTEE",
    members: [
      {
        name: "Prof. (Dr.) Alok Mukerjee",
        title: "Advisory Member",
        image: "/images/prof-alok-mukerjee.png"
      },
      {
        name: "Dr. Chetan Vyas",
        title: "Advisory Member",
        image: "/images/dr-chetan-vyas.png"
      },
      {
        name: "Dr. Roshni Shrivastava",
        title: "Advisory Member",
        image: "/images/dr-roshni-shrivastava.png"
      },
      {
        name: "Dr. Anil Kumar Singh",
        title: "Advisory Member",
        image: "/images/dr-anil-kumar-singh.png"
      },
      {
        name: "Dr. Shanti Bhushan Mishra",
        title: "Advisory Member",
        image: "/images/dr-shanti-bhushan-mishra.png"
      },
      {
        name: "Dr. Sunil Singh",
        title: "Advisory Member",
        image: "/images/dr-sunil-singh.png"
      },
      {
        name: "Dr. Shradhanjali Singh",
        title: "Advisory Member",
        image: "/images/dr-shradhanjali-singh.png"
      }
    ]
  };

  // Advisory Committee
  const advisoryCommittee = {
    title: "ADVISORY COMMITTEE",
    isNamesList: true,
    names: [
      "Prof. (Dr.) V.K. Dixit",
      "Prof. (Dr.) R.K Khar",
      "Prof. (Dr.). Sanjay K Jain",
      "Prof. (Dr.) S.P Vyas",
      "Prof. (Dr.) O.P. Katare",
      "Prof. (Dr.) Shubhini A. Saraf",
      "Prof. (Dr.) Ranjit Singh",
      "Prof. (Dr.) suneela dhaaneshwar",
      "Prof. (Dr.) N.K. Jain",
      "Prof. (Dr.) Shailendra Saraf",
      "Prof. (Dr.) Meenakshi bajpayai",
      "Prof. (Dr.) B. Mishra",
      "Prof. (Dr.) B. G. Shivananda",
      "Prof. (Dr.) Atul Nasa",
      "Prof. (Dr.). Shushant Srivastava",
      "Prof. (Dr.) Milind Umekar",
    ]
  };

  // Individual Sub-Committees
  const scientificCommittee = {
    title: "SCIENTIFIC COMMITTEE",
    members: [
      {
        name: "Mrs. Priyanka Yadav",
        image: "/images/Mrs. Priyanka Yadav.jpg"
      }
    ]
  };

  const financeCommittee = {
    title: "FINANCE AND SPONSORSHIP COMMITTEE",
    members: [
      {
        name: "Dr. Nimesh Kumar Dubey",
        image: "/images/Dr. Nimesh Kumar Dubey.jpg"
      }
    ]
  };

  const registrationCommittee = {
    title: "REGISTRATION COMMITTEE",
    members: [
      {
        name: "Mr. Utkarsh Verma",
        image: "/images/Mr. Utkarsh Vermajpg.jpg"
      },
      {
        name: "Ms. Kashish Maurya",
        image: "/images/Ms. Kashish Maurya.jpg"
      }
    ]
  };

  const hospitalityCommittee = {
    title: "HOSPITALITY COMMITTEE",
    members: [
      {
        name: "Mr. Sanjay Kumar Yadav",
        image: "/images/Mr. Sanjay Kumar Yadav.jpg"
      },
      {
        name: "Mr. Dhirendra Vishwakarma",
        image: "/images/Mr. Dhirendra Vishwakarma.jpg"
      }
    ]
  };

  const eventCommittee = {
    title: "EVENT AND CULTURAL COMMITTEE",
    members: [
      {
        name: "Mrs. Shalini Kesharwani",
        image: "/images/Mrs. Shalini Kesharwan.jpg"
      },
      {
        name: "Ms. Varsha Chaudhary",
        image: "/images/Ms. Varsha Chaudhary.png.jpg"
      }
    ]
  };

  const publicityCommittee = {
    title: "PUBLICITY AND MEDIA COMMITTEE",
    members: [
      {
        name: "Mr. Mahesh Kumar",
        image: "/images/Mr. Mahesh Kumar.jpg"
      }
    ]
  };

  const renderMemberImage = (member) => {
    return (
      <div className="node-image">
        <img
          src={member.image}
          alt={member.name}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="initials-fallback">
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>
      </div>
    );
  };

  const openCommitteeModal = (committee) => {
    setSelectedCommittee(committee);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCommittee(null);
  };

  const renderCommitteeSection = (committee, isSubCommittee = false) => {
    if (isSubCommittee) {
      return (
        <div className="sub-committee-section">
          {committee.committees.map((subCommittee, index) => (
            <div key={index} className="committee-section">
              <h3
                className="committee-title clickable"
                onClick={() => openCommitteeModal(subCommittee)}
              >
                {subCommittee.name}
              </h3>
              <div className="committee-members single-row" data-member-count={subCommittee.members.length}>
                {subCommittee.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="tree-node member-node" title={member.description}>
                    {renderMemberImage(member)}
                    <div className="node-content">
                      <h4>{member.name}</h4>
                      <p>{member.title}</p>
                    </div>
                    <div className="tooltip">{member.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Handle organizing committee with rows structure
    if (committee.rows) {
      return (
        <div className="committee-section">
          <h3
            className="committee-title clickable"
            onClick={() => openCommitteeModal({ ...committee, members: committee.rows.flat() })}
          >
            {committee.title}
          </h3>
          <div className="organizing-committee-rows">
            {committee.rows.map((row, rowIndex) => (
              <div key={rowIndex} className="committee-row" data-member-count={row.length}>
                {row.map((member, memberIndex) => (
                  <div key={memberIndex} className="tree-node member-node" title={member.description}>
                    {renderMemberImage(member)}
                    <div className="node-content">
                      <h4>{member.name}</h4>
                      <p>{member.title}</p>
                    </div>
                    <div className="tooltip">{member.description}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Handle Advisory Committee with simple names list
    if (committee.isNamesList) {
      return (
        <div className="committee-section">
          <h3 className="committee-title">{committee.title}</h3>
          <div className="names-list">
            {committee.names.map((name, index) => (
              <div key={index} className="name-item">
                {name}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="committee-section">
        <h3
          className="committee-title clickable"
          onClick={() => openCommitteeModal(committee)}
        >
          {committee.title}
        </h3>
        <div className="committee-members single-row" data-member-count={committee.members.length}>
          {committee.members.map((member, index) => (
            <div key={index} className="tree-node member-node" title={member.description}>
              {renderMemberImage(member)}
              <div className="node-content">
                <h4>{member.name}</h4>
                <p>{member.title}</p>
              </div>
              <div className="tooltip">{member.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="organizing-committee" className="section organizational-tree">
      <div className="tree-header">
        <h2>COMMITTEE STRUCTURE</h2>
        <div className="tree-subtitle">Conference Organization</div>
      </div>

      <div className="committees-container">
        {/* Main Organizing Committee - Always Visible */}
        <div className="main-committee">
          {renderCommitteeSection(organizingCommittee)}
        </div>

        {/* View More Button */}
        <div className="view-more-container">
          <button
            className="view-more-btn"
            onClick={() => setShowAdditionalCommittees(!showAdditionalCommittees)}
          >
            {showAdditionalCommittees ? 'View Less' : 'View More Committees'}
            <span className={`arrow ${showAdditionalCommittees ? 'up' : 'down'}`}>▼</span>
          </button>
        </div>

        {/* Additional Committees - Hidden by default */}
        {showAdditionalCommittees && (
          <div className="additional-committees">
            <div className="committee-group">
              {renderCommitteeSection(conferenceAdvisoryCommittee)}
            </div>

            <div className="committee-group">
              {renderCommitteeSection(advisoryCommittee)}
            </div>

            <div className="committee-group">
              {renderCommitteeSection(scientificCommittee)}
            </div>

            <div className="committee-group">
              {renderCommitteeSection(financeCommittee)}
            </div>

            <div className="committee-group">
              {renderCommitteeSection(registrationCommittee)}
            </div>

            <div className="committee-group">
              {renderCommitteeSection(hospitalityCommittee)}
            </div>

            <div className="committee-group">
              {renderCommitteeSection(eventCommittee)}
            </div>

            <div className="committee-group">
              {renderCommitteeSection(publicityCommittee)}
            </div>
          </div>
        )}
      </div>

      {/* Modal for detailed committee view */}
      {showModal && selectedCommittee && (
        <div className="committee-modal-overlay" onClick={closeModal}>
          <div className="committee-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedCommittee.title || selectedCommittee.name}</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <div className="modal-content">
              <div className="modal-members-grid">
                {selectedCommittee.members.map((member, index) => (
                  <div key={index} className="modal-member-card">
                    <div className="modal-member-image">
                      <img
                        src={member.image}
                        alt={member.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="modal-initials-fallback">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="modal-member-info">
                      <h3>{member.name}</h3>
                      <p>{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrganizationalTree;
