import React from 'react';

export default function About(): React.JSX.Element {
  return (
    <div>
      <div className="hero-banner">
        <h1 className="section-title">ABOUT ME</h1>
        <div className="line"></div>
      </div>

      <div className="about-content animate-delay-1">
        <p>
          Hello! I am a tech student pursuing my diploma in Computer Technology at Nashik. 
          I like developing and creating innovative ideas into reality. For my practical knowledge, 
          I joined DFOX MEDIA pvt. ltd. as an intern.
        </p>
        <p>
          Currently, I am refining my technical knowledge, focusing on modern JavaScript ecosystems 
          like React, and exploring responsive design patterns. I believe that great code is not just 
          about functionality, but also about creating meaningful interfaces that solve real-world problems.
        </p>
        <p style={{ marginTop: '30px', fontWeight: '600', color: '#0b4e5b' }}>
          Vision: <span style={{ fontWeight: '400', color: '#475569' }}>To become a leading 
            front-end engineer who transforms complex codes into seamless, user-friendly digital experiences.</span>
        </p>
      </div>
    </div>
  );
}