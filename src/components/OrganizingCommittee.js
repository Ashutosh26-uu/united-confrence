import React from 'react';
import './OrganizingCommittee.css';

const OrganizingCommittee = () => {
  return (
    <section id="organizing-committee" className="section organizing-committee">
      <div className="committee-header">
        <h2>ORGANIZING COMMITTEE</h2>
      </div>

      <div className="committee-structure">
        <div className="patron-section">
          <div className="committee-card patron-card">
            <h3>Dr. Jagdish Gulati</h3>
            <p>Patron</p>
          </div>
        </div>

        <div className="chairperson-section">
          <div className="committee-card chairperson-card">
            <div className="member-image">
              <img src="/images/Dr. Anand Mohan Agarwal.jpg" alt="Prof. (Dr.) A. M. Agrawal" />
            </div>
            <h3>Prof. (Dr.) A. M. Agrawal</h3>
            <p>Chairperson</p>
          </div>
        </div>

        <div className="committee-row">
          <div className="committee-card">
            <h3>Dr. Amit Kumar Singh</h3>
            <p>Co- Chairperson</p>
          </div>

          <div className="committee-card">
            <h3>Dr. Roohi Kesharwani</h3>
            <p>Convener</p>
          </div>
        </div>

        <div className="committee-row">
          <div className="committee-card">
            <h3>Mr. Vineet Srivastava</h3>
            <p>Co-Convener</p>
          </div>

          <div className="committee-card">
            <h3>Dr. Shahnawaz Sameem</h3>
            <p>Organizing Secretary</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommittee;