"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const defaultProjects = [
  {
    titre: "Mobile-food.ch",
    description: "Mobile-food.ch est une plateforme innovante dédiée à la recherche de food trucks et traiteurs en Suisse.",
    lien: "https://mobile-food.ch",
    image: "/images/mobile-food-ch.png",
  },
  {
    titre: "CRM pour startup",
    description: "Développement d'un CRM sur-mesure pour une startup, permettant une gestion optimisée des leads.",
    lien: "#",
    image: null,
  }
];

export default function Projets() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 mb-10 w-full">
          <h2 className="text-purple-500 text-3xl md:text-4xl font-bold mb-6 text-left w-full max-w-2xl text-black dark:text-purple-500">
            {t("projets.title", "Mes Projets")}
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
            {defaultProjects.map((projet, idx) => (
              <a
                key={idx}
                href={projet.lien}
                className="block rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-black p-6 border border-gray-800 dark:border-neutral-800 hover:bg-gray-100 dark:hover:bg-purple-500/15 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projet.image && (
                  <Image
                    src={projet.image}
                    alt={projet.titre}
                    width={400}
                    height={160}
                    className="mb-4 rounded-md w-full h-40 object-cover border border-gray-200 dark:border-neutral-700"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{projet.titre}</h3>
                <p className="text-black dark:text-gray-300 text-sm mb-4">{projet.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-black dark:bg-purple-500/30 dark:text-purple-200 text-xs font-semibold mt-2 transition-colors duration-200">
                  {t("projets.voir", "Voir le projet →")}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
