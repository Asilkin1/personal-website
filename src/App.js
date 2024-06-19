import React from 'react';
import './App.css';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import TechnologiesHorizonal from './components/TechnologiesHorizontal/TechnologiesHorizontal'
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div className="App">
     
      <header className="App-header">
        <h1>Alex Silkin * Full Stack Developer * QA Tester</h1>
      </header>
     
      <TechnologiesHorizonal />
      <div className="content">
        <div className="column">
          <h2>Work Experience</h2>
          <WorkExperience />
        </div>
        <div className="column">
          <h2>Projects</h2>
          <Projects />
        </div>
        <div className="column">
          <h2>Certificates</h2>
          <Certificates />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
