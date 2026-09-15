/**
 * FIXTURE — follows clean-code-ts; the review hook must report zero violations.
 * Counterpart to bad-example.tsx, which covers the same ground done wrong.
 */

import { useTranslation } from 'react-i18next';

const DESCRIPTION_PREVIEW_LENGTH = 140;

export type Project = {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly url: string;
  readonly tags: ReadonlyArray<string>;
};

type ProjectCardProps = {
  readonly project: Project;
};

export function FeaturedProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <article className="card card--featured">
      <h2>{t(project.titleKey)}</h2>
      <p>{t('projects.recentlyUpdated')}</p>
    </article>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const description = t(project.descriptionKey);

  return (
    <article className="card">
      <h3>{t(project.titleKey)}</h3>
      <p>{preview(description)}</p>
      <ProjectTags tags={project.tags} />
      <a href={project.url}>{t('projects.open')}</a>
    </article>
  );
}

function preview(text: string): string {
  if (text.length <= DESCRIPTION_PREVIEW_LENGTH) {
    return text;
  }
  return `${text.slice(0, DESCRIPTION_PREVIEW_LENGTH)}…`;
}

type ProjectTagsProps = {
  readonly tags: ReadonlyArray<string>;
};

function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <>
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </>
  );
}
