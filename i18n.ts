import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Ressources de traduction par défaut pour le SSR
const resources = {
  fr: {
    common: {
      "hero_creative": "CREATIVE",
      "hero_designer": "DESIGNER",
      "hero_and": "&",
      "hero_developer": "DÉVELOPPEUR",
      "hero_web": "WEB",
      // Ajoutez ici les traductions minimales nécessaires au rendu initial
    }
  },
  en: {
    common: {
      "hero_creative": "CREATIVE",
      "hero_designer": "DESIGNER",
      "hero_and": "&",
      "hero_developer": "DEVELOPER",
      "hero_web": "WEB",
    }
  }
};

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
};

// Initialisation côté serveur avec les ressources par défaut
if (typeof window === 'undefined') {
  i18n
    .use(initReactI18next)
    .init({
      ...i18nConfig,
      lng: 'fr',
      resources,
    });
}
// Initialisation côté client avec backend HTTP
else {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      ...i18nConfig,
      backend: {
        loadPath: '/locales/{{lng}}/common.json',
      },
      resources, // Inclure également les ressources par défaut pour éviter des erreurs de rendu
    });
}

export default i18n;
