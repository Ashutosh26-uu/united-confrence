import React from 'react';
import { InteractiveTimeline } from './InteractiveFeatures';
import './ImportantDates.css';

const ImportantDates = () => {
  const timelineEvents = [
    {
      title: "Deadline for Abstract Submission",
      date: "10th October 2025",
      description: "Submit your research abstracts for review and consideration."
    },
    {
      title: "Last Date of Registration",
      date: "15th October 2025",
      description: "Last date for early bird registration with discounted fees."
    },
    {
      title: "Abstract Acceptance Notification",
      date: "18th October 2025",
      description: "Notification of accepted abstracts and presentation details."
    },
    {
      title: "Conference Date",
      date: "7th to 8th November 2025",
      description: "Two days of keynote speeches, presentations, and networking."
    }
  ];

  return (
    <section id="important-dates" className="section important-dates">
      <div className="dates-container">
        <h2>Dates to Remember</h2>

        <div className="dates-list">
          <div className="date-item">
            <div className="date-content">
              <span className="date-text">Conference Date- 7<sup>th</sup> to 8<sup>th</sup> November 2025</span>
            </div>
          </div>

          <div className="date-item">
            <div className="date-content">
              <span className="date-text">Last Date of Registration 15<sup>th</sup> October 2025</span>
            </div>
          </div>

          <div className="date-item">
            <div className="date-content">
              <span className="date-text">Deadline for Abstract Submission 10<sup>th</sup> October 2025</span>
            </div>
          </div>

          <div className="date-item">
            <div className="date-content">
              <span className="date-text">Abstract Acceptance Notification 18<sup>th</sup> October 2025</span>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h3>Conference Timeline</h3>
          <InteractiveTimeline events={timelineEvents} />
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;