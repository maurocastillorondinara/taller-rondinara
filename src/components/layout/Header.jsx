import React, { useState } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollPosition = useScrollPosition();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const headerClasses = `header ${scrollPosition > 50 ? 'header--scrolled' : ''}`;

    return (
        <header className={headerClasses}>
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        <h1 className="header__logo-text">
                            Taller <span className="text-red">Rondinara</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li>
                                <button onClick={() => handleNavClick('inicio')}>
                                    Inicio
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick('servicios')}>
                                    Servicios
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick('nosotros')}>
                                    Nosotros
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick('concesionarios')}>
                                    Concesionarios
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick('contacto')}>
                                    Contacto
                                </button>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="header__mobile-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'hamburger--open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav className={`header__mobile-nav ${isMobileMenuOpen ? 'header__mobile-nav--open' : ''}`}>
                    <ul className="header__mobile-nav-list">
                        <li>
                            <button onClick={() => handleNavClick('inicio')}>Inicio</button>
                        </li>
                        <li>
                            <button onClick={() => handleNavClick('servicios')}>
                                Servicios
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavClick('nosotros')}>
                                Nosotros
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavClick('concesionarios')}>
                                Concesionarios
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleNavClick('contacto')}>
                                Contacto
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
