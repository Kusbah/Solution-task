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
import ProjectsScroll from '../components/ProjectsScrollBar/Projectscrollbar';


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
      <ProjectsScroll />
{/*end*/}
    </div>
  );
};

export default HomePage;
