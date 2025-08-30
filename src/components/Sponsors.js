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
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMemberClick = (member) => {
    setSelectedMember(selectedMember?.name === member.name ? null : member);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading team members...</p>
      </div>
    );
  }

  return (
    <section className="sponsors-section">
      <h2>Our Organizing Committee</h2>

      {/* Search and Filter */}
      <div className="controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <i className="search-icon">🔍</i>
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Members Grid */}
      <div className="members-grid">
        {visibleMembers.map((member, index) => (
          <div
            key={member.name}
            className={`member-card ${selectedMember?.name === member.name ? 'active' : ''}`}
            onClick={() => handleMemberClick(member)}
          >
            <div className="member-image-container">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/placeholder-avatar.png';
                }}
              />
              <div className="member-overlay">
                <span>View Details</span>
              </div>
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              {selectedMember?.name === member.name && (
                <div className="member-details">
                  <p>{member.intro}</p>
                  <button className="contact-btn">Contact</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length > 6 && (
        <button
          className="view-more-btn"
          onClick={() => setShowAllMembers(!showAllMembers)}
        >
          {showAllMembers ? 'Show Less' : `View All (${filteredMembers.length})`}
        </button>
      )}
    </section>
  );
};

export default Sponsors;