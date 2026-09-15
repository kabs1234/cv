import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import type { Project } from '@/const';
import { cn } from '@/lib/utils';

type ProjectScreenshotProps = {
  readonly project: Project;
  readonly className?: string;
};

export default function ProjectScreenshot({
  project,
  className,
}: ProjectScreenshotProps): ReactElement {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        'aspect-[16/10] overflow-hidden border border-rule-strong bg-muted print:hidden',
        className,
      )}
    >
      <img
        src={project.img}
        alt={t('projects.screenshotAlt', {
          title: t(`projects.items.${project.id}.title`),
        })}
        loading="lazy"
        className="size-full object-cover object-top"
      />
    </div>
  );
}