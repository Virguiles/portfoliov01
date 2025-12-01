"use client";

import { useState, useEffect } from "react";

// Fonction pour mettre à jour le consentement Google Analytics
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieConsent");
    if (storedConsent === "true") {
      setConsent(true);
    } else if (storedConsent === "false") {
      setConsent(false);
    } else {
      setConsent(null);
    }
  }, []);

  // Mettre à jour le consentement quand l'utilisateur change son choix
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      if (consent === true) {
        // Mode Consentement v2 : Tout accorder
        window.gtag("consent", "update", {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          analytics_storage: "granted",
        });
        localStorage.setItem("cookieConsent", "true");
      } else if (consent === false) {
        // Mode Consentement v2 : Tout refuser
        window.gtag("consent", "update", {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "denied",
        });
        localStorage.setItem("cookieConsent", "false");
      }
    }
  }, [consent]);

  const handleAccept = () => {
    setConsent(true);
  };

  const handleDecline = () => {
    setConsent(false);
  };

  return (
    <>
      {consent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg animate-slide-up">
          <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <p className="font-medium mb-1">Nous respectons votre vie privée</p>
              <p>
                Ce site utilise des cookies pour analyser le trafic et améliorer votre expérience.
                Vous pouvez accepter ou refuser ces cookies.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-md shadow-sm transition-colors"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
