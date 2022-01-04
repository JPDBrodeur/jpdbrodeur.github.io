function Nav() {

  return (
    <header className="flex flex-row m-5">
      <h2 className="text-5xl">
        <a href="/">John Brodeur</a>
      </h2>
      <nav>
        <ul className="flex flex-row">
          <li className="mx-2 my-3">
            <a href="#about">
              About me
            </a>
          </li>
          <li className="mx-2 my-3">
            <span>
                Portfolio
            </span>
          </li>
          <li className="mx-2 my-3">
            <span>Contact</span>
          </li>
          <li className="mx-2 my-3">
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;