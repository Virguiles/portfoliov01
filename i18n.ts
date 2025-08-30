import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Configuration i18n partagée
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
  // Ajout de la détection automatique de langue
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
  },
};

// Initialisation côté serveur
if (typeof window === 'undefined') {
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
}
// Initialisation côté client avec backend HTTP
else {
  if (!i18n.isInitialized) {
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
        // Amélioration de la gestion des erreurs
        fallbackLng: 'fr',
        load: 'languageOnly',
        // Préchargement des ressources
        preload: ['fr', 'en'],
      });
  }
}

export default i18n;
