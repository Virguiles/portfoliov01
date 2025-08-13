"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";

export default function Projets() {
  const { t } = useTranslation();

  const projects = [
    {
      titre: t("projets.items.0.titre"),
      description: t("projets.items.0.description"),
      lien: "https://www.mobile-food.ch/fr",
      image: "/images/mobile-food-ch.webp",
      fallbackImage: "/images/mobile-food-ch.png",
      technologies: ["Ruby on Rails", "TailwindCSS"],
    },
    {
      titre: t("projets.items.1.titre"),
      description: t("projets.items.1.description"),
      lien: "#",
      image: "/images/logo-mobilefoodch-inline.svg",
      technologies: ["Ruby on Rails", "TailwindCSS"],
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-white/10 dark:bg-black/60">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
        {/* Titre centré avec accent visuel */}
        <div className="w-full flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 mt-4 text-center text-black dark:text-white tracking-tight">
            {t("projets.title", "Mes Projets")}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4" />
        </div>
        {/* Liste des projets */}
        <div className="w-full flex flex-col">
          {projects.map((projet, idx) => {
            const isLienValide = projet.lien && projet.lien !== "#";
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-6 rounded-xl dark:bg-black/70 p-4 md:p-6 transition-all hover:bg-purple-500/10 dark:hover:bg-purple-500/10"
              >
                {projet.image && (
                  <div className="flex-shrink-0 w-full md:w-48 mb-2 md:mb-0">
                    <Image
                      src={projet.image}
                      alt={projet.titre}
                      width={192}
                      height={140}
                      sizes="(max-width: 768px) 100vw, 192px"
                      className="rounded-md w-full h-36 object-contain border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (projet.fallbackImage && target.src !== projet.fallbackImage) {
                          target.src = projet.fallbackImage;
                        }
                      }}
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 justify-center items-center md:items-start text-center md:text-left">
                  {isLienValide ? (
                    <a
                      href={projet.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black dark:text-white text-xl md:text-2xl font-bold hover:underline mb-1"
                    >
                      {projet.titre}
                      <FiExternalLink className="inline-block text-lg" />
                    </a>
                  ) : (
                    <span className="text-black dark:text-white text-xl md:text-2xl font-bold mb-1">
                      {projet.titre}
                    </span>
                  )}
                  <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg leading-relaxed mb-2 max-w-xl">
                    {projet.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                    {projet.technologies.map((tech, i) => (
                      <span key={i} className="bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium opacity-70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
