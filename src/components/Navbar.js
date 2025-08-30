import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaBell, FaSearch, FaPaperPlane, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
        // Set active tab based on current route
        const path = location.pathname.split('/')[1];
        setActiveTab(path || 'home');
    }, [location]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'unset' : 'hidden';
    };

    // Navigation tabs with dropdowns
    const navTabs = [
        {
            id: 'home',
            label: 'Home',
            path: '/',
            icon: '🏠',
        },
        {
            id: 'about',
            label: 'About',
            path: '/about',
            icon: 'ℹ️',
            dropdown: [
                { label: 'About Conference', path: '/about/conference' },
                { label: 'Organizing Committee', path: '/about/committee' },
                { label: 'Important Dates', path: '/dates' },
            ]
        },
        {
            id: 'program',
            label: 'Program',
            path: '/program',
            icon: '📅',
            dropdown: [
                { label: 'Schedule', path: '/program/schedule' },
                { label: 'Keynote Speakers', path: '/speakers' },
                { label: 'Workshops', path: '/program/workshops' },
            ]
        },
        {
            id: 'submission',
            label: 'Submission',
            path: '/submission',
            icon: '📝',
            dropdown: [
                { label: 'Call for Papers', path: '/papers' },
                { label: 'Submission Guidelines', path: '/submission/guidelines' },
                { label: 'Important Dates', path: '/dates' },
            ]
        },
        {
            id: 'venue',
            label: 'Venue',
            path: '/venue',
            icon: '📍',
        },
        {
            id: 'sponsors',
            label: 'Sponsors',
            path: '/sponsors',
            icon: '🤝',
        },
    ];

    // Action buttons
    const actionButtons = [
        {
            label: 'Register Now',
            icon: <FaUser className="mr-2" />,
            onClick: () => navigate('/registration'),
            variant: 'primary'
        },
        {
            label: 'Submit Paper',
            icon: <FaPaperPlane className="mr-2" />,
            onClick: () => navigate('/papers'),
            variant: 'secondary'
        }
    ];

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__container">
                    {/* Logo */}
                    <div className="navbar__logo">
                        <Link to="/" className="logo-link">
                            <img
                                src="/images/logo.png"
                                alt="Conference Logo"
                                className="logo-img"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/50x50?text=LOGO';
                                }}
                            />
                            <div className="logo-text">
                                <span className="logo-title">ICRTAC 2024</span>
                                <span className="logo-subtitle">United University</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar__desktop">
                        <ul className="nav-tabs">
                            {navTabs.map((tab) => (
                                <li
                                    key={tab.id}
                                    className={`nav-tab ${activeTab === tab.id ? 'active' : ''} ${tab.dropdown ? 'has-dropdown' : ''}`}
                                    onMouseEnter={() => tab.dropdown && setActiveTab(tab.id)}
                                    onMouseLeave={() => tab.dropdown && activeTab === tab.id && setActiveTab('')}
                                >
                                    <Link
                                        to={tab.path}
                                        className="nav-tab-link"
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <span className="nav-tab-icon">{tab.icon}</span>
                                        <span className="nav-tab-label">{tab.label}</span>
                                        {tab.dropdown && <FaChevronDown className="dropdown-arrow" />}
                                    </Link>

                                    {tab.dropdown && (
                                        <div className="dropdown-menu">
                                            {tab.dropdown.map((item) => (
                                                <Link
                                                    key={item.path}
                                                    to={item.path}
                                                    className="dropdown-item"
                                                    onClick={() => setActiveTab(tab.id)}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Action Buttons */}
                        <div className="nav-buttons">
                            <button
                                className="nav-icon-button"
                                onClick={() => navigate('/notifications')}
                                aria-label="Notifications"
                            >
                                <FaBell className="nav-icon" />
                                <span className="notification-badge">3</span>
                            </button>

                            <button
                                className="nav-icon-button"
                                onClick={() => document.getElementById('search-modal')?.showModal()}
                                aria-label="Search"
                            >
                                <FaSearch className="nav-icon" />
                            </button>

                            {actionButtons.map((button, index) => (
                                <button
                                    key={index}
                                    className={`nav-button ${button.variant === 'secondary' ? 'secondary' : ''} ${button.variant === 'tertiary' ? 'tertiary' : ''}`}
                                    onClick={button.onClick}
                                >
                                    {button.icon}
                                    {button.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`navbar__toggle ${isOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span className="toggle-line"></span>
                        <span className="toggle-line"></span>
                        <span className="toggle-line"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-hidden="true"
            ></div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile ${isOpen ? 'active' : ''}`}>
                <div className="mobile-buttons">
                    {actionButtons.map((button, index) => (
                        <button
                            key={`mobile-btn-${index}`}
                            className={`nav-button ${button.variant === 'secondary' ? 'secondary' : ''} ${button.variant === 'tertiary' ? 'tertiary' : ''}`}
                            onClick={() => {
                                button.onClick();
                                toggleMenu();
                            }}
                        >
                            {button.icon}
                            {button.label}
                        </button>
                    ))}
                </div>
                <ul className="mobile-links">
                    {navTabs.map((tab) => (
                        <li key={`mobile-${tab.id}`} className="mobile-tab">
                            <Link
                                to={tab.path}
                                className={`mobile-link ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    toggleMenu();
                                }}
                            >
                                <span className="mobile-tab-icon">{tab.icon}</span>
                                {tab.label}
                                {tab.dropdown && <FaChevronDown className="mobile-dropdown-arrow" />}
                            </Link>

                            {tab.dropdown && (
                                <div className="mobile-dropdown">
                                    {tab.dropdown.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="mobile-dropdown-item"
                                            onClick={() => {
                                                setActiveTab(tab.id);
                                                toggleMenu();
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Search Modal */}
            <dialog id="search-modal" className="search-modal">
                <div className="search-container">
                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search conference..."
                            className="search-input"
                            autoFocus
                        />
                        <button
                            className="close-search"
                            onClick={() => document.getElementById('search-modal')?.close()}
                            aria-label="Close search"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="search-suggestions">
                        <p>Popular searches: registration, schedule, speakers, venue</p>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Navbar;
