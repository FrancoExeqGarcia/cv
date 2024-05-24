// src/App.js
import React from 'react';
import Header from './components/header/Header';
import Languages from './components/languages/Languages';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import WorkExperience from './components/workExperience/WorkExperience';
import AdditionalInformation from './components/additionalInformation/AdditionalInformation';
import Links from './components/links/Links';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-column">
        <Header />
        <Languages />
        <Contact />
        <Links />
      </div>
      <div className="right-column">
        <Education />
        <WorkExperience />
        <AdditionalInformation />
      </div>
    </div>
  );
}

export default App;
