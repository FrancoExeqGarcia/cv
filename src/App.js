// src/App.js
import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Languages from './components/languages/Languages';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import WorkExperience from './components/workExperience/WorkExperience';
import AditionalInformation from './components/aditionalInformation/AditionalInformation';
import Links from './components/links/Links';
import './App.scss';
import AOS from "aos";
import { useSelector } from "react-redux";
import EN from "./languages/EN.json";
import ES from "./languages/ES.json";

function App() {
  var language;
  const languageglobal = useSelector((state) => state.language.type);
  if (languageglobal === "ES") {
    language = { ...ES };
  } else {
    language = { ...EN };
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 150,
      mirror: false,
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <Header len={language.Menu}/>
      </header>
      <main className="App-main">
        <AditionalInformation language={language}/>
        <Languages />
        <Contact />
        <Links />
        <Education />
        <WorkExperience />
      </main>
    </div>
  );
}

export default App;
