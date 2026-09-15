import { useTranslation } from 'react-i18next';

import { SUPPORTED_LANGUAGES, type Language } from '@/i18n';

type LanguageTile = {
  readonly nativeName: string;
  readonly activeClassName: string;
};

const LANGUAGE_TILES: Readonly<Record<Language, LanguageTile>> = {
  ru: { nativeName: 'Русский', activeClassName: 'bg-red-500' },
  en: { nativeName: 'English', activeClassName: 'bg-blue-500' },
};

export default function LanguageSwitcher(): React.ReactElement {
  const { t, i18n } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t('header.languageSwitcher')}
      className="inline-flex gap-1 p-1 bg-white/90 rounded-lg border border-gray-100 shadow-sm"
    >
      {SUPPORTED_LANGUAGES.map((language) => {
        const tile = LANGUAGE_TILES[language];
        const isActive = i18n.resolvedLanguage === language;

        return (
          <button
            key={language}
            type="button"
            lang={language}
            aria-label={tile.nativeName}
            aria-pressed={isActive}
            title={tile.nativeName}
            className={`h-8 min-w-9 px-2 rounded text-xs font-semibold motion-safe:transition-colors motion-safe:duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
              isActive
                ? `${tile.activeClassName} text-white shadow-md`
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
            }`}
            onClick={() => i18n.changeLanguage(language)}
          >
            {language.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}