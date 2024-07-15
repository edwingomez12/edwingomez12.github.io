import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">

        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Experience</Link></li>
            <li><a href="https://drive.google.com/file/d/1kF_FK0N3_86Yb2D_ujZKn_c9qVK0bJtZ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
