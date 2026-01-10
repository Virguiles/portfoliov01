import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from 'react';

export function useSSRTranslation(fallbackValues: Record<string, string> = {}) {
  const { t, i18n, ready } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [isI18nReady, setIsI18nReady] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Utiliser l'événement 'initialized' d'i18n pour une meilleure gestion
    const handleInitialized = () => {
      setIsI18nReady(true);
    };

    if (i18n.isInitialized) {
      setIsI18nReady(true);
    } else {
      i18n.on('initialized', handleInitialized);
    }

    return () => {
      i18n.off('initialized', handleInitialized);
    };
  }, [i18n]);

  const getTranslatedValue = useCallback((key: string, fallback?: string) => {
    const fallbackValue = fallback || fallbackValues[key] || key;

    // Utiliser ready de react-i18next qui est plus fiable
    if (ready && isMounted) {
      const translated = t(key);
      // Vérifier si la traduction existe et n'est pas la clé elle-même
      return (translated && translated !== key) ? translated : fallbackValue;
    }

    return fallbackValue;
  }, [ready, isMounted, t, fallbackValues]);

  return {
    t: getTranslatedValue,
    isMounted,
    isI18nReady: ready && isI18nReady,
    i18n
  };
}
