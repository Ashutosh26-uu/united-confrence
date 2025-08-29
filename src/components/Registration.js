import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    category: '',
    dietary: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    alert('Registration submitted successfully!');
  };

  return (
    <section id="registration" className="section registration">
      <div className="registration-container">
        <div className="registration-header">
          <h2>REGISTRATION</h2>
          <p>Registrations are available Online mode and on spot</p>
        </div>

        <div className="certificate-section">
          <h3>CERTIFICATE</h3>
          <p>Certificates will be awarded to the participants in poster/oral, full-length paper and attending all the sessions of the Conference.</p>
        </div>

        <div className="fee-section">
          <h3>REGISTRATION FEE</h3>
          <div className="fee-table">
            <div className="table-header">
              <div className="category-col">CATEGORY</div>
              <div className="early-bird-col">EARLY BIRD REGISTRATION FEE (ON OR BEFORE 15th OCTOBER 2025)</div>
              <div className="on-spot-col">ON SPOT REGISTRATION FEE (AFTER 15th OCTOBER 2025)</div>
            </div>
            
            <div className="table-row">
              <div className="category-col">STUDENTS (UG/DIPLOMA)</div>
              <div className="early-bird-col">800/-</div>
              <div className="on-spot-col">1200/-</div>
            </div>
            
            <div className="table-row">
              <div className="category-col">STUDENTS (PG/PHD/POST DOC.)</div>
              <div className="early-bird-col">1100/-</div>
              <div className="on-spot-col">1500/-</div>
            </div>
            
            <div className="table-row">
              <div className="category-col">FACULTY</div>
              <div className="early-bird-col">1500/-</div>
              <div className="on-spot-col">2000/-</div>
            </div>
            
            <div className="table-row">
              <div className="category-col">INDUSTRY DELEGATES</div>
              <div className="early-bird-col">2500/-</div>
              <div className="on-spot-col">3000/-</div>
            </div>
          </div>
        </div>

        <div className="payment-section">
          <h3>MODE OF PAYMENT</h3>
          <p>Registration fee can be paid through RTGS/UPI.</p>
        </div>

        <div className="registration-form">
          <h3>Register Now</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="institution"
                placeholder="Institution/Organization"
                value={formData.institution}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="ug-diploma">Students (UG/Diploma)</option>
                <option value="pg-phd">Students (PG/PHD/Post Doc.)</option>
                <option value="faculty">Faculty</option>
                <option value="industry">Industry Delegates</option>
              </select>
            </div>
            
            <button type="submit" className="btn submit-btn">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;