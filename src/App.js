import React, { useState } from 'react';
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  
  const [currentSection, setCurrentSection] = useState('About');
  
  return (
      <div>
        <Header 
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        />
        <main>
          {currentSection === 'About' ? (<About />) : ('')}
          {currentSection === 'Portfolio' ? (<Portfolio />) : ('')}
          {currentSection === 'Contact' ? (<Contact />) : ('')}
          {currentSection === 'Resume' ? (<Resume />) : ('')}
        </main>
        <Footer />
      </div>
  );
}

export default App;
