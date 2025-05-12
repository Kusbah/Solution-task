// src/components/HiringCard.jsx
import React from "react";
import hapticLogo from '../../assets/Hapticlogo.gif';
import './HiringCard.css';


const HiringCard = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hiring-card cursor-pointer flex items-center gap-4 bg-white p-4 rounded-md border border-white hover:bg-gray-50 transition"
    >
      <img src={hapticLogo} alt="logo" className="hiring-logo w-12 h-12 object-cover" />

      <div className="hiring-info">
        <span className="hiring-title text-gray-500 text-sm block">Hiring</span>
        <span className="hiring-role text-black font-semibold text-base">Senior Designer</span>
      </div>

      <div className="hiring-plus ml-auto w-8 h-8 rounded-full bg-gray-100 text-black flex items-center justify-center text-lg">
        +
      </div>
    </div>
  );
};

export default HiringCard;
