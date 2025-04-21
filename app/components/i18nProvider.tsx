"use client"

import { useEffect, useState, ReactNode } from 'react'

interface I18nProviderProps {
  children: ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Initialisation de i18n uniquement côté client
    import('@/i18n').then(() => {
      setIsClient(true)
    })
  }, [])

  if (!isClient) {
    // Afficher un placeholder ou rien pendant le chargement côté client
    return null
  }

  return <>{children}</>
}
