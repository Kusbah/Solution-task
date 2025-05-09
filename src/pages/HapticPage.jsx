import React, { useState } from 'react';
import './HapticPage.css';
import logo from '../assets/Animationlogo.gif';
import hapticLogo from '../assets/Hapticlogo.gif';
import pic1 from '../assets/pic.avif';
import pic2 from '../assets/pic2.avif';
import pic3 from '../assets/pic3.avif';
import logo1 from '../assets/logo.png'
import logo2 from '../assets/logo1.png'
import logo3 from '../assets/logo2.png'

const HapticPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Section 1: Hero */}
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

      {/* Section 2: Cards Row */}
      <section className="cards-section">
  <div className="cards-row">
    {/* Card 1 */}
    <div className="image-wrapper">
      <img src={pic1} alt="Preview 1" />
      <div className="card-info">
        <img src={logo1} alt="Harvard Logo" className="info-icon" />
        <div className="info-text">
          <strong>Harvard</strong>
          <p>Empowering youth with neuroscience</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div   className="image-wrapper">
      <img src={pic2} alt="Preview 2"   style={{
    width: '1480px',
    height: '1040px',
  }}/>
      <div className="card-info">
        <img src={logo2} alt="Neon Horizons Logo" className="info-icon" />
        <div className="info-text">
          <strong>Neon Horizons</strong>
          <p>Welcome to the cyberscape</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="image-wrapper">
      <img src={pic3} alt="Preview 3" />
      <div className="card-info">
        <img src={logo3} alt="Spark Logo" className="info-icon" />
        <div className="info-text">
          <strong>Spark</strong>
          <p>Blockchain for commerce</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="pattern-strip">
  {/* This is just a decorative animated section */}
</section>
<section className="why-haptic-section">

  <div className="why-haptic-wrapper">
    <div className="why-haptic-label">● Why Haptic</div>
    <h2 className="why-haptic-heading">
      Startups come to us when<br />
      they need a team that can<br />
      deliver real results.
    </h2>
  </div>
</section>


    </>
  );
};

export default HapticPage;
