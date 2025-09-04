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
      description: "Notification of accepted abstracts."
    },
    {
      title: "Dedline for full length Paper Submission",
      date: "20th October 2025",
      description: "Last date for full length paper submission."
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
        <div className="timeline-section">
          <h3>Dates To Remember</h3>
          <InteractiveTimeline events={timelineEvents} />
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;