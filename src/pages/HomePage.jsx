import React from 'react';
import profile from '../assets/person.avif'
import './HomePage.css';
const HomePage = () => {
  return (
    <div className='container'>
      <p className='text'>
        A <img src={profile} alt='profile' className='profile' /><span className='gray'> designer working with startups globally.</span><br />
        <span className='gray'>Currently steering the ship at</span>{''}
        <span className='haptic'>
            <img src={profile} alt='haptic logo' className='logo' />
            Haptic<span className='dot'>.</span>
        </span>
      </p>
    </div>
  );
}
export default HomePage