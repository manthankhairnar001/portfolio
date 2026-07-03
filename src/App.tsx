import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';

function App(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<string>('Home');

  const renderContent = (): React.JSX.Element => {
    switch (activeTab) {
      case 'Home': return <Home setActiveTab={setActiveTab} />;
      case 'About': return <About />;
      case 'Education': return <Education />;
      case 'Contact': return <Contact />;
      default: return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      {/* Dynamic Animated Kinetic Color Canvas Layer */}
      <div className="bg-mesh-wrapper">
        <div className="mesh-blob blob-teal"></div>
        <div className="mesh-blob blob-blue"></div>
        <div className="mesh-blob blob-coral"></div>
      </div>

      {/* Main UI Interface Layer */}
      <div className="portfolio-container">
        <nav className="sidebar">
          {/* Full-bleed background image element */}
          <img 
            src="/sidebar-display.jpg" 
            alt="Sidebar background" 
            className="sidebar-bg-image" 
          />

          <div className="logo-area">
            <h2>MANTHAN</h2>
          </div>
          
          <ul className="nav-links">
            {['Home', 'About', 'Education', 'Contact'].map((tab) => (
              <li key={tab}>
                <button 
                  className={activeTab === tab ? 'active' : ''} 
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="main-layout">
          <main className="content-area content-transition-wrapper" key={activeTab}>
            {renderContent()}
          </main>

          <footer className="site-footer">
            <hr />
            <div className="footer-links">
              <a 
                href="https://www.linkedin.com/in/manthan-khairnar-891154314" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-btn"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/manthankhairnar001" 
                target="_blank" 
                rel="noreferrer" 
                className="footer-btn"
              >
                GitHub
              </a>
              <a 
                href="mailto:khairnarmanthan22@gmail.com" 
                className="footer-btn"
              >
                Email
              </a>
            </div>
            <p>© {new Date().getFullYear()} Manthan Khairnar. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;