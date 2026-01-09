import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importation directe des fichiers de traduction depuis le dossier locales à la racine
import commonFr from './locales/fr/common.json';
import commonEn from './locales/en/common.json';

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
  debug: false, // Désactivé pour réduire les logs en développement
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
};

// Initialisation unique - ne pas réinitialiser si déjà initialisé
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(i18nConfig)
    .catch((error) => {
      console.error('Erreur lors de l\'initialisation d\'i18n:', error);
    });
}

export default i18n;
