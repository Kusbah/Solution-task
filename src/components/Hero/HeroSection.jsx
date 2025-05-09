import React, { useState } from 'react';
import './HeroSection.css';

import logo from '../../assets/Animationlogo.gif';
import hapticLogo from '../../assets/Hapticlogo.gif';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero-section">
      <div className="menu-bar">
        {menuOpen && (
          <div className="menu-items">
            <button className="nav-pill">Home</button>
            <button className="nav-pill">Work</button>
            <button className="nav-pill">Pricing</button>
            <button className="nav-pill">Careers</button>
          </div>
        )}
        <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
        </div>
      </div>

      <div className="hero-content">
        <h1 className="haptic-title">Haptic</h1>
        <h2 className="hero-text">
          We help <img src={logo} alt="wave" className="inline-icon" /> ambitious
          <br />
          teams turn bold visions <br />
          into <span className="icon-text">🞅</span> lasting impact.
        </h2>

        <div className="hiring-card">
          <img src={hapticLogo} alt="logo" className="hiring-logo" />
          <div className="hiring-info">
            <span className="hiring-title">Hiring</span>
            <span className="hiring-role">Senior Designer</span>
          </div>
          <div className="hiring-plus">+</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
