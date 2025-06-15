import Header from './components/header';
import Projects from './components/projects';
import Experience from './components/experience';
import About from './components/about';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <div className="mt-6" />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
