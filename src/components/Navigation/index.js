function Nav({ setCurrentSection, currentSection }) {

  return (
    <nav className="text-2xl my-3 lg:my-1">
      <ul className="flex flex-row justify-center">
        <li className="mx-1" >
          {currentSection === 'About' ? (
            <span className="cursor-pointer inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white shadow-md" >
              About
            </span>
          ) : (
            <span className="cursor-pointer inline-block border border-gray-100 rounded text-blue-500 hover:bg-gray-200 py-1 px-3 hover:shadow-inner" onClick={() => setCurrentSection('About')}>
              About
            </span>
          )}
        </li>
        <li className="mx-1">
          {currentSection === 'Portfolio' ? (
            <span className="cursor-pointer inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white shadow-md" onClick={() => setCurrentSection('Portfolio')}>
              Portfolio
            </span>
          ) : (
            <span className="cursor-pointer inline-block border border-gray-100 rounded text-blue-500 hover:bg-gray-200 py-1 px-3 hover:shadow-inner" onClick={() => setCurrentSection('Portfolio')}>
              Portfolio
            </span>
          )}
        </li>
        <li className="mx-1">
          {currentSection === 'Contact' ? (
            <span className="cursor-pointer inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white shadow-md" onClick={() => setCurrentSection('Contact')}>
              Contact
            </span>
          ) : (
            <span className="cursor-pointer inline-block border border-gray-100 rounded text-blue-500 hover:bg-gray-200 py-1 px-3 hover:shadow-inner" onClick={() => setCurrentSection('Contact')}>
              Contact
            </span>
          )}
        </li>
        <li className="mx-1">
          {currentSection === 'Resume' ? (
            <span className="cursor-pointer inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white shadow-md" onClick={() => setCurrentSection('Resume')}>
              Resume
            </span>
          ) : (
            <span className="cursor-pointer inline-block border border-gray-100 rounded text-blue-500 hover:bg-gray-200 py-1 px-3 hover:shadow-inner" onClick={() => setCurrentSection('Resume')}>
              Resume
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;