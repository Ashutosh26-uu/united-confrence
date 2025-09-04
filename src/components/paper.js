import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './paper.css';

const Papers = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [activeTab, setActiveTab] = useState('oral');
    const [expandedSection, setExpandedSection] = useState(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(null);

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

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <section id="papers" className="section papers" ref={ref}>
            <div className="papers-header">
                <h2 className={`fade-in ${isVisible ? 'visible' : ''}`}>Abstract/Full length Paper</h2>
                <p className="papers-subtitle">Submit your research work for UPHARMORA - 1.0</p>
            </div>

            {/* Download Success/Error Messages */}
            {downloadSuccess && (
                <div className={`download-message ${downloadSuccess.includes('failed') ? 'error' : 'success'}`}>
                    {downloadSuccess}
                </div>
            )}

            {/* Interactive Tabs */}
            <div className="submission-tabs">
                <button
                    className={`tab-btn ${activeTab === 'oral' ? 'active' : ''}`}
                    onClick={() => setActiveTab('oral')}
                >
                    <span className="tab-icon">🎤</span>
                    Oral Presentation
                </button>
                <button
                    className={`tab-btn ${activeTab === 'poster' ? 'active' : ''}`}
                    onClick={() => setActiveTab('poster')}
                >
                    <span className="tab-icon">📋</span>
                    Poster Presentation
                </button>
                <button
                    className={`tab-btn ${activeTab === 'paper' ? 'active' : ''}`}
                    onClick={() => setActiveTab('paper')}
                >
                    <span className="tab-icon">📚</span>
                    Full-Length Paper
                </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {/* Oral Presentation Guidelines */}
                {activeTab === 'oral' && (
                    <div className={`tab-panel slide-in-left ${isVisible ? 'visible' : ''}`}>
                        <div className="submission-card">
                            <div className="card-header">
                                <div className="card-icon">🎤</div>
                                <h3>Oral Presentation Guidelines</h3>
                                <p>Present your research findings in an engaging 8-10 minute presentation</p>
                            </div>

                            <div className="guidelines-grid">
                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">⏱️</span>
                                        <h4>Duration</h4>
                                    </div>
                                    <p>Each presenter will have <strong>8-10 minutes</strong> for the presentation, followed by <strong>2-3 minutes</strong> of Q&A.</p>
                                </div>

                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">💻</span>
                                        <h4>Presentation Format</h4>
                                    </div>
                                    <p>Prepare your presentation in <strong>PowerPoint (.ppt/.pptx)</strong> format. Use clear fonts (minimum size 20pt) and high-contrast colors for optimal readability.</p>
                                </div>

                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">📝</span>
                                        <h4>Include</h4>
                                    </div>
                                    <p>Title Slide, Introduction, Objectives, Methodology, Results, Conclusion, and References.</p>
                                </div>

                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">📤</span>
                                        <h4>Submission</h4>
                                    </div>
                                    <p>Submit or mail your final presentation at least <strong>one week before</strong> your scheduled session. Bring a backup copy on a <strong>USB drive</strong>.</p>
                                </div>

                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">🌐</span>
                                        <h4>Language</h4>
                                    </div>
                                    <p>All presentations must be delivered in <strong>English</strong>.</p>
                                </div>

                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">⚡</span>
                                        <h4>Time Management</h4>
                                    </div>
                                    <p>Strict adherence to time is required. A warning bell will be rung at the <strong>8-minute mark</strong>.</p>
                                </div>

                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">❓</span>
                                        <h4>Q&A</h4>
                                    </div>
                                    <p>Be prepared to answer questions from judges and audience members.</p>
                                </div>

                                <div className="guideline-item full-width">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">🏆</span>
                                        <h4>Judging Criteria</h4>
                                    </div>
                                    <div className="criteria-list">
                                        <span className="criteria-item">Scientific content</span>
                                        <span className="criteria-item">Clarity and flow of presentation</span>
                                        <span className="criteria-item">Innovation/originality</span>
                                        <span className="criteria-item">Audience engagement</span>
                                        <span className="criteria-item">Time management</span>
                                    </div>
                                </div>
                            </div>

                            <div className="download-section">
                                <h4>Download Templates:</h4>
                                <div className="download-buttons">
                                    <button
                                        className="download-btn ppt"
                                        onClick={() => downloadTemplate('pptx', 'oral_presentation')}
                                        disabled={isDownloading}
                                    >
                                        <span className="btn-icon">📊</span>
                                        PowerPoint Template
                                    </button>
                                    <button
                                        className="download-btn pdf"
                                        onClick={() => downloadTemplate('pdf', 'oral_guidelines')}
                                        disabled={isDownloading}
                                    >
                                        <span className="btn-icon">📋</span>
                                        Guidelines PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Poster Presentation Guidelines */}
                {activeTab === 'poster' && (
                    <div className={`tab-panel slide-in-center ${isVisible ? 'visible' : ''}`}>
                        <div className="submission-card">
                            <div className="card-header">
                                <div className="card-icon">📋</div>
                                <h3>Poster Presentation Guidelines</h3>
                                <p>Create an impactful visual presentation of your research</p>
                            </div>

                            <div className="guidelines-grid">
                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">📐</span>
                                        <h4>Poster Size</h4>
                                    </div>
                                    <p>Posters must be in <strong>portrait orientation</strong>, with dimensions of <strong>3 feet (width) × 4 feet (height)</strong>.</p>
                                </div>

                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">🎨</span>
                                        <h4>Content Layout</h4>
                                    </div>
                                    <p>Title (with authors and affiliations), Introduction/Objectives, Materials and Methods, Results (with figures/tables), Conclusion, References & Acknowledgements (if any).</p>
                                </div>

                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">💡</span>
                                        <h4>Design Tips</h4>
                                    </div>
                                    <p>Use large, readable fonts. Use bullet points for clarity. Graphs and images should be clear and labelled.</p>
                                </div>

                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">👥</span>
                                        <h4>Presentation</h4>
                                    </div>
                                    <p>Authors must be present during the <strong>assigned poster session</strong> to explain and discuss their work. Posters must be mounted <strong>1 hour before</strong> the session and removed after the session ends.</p>
                                </div>

                                <div className="guideline-item">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">🛠️</span>
                                        <h4>Materials</h4>
                                    </div>
                                    <p>Posters must be printed on <strong>flex</strong>. Double-sided tape or pins will be provided.</p>
                                </div>

                                <div className="guideline-item full-width">
                                    <div className="guideline-header">
                                        <span className="guideline-icon">🏆</span>
                                        <h4>Judging Criteria</h4>
                                    </div>
                                    <div className="criteria-list">
                                        <span className="criteria-item">Visual appeal and organization</span>
                                        <span className="criteria-item">Scientific relevance and originality</span>
                                        <span className="criteria-item">Clarity of content</span>
                                        <span className="criteria-item">Presenter's explanation and interaction</span>
                                    </div>
                                </div>
                            </div>

                            <div className="download-section">
                                <h4>Download Templates:</h4>
                                <div className="download-buttons">
                                    <button
                                        className="download-btn design"
                                        onClick={() => downloadTemplate('psd', 'poster_template')}
                                        disabled={isDownloading}
                                    >
                                        <span className="btn-icon">🎨</span>
                                        Design Template
                                    </button>
                                    <button
                                        className="download-btn pdf"
                                        onClick={() => downloadTemplate('pdf', 'poster_guidelines')}
                                        disabled={isDownloading}
                                    >
                                        <span className="btn-icon">📋</span>
                                        Guidelines PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Full-Length Paper Guidelines */}
                {activeTab === 'paper' && (
                    <div className={`tab-panel slide-in-right ${isVisible ? 'visible' : ''}`}>
                        <div className="submission-card">
                            <div className="card-header">
                                <div className="card-icon">📚</div>
                                <h3>Full-Length Paper Submission</h3>
                                <p>Submit comprehensive research papers for peer review and publication</p>
                            </div>

                            {/* Submission Requirements */}
                            <div className="expandable-section">
                                <div
                                    className={`section-header ${expandedSection === 'requirements' ? 'expanded' : ''}`}
                                    onClick={() => toggleSection('requirements')}
                                >
                                    <h4>📋 Submission Requirements</h4>
                                    <span className="expand-icon">{expandedSection === 'requirements' ? '−' : '+'}</span>
                                </div>
                                {expandedSection === 'requirements' && (
                                    <div className="section-content">
                                        <div className="requirement-item">
                                            <strong>Originality:</strong> Submitted papers must be original, unpublished, and not under consideration elsewhere.
                                        </div>
                                        <div className="requirement-item">
                                            <strong>Authorship:</strong> All listed authors must have made a significant contribution to the work. The corresponding author is responsible for ensuring ethical integrity and proper submission.
                                        </div>
                                        <div className="requirement-item">
                                            <strong>Submission Format:</strong> File format: Microsoft Word (.doc or .docx), Font: Times New Roman, size 12 pt, Line spacing: 1.5, Margins: 1 inch on all sides, Page limit: 6 to 10 pages, including figures and references.
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Manuscript Structure */}
                            <div className="expandable-section">
                                <div
                                    className={`section-header ${expandedSection === 'structure' ? 'expanded' : ''}`}
                                    onClick={() => toggleSection('structure')}
                                >
                                    <h4>📄 Structure of the Manuscript</h4>
                                    <span className="expand-icon">{expandedSection === 'structure' ? '−' : '+'}</span>
                                </div>
                                {expandedSection === 'structure' && (
                                    <div className="section-content">
                                        <div className="structure-item">
                                            <strong>Title Page:</strong> Title of the paper (Bold, Title Case), Full names of authors with affiliations and email of corresponding author, Keywords (4–6 words), Abstract (200–300 words).
                                        </div>
                                        <div className="structure-item">
                                            <strong>Main Text:</strong> Introduction, Materials and Methods, Results and Discussion, Conclusion, Acknowledgements (if any), References (APA or Vancouver style).
                                        </div>
                                        <div className="structure-item">
                                            <strong>Figures & Tables:</strong> Should be clear, numbered, and placed appropriately within the text. Captions must be provided below figures and above tables.
                                        </div>
                                        <div className="structure-item">
                                            <strong>References:</strong> Use standard formats: Vancouver. Ensure consistency and completeness.
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Additional Notes */}
                            <div className="expandable-section">
                                <div
                                    className={`section-header ${expandedSection === 'notes' ? 'expanded' : ''}`}
                                    onClick={() => toggleSection('notes')}
                                >
                                    <h4>📝 Additional Notes</h4>
                                    <span className="expand-icon">{expandedSection === 'notes' ? '−' : '+'}</span>
                                </div>
                                {expandedSection === 'notes' && (
                                    <div className="section-content">
                                        <div className="note-item">
                                            <span className="note-icon">🔍</span>
                                            All papers will undergo a <strong>peer-review</strong> process by the Scientific Review Committee.
                                        </div>
                                        <div className="note-item">
                                            <span className="note-icon">📖</span>
                                            Selected high-quality papers may be published in a <strong>conference proceeding with an ISBN</strong> or in <strong>partner journals</strong> (subject to further review).
                                        </div>
                                        <div className="note-item">
                                            <span className="note-icon">⚠️</span>
                                            <strong>Plagiarism above 10%</strong> will result in rejection. Authors must ensure ethical writing and proper citation.
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Submission Process */}
                            <div className="submission-process">
                                <h4>📤 Submission Process</h4>
                                <div className="process-info">
                                    <div className="contact-info">
                                        <span className="contact-label">Submit your full-length paper via Google Form:</span>
                                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScvH04Y3iyrnwGMggbddQUbYPLB1GsY42edWF0d9DVzQvLhmQ/viewform?usp=preview" target="_blank" rel="noopener noreferrer" className="form-link">
                                            Full-Length Paper Submission Form
                                        </a>
                                    </div>
                                    <div className="deadline-info">
                                        <span className="deadline-label">Deadline for full-length paper submission:</span>
                                        <span className="deadline-date">20/10/2025</span>
                                    </div>
                                </div>
                            </div>

                            <div className="download-section">
                                <h4>Download Templates:</h4>
                                <div className="download-buttons">
                                    <button
                                        className="download-btn word"
                                        onClick={() => downloadTemplate('docx', 'paper_template')}
                                        disabled={isDownloading}
                                    >
                                        <span className="btn-icon">📝</span>
                                        Word Template
                                    </button>
                                    <button
                                        className="download-btn pdf"
                                        onClick={() => downloadTemplate('pdf', 'paper_guidelines')}
                                        disabled={isDownloading}
                                    >
                                        <span className="btn-icon">📋</span>
                                        Guidelines PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Call to Action */}
            <div className="cta-section">
                <h3>Ready to Submit?</h3>
                <p>Join leading researchers and contribute to the future of pharmaceutical sciences</p>
                <div className="cta-buttons">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScvH04Y3iyrnwGMggbddQUbYPLB1GsY42edWF0d9DVzQvLhmQ/viewform?usp=preview" target="_blank" rel="noopener noreferrer" className="cta-btn primary">
                        Submit Your Work
                    </a>
                    <button className="cta-btn secondary">Contact Support</button>
                </div>
            </div>
        </section>
    );
};

export default Papers;
