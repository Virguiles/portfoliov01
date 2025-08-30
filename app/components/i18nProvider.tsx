"use client";

import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [i18nReady, setI18nReady] = useState(false);

  useEffect(() => {
    const initI18n = async () => {
      try {
        // Attendre que i18n soit complètement initialisé
        await i18n.init();
        setI18nReady(true);
      } catch (error) {
        console.error('Erreur lors de l\'initialisation i18n:', error);
        setI18nReady(true); // Continuer même en cas d'erreur
      }
    };

    setMounted(true);
    initI18n();
  }, []);

  // Attendre que le composant soit monté côté client ET que i18n soit prêt
  if (!mounted || !i18nReady) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
        </div>
      </div>
    );
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
