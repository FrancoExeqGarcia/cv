import React from 'react';
import './Header.css';
import profilePicture from '../../assets/1707427934491.jpeg';

const Header = () => {
  return (
    <div className="header">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <div className="header-text">
        <h1>FRANCO GARCIA</h1>
        <h2>PROGRAMMING STUDENT</h2>
        <p> I will graduate as a University Technician in Programming in early July of this year
          (2024) and I am currently seeking my first job opportunity related to programming. I
          consider myself a responsible and organized individual, eager to embark on my next
          professional experience. In my free time, I occasionally enjoy watching programming
          conferences and related content to further expand my knowledge.</p>
      </div>
    </div>
  );
};

export default Header;
