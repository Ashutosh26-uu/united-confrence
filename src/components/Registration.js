import React from 'react';
import './Registration.css';

const Registration = () => {

  return (
    <section id="registration" className="section registration">
      <div className="registration-container">
        {/* Main Header */}
        <div className="registration-header">
          <div className="header-badge">
            <h2>REGISTRATION</h2>
          </div>
          <p className="header-subtitle">Registrations are available Online mode and on spot</p>
        </div>

        {/* Certificate Info Card */}
        <div className="info-card certificate-card">
          <div className="card-header">
            <div className="card-icon">🎓</div>
            <h3>CERTIFICATE</h3>
          </div>
          <div className="card-content">
            <p><strong>Certificates will be awarded to the participants in poster/oral, full-length paper and attending all the sessions of the Conference.</strong></p>
          </div>
        </div>

        {/* Registration Fee Card */}
        <div className="info-card fee-card">
          <div className="card-header">
            <div className="card-icon">💰</div>
            <h3>REGISTRATION FEE</h3>
          </div>
          <div className="card-content">
            <div className="fee-table-modern">
              <div className="table-header-modern">
                <div className="col-category">CATEGORY</div>
                <div className="col-early">EARLY BIRD REGISTRATION FEE<br/><span className="date-text">(ON OR BEFORE 15th OCTOBER 2025)</span></div>
                <div className="col-spot">ON SPOT REGISTRATION FEE<br/><span className="date-text">(AFTER 15th OCTOBER 2025)</span></div>
              </div>
              
              <div className="table-row-modern">
                <div className="col-category">STUDENTS (UG/DIPLOMA)</div>
                <div className="col-early">₹800/-</div>
                <div className="col-spot">₹1200/-</div>
              </div>
              
              <div className="table-row-modern">
                <div className="col-category">STUDENTS (PG/PHD/POST DOC.)</div>
                <div className="col-early">₹1100/-</div>
                <div className="col-spot">₹1500/-</div>
              </div>
              
              <div className="table-row-modern">
                <div className="col-category">FACULTY</div>
                <div className="col-early">₹1500/-</div>
                <div className="col-spot">₹2000/-</div>
              </div>
              
              <div className="table-row-modern">
                <div className="col-category">INDUSTRY DELEGATES</div>
                <div className="col-early">₹2500/-</div>
                <div className="col-spot">₹3000/-</div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Highlight */}
        <div className="awards-banner">
          <div className="awards-content">
            <span className="trophy-icon">🏆</span>
            <div className="awards-text">
              <strong>Best oral and poster presentations will be awarded!</strong>
            </div>
          </div>
        </div>

        {/* Conference Flyer Card */}
        <div className="info-card flyer-card">
          <div className="card-header">
            <div className="card-icon">📄</div>
            <h3>Download Conference Flyer</h3>
          </div>
          <div className="card-content">
            <a
              href="/images/FIHTNFPS 2025.pdf"
              download="FIHTNFPS_2025_Conference_Flyer.pdf"
              className="download-btn-modern"
            >
              <span className="btn-icon">📥</span>
              Download Conference Flyer
            </a>
          </div>
        </div>

        {/* Registration QR Code Card */}
        <div className="info-card registration-qr-card">
          <div className="card-header">
            <div className="card-icon">📱</div>
            <h3>QUICK REGISTRATION</h3>
          </div>
          <div className="card-content">
            <div className="registration-qr-grid">
              <div className="qr-info">
                <p><strong>Scan the QR code for quick and easy registration.</strong></p>
                <p className="payment-method-text"><strong>Registration fee can be paid through RTGS/UPI.</strong></p>
              </div>
              <div className="qr-section">
                <img
                  src="/images/QR-Code.png"
                  alt="Registration QR Code"
                  className="qr-code-modern"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <p className="qr-label">Scan to Register</p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="registration-cta">
          <div className="cta-content">
            <h3>Ready to Join?</h3>
            <p>Register now and be part of this exciting pharmaceutical conference!</p>
            <a
              href="https://uniteduniversity.edu.in/regForms/Form1023.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="register-btn-main"
            >
              <span className="btn-icon">🚀</span>
              Register Now
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;