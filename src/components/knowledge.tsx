import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { PROFICIENCY_SCALE, SPOKEN_LANGUAGES } from '@/const';
import { cn } from '@/lib/utils';

import Section, { type NumberedSectionProps } from './section';

type ProficiencyMeterProps = {
  readonly level: number;
};

const SUBHEADING_CLASS_NAME =
  'font-mono text-xs tracking-wider text-muted-foreground uppercase';

function ProficiencyMeter({
  level,
}: ProficiencyMeterProps): ReactElement {
  const { t } = useTranslation();
  const segments = Array.from(
    { length: PROFICIENCY_SCALE },
    (_, index) => index < level,
  );

  return (
    <span
      role="img"
      aria-label={t('knowledge.proficiency', { level, max: PROFICIENCY_SCALE })}
      className="inline-flex gap-[3px] [print-color-adjust:exact]"
    >
      {segments.map((isFilled, index) => (
        <span
          key={index}
          className={cn('h-1 w-3.5', isFilled ? 'bg-foreground' : 'bg-border')}
        />
      ))}
    </span>
  );
}

function Education(): ReactElement {
  const { t } = useTranslation();

  return (
    <div className="break-inside-avoid">
      <h3 className={SUBHEADING_CLASS_NAME}>{t('knowledge.education')}</h3>
      <p className="mt-3 font-mono text-xs text-muted-foreground">
        {t('knowledge.dateRange')}
      </p>
      <p className="mt-1 font-serif text-lg leading-snug font-semibold">
        {t('knowledge.bachelorDegree')}
      </p>
      <p className="mt-1 text-sm text-body">{t('knowledge.university')}</p>
    </div>
  );
}

function SpokenLanguages(): ReactElement {
  const { t } = useTranslation();

  return (
    <div className="break-inside-avoid">
      <h3 className={SUBHEADING_CLASS_NAME}>{t('knowledge.languages')}</h3>
      <dl className="mt-2">
        {SPOKEN_LANGUAGES.map((language) => (
          <div
            key={language.id}
            className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-border py-2 text-sm"
          >
            <dt className="text-muted-foreground">
              {t(`knowledge.languageLevels.${language.id}.name`)}
            </dt>
            <dd className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>{t(`knowledge.languageLevels.${language.id}.level`)}</span>
              <ProficiencyMeter level={language.proficiency} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Knowledge({
  number,
}: NumberedSectionProps): ReactElement {
  const { t } = useTranslation();

  return (
    <Section number={number} title={t('knowledge.title')}>
      <div className="grid gap-8 lg:grid-cols-2 print:grid-cols-2 print:gap-6">
        <Education />
        <SpokenLanguages />
      </div>
    </Section>
  );
}