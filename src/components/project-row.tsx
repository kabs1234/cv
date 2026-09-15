import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import type { Project } from '@/const';
import { formatOrdinal } from '@/lib/format';
import { EXTERNAL_LINK_PROPS } from '@/lib/links';

import MetaList from './meta-list';
import ProjectScreenshot from './project-screenshot';

type ProjectRowProps = {
  readonly project: Project;
  readonly number: number;
};

export default function ProjectRow({
  project,
  number,
}: ProjectRowProps): React.ReactElement {
  const { t } = useTranslation();
  const bullets = t(`projects.items.${project.id}.bullets`, {
    returnObjects: true,
  });

  return (
    <article className="grid break-inside-avoid grid-cols-[2rem_1fr] gap-x-4 gap-y-4 border-b border-border py-6 md:grid-cols-[2.25rem_1fr_12.5rem] md:gap-x-5 print:grid-cols-[2rem_1fr] print:py-3">
      <span className="pt-1.5 font-mono text-xs text-accent-ink md:row-start-1">
        {formatOrdinal(number)}
      </span>
      <ProjectScreenshot
        project={project}
        className="col-start-2 md:col-start-3 md:row-start-1"
      />
      <div className="col-start-2 md:row-start-1 print:row-start-1">
        <h2 className="font-serif text-xl font-semibold">
          {t(`projects.items.${project.id}.title`)}
        </h2>
        <ul className="dash-list mt-2 space-y-0.5 text-sm text-body">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <MetaList
          items={project.tech}
          className="mt-3 text-[0.6875rem] text-muted-foreground"
        />
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <Button asChild variant="link" size="inline">
            <a
              href={project.demo}
              className="print-url"
              {...EXTERNAL_LINK_PROPS}
            >
              {t('projects.demo')} ↗
            </a>
          </Button>
          <Button asChild variant="link" size="inline">
            <a
              href={project.github}
              className="print-url"
              {...EXTERNAL_LINK_PROPS}
            >
              {t('projects.code')} ↗
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}