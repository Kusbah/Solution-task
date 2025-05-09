import React from 'react';
import companylogo1 from '../../assets/companylogo1.svg';
import companylogo2 from '../../assets/companylogo2.svg';
import companylogo3 from '../../assets/companylogo3.svg';
import companylogo4 from '../../assets/companylogo4.svg';
import companylogo5 from '../../assets/companylogo5.svg';
import companylogo6 from '../../assets/companylogo6.svg';
import companylogo7 from '../../assets/companylogo7.svg';
import companylogo8 from '../../assets/companylogo8.svg';
import companylogo9 from '../../assets/companylogo9.svg';
import companylogo10 from '../../assets/companylogo10.svg';
import './TestimonialsLogos.css';


const logos = [
  companylogo1, companylogo2, companylogo3, companylogo4, companylogo5,
  companylogo6, companylogo7, companylogo8, companylogo9, companylogo10
];

const ScrollingLogos = () => (
  <section className="logo-bar-section">
    <div className="logo-bar-container">
      {[...logos, ...logos].map((logo, index) => (
        <img key={index} src={logo} alt={`Logo ${index + 1}`} />
      ))}
    </div>
  </section>
);

export default ScrollingLogos;