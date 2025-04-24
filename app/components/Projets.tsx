"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export default function Projets() {
  const { t } = useTranslation();

  const projects = [
    {
      titre: t("projets.items.0.titre"),
      description: t("projets.items.0.description"),
      lien: "https://www.mobile-food.ch/fr",
      image: "/images/mobile-food-ch.png",
    },
    {
      titre: t("projets.items.1.titre"),
      description: t("projets.items.1.description"),
      lien: "#",
      image: "/images/logo-mobilefoodch-inline.svg",
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 mb-10 w-full">
          <h2 className="text-purple-500 text-3xl md:text-4xl font-bold mb-6 text-left w-full max-w-2xl text-black dark:text-purple-500">
            {t("projets.title", "Mes Projets")}
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
            {projects.map((projet, idx) => {
              const isLienValide = projet.lien && projet.lien !== "#";
              const CardComponent = isLienValide ? 'a' : 'div';
              const cardProps = isLienValide
                ? {
                    href: projet.lien,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }
                : {};
              return (
                <CardComponent
                  key={idx}
                  className="block rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-black p-6 border border-gray-800 dark:border-neutral-800 hover:bg-gray-100 dark:hover:bg-purple-500/15 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
                  {...cardProps}
                >
                  {projet.image && (
                    <Image
                      src={projet.image}
                      alt={projet.titre}
                      width={400}
                      height={160}
                      className="mb-4 rounded-md w-full h-40 object-contain border border-gray-200 dark:border-neutral-700"
                    />
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{projet.titre}</h3>
                  <p className="text-black dark:text-gray-300 text-sm mb-4">{projet.description}</p>
                  {isLienValide && (
                    <InteractiveHoverButton className="mt-2">
                      {t("projets.voir", "Website")}
                    </InteractiveHoverButton>
                  )}
                </CardComponent>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
