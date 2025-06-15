import About from './about';
import Experience from './experience';

export default function Home(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-6">
      <About />
      <Experience />
    </div>
  );
}
