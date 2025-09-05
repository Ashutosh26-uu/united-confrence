import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
    const [ref, isVisible] = useScrollAnimation();

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            details: ['confpharm@uniteduniversity.edu.in', 'contact@uniteduniversity.edu.in'],
            action: 'mailto:confpharm@uniteduniversity.edu.in'
        },
        {
            icon: '☎️',
            title: 'Toll Free',
            details: ['1800-121-8797'],
            action: 'tel:18001218797'
        },
        {
            icon: '💬',
            title: 'WhatsApp',
            details: ['8953167208', '9696286985'],
            action: 'https://wa.me/918953167208'
        },
        {
            icon: '📍',
            title: 'Address',
            details: ['United University', 'Prayagraj, Uttar Pradesh', 'India - 211012'],
            action: 'https://maps.google.com'
        },
        {
            icon: '🕒',
            title: 'Office Hours',
            details: ['Monday - Saturday : 9:00 AM - 4:00 PM', 'Sunday: Closed'],
            action: null
        }
    ];

    return (
        <section id="contact" className="section contact" ref={ref}>
            <div className="contact-header">
                <h2 className={`fade-in ${isVisible ? 'visible' : ''}`}>Contact Us</h2>
                <p className="contact-subtitle">Get in touch with us for any queries about UPHARMORA - 1.0</p>
            </div>

            <div className="contact-content">
                {/* Contact Information Cards */}
                <div className={`contact-info-grid slide-in-left ${isVisible ? 'visible' : ''}`}>
                    {contactInfo.map((info, index) => (
                        <div key={index} className="contact-info-card">
                            <div className="info-icon">{info.icon}</div>
                            <h4>{info.title}</h4>
                            <div className="info-details">
                                {info.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </div>
                            {info.action && (
                                <a
                                    href={info.action}
                                    className="info-action"
                                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                                >
                                    {info.title === 'Email' && 'Send Email'}
                                    {info.title === 'Toll Free' && 'Call Now'}
                                    {info.title === 'Helpline' && 'Call Now'}
                                    {info.title === 'WhatsApp' && 'Chat Now'}
                                    {info.title === 'Address' && 'View on Map'}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Contact Section */}
            <div className="quick-contact">
                <h3>Quick Contact</h3>
                <p>For immediate assistance, reach out to us directly:</p>
                <div className="quick-contact-buttons">
                    <a href="mailto:confpharm@uniteduniversity.edu.in" className="quick-btn email">
                        <span className="btn-icon">📧</span>
                        Email Us
                    </a>
                    <a href="tel:+915322274443" className="quick-btn phone">
                        <span className="btn-icon">📞</span>
                        Call Us
                    </a>
                    <a href="https://wa.me/919876543210" className="quick-btn whatsapp" target="_blank" rel="noopener noreferrer">
                        <span className="btn-icon">💬</span>
                        WhatsApp
                    </a>
                </div>
            </div>

            {/* Conference Details */}
            <div className="conference-details">
                <h3>Conference Information</h3>
                <div className="details-grid">
                    <div className="detail-item">
                        <strong>Conference Name:</strong>
                        <span>UPHARMORA - 1.0</span>
                    </div>
                    <div className="detail-item">
                        <strong>Theme:</strong>
                        <span>"Fostering Innovation for a Healthier Tomorrow"</span>
                    </div>
                    <div className="detail-item">
                        <strong>Date:</strong>
                        <span>7 -8 November , 2025</span>
                    </div>
                    <div className="detail-item">
                        <strong>Venue:</strong>
                        <span>United University, Prayagraj</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
