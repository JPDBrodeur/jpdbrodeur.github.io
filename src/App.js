import Nav from './components/Navigation'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Project from './components/Project'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Portfolio />
        <Project />
      </main>
    </div>
  );
}

export default App;
