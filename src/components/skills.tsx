import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import MetaList from './meta-list';
import Section, { type NumberedSectionProps } from './section';

const SKILL_CATEGORIES = [
  { id: 'languages', skills: ['htmlCss', 'jsTs'] },
  {
    id: 'frameworks',
    skills: ['reactRedux', 'reactRouter', 'axios', 'leaflet'],
  },
  { id: 'testing', skills: ['jest', 'rtl', 'vitest'] },
  { id: 'tools', skills: ['git', 'gulp', 'webpack', 'vite'] },
  {
    id: 'approaches',
    skills: ['spa', 'oop', 'mvc', 'rest', 'mobileFirst', 'pixelPerfect'],
  },
] as const;

export default function Skills({
  number,
}: NumberedSectionProps): ReactElement {
  const { t } = useTranslation();

  return (
    <Section number={number} title={t('skills.sectionTitle')}>
      <dl>
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="grid break-inside-avoid gap-1 border-b border-border py-2 sm:grid-cols-[13rem_1fr] sm:gap-4 print:grid-cols-[11rem_1fr]"
          >
            <dt className="text-muted-foreground">
              {t(`skills.categories.${category.id}`)}
            </dt>
            <dd>
              <MetaList
                items={category.skills.map((skill) =>
                  t(`skills.technologies.${skill}`),
                )}
                className="font-sans"
              />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}