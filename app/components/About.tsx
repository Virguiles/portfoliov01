"use client"

import { useTranslation } from "react-i18next";

export default function TextPresentation() {
  const { t } = useTranslation();
  return (
    <section className="py-16 px-4 sm:px-6 dark:bg-black/60">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
        {/* Titre centré avec accent visuel */}
        <div className="w-full flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-black dark:text-white tracking-tight">
            {t("about")}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4" />
        </div>
        {/* Carte de présentation */}
        <div className="w-full dark:bg-black/70  rounded-xl p-6 md:p-10">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 text-center md:text-left leading-relaxed">
            {t("about_text")}
          </p>
        </div>
      </div>
    </section>
  );
}
