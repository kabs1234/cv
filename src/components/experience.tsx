import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import MetaList from './meta-list';
import Section, { type NumberedSectionProps } from './section';

export default function Experience({
  number,
}: NumberedSectionProps): ReactElement {
  const { t } = useTranslation();
  const facts = [
    t('experience.badges.petProjects'),
    t('experience.badges.spa'),
    t('experience.badges.productionReady'),
  ];
  const achievements = t('experience.achievementsList', {
    returnObjects: true,
  });
  const technologies = t('experience.technologies', { returnObjects: true });

  return (
    <Section number={number} title={t('experience.title')}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-serif text-xl font-semibold">
          {t('experience.projectPractice')}
        </h3>
        <p className="font-mono text-xs text-muted-foreground">
          {t('experience.period')}
        </p>
      </div>
      <MetaList items={facts} className="mt-3 text-xs" />
      <p className="mt-3 text-body">{t('experience.mainDescription')}</p>
      <ul className="dash-list mt-3 space-y-1 text-body">
        {achievements.map((achievement) => (
          <li key={achievement} className="break-inside-avoid">
            {achievement}
          </li>
        ))}
      </ul>
      <MetaList
        items={technologies}
        className="mt-4 text-[0.6875rem] text-muted-foreground"
      />
    </Section>
  );
}