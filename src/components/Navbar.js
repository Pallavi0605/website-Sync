// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#services">Services</a></li>
        <li className="navbar-item"><a href="#technology">Technology</a></li>
        <li className="navbar-item"><a href="#portfolio">Portfolio</a></li>
        <li className="navbar-item"><a href="#case-studies">Case Studies</a></li>
        <li className="navbar-item"><a href="#trending-solutions">Trending Solutions</a></li>
        <li className="navbar-item"><a href="#career">Career</a></li>
        <li className="navbar-item"><a href="#about-us">About Us</a></li>
        <li className="navbar-item"><a href="#contact-us">Contact Us</a></li>
      </ul>
    </nav>
    );
};

export default Navbar;
