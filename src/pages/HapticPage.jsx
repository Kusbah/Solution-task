import React, { useState } from 'react';

import './HapticPage.css';
import logo from '../assets/Animationlogo.gif';
import hapticLogo from '../assets/Hapticlogo.gif';
import pic1 from '../assets/pic.avif';
import pic2 from '../assets/pic2.avif';
import pic3 from '../assets/pic3.avif';
import logo1 from '../assets/logo.png';
import logo2 from '../assets/logo1.png'
import logo3 from '../assets/logo2.png';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/vidoe2.mp4';
import companylogo1 from '../assets/companylogo1.svg';
import companylogo2 from '../assets/companylogo2.svg';
import companylogo3 from '../assets/companylogo3.svg';
import companylogo4 from '../assets/companylogo4.svg';
import companylogo5 from '../assets/companylogo5.svg';
import companylogo6 from '../assets/companylogo6.svg';
import companylogo7 from '../assets/companylogo7.svg';
import companylogo8 from '../assets/companylogo8.svg';
import companylogo9 from '../assets/companylogo9.svg';
import companylogo10 from '../assets/companylogo10.svg';


import ProjectShowcase from './ProjectShowcase';

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
{/*video */}
<section className="video-testimonials-section">
  <div className="video-row">
    <div className="video-block">
      <video src={video1} autoPlay loop muted playsInline />
      <div className="testimonial-meta">
        <img src={logo1} alt="Powerups logo" className="testimonial-logo" />
        <div>
          <div className="testimonial-name">Danny Quick</div>
          <div className="testimonial-role">Founder, Powerups</div>
        </div>
      </div>
    </div>

    <div className="video-block">
      <video src={video2} autoPlay loop muted playsInline />
      <div className="testimonial-meta">
        <img src={logo2} alt="Apollo logo" className="testimonial-logo" />
        <div>
          <div className="testimonial-name">Adam McIntee</div>
          <div className="testimonial-role">Co-Founder, Apollo</div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="logo-bar-section">
  <div className="logo-bar-container">
    <img src={companylogo1} alt="Logo 1" />
    <img src={companylogo2} alt="Logo 1" />
    <img src={companylogo3} alt="Logo 1" />
    <img src={companylogo4} alt="Logo 1" />
    <img src={companylogo5} alt="Logo 1" />
    <img src={companylogo6} alt="Logo 1" />
    <img src={companylogo7} alt="Logo 1" />
    <img src={companylogo8} alt="Logo 1" />
    <img src={companylogo9} alt="Logo 1" />
    <img src={companylogo10} alt="Logo 1" />
    <img src={companylogo1} alt="Logo 1" />
    <img src={companylogo2} alt="Logo 1" />
    <img src={companylogo3} alt="Logo 1" />
    <img src={companylogo4} alt="Logo 1" />
    <img src={companylogo5} alt="Logo 1" />
    <img src={companylogo6} alt="Logo 1" />
    <img src={companylogo7} alt="Logo 1" />
    <img src={companylogo8} alt="Logo 1" />
    <img src={companylogo9} alt="Logo 1" />
    <img src={companylogo10} alt="Logo 1" />
  </div>
</section>
<ProjectShowcase />




    </>
  );
};

export default HapticPage;
