import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Configuration i18n unifiée
const i18nConfig = {
  fallbackLng: 'fr',
  debug: false,
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
  preload: ['fr', 'en'],
  initImmediate: false,
  missingKeyHandler: (lngs: readonly string[], namespace: string, key: string, fallbackValue: string) => {
    console.warn(`Missing translation key: ${key} for languages: ${lngs.join(', ')}`);
  },
};

// Configuration unique pour tous les environnements
if (!i18n.isInitialized) {
  if (typeof window === 'undefined') {
    // Côté serveur - utiliser les ressources statiques
    i18n
      .use(initReactI18next)
      .init({
        ...i18nConfig,
        lng: 'fr',
        resources: {
          fr: {
            common: require('./public/locales/fr/common.json')
          },
          en: {
            common: require('./public/locales/en/common.json')
          }
        },
      });
  } else {
    // Côté client - utiliser HttpBackend
    i18n
      .use(HttpBackend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        ...i18nConfig,
        lng: 'fr',
        backend: {
          loadPath: '/locales/{{lng}}/common.json',
        },
      });
  }
}

export default i18n;
