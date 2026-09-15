import About from './about';
import Experience from './experience';
import Hero from './hero';

export default function Home(): React.ReactElement {
  return (
    <>
      <Hero />
      <About />
      <Experience />
    </>
  );
}