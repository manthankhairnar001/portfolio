import React from 'react';

export default function Education() {
  return (
    <div className="contact-in">
      <h1 className="section-title">EDUCATION & SKILLS</h1>
      <div className="hline"></div>

      <section className="info-block">
        <h2>Education</h2>
        <div className="timeline-item">
          <h3>Diploma in Computer Technology</h3>
          <p className="institution">K.K.Wagh Polytechnic | 2024 - 2027</p>
          <p>Relevant coursework: Data Structures, Web Development, Database Management Systems.</p>
        </div>
      </section>

      <section className="info-block">
        <h2>Technical Knowledge</h2>
        <ul className="skills-list">
          <li><strong>Languages:</strong> JavaScript, HTML, CSS, Python, C++</li>
          <li><strong>Frameworks & Libraries:</strong> React.js, Node.js</li>
          <li><strong>Tools & Databases:</strong> Git, GitHub, SQL, VS Code</li>
        </ul>
      </section>

      <section className="info-block">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span>Problem Solving</span>
          <span>Responsive Web Design</span>
        </div>
      </section>
    </div>
  );
}