import React, { useState, useEffect } from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  // Add categories for filtering
  const categories = [
    { id: 'all', label: 'All Members' },
    { id: 'organizer', label: 'Organizers' },
    { id: 'member', label: 'Team Members' },
    { id: 'Chairperson', label: 'Leadership' },
  ];

  const organizingCommittee = [
    {
      name: "Dr. Anand Mohan Agarwal",
      role: "Vice Chancellor",
      position: "Chairperson",
      image: "/images/Dr.Anand Mohan Agarawal.png"
    },
    {
      name: "Dr. Amit Kumar Singh",
      role: "Organizing Secretary",
      position: "organizer",
      intro: "Expert in Pharmaceutical Sciences with 15+ years of experience",
      image: "/images/Dr. Amit Kumar Singh.jpg"
    },
    {
      name: "Dr. Nimesh Kumar Dubey",
      role: "Co-Organizing Secretary",
      position: "organizer",
      intro: "Renowned researcher in Drug Development and Pharmacology",
      image: "/images/Dr. Nimesh Kumar Dubey.jpg"
    },
    {
      name: "Dr. Roohi Kesarwani",
      role: "Treasurer",
      position: "member",
      intro: "Specialist in Pharmaceutical Chemistry and Analysis",
      image: "/images/Dr. Roohi Kesarwani.jpg"
    },
    {
      name: "Mr. Dhirendra Vishwakarma",
      role: "Technical Head",
      position: "member",
      intro: "Expert in Computer Science with 10+ years of experience",
      image: "/images/Mr. Dhirendra Vishwakarma.jpg"
    },
    {
      name: "Mrs. Priyanka Yadav",
      role: "Hospitality Coordinator",
      position: "member",
      intro: "Expert in Human Resources and Management",
      image: "/images/Mrs. Priyanka Yadav.jpg"
    },
    {
      name: "Mr. Mahesh Kumar",
      role: "Technical Team",
      position: "member",
      intro: "Skilled in Data Analysis and Machine Learning",
      image: "/images/Mr. Mahesh Kumar.jpg"
    },
    {
      name: "Mr. Sanjay Kumar Yadav",
      role: "Technical Team",
      position: "member",
      intro: "Proficient in Web Development and Design",
      image: "/images/Mr. Sanjay Kumar Yadav.jpg"
    },
    {
      name: "Mr. Utkarsh Verma",
      role: "Design Team",
      position: "member",
      intro: "Talented in Graphic Design and Digital Art",
      image: "/images/Mr. Utkarsh Verma.jpg"
    },
    {
      name: "Mr. Vineet Shrivastava",
      role: "Public Relations",
      position: "member",
      intro: "Experienced in Marketing and Public Relations",
      image: "/images/Mr. Vineet Shrivastava.jpg"
    },
    {
      name: "Mrs. Shalini Kesharwan",
      role: "Event Coordinator",
      position: "member",
      intro: "Skilled in Event Planning and Coordination",
      image: "/images/Mrs. Shalini Kesharwan.jpg"
    },
    {
      name: "Ms. Kashish Maurya",
      role: "Content Team",
      position: "member",
      intro: "Talented in Content Writing and Editing",
      image: "/images/Ms. Kashish Maurya.jpg"
    },
    {
      name: "Ms. Varsha Chaudhary",
      role: "Social Media Manager",
      position: "member",
      intro: "Experienced in Social Media Management and Promotion",
      image: "/images/Ms. Varsha Chaudhary.png.jpg"
    },
  ];

  // Filter members based on search and active filter
  const filteredMembers = organizingCommittee.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || member.position === activeFilter ||
      (activeFilter === 'Chairperson' && member.position === 'Chairperson');
    return matchesSearch && matchesFilter;
  });

  // Show only a subset of members initially
  const visibleMembers = showAllMembers ? filteredMembers : filteredMembers.slice(0, 6);

  // Simulate loading
  return (
    <section id="sponsors" className="section sponsors">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <h2>SPONSORS</h2>
          <div className="sponsors-subtitle">Partnership Opportunities</div>
        </div>

        <div className="announcement-section">
          <div className="announcement-card">
            <div className="announcement-icon">
              <span>🤝</span>
            </div>
            <div className="announcement-content">
              <h3>List of Sponsors Announced Soon</h3>
              <p>We are currently finalizing partnerships with leading pharmaceutical companies and healthcare organizations. The complete list of sponsors will be announced shortly.</p>
            </div>
          </div>
          
          <div className="coming-soon-badge">
            <span>Announcement Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;