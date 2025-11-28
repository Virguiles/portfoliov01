import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importation directe des fichiers de traduction
import commonFr from './public/locales/fr/common.json';
import commonEn from './public/locales/en/common.json';

// Ressources de traduction
const resources = {
  fr: {
    common: commonFr,
  },
  en: {
    common: commonEn,
  },
};

// Configuration i18n unifiée
const i18nConfig = {
  resources,
  fallbackLng: 'fr',
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
  ns: ['common'],
  defaultNS: 'common',
  react: {
    useSuspense: false,
  },
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
  },
  load: 'languageOnly' as const,
  // Pas de preload nécessaire car les ressources sont bundlées
};

// Initialisation unique
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(i18nConfig);
}

export default i18n;
