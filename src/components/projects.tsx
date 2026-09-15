import { useTranslation } from 'react-i18next';

import { PROJECTS } from '@/const';
import { formatOrdinal } from '@/lib/format';

import ProjectRow from './project-row';

export default function Projects(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-baseline gap-3 border-b border-rule-strong pt-10 pb-5 print:pt-0">
        <h1 className="font-serif text-5xl tracking-tight">
          {t('projects.title')}
        </h1>
        <span className="font-mono text-sm text-accent-ink">
          {formatOrdinal(PROJECTS.length)}
        </span>
      </div>
      <ol>
        {PROJECTS.map((project, index) => (
          <li key={project.id}>
            <ProjectRow project={project} number={index + 1} />
          </li>
        ))}
      </ol>
    </>
  );
}