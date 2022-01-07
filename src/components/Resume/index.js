function Resume() {
  return (
    <div className="flex justify-center">
      <a href="https://jpdbrodeur.github.io/assets/docs/resume.pdf">
        <button data-testid="button" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;