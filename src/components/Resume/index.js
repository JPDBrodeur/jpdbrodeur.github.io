function Resume() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <a href="https://jpdbrodeur.github.io/assets/docs/resume.pdf">
          <button data-testid="button" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Download Resume</button>
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-10">
        <div className="text-center">
          <h2 className="text-3xl mt-10 mb-5">Front-End Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-3xl mt-10 mb-5">Back-End Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;