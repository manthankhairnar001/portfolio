import React from 'react';
import profile from '../profile.png';

export default function Home({ setActiveTab }) {
  return (
    <div className="contact-in">
      <div className="hero-banner">
        <h1>MANTHAN KHAIRNAR</h1>
        <div className="hline"></div>
        <p className="hero-subtitle"><b>Shaping ideas into reality</b></p>
      </div>
      <div className="profile-image-container">
          <center><img src={profile} alt="Profile Photo" className="profile-image" /></center>
      </div>
       <div className="hero-text">
          <h3>I am Manthan Khairnar.</h3>
          <p>
            I am a passionate tech enthusiast and student dedicated to building high-quality, 
            responsive web applications. I love turning complex logic into user-friendly interfaces.
        
            Currently, I am expanding my knowledge in modern development practices, refining my core technical 
            skills, and exploring new frameworks.
          </p>
        </div>  

      
    </div>
  );
}