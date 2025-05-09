import React from 'react';
import './Footer.css';
import logo from '../../assets/footer-logo.png'; 

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-top">
          <img src={logo} alt="Haptic Logo" className="footer-logo" />
  
          <div className="footer-links">
            <div className="footer-column">
              <h4>Learn More</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
  
            <div className="footer-column">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">X</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <span>Haptic © 2025</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;