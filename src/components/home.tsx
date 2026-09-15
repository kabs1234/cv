import type { ReactElement } from 'react';

import Experience from './experience';
import FeaturedProjects from './featured-projects';
import Hero from './hero';
import Knowledge from './knowledge';
import Skills from './skills';

const HOME_SECTIONS = [
  { id: 'experience', Component: Experience },
  { id: 'featured', Component: FeaturedProjects },
  { id: 'skills', Component: Skills },
  { id: 'knowledge', Component: Knowledge },
] as const;

export default function Home(): ReactElement {
  return (
    <>
      <Hero />
      {HOME_SECTIONS.map(({ id, Component }, index) => (
        <Component key={id} number={index + 1} />
      ))}
    </>
  );
}