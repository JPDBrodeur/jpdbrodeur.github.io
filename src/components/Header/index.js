import React from 'react';
import Nav from '../../components/Navigation'

function Header({ setCurrentSection, currentSection }) {

  return (
    <header className="p-5 bg-gray-100 shadow-md">
      <div className="flex flex-col text-center lg:flex-row justify-between">
        <a href="/"><h1 className="text-5xl font-bold">John Brodeur</h1></a>
        <Nav setCurrentSection={setCurrentSection} currentSection={currentSection} />
      </div>
    </header>
  );
};

export default Header;
