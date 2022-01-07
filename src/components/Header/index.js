import React from 'react';
import Nav from '../../components/Navigation'

function Header({ setCurrentSection }) {

  return (
    <header className="m-5">
      <div className="flex flex-row justify-between">
        <a href="/"><h1 className="text-5xl">John Brodeur</h1></a>
        <Nav setCurrentSection={setCurrentSection} />
      </div>
    </header>
  );
};

export default Header;
