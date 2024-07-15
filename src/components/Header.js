import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="brand">
          <Link to="/">Edwin Gomez</Link>
        </div>
        <div className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Experience</Link></li>
            <li><a href="https://drive.google.com/file/d/1kF_FK0N3_86Yb2D_ujZKn_c9qVK0bJtZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Resume</a></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
