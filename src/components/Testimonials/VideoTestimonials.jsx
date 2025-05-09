import React from 'react';
import './VideoTestimonials.css'; // Optional: for styling

import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/vidoe2.mp4';

const VideoTestimonials = () => {
  return (
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
  );
};

export default VideoTestimonials;
