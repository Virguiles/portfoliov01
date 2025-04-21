import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialiser i18n uniquement côté client pour éviter les erreurs d'hydratation
if (typeof window !== 'undefined') {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'fr',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: '/locales/{{lng}}/common.json',
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;
