import Knowledge from './knowledge';
import Skills from './skills';

export default function About(): React.ReactElement {
  return (
    <section className="w-full max-w-5xl mx-auto px-2 md:px-4 py-3 bg-white border border-gray-200 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <Skills />
        </div>
        <div className="hidden lg:block w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />
        <div className="flex-1">
          <Knowledge />
        </div>
      </div>
    </section>
  );
}
