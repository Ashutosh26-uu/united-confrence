import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-subtitle">Get in touch with us for any inquiries</p>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="info-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="info-content">
                                <h3>Location</h3>
                                <p>United University, Prayagraj</p>
                                <p>Uttar Pradesh, India - 211010</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <FaPhone />
                            </div>
                            <div className="info-content">
                                <h3>Phone</h3>
                                <p>+91 XXXXXXXXXX</p>
                                <p>+91 XXXXXXXXXX</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <FaEnvelope />
                            </div>
                            <div className="info-content">
                                <h3>Email</h3>
                                <p>info@icrtac2024.com</p>
                                <p>contact@icrtac2024.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <FaClock />
                            </div>
                            <div className="info-content">
                                <h3>Working Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <h3>Send us a Message</h3>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
