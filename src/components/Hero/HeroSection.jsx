import React, { useState } from 'react';
import './HeroSection.css';

import logo from '../../assets/Animationlogo.gif';
import HiringCard from './HiringCard';
import JobModal from './JobModal';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [jobOpen, setJobOpen] = useState(false);

  const handleHiringClick = () => {
    setJobOpen(true);
  };

  return (
    <section className="hero-section">
      {/* Menu Items */}
      {menuOpen && (
        <div className="menu-items">
          <button className="nav-pill">Home</button>
          <button className="nav-pill">Work</button>
          <button className="nav-pill">Pricing</button>
          <button className="nav-pill">Careers</button>
        </div>
      )}

      {/* Fixed Burger Icon */}
      <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
      </div>

      {/* Hero Text Content */}
      <div className="hero-content">
        <h1 className="haptic-title">Haptic</h1>
        <h2 className="hero-text">
          We help <img src={logo} alt="wave" className="inline-icon" /> ambitious
          <br />
          teams turn bold visions <br />
          into <span className="icon-text">🞅</span> lasting impact.
        </h2>

        <HiringCard onClick={handleHiringClick} />
      </div>

      <JobModal isOpen={jobOpen} onClose={() => setJobOpen(false)} />
    </section>
  );
};

export default HeroSection;
