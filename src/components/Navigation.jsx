import { useEffect, useState } from 'react';

const Navigation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('landing');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Show nav after scrolling past landing
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 100);

            // Update active section based on scroll position
            const sections = ['landing', 'about', 'projects', 'case-studies', 'blogs', 'contact'];
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false); // Close menu on mobile after click
    };

    return (
        <>
            <div className="nav-fade-overlay"></div>
            <div className={`nav-wrapper ${isVisible ? 'visible' : ''}`}>
                <nav className={`glass-nav nav-main ${isMenuOpen ? 'menu-open' : ''}`}>
                    <div className="nav-container">
                        <button
                            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                            <a
                                href="#about"
                                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                            >
                                Projects
                            </a>
                            <a
                                href="#case-studies"
                                className={`nav-link ${activeSection === 'case-studies' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); }}
                            >
                                Case Studies
                            </a>
                            <a
                                href="#blogs"
                                className={`nav-link ${activeSection === 'blogs' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('blogs'); }}
                            >
                                Blogs
                            </a>
                            <a
                                href="#contact"
                                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>

                <div className="glass-nav nav-theme">
                    <div className="theme-switch">
                        <input
                            type="checkbox"
                            id="theme-toggle"
                            className="theme-toggle"
                            checked={isDarkMode}
                            onChange={toggleTheme}
                        />
                        <label htmlFor="theme-toggle" className="switch-label">
                            <svg className="theme-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                            <svg className="theme-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
