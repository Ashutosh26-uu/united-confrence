import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { to: 'home', text: 'Home' },
        { to: 'prayagraj', text: 'About Prayagraj' },
        { to: 'key-areas', text: 'Key Areas' },
        { to: 'important-dates', text: 'Important Dates' },
        { to: 'Abstract', text: 'Call for Abstract ' },
        { to: 'registration', text: 'Registration' },
        { to: 'venue', text: 'Venue' },
        { to: 'speakers', text: 'Speakers' },
        { to: 'organizing-committee', text: 'Committee' },
        { to: 'sponsors', text: 'Sponsors' }
    ];
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
                        { label: 'Call for Abstract ', path: '/Abstract' },
                        { label: 'Submission Guidelines', path: '/submission/guidelines' },
                        { label: 'Important Dates', path: '/dates' },
                    ]
},
{
    id: 'venue',
        label: 'Venue',
            path: '/venue',
                icon: '📍',
        }
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

        return(
        <nav className = {`navbar ${isScrolled ? 'scrolled' : ''}`} ref = { navRef } >
    <div className="navbar-container">
        <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="navbar-logo"
        >
            UPHARMORA 1.0
        </ScrollLink>

        <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                    <ScrollLink
                        activeClass="active"
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="nav-links"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.text}
                    </ScrollLink>
                </li>
            ))}
        </ul>
    </div>

            {/* Search Modal */ }
    < dialog id = "search-modal" className = "search-modal" >
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
            </dialog >
        </>
    );
};

export default Navbar;
