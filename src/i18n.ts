import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../public/locales/en/translation.json';
import ru from '../public/locales/ru/translation.json';

export const SUPPORTED_LANGUAGES = ['ru', 'en'] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];
type Translation = typeof ru;

const DEFAULT_LANGUAGE: Language = 'ru';
const LANGUAGE_STORAGE_KEY = 'cv-language';

const englishTranslation: Translation = en;
const russianTranslation: typeof en = ru;

export const resources = {
  en: { translation: englishTranslation },
  ru: { translation: russianTranslation },
} as const;

i18n.on('languageChanged', (language: string) => {
  syncDocumentWithLanguage(language);
  storeLanguage(language);
});

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: readStoredLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((error: unknown) => {
    throw error instanceof Error ? error : new Error(String(error));
  });

function syncDocumentWithLanguage(language: string): void {
  document.documentElement.lang = language;
  document.title = i18n.t('meta.title');
}

function readStoredLanguage(): Language {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isSupportedLanguage(storedLanguage)
      ? storedLanguage
      : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function storeLanguage(language: string): void {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Storage can be blocked (privacy settings); the choice then lasts for this visit only.
  }
}

function isSupportedLanguage(value: string | null): value is Language {
  return SUPPORTED_LANGUAGES.some((language) => language === value);
}

export default i18n;