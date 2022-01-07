function Nav({ setCurrentSection }) {

  return (
    <nav className="text-2xl my-2">
      <ul className="flex flex-row">
        <li className="mx-2">
          <span className="cursor-pointer" onClick={() => setCurrentSection('About')}>
            About me
          </span>
        </li>
        <li className="mx-2">
          <span className="cursor-pointer" onClick={() => setCurrentSection('Portfolio')}>
            Portfolio
          </span>
        </li>
        <li className="mx-2">
          <span className="cursor-pointer" onClick={() => setCurrentSection('Contact')}>
            Contact
          </span>
        </li>
        <li className="mx-2">
          <span className="cursor-pointer" onClick={() => setCurrentSection('Resume')}>
            Resume
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;