function Nav({ setCurrentSection, currentSection }) {

  return (
    <nav className="text-2xl my-1">
      <ul className="flex flex-row justify-center">
        <li className="mx-2" >
          {currentSection === 'About' ? (
            <span className="cursor-pointer inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" >
              About
            </span>
          ) : (
            <span className="cursor-pointer inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" onClick={() => setCurrentSection('About')}>
              About
            </span>
            )}
        </li>
        {currentSection === 'Portfolio' ? (
            <span className="cursor-pointer inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" onClick={() => setCurrentSection('Portfolio')}>
              Portfolio
            </span>
          ) : (
            <span className="cursor-pointer inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" onClick={() => setCurrentSection('Portfolio')}>
              Portfolio
            </span>
            )}
        <li className="mx-2">
        {currentSection === 'Contact' ? (
            <span className="cursor-pointer inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" onClick={() => setCurrentSection('Contact')}>
              Contact
            </span>
          ) : (
            <span className="cursor-pointer inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" onClick={() => setCurrentSection('Contact')}>
              Contact
            </span>
            )}
        </li>
        <li className="mx-2">
        {currentSection === 'Resume' ? (
            <span className="cursor-pointer inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" onClick={() => setCurrentSection('Resume')}>
              Resume
            </span>
          ) : (
            <span className="cursor-pointer inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" onClick={() => setCurrentSection('Resume')}>
              Resume
            </span>
            )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;