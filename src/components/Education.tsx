import React from 'react';

export default function Education(): React.JSX.Element {
  return (
    <div>
      <div className="hero-banner">
        <h1 className="section-title">EDUCATION & SKILLS</h1>
        <div className="line"></div>
      </div>

      <div className="member-content animate-delay-1">
        <h2 className="info-block-h2">EDUCATION</h2>
        <ul className="timeline-list">
          <li>
            <h3 className="timeline-item-h3">Diploma in Computer Technology</h3>
            <span className="institution">K.K.Wagh Polytechnic | 2024 - 2027</span>
            <p style={{ margin: 0, color: '#475569' }}>Relevant coursework: Data Structures, Web Development, Database Management Systems.</p>
          </li>
        </ul>
      </div>

      <div className="member-content animate-delay-2">
        <h2 className="technical-knowledge-h2">TECHNICAL KNOWLEDGE</h2>
        <ul className="knowledge-list">
          <li><strong>Languages:</strong> JavaScript, HTML, CSS, Python, C++</li>
          <li><strong>Frameworks & Libraries:</strong> React.js, Node.js</li>
          <li><strong>Tools & Databases:</strong> Git, GitHub, SQL, VS Code</li>
        </ul>
      </div>

      <div className="member-content animate-delay-3">
        <h2 className="skills-h2">SKILLS</h2>
        <ul className="skills-grid">
          <li>Problem Solving</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>
    </div>
  );
}