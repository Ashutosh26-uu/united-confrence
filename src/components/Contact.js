import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Form validation
    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }

        return errors;
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);
        setFormErrors({});

        // Create mailto link with form data
        const subject = encodeURIComponent(`UPHARMORA Conference: ${formData.subject}`);
        const body = encodeURIComponent(
            `Dear UPHARMORA Team,\n\n` +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Subject: ${formData.subject}\n\n` +
            `Message:\n${formData.message}\n\n` +
            `Best regards,\n${formData.name}`
        );

        const mailtoLink = `mailto:confpharm@uniteduniversity.edu.in?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show instruction message
        setTimeout(() => {
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);

            setTimeout(() => setSubmitSuccess(false), 10000);
        }, 1000);
    };

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
            icon: '📞',
            title: 'Helpline',
            details: ['6390166660'],
            action: 'tel:6390166660'
        },
        {
            icon: '💬',
            title: 'WhatsApp',
            details: ['8953167208', '6389209921', '9696286985'],
            action: 'https://wa.me/918953167208'
        },
        {
            icon: '📍',
            title: 'Address',
            details: ['United University', 'Prayagraj, Uttar Pradesh', 'India - 211010'],
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

            {/* Submit Success Message */}
            {submitSuccess && (
                <div className="submit-success-message">
                    🎉 Your message has been sent successfully! We'll get back to you soon.
                </div>
            )}

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

                {/* Contact Form */}
                <div className={`contact-form-container slide-in-right ${isVisible ? 'visible' : ''}`}>
                    <div className="form-header">
                        <h3>Send us a Message</h3>
                        <p>Have questions about the conference? We're here to help!</p>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={formErrors.name ? 'error' : ''}
                                    placeholder="Enter your full name"
                                />
                                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={formErrors.email ? 'error' : ''}
                                    placeholder="your.email@example.com"
                                />
                                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className={formErrors.subject ? 'error' : ''}
                                placeholder="What is this regarding?"
                            />
                            {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={formErrors.message ? 'error' : ''}
                                placeholder="Type your message here..."
                                rows="6"
                            />
                            {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <span className="btn-icon">📤</span>
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
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
