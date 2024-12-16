import React, { useState } from 'react';
import './Header.css'; // Import CSS yang sudah disesuaikan
import logo from '../../assets/logo_inspira.png'

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
        <img src={logo} alt="Logo" className='logo' />
        <nav>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">About Us</a></li>
            <li><a href="#about">Portofolio</a></li>
            <li><a href="#contact">Activity</a></li>
            <li><a href="#contact">Our Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            { menuOpen &&
            <li className="close-menu" onClick={closeMenu}>
            <button className="close-button">Close</button>
          </li>
        }
          </ul>
        </nav>
        <button className="cta-button">Login | Register</button>
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
