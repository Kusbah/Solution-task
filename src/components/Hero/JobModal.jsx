import React from 'react';
import './JobModal.css';
import artwork from '../../assets/video3.mp4'; // Adjust to your actual file name

const JobModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="job-modal-overlay" onClick={onClose}>
      <div className="job-modal" onClick={(e) => e.stopPropagation()}>
        <button className="job-close" onClick={onClose}>×</button>
        
<div className="job-header">
  <div className="job-title-group">
    <p className="hiring-title">Hiring</p>
    <h2 className="hiring-role">Senior Designer</h2>
  </div>
  <button className="job-close" onClick={onClose}>×</button>
</div>
        
        <p className="job-description">
          As a Senior Designer, you’ll be a driving force in shaping our creative output and studio culture.
        </p>

        <div className="job-tags">
          <span>Full-Time</span>
          <span>UK</span>
          <span>Europe</span>
          <span>Remote</span>
        </div>

        <button className="apply-button">Apply</button>

        {/* video */}
        <video autoPlay loop muted src={artwork} alt="Artwork" className="job-artwork" />

        {/* Extended Job Description */}
        <div className="job-details">

  <div className="job-section">
    <p className="section-title">● About Us</p>
    <ul className="section-sublist">
      <li>Haptic is a forward-thinking design studio that blends creativity and technology to craft powerful brand, web, motion, and product experiences. Clients include Google, IBM, Harvard, and Reddit.</li>
      <li>We’ve delivered over 50 projects and surpassed £1M revenue in our first year, with exciting growth ahead in 2025.</li>
      <li>We embrace technology as a creative partner to enhance human ingenuity and create immersive experiences.</li>
    </ul>
  </div>

  <div className="job-section">
    <p className="section-title">● In This Role, You Will</p>
    <ul className="section-sublist">
      <li>Present work directly to clients and gather feedback from stakeholders</li>
      <li>Provide constructive feedback and foster a collaborative environment</li>
      <li>Elevate concepts through refinement and strategic decision-making</li>
      <li>Develop and maintain internal design systems and processes</li>
      <li>Explore tools, techniques, and visual approaches to push creative boundaries</li>
    </ul>
  </div>

  <div className="job-section">
    <p className="section-title">● You Should Apply If</p>
    <ul className="section-sublist">
      <li>You have 5+ years of design experience, with 2+ at an agency</li>
      <li>Your portfolio includes real-world client work across mediums</li>
      <li>You have a sharp eye for detail and a strategic mindset</li>
      <li>You adapt and iterate as a creative problem-solver</li>
      <li>You understand both creative and technical design handoffs</li>
      <li>You thrive in dynamic environments</li>
      <li>You collaborate clearly with cross-functional teams</li>
      <li>You’re kind, solution-oriented, and enjoyable to work with</li>
    </ul>
  </div>

  <div className="job-section">
    <p className="section-title">● Nice to Haves</p>
    <p className="section-intro">Bonus if you have experience with:</p>
    <ul className="section-sublist">
      <li>Motion design</li>
      <li>Art direction</li>
      <li>Copywriting</li>
      <li>Coding</li>
      <li>3D design</li>
    </ul>
  </div>

  <div className="job-section">
    <p className="section-title">● Working Together</p>
    <ul className="section-sublist">
      <li>We take time to understand every project and refine every detail.</li>
      <li>We support growth and value both who you are and who you're becoming.</li>
      <li>We believe diversity of thought drives better creativity and collaboration.</li>
    </ul>
  </div>

  <div className="job-section">
    <p className="section-title">● Application</p>
    <ul className="section-sublist">
      <li>To apply, click the 'Apply' button to email us.</li>
      <li>Include your portfolio and LinkedIn profile.</li>
      <li>We’ll contact you if we’d like to talk further.</li>
    </ul>
    <div >
      <button className="apply-button" style={{ marginTop: '20px' }}>Apply</button>
    </div>
  </div>

</div>

      </div>
    </div>
  );
};

export default JobModal;