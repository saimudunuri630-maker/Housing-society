import React, { useState } from 'react';
import '../components_styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="nav-brand"
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <img
            src="/Images/housing_society.png"
            alt="Housing Society"
            className="navbar-logo-img"
          />
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Exact 4 links from screenshot */}
        <nav className={`nav-links-menu ${menuOpen ? 'mobile-open' : ''}`}>
          <a
            href="#home"
            className="nav-link-item"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            HOME
          </a>
          <a
            href="#about-b06"
            className="nav-link-item"
            onClick={(e) => scrollToSection(e, 'about-b06')}
          >
            B06 Tower
          </a>
          <a
            href="#floor-plans"
            className="nav-link-item"
            onClick={(e) => scrollToSection(e, 'floor-plans')}
          >
            FLOOR PLANS
          </a>
          <a
            href="#login"
            className="nav-link-item"
            onClick={(e) => scrollToSection(e, 'login')}
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;