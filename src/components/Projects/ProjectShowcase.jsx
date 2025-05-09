import React, { useState } from 'react';
import momentifyImg from '../../assets/momentify.png'; // use actual paths to your image files
import sparkImg from '../../assets/spark.png';
import googleImg from '../../assets/google.png';
import harvardImg from '../../assets/harvard.png';
import neonImg from '../../assets/google.png';
import norbyVideo from '../../assets/video1.mp4'; // make sure this video exists
import './ProjectShowcase.css';

const projects = [
  { name: 'Momentify', type: 'img', src: momentifyImg },
  { name: 'Norby', type: 'video', src: norbyVideo },
  { name: 'Spark', type: 'img', src: sparkImg },
  { name: 'Google', type: 'img', src: googleImg },
  { name: 'Harvard', type: 'img', src: harvardImg },
  { name: 'Neon Horizons', type: 'img', src: neonImg },
];

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="projects-section">
      <p className="projects-label">● Partners + Projects</p>
      <div className="projects-layout">
        {/* Left Side - Titles */}
        <ul className="projects-list">
          {projects.map((project, index) => (
            <li
              key={project.name}
              className={index === activeIndex ? 'active' : ''}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {project.name}
            </li>
          ))}
        </ul>

        {/* Center - Image or Video */}
        <div className="projects-image">
  {projects[activeIndex].type === 'img' ? (
    <img
      src={projects[activeIndex].src}
      alt={projects[activeIndex].name}
    />
  ) : (
    <video
      src={projects[activeIndex].src}
      autoPlay
      loop
      muted
      playsInline
    />
  )}
</div>

        {/* Right Side - Metadata */}
        <ul className="projects-meta">
          <li><span>Brand, Web, Product</span><span>2024</span></li>
          <li><span>Motion</span><span>2025</span></li>
          <li><span>Brand, Web, Product</span><span>2024</span></li>
          <li><span>Web, Product</span><span>2024</span></li>
          <li><span>Brand, Web, Product</span><span>2025</span></li>
          <li><span>Brand, Product</span><span>2025</span></li>
        </ul>
      </div>
    </section>
  );
}
