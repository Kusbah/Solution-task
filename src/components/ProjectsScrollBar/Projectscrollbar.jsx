
import React from 'react';
import './Projectscrollbar.css';

import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.gif';
import logo9 from '../../assets/logo9.gif';
import logo10 from '../../assets/logo10.gif';

const projects = [
  { title: 'Altitude', subtitle: 'Ecommerce concepts', logo: logo1, video: 'https://framerusercontent.com/assets/2oWkJc1pCUOzvBUUkdx8Laiuxd0.mp4' },
  { title: 'Propeller', subtitle: 'A better way for everyday', logo: logo2, video: 'https://framerusercontent.com/assets/zOUq2FSvLWRxQVC4aZIyzZ6I.mp4' },
  { title: 'Correlated', subtitle: 'Tap into your customer data', logo: logo3, video: 'https://framerusercontent.com/assets/bvmd2yOI9sysPyNqLWH8r9ZNZqI.mp4' },
  { title: 'Norby', subtitle: 'Your AI data analyst', logo: logo4, video: 'https://framerusercontent.com/assets/bIbItBk7SEkLpuR2Yev99YSRXg.mp4' },
  { title: 'Tecton', subtitle: 'AI data engineering', logo: logo5, video: 'https://framerusercontent.com/assets/l4LJpojRh0zlBunr2WIbUIV2ls.mp4' },
  { title: 'Playmind', subtitle: 'Your gaming AI companion', logo: logo6, video: 'https://framerusercontent.com/assets/2oWkJc1pCUOzvBUUkdx8Laiuxd0.mp4' },
  { title: 'Aire', subtitle: 'A better way for everyday', logo: logo7, video: 'https://framerusercontent.com/assets/aoofKYrlWkJ4mNep1SL1VxZuYIw.mp4' },
  { title: 'Wealth Tracker', subtitle: 'Track your net worth', logo: logo8, video: 'https://framerusercontent.com/assets/l4LJpojRh0zlBunr2WIbUIV2ls.mp4' },
  { title: 'Three Notch Group', subtitle: 'Building the future', logo: logo9, video: 'https://framerusercontent.com/assets/aoofKYrlWkJ4mNep1SL1VxZuYIw.mp4' },
  { title: 'Momentify', subtitle: 'Unforgettable live music experiences', logo: logo10, video: 'https://framerusercontent.com/assets/2oWkJc1pCUOzvBUUkdx8Laiuxd0.mp4' },
];

const ProjectsScroll = () => {
  return (
    <div className="auto-scroll-wrapper">
      <div className="auto-scroll-content">
        <div className="projects-scroll">
          {projects.map((proj, i) => (
            <div className="project-card" key={i}>
              <div className="project-header">
                <img src={proj.logo} alt="Icon" className="project-icon" />
                <div className="project-text">
                  <h4 className="project-title">{proj.title}</h4>
                  <p className="project-subtitle">{proj.subtitle}</p>
                </div>
              </div>
              <video
                className="project-video"
                src={proj.video}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsScroll;
