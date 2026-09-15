import { Fragment, type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { SUPPORTED_LANGUAGES, type Language } from '@/i18n';
import { cn } from '@/lib/utils';

const NATIVE_LANGUAGE_NAMES: Readonly<Record<Language, string>> = {
  ru: 'Русский',
  en: 'English',
};

export default function LanguageSwitcher(): ReactElement {
  const { t, i18n } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t('header.languageSwitcher')}
      className="flex items-center font-mono text-xs"
    >
      {SUPPORTED_LANGUAGES.map((language, index) => {
        const isActive = i18n.resolvedLanguage === language;

        return (
          <Fragment key={language}>
            {index > 0 && (
              <span aria-hidden="true" className="text-muted-foreground">
                /
              </span>
            )}
            <button
              type="button"
              lang={language}
              aria-label={NATIVE_LANGUAGE_NAMES[language]}
              aria-pressed={isActive}
              title={NATIVE_LANGUAGE_NAMES[language]}
              className={cn(
                'min-h-8 px-1.5 font-medium uppercase motion-safe:transition-colors',
                isActive
                  ? 'text-accent-ink'
                  : 'text-muted-foreground hover:text-foreground',
              )}
              onClick={() => i18n.changeLanguage(language)}
            >
              {language}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}