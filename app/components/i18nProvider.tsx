"use client";

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  // i18n est déjà initialisé dans i18n.ts, pas besoin de réinitialiser
  // Le I18nextProvider va simplement fournir l'instance i18n au contexte React
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
