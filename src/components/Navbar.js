// src/components/Navbar.js
import React from 'react';




const Navbar = () => {
    return (
      <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-button"><a href="#services">Services</a></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><a href="#technology">Technology</a></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><a href="#portfolio">Portfolio</a></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><a href="#case-studies">Case Studies</a></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><a href="#trending-solutions">Trending Solutions</a></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><a href="#career">Career</a></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><a href="#about-us">About Us</a></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><a href="#contact-us">Contact Us</a></button>
        </li>
        <li className="navbar-item">
          <button className="navbar-button"><a href="#Blog">Blog</a></button>
        </li>
      </ul>
    </nav>
    
    );
};

export default Navbar;
