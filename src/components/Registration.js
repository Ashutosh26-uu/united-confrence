import React from 'react';
import './Registration.css';

const Registration = () => {

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

        <div className="flyer-section">
          <h3>CONFERENCE FLYER</h3>
          <div className="download-container">
            <a
              href="/images/flyer part 2 updated.pdf"
              download="UPHARMORA_Conference_Flyer.pdf"
              className="download-btn"
            >
              <span className="download-icon">📄</span>
              Download Conference Flyer
            </a>
          </div>
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
          <div className="payment-content">
            <div className="payment-text">
              <p>Registration fee can be paid through RTGS/UPI.</p>
            </div>
            <div className="qr-code-container">
              <img
                src="/images/QR-Code.png"
                alt="Payment QR Code"
                className="payment-qr-code"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <p className="qr-code-label">Scan to Register</p>
            </div>
          </div>
        </div>

        <div className="registration-form">
          <h3>Register Now</h3>
          <div className="google-form-container">
            <p>Click the button below to access our online registration form:</p>
            <a
              href="https://uniteduniversity.edu.in/regForms/Form1023.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn register-now-btn"
            >
              <span className="btn-icon">📝</span>
              Register Now
              <span className="btn-arrow">→</span>
            </a>
            <p className="form-note">You will be redirected to our secure Google Form for registration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;