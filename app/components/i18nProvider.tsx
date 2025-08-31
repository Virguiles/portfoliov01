"use client";

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Initialisation asynchrone d'i18n
    const initI18n = async () => {
      try {
        if (!i18n.isInitialized || !i18n.services) {
          await i18n.init();
        }

        // Attendre que les traductions soient chargées
        if (i18n.services && i18n.services.backendConnector) {
          await new Promise((resolve) => {
            i18n.on('loaded', () => {
              resolve(void 0);
            });
            // Timeout de sécurité au cas où l'événement 'loaded' ne se déclenche pas
            setTimeout(resolve, 1000);
          });
        }
      } catch (error) {
        console.error('Erreur lors de l\'initialisation i18n:', error);
      }
    };

    initI18n();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
