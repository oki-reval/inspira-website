import React, { useState } from 'react';
import './Header.css'; // Import CSS yang sudah disesuaikan

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(!menuOpen); // Menutup menu ketika tombol "Close" diklik
  };

  return (
    <header className="header">
      <div className="nav">
        <div className="logo">
          <h1>Inspira</h1>
        </div>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            { menuOpen &&
            <li className="close-menu" onClick={closeMenu}>
            <button className="close-button">Close</button>
          </li>
        }
          </ul>
        </nav>
        <button className="cta-button">Get Started</button>
        <div className="burger" onClick={toggleMenu}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
