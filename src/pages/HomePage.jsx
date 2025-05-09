import React from 'react';
import profile from '../assets/person.avif';
import logo from '../assets/logo.png';
import hapticGif from '../assets/Haptic.gif';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.gif';
import logo9 from '../assets/logo9.gif';
import logo10 from '../assets/logo10.gif';


import './HomePage.css';

const HomePage = () => {
  return (
    <div className='container'>
      {/* Intro */}
      <p className='line'>
  A{' '}
  <a href="https://x.com/olvhrs" target="_blank" rel="noopener noreferrer" className="profile-link">
    <img src={profile} alt="Profile" className="inline-profile" />
  </a>{' '}
  designer working
</p>

      <p className='line'>with startups globally.</p>
      <p className='line'>Currently steering the</p>
      <p className='line'>
        ship at{' '}
        <span className='haptic'>
          <img src={logo} alt='Haptic logo' className='logo' />
          <a
            href='/Haptic'
            target='_blank'
            rel='noopener noreferrer'
            className='haptic-name'
          >
            Haptic.<span className='dot'></span>
          </a>
        </span>
      </p>

      {/* Corner animation */}
      <img src={hapticGif} alt='spinning star' className='corner-star' />

      {/* Projects scroll bar */}
<div className="auto-scroll-wrapper">
  <div className="auto-scroll-content">
    <div className="projects-scroll">
  {/* First Card */}
  <div className="project-card">
    <div className="project-header">
      <img src={logo1} alt="Icon" className="project-icon" />
      <div className="project-text">
        <h4 className="project-title">Altitude</h4>
        <p className="project-subtitle">Ecommerce concepts</p>
      </div>
    </div>
    <video
      className="project-video"
      src="https://framerusercontent.com/assets/2oWkJc1pCUOzvBUUkdx8Laiuxd0.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>

  {/*Second Card*/}
  <div className="project-card">
    <div className="project-header">
      <img src={logo2} alt="Icon" className="project-icon" />
      <div className="project-text">
        <h4 className="project-title">Propeller</h4>
        <p className="project-subtitle">A better way for everyday</p>
      </div>
    </div>
    <video
      className="project-video"
      src="https://framerusercontent.com/assets/zOUq2FSvLWRxQVC4aZIyzZ6I.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
   {/* therd Card */}
     <div className="project-card">
    <div className="project-header">
      <img src={logo3} alt="Icon" className="project-icon" />
      <div className="project-text">
        <h4 className="project-title">Correlated</h4>
        <p className="project-subtitle">Tap into your customer data</p>
      </div>
    </div>
    <video
      className="project-video"
      src="https://framerusercontent.com/assets/bvmd2yOI9sysPyNqLWH8r9ZNZqI.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
    {/* forth Card */}
  <div className="project-card">
    <div className="project-header">
      <img src={logo4} alt="Icon" className="project-icon" />
      <div className="project-text">
        <h4 className="project-title">Norby</h4>
        <p className="project-subtitle">Your AI data analyst</p>
      </div>
    </div>
    <video
      className="project-video"
      src="https://framerusercontent.com/assets/bIbItBk7SEkLpuR2Yev99YSRXg.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
    {/* five Card */}
  <div className="project-card">
    <div className="project-header">
      <img src={logo5} alt="Icon" className="project-icon" />
      <div className="project-text">
        <h4 className="project-title">Tecton</h4>
        <p className="project-subtitle">AI data engineering</p>
      </div>
    </div>
    <video
      className="project-video"
      src="https://framerusercontent.com/assets/l4LJpojRh0zlBunr2WIbUIV2ls.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
      {/* six Card */}
  <div className="project-card">
    <div className="project-header">
      <img src={logo6} alt="Icon" className="project-icon" />
      <div className="project-text">
        <h4 className="project-title">Playmind</h4>
        <p className="project-subtitle">Your gaming AI companion</p>
      </div>
    </div>
    <video
      className="project-video"
      src="https://framerusercontent.com/assets/2oWkJc1pCUOzvBUUkdx8Laiuxd0.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
      {/* seven Card */}
  <div className="project-card">
    <div className="project-header">
      <img src={logo7} alt="Icon" className="project-icon" />
      <div className="project-text">
        <h4 className="project-title">Aire</h4>
        <p className="project-subtitle">A better way for everyday</p>
      </div>
    </div>
    <video
      className="project-video"
      src="https://framerusercontent.com/assets/aoofKYrlWkJ4mNep1SL1VxZuYIw.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
      {/* eigth Card */}
  <div className="project-card">
    <div className="project-header">
      <img src={logo8} alt="Icon" className="project-icon" />
      <div className="project-text">
        <h4 className="project-title">Wealth Tracker</h4>
        <p className="project-subtitle">Track your net worth</p>
      </div>
    </div>
    <video
      className="project-video"
      src="https://framerusercontent.com/assets/l4LJpojRh0zlBunr2WIbUIV2ls.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
      {/* nine Card */}
  <div className="project-card">
    <div className="project-header">
      <img src={logo9} alt="Icon" className="project-icon" />
      <div className="project-text">
        <h4 className="project-title">Three Notch Group</h4>
        <p className="project-subtitle">Building the future</p>
      </div>
    </div>
    <video
      className="project-video"
      src="https://framerusercontent.com/assets/aoofKYrlWkJ4mNep1SL1VxZuYIw.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
      {/* ten Card */}
  <div className="project-card">
    <div className="project-header">
      <img src={logo10} alt="Icon" className="project-icon" />
      <div className="project-text">
        <h4 className="project-title">Momentify</h4>
        <p className="project-subtitle">Unforgettable live music experiences</p>
      </div>
    </div>
    <video
      className="project-video"
      src="https://framerusercontent.com/assets/2oWkJc1pCUOzvBUUkdx8Laiuxd0.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
</div>
    
  </div>
</div>




{/*end*/}
    </div>
  );
};

export default HomePage;
