"use client"

import React, { useState } from "react";
import { SectionHeader } from "./ui/section-header";
import { SectionWrapper } from "./ui/section-wrapper";
import { useSSRTranslation } from "../../lib/hooks/useSSRTranslation";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const fallbackValues = {
    "services.title": "mes services pour les TPE/PME",
    "services.subtitle": "Des solutions numériques concrètes pour accélérer votre croissance et simplifier votre quotidien.",
    "services.web.title": "Visibilité & Web (Showcase & SEO)",
    "services.web.desc": "Conception de sites internet rapides, esthétiques et optimisés pour le référencement local et national. Idéal pour attirer de nouveaux clients de manière régulière.",
    "services.web.benefit": "Objectif : +100% de visibilité locale",
    "services.web.f1": "Sites vitrines d'exception 100% sur-mesure",
    "services.web.f2": "Optimisation SEO Local (Google Maps & recherche locale)",
    "services.web.f3": "Vitesse de chargement & Performance mobile optimales",
    "services.ecommerce.title": "Boutiques en ligne & Conversion",
    "services.ecommerce.desc": "Création de plateformes e-commerce Shopify ou sur-mesure, pensées pour offrir un parcours d'achat fluide et optimiser vos ventes en ligne 24h/24.",
    "services.ecommerce.benefit": "Objectif : +30% de ventes en ligne",
    "services.ecommerce.f1": "Parcours client fluide et optimisé pour la conversion",
    "services.ecommerce.f2": "Paiements sécurisés (Stripe, CB) & abonnements",
    "services.ecommerce.f3": "Gestion simplifiée des stocks & commandes",
    "services.automation.title": "Automatisation & Outils Métier",
    "services.automation.desc": "Développement d'outils internes, CRM personnalisés et automatisations (n8n, IA) pour éliminer les tâches répétitives et vous concentrer sur votre cœur de métier.",
    "services.automation.benefit": "Objectif : 15 heures économisées par semaine",
    "services.automation.f1": "Scénarios d'automatisation (n8n, Make, Zapier)",
    "services.automation.f2": "Intégration d'IA pour les tâches quotidiennes répétitives",
    "services.automation.f3": "CRM & outils métiers sur-mesure connectés"
  };

  const { t, isMounted } = useSSRTranslation(fallbackValues);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isMounted) {
    return <div className="py-20" style={{ minHeight: "600px" }}></div>;
  }

  const servicesData = [
    {
      id: 0,
      title: t("services.web.title"),
      desc: t("services.web.desc"),
      benefit: t("services.web.benefit"),
      features: [
        t("services.web.f1"),
        t("services.web.f2"),
        t("services.web.f3")
      ],
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      bgLight: "bg-blue-500/5 dark:bg-blue-500/10",
      glowColor: "rgba(59, 130, 246, 0.18)",
      iconColor: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/40",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 1,
      title: t("services.ecommerce.title"),
      desc: t("services.ecommerce.desc"),
      benefit: t("services.ecommerce.benefit"),
      features: [
        t("services.ecommerce.f1"),
        t("services.ecommerce.f2"),
        t("services.ecommerce.f3")
      ],
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      bgLight: "bg-pink-500/5 dark:bg-pink-500/10",
      glowColor: "rgba(236, 72, 153, 0.18)",
      iconColor: "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/30 border-pink-100 dark:border-pink-900/40",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 2,
      title: t("services.automation.title"),
      desc: t("services.automation.desc"),
      benefit: t("services.automation.benefit"),
      features: [
        t("services.automation.f1"),
        t("services.automation.f2"),
        t("services.automation.f3")
      ],
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgLight: "bg-amber-500/5 dark:bg-amber-500/10",
      glowColor: "rgba(245, 158, 11, 0.18)",
      iconColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/40",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper background="bg-gray-50/40 dark:bg-black/30">
      <div id="services" className="scroll-mt-20 max-w-4xl mx-auto w-full">
        <SectionHeader title={t("services.title")} />

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto -mt-6 mb-12 text-base md:text-lg leading-relaxed">
          {t("services.subtitle")}
        </p>

        {/* Origin UI Inspired Accordion Container */}
        <div className="border border-gray-200/80 dark:border-zinc-800/80 rounded-3xl bg-white/70 dark:bg-zinc-950/50 backdrop-blur-xl shadow-xl overflow-hidden">
          {servicesData.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={service.id}
                className={`border-b border-gray-200/80 dark:border-zinc-800/80 last:border-b-0 transition-colors duration-300 ${isOpen ? "bg-zinc-50/30 dark:bg-zinc-900/10" : ""
                  }`}
              >
                {/* Accordion Trigger (Header, Sub-header, Icon, and Chevron) */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-all focus:outline-none group select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 md:gap-5 mr-4">
                    {/* Icon Container */}
                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl border transition-all duration-300 shadow-sm ${service.iconColor} group-hover:scale-105 group-hover:rotate-2`}>
                      {service.icon}
                    </div>

                    {/* Header & Sub-header */}
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-tight leading-snug transition-colors duration-200 group-hover:text-gray-800 dark:group-hover:text-zinc-200">
                        {service.title}
                      </span>
                      <span className="text-xs md:text-sm text-gray-500 dark:text-zinc-400 font-medium flex items-center gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {service.benefit}
                      </span>
                    </div>
                  </div>

                  {/* Chevron Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 text-gray-400 dark:text-zinc-500 shadow-sm transition-all duration-300 group-hover:text-gray-600 dark:group-hover:text-zinc-300 ${isOpen ? "rotate-180 border-gray-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800" : ""
                    }`}>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                {/* Accordion Content with framer-motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        {/* Content Grid (2 columns on md/lg for layout balance) */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-t border-gray-100 dark:border-zinc-800/50 pt-6">

                          {/* Description Column */}
                          <div className="md:col-span-7 flex flex-col justify-between">
                            <p className="text-gray-600 dark:text-zinc-300 text-sm md:text-[15px] leading-relaxed mb-6 md:mb-0">
                              {service.desc}
                            </p>
                          </div>

                          {/* Bullet Points Column */}
                          <div className="md:col-span-5">
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-zinc-300">
                                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                  </span>
                                  <span className="leading-tight">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
