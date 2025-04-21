"use client"

import { useTranslation } from "react-i18next";

export default function TextPresentation() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-purple-500 text-3xl md:text-4xl font-bold mb-6 text-left w-full max-w-2xl">
        {t("about")}
      </h2>
      <p className="max-w-2xl text-lg md:text-xl text-left text-gray-700 dark:text-gray-200">
        {t("about_text")}
      </p>
    </section>
  );
}
