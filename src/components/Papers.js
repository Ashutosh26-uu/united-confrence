import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Papers.css';

const Papers = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState('abstract');
  const [expandedGuideline, setExpandedGuideline] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    email: '',
    affiliation: '',
    abstract: '',
    keywords: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    } else if (formData.title.length < 10) {
      errors.title = 'Title must be at least 10 characters';
    }

    if (!formData.authors.trim()) {
      errors.authors = 'Author(s) name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.affiliation.trim()) {
      errors.affiliation = 'Affiliation is required';
    }

    if (!formData.abstract.trim()) {
      errors.abstract = 'Abstract is required';
    } else if (formData.abstract.length < 100) {
      errors.abstract = 'Abstract must be at least 100 characters';
    } else if (formData.abstract.length > 500) {
      errors.abstract = 'Abstract must not exceed 500 characters';
    }

    if (!formData.keywords.trim()) {
      errors.keywords = 'Keywords are required';
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

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setFormData({
        title: '',
        authors: '',
        email: '',
        affiliation: '',
        abstract: '',
        keywords: ''
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Enhanced download function with loading states
  const downloadTemplate = async (format, type) => {
    setIsDownloading(true);
    setDownloadSuccess(null);

    try {
      // Simulate download delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const link = document.createElement('a');
      link.href = `/templates/${type}_template.${format}`;
      link.download = `${type}_template.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadSuccess(`${type} ${format.toUpperCase()} template downloaded successfully!`);
      setTimeout(() => setDownloadSuccess(null), 3000);
    } catch (error) {
      console.error('Download error:', error);
      setDownloadSuccess('Download failed. Please try again.');
      setTimeout(() => setDownloadSuccess(null), 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  const toggleGuideline = (index) => {
    setExpandedGuideline(expandedGuideline === index ? null : index);
  };

  const guidelines = [
    {
      title: "Important Dates",
      content: [
        "Abstract Submission Deadline: September 30, 2025",
        "Full Paper Submission Deadline: October 15, 2025",
        "Notification of Acceptance: October 30, 2025",
        "Camera-Ready Submission: November 5, 2025",
        "Conference Dates: November 7-8, 2025"
      ]
    },
    {
      title: "Research Topics",
      content: [
        "Drug Discovery and Development",
        "Pharmaceutical Biotechnology",
        "Clinical Pharmacy and Therapeutics",
        "Pharmacokinetics and Pharmacodynamics",
        "Pharmaceutical Analysis and Quality Control",
        "Regulatory Affairs and Drug Safety",
        "Pharmaceutical Technology and Innovation",
        "Traditional and Herbal Medicine"
      ]
    },
    {
      title: "Review Process",
      content: [
        "All submissions undergo double-blind peer review",
        "Minimum of 2 reviewers per submission",
        "Review criteria: originality, methodology, significance, clarity",
        "Authors will receive detailed feedback",
        "Accepted papers will be published in conference proceedings"
      ]
    }
  ];

  const topics = [
    "Drug Discovery & Development",
    "Pharmaceutical Nanotechnology",
    "Clinical Pharmacy & Therapeutics",
    "Pharmacovigilance & Drug Safety",
    "Regulatory Affairs & Quality Assurance",
    "Phytopharmaceuticals & Natural Products",
    "Pharmaceutical Biotechnology",
    "Pharmacoeconomics & Health Outcomes",
    "Digital Health & AI in Pharmacy",
    "Personalized Medicine"
  ];

  return (
    <section id="papers" className="section papers" ref={ref}>
      <div className="papers-header">
        <h2 className={`fade-in ${isVisible ? 'visible' : ''}`}>Call for Papers</h2>
        <p className="papers-subtitle">Submit your research for UPHARMORA - 1.0</p>
      </div>

      {/* Download Success/Error Messages */}
      {downloadSuccess && (
        <div className={`download-message ${downloadSuccess.includes('failed') ? 'error' : 'success'}`}>
          {downloadSuccess}
        </div>
      )}

      {/* Submit Success Message */}
      {submitSuccess && (
        <div className="submit-success-message">
          🎉 Your submission has been received successfully! We'll contact you soon.
        </div>
      )}

      {/* Interactive Tabs */}
      <div className="submission-tabs">
        <button
          className={`tab-btn ${activeTab === 'abstract' ? 'active' : ''}`}
          onClick={() => setActiveTab('abstract')}
        >
          Abstract Submission
        </button>
        <button
          className={`tab-btn ${activeTab === 'paper' ? 'active' : ''}`}
          onClick={() => setActiveTab('paper')}
        >
          Full Paper Submission
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'abstract' && (
          <div className={`tab-panel slide-in-left ${isVisible ? 'visible' : ''}`}>
            <div className="submission-card">
              <div className="card-icon">📄</div>
              <h3>Abstract Submission</h3>
              <p>Submit your research abstract for consideration at UPHARMORA - 1.0. Abstracts should clearly present your research objectives, methodology, and key findings.</p>

              {/* Abstract Submission Form */}
              <form onSubmit={handleSubmit} className="submission-form">
                <div className="form-group">
                  <label htmlFor="title">Paper Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={formErrors.title ? 'error' : ''}
                    placeholder="Enter your paper title"
                  />
                  {formErrors.title && <span className="error-message">{formErrors.title}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="authors">Author(s) *</label>
                  <input
                    type="text"
                    id="authors"
                    name="authors"
                    value={formData.authors}
                    onChange={handleInputChange}
                    className={formErrors.authors ? 'error' : ''}
                    placeholder="Enter author names (separated by commas)"
                  />
                  {formErrors.authors && <span className="error-message">{formErrors.authors}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
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

                  <div className="form-group">
                    <label htmlFor="affiliation">Affiliation *</label>
                    <input
                      type="text"
                      id="affiliation"
                      name="affiliation"
                      value={formData.affiliation}
                      onChange={handleInputChange}
                      className={formErrors.affiliation ? 'error' : ''}
                      placeholder="Your institution/organization"
                    />
                    {formErrors.affiliation && <span className="error-message">{formErrors.affiliation}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="abstract">Abstract * (100-500 characters)</label>
                  <textarea
                    id="abstract"
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleInputChange}
                    className={formErrors.abstract ? 'error' : ''}
                    placeholder="Enter your research abstract..."
                    rows="6"
                  />
                  <div className="character-count">
                    {formData.abstract.length}/500 characters
                  </div>
                  {formErrors.abstract && <span className="error-message">{formErrors.abstract}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="keywords">Keywords *</label>
                  <input
                    type="text"
                    id="keywords"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleInputChange}
                    className={formErrors.keywords ? 'error' : ''}
                    placeholder="Enter keywords (separated by commas)"
                  />
                  {formErrors.keywords && <span className="error-message">{formErrors.keywords}</span>}
                </div>

                <button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    'Submit Abstract'
                  )}
                </button>
              </form>

              <div className="download-section">
                <h4>Download Templates:</h4>
                <div className="download-buttons">
                  <button
                    className="download-btn word"
                    onClick={() => downloadTemplate('word', 'abstract')}
                  >
                    <span className="btn-icon">📝</span>
                    Word Format
                  </button>
                  <button
                    className="download-btn pdf"
                    onClick={() => downloadTemplate('pdf', 'abstract')}
                  >
                    <span className="btn-icon">📋</span>
                    PDF Format
                  </button>
                </div>
              </div>

              <button className="submit-btn primary">Submit Abstract</button>
            </div>
          </div>
        )}

        {activeTab === 'paper' && (
          <div className={`tab-panel slide-in-right ${isVisible ? 'visible' : ''}`}>
            <div className="submission-card">
              <div className="card-icon">📚</div>
              <h3>Full Length Paper Submission</h3>
              <p>Submit complete research papers with detailed analysis, comprehensive results, and thorough discussion of findings.</p>

              <div className="requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>6-8 pages maximum (including references)</li>
                  <li>IEEE format strictly required</li>
                  <li>Original research with novel contributions</li>
                  <li>Comprehensive literature review</li>
                  <li>Statistical analysis where applicable</li>
                  <li>Ethical approval for clinical studies</li>
                </ul>
              </div>

              <div className="download-section">
                <h4>Download Templates:</h4>
                <div className="download-buttons">
                  <button
                    className="download-btn word"
                    onClick={() => downloadTemplate('word', 'paper')}
                  >
                    <span className="btn-icon">📝</span>
                    Word Format
                  </button>
                  <button
                    className="download-btn pdf"
                    onClick={() => downloadTemplate('pdf', 'paper')}
                  >
                    <span className="btn-icon">📋</span>
                    PDF Format
                  </button>
                </div>
              </div>

              <button className="submit-btn primary">Submit Full Paper</button>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Guidelines */}
      <div className="submission-guidelines">
        <h3>Submission Guidelines</h3>
        <div className="guidelines-grid">
          <div
            className={`guideline interactive ${expandedGuideline === 'dates' ? 'expanded' : ''}`}
            onClick={() => setExpandedGuideline(expandedGuideline === 'dates' ? null : 'dates')}
          >
            <div className="guideline-header">
              <h4>📅 Important Dates</h4>
              <span className="expand-icon">{expandedGuideline === 'dates' ? '−' : '+'}</span>
            </div>
            <div className="guideline-content">
              <div className="date-item">
                <span className="date-label">Abstract Deadline:</span>
                <span className="date-value">October 10, 2025</span>
              </div>
              <div className="date-item">
                <span className="date-label">Abstract Acceptance Notification:</span>
                <span className="date-value">October 18, 2025</span>
              </div>
              <div className="date-item">
                <span className="date-label">Confrence:</span>
                <span className="date-value">November 7 - 8, 2025</span>
              </div>
              <div className="date-item">
                <span className="date-label">Last Date of Registration:</span>
                <span className="date-value">October 15, 2025</span>
              </div>
            </div>
          </div>

          <div
            className={`guideline interactive ${expandedGuideline === 'topics' ? 'expanded' : ''}`}
            onClick={() => setExpandedGuideline(expandedGuideline === 'topics' ? null : 'topics')}
          >
            <div className="guideline-header">
              <h4>🔬 Research Topics</h4>
              <span className="expand-icon">{expandedGuideline === 'topics' ? '−' : '+'}</span>
            </div>
            <div className="guideline-content">
              <div className="topics-grid">
                {topics.map((topic, index) => (
                  <div key={index} className="topic-item">
                    <span className="topic-bullet">•</span>
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`guideline interactive ${expandedGuideline === 'review' ? 'expanded' : ''}`}
            onClick={() => setExpandedGuideline(expandedGuideline === 'review' ? null : 'review')}
          >
            <div className="guideline-header">
              <h4>⚖️ Review Process</h4>
              <span className="expand-icon">{expandedGuideline === 'review' ? '−' : '+'}</span>
            </div>
            <div className="guideline-content">
              <div className="review-steps">
                <div className="review-step">
                  <span className="step-number">1</span>
                  <span className="step-text">Initial Screening</span>
                </div>
                <div className="review-step">
                  <span className="step-number">2</span>
                  <span className="step-text">Double-Blind Peer Review</span>
                </div>
                <div className="review-step">
                  <span className="step-number">3</span>
                  <span className="step-text">Editorial Decision</span>
                </div>
                <div className="review-step">
                  <span className="step-number">4</span>
                  <span className="step-text">Author Notification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h3>Ready to Submit?</h3>
        <p>Join leading researchers and contribute to the future of pharmaceutical sciences</p>
        <div className="cta-buttons">
          <button className="cta-btn primary">Start Submission</button>
          <button className="cta-btn secondary">Contact Support</button>
        </div>
      </div>
    </section>
  );
};

export default Papers;