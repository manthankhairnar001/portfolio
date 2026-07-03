import React from 'react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps): React.JSX.Element {
  return (
    <div>
      <div className="hero-banner">
        <h1>MANTHAN KHAIRNAR</h1>
        <div className="line"></div>
        <p className="hero-subtitle">Shaping ideas into reality</p>
      </div>

      <div className="profile-image-container">
        <img 
          src={process.env.PUBLIC_URL + '/profile.png'} 
          alt="Manthan Khairnar" 
          className="profile-photo" 
        />
      </div>

      <div className="hero-text">
        <h3>I am Manthan Khairnar.</h3>
        <p>
          I am a passionate tech enthusiast and student dedicated to building high-quality, 
          responsive web applications. I love turning complex logic into user-friendly interfaces. 
          Currently, I am expanding my knowledge in modern development practices, refining my 
          core technical skills, and exploring new frameworks.
        </p>
      </div>
    </div>
  );
}