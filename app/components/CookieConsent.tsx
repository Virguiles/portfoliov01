"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSSRTranslation } from "@/lib/hooks/useSSRTranslation";

// Fonction pour mettre à jour le consentement Google Analytics
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(null);
  // Le bandeau n'apparaît qu'une fois le hero lu : il ne parasite pas la
  // première impression et arrive quand l'utilisateur commence à explorer.
  const [visible, setVisible] = useState(false);
  const { t } = useSSRTranslation({
    "cookies.title": "Nous respectons votre vie privée",
    "cookies.description": "Ce site utilise des cookies pour analyser le trafic et améliorer votre expérience. Vous pouvez accepter ou refuser ces cookies.",
    "cookies.accept": "Accepter",
    "cookies.decline": "Refuser"
  });

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

  useEffect(() => {
    if (consent !== null) return;
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, [consent]);

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
    <AnimatePresence>
      {consent === null && visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label={t("cookies.title")}
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-auto z-50 w-auto sm:w-full sm:max-w-sm rounded-xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-3 sm:p-4 shadow-xl"
        >
          <p className="text-[13px] sm:text-sm font-medium text-gray-900 dark:text-white mb-1">
            {t("cookies.title")}
          </p>
          <p className="text-[11px] sm:text-xs leading-snug sm:leading-relaxed text-gray-600 dark:text-gray-400">
            {t("cookies.description")}
          </p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={handleAccept}
              className="flex-1 px-3 py-2 text-[11px] sm:text-xs font-medium text-white bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors"
            >
              {t("cookies.accept")}
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 px-3 py-2 text-[11px] sm:text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-white/10 dark:hover:bg-white/20 rounded-lg transition-colors"
            >
              {t("cookies.decline")}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
