"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const GTM_ID = "GTM-5VTGKQFS";
const GA_ID = "G-SX2M7CKH0L";

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

  const handleAccept = () => {
    setConsent(true);
    localStorage.setItem("cookieConsent", "true");
  };

  const handleDecline = () => {
    setConsent(false);
    localStorage.setItem("cookieConsent", "false");
  };

  return (
    <>
      {consent === true && (
        <>
          {/* Google Tag Manager */}
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>

          {/* Google Analytics (GA4) */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

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
