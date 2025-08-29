import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>United University Pharmacy Conference 2025</h3>
          <p>“Fostering Innovation for a Healthier
            Tomorrow: Navigating the Future of
            Pharmaceutical Sciences’’
            FIHTNFPS - 2025</p>
          <p>7 - 8 November , 2025</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#papers">Papers</a></li>
            <li><a href="#registration">Registration</a></li>
            <li><a href="#speakers">Speakers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p> 📧 <a href="mailto:confpharm@uniteduniversity.edu.in">confpharm@uniteduniversity.edu.in</a></p>
          <p> 📞 +91-9696286985 / +91-8953167208</p>
          <p> 📍 Rawatpur, Jhalwa, Prayagraj, Uttar Pradesh</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/united-university-allahabad/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/united_university/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="mailto:confpharm@uniteduniversity.edu.in">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 United University Phramacy Confrence 2025. All rights reserved.</p>
        <p className="developer-credit">Created By Ashutosh Mishra (B.tech 2nd Year)</p>
      </div>
    </footer>
  );
};

export default Footer;