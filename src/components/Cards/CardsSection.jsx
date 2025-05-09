import React from 'react';
import './CardsSection.css';

import pic1 from '../../assets/pic.avif';
import pic2 from '../../assets/pic2.avif';
import pic3 from '../../assets/pic3.avif';
import logo1 from '../../assets/logo.png';
import logo2 from '../../assets/logo1.png';
import logo3 from '../../assets/logo2.png';

const CardsSection = () => {
  return (
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
        <div className="image-wrapper">
          <img
            src={pic2}
            alt="Preview 2"
            style={{ width: '1480px', height: '1040px' }}
          />
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
  );
};

export default CardsSection;
