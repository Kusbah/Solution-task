import React from 'react';
import './CareersSection.css';

const CareersSection = () => {
  return (
    <section className="careers-section">
      <p className="careers-label">● Working at Haptic</p>
      <h2 className="careers-heading">
        Great work starts with<br />
        great people — join us.
      </h2>

      <p className="careers-label">● Open Roles</p>

      <div className="role-card">
        <div className="role-top-row">
          <h3 className="role-title">Senior Designer</h3>
          <div className="role-tags">
            <span className="tag">Remote/Hybrid</span>
            <span className="tag">Full-time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
