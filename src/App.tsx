import Header from './components/header';
import Skills from './components/skills';
import Projects from './components/projects';
import Knowledge from './components/knowledge';
import Experience from './components/experience';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <Skills />
      <Experience />
      <Knowledge />
      <Projects />
    </div>
  );
}

export default App;
