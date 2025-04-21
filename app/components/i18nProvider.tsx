"use client"

import { useEffect, ReactNode } from 'react'

interface I18nProviderProps {
  children: ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Initialisation de i18n uniquement côté client
    import('@/i18n')
      .catch((error) => {
        console.error("Erreur lors de l'initialisation de i18n:", error);
      });
  }, [])

  // Toujours retourner les enfants, même pendant le chargement
  return <>{children}</>;
}
