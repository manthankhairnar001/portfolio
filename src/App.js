import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education'; 
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
  switch (activeTab) {
    case 'Home':
      return <Home setActiveTab={setActiveTab} />;
    case 'About':
      return <About />;
    case 'Education': 
      return <Education />;
    case 'Contact':
      return <Contact />;
    default:
      return <Home setActiveTab={setActiveTab} />;
  }
};

  const globalBackground = {
    backgroundImage: `linear-gradient(rgba(252, 252, 252, 0.93), rgba(252, 252, 252, 0.93)), url('./blue.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };


  return (
    <div className="portfolio-container">
      <nav className="sidebar">
        <div className="logo-area">
          <h2>MANTHAN</h2>
        </div>
        <ul className="nav-links">{}
          {['Home', 'About', 'Education', 'Contact'].map((tab) => (
            <li key={tab}>
            <button
               className={activeTab === tab ? 'active' : ''}
               onClick={() => setActiveTab(tab)}>
        {tab}
      </button>
    </li>
  ))}
</ul>
      </nav>

      <div className="main-layout">
        <main className="content-area">
          {renderContent()}
        </main>

        <footer className="site-footer">
          <hr />
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/manthan-khairnar-891154314" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/manthankhairnar001" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:khairnarmanthan22@gamil.com">Email</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;