import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export function useSSRTranslation(fallbackValues: Record<string, string> = {}) {
  const { t, i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [isI18nReady, setIsI18nReady] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Vérifier que i18n est prêt
    if (i18n.isInitialized) {
      setIsI18nReady(true);
    } else {
      const checkI18n = () => {
        if (i18n.isInitialized) {
          setIsI18nReady(true);
        } else {
          setTimeout(checkI18n, 100);
        }
      };
      checkI18n();
    }
  }, [i18n.isInitialized]);

  const getTranslatedValue = (key: string, fallback?: string) => {
    const fallbackValue = fallback || fallbackValues[key] || key;
    return (isMounted && isI18nReady) ? t(key) : fallbackValue;
  };

  return {
    t: getTranslatedValue,
    isMounted,
    isI18nReady,
    i18n
  };
}
