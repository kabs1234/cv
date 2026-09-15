import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  FEATURED_PROJECT_IDS,
  PROJECTS,
  type Project,
  type ProjectId,
} from '@/const';
import { EXTERNAL_LINK_PROPS } from '@/lib/links';

import MetaList from './meta-list';
import ProjectScreenshot from './project-screenshot';
import Section, { type NumberedSectionProps } from './section';

const FEATURED_TECH_LIMIT = 4;

type FeaturedProjectCardProps = {
  readonly project: Project;
};

function isFeaturedProject(projectId: ProjectId): boolean {
  return FEATURED_PROJECT_IDS.includes(projectId);
}

function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps): ReactElement {
  const { t } = useTranslation();

  return (
    <article>
      <ProjectScreenshot project={project} className="mb-3" />
      <h3 className="font-serif text-lg font-semibold">
        <a
          href={project.demo}
          className="link-quiet print-url"
          {...EXTERNAL_LINK_PROPS}
        >
          {t(`projects.items.${project.id}.title`)}
        </a>
      </h3>
      <MetaList
        items={project.tech.slice(0, FEATURED_TECH_LIMIT)}
        className="mt-1 text-[0.6875rem] text-muted-foreground"
      />
    </article>
  );
}

export default function FeaturedProjects({
  number,
}: NumberedSectionProps): ReactElement {
  const { t } = useTranslation();
  const featuredProjects = PROJECTS.filter((project) =>
    isFeaturedProject(project.id),
  );

  return (
    <Section number={number} title={t('featured.title')}>
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 print:grid-cols-1 print:gap-2">
        {featuredProjects.map((project) => (
          <li key={project.id} className="break-inside-avoid">
            <FeaturedProjectCard project={project} />
          </li>
        ))}
      </ul>
      <Link to="/projects" className="link-ink mt-6 inline-block print:hidden">
        {t('featured.viewAll', { total: PROJECTS.length })} →
      </Link>
    </Section>
  );
}