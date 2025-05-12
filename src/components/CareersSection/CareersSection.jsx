import React, { useState } from 'react';
import './CareersSection.css';
import JobModal from '../Hero/JobModal'; // Adjust path if needed

const CareersSection = () => {
  const [jobOpen, setJobOpen] = useState(false);

  return (
    <section className="careers-section">
      <p className="careers-label">● Working at Haptic</p>
      <h2 className="careers-heading" style={{color: "#ff4713"}}>
        Great work starts with<br />
        great people — join us.
      </h2>

      <p className="careers-label">● Open Roles</p>

      <div className="role-card">
        <div className="role-top-row">
          <h3
            className="role-title job-text-link"
            onClick={() => setJobOpen(true)}
          >
            Senior Designer
          </h3>

          <div className="role-tags">
            <span className="tag">Remote/Hybrid</span>
            <span className="tag">Full-time</span>
          </div>
        </div>
      </div>
      <JobModal isOpen={jobOpen} onClose={() => setJobOpen(false)} />
    </section>
  );
};

export default CareersSection;
