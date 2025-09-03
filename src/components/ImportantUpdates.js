import React from 'react';
import './ImportantUpdates.css';

const ImportantUpdates = () => {
  return (
    <section id="important-updates" className="section important-updates">
      <div className="updates-container">
        <div className="updates-header">
          <h2>IMPORTANT UPDATES</h2>
          <div className="updates-subtitle">Stay tuned for latest announcements</div>
        </div>
        
        <div className="updates-content">
          <div className="update-card">
            <div className="update-icon">
              <span>📢</span>
            </div>
            <div className="update-text">
              <h3>Updates Coming Soon</h3>
              <p>Important conference updates and announcements will be posted here. Please check back regularly for the latest information.</p>
            </div>
          </div>
          
          <div className="coming-soon-badge">
            <span>Updated Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantUpdates;
