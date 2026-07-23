"use client";

import React from "react";
import { useSSRTranslation } from "@/lib/hooks/useSSRTranslation";
import { SectionHeader } from "./ui/section-header";
import { SectionWrapper } from "./ui/section-wrapper";
import { motion } from "framer-motion";

export default function CaseStudies() {
  const fallbackValues = {
    "cas_clients.title": "références & cas clients",
    "cas_clients.subtitle": "Découvrez comment j'aide concrètement les TPE et PME à atteindre leurs objectifs numériques.",
    "cas_clients.probleme_label": "Problème",
    "cas_clients.solution_label": "Solution",
    "cas_clients.resultat_label": "Résultat mesurable",
    "cas_clients.items.0.client": "Mobile-food.ch (Restauration)",
    "cas_clients.items.0.titre": "Plateforme de mise en relation de food trucks en Suisse",
    "cas_clients.items.0.probleme": "Difficulté pour les food trucks indépendants d'obtenir de la visibilité et pour les clients de réserver facilement en ligne.",
    "cas_clients.items.0.solution": "Création d'une plateforme web robuste avec Ruby on Rails avec recherche par localisation et système de réservation simple.",
    "cas_clients.items.0.resultat": "+120 food trucks inscrits et hausse de 40% des réservations directes.",
    "cas_clients.items.1.client": "Cabinet de Conseil & Services",
    "cas_clients.items.1.titre": "CRM commercial sur-mesure et connecté",
    "cas_clients.items.1.probleme": "Perte de prospects due à un suivi manuel fastidieux sur tableur et un manque de relance systématique.",
    "cas_clients.items.1.solution": "Développement d'un CRM sur-mesure connecté au site web avec pipeline visuel, relances automatisées et tableau de bord.",
    "cas_clients.items.1.resultat": "+25% de taux de conversion des leads et 10h gagnées par semaine par commercial.",
    "cas_clients.items.2.client": "Conciergerie Touristique",
    "cas_clients.items.2.titre": "Automatisation WhatsApp & Airbnb via n8n",
    "cas_clients.items.2.probleme": "Gestion chronophage des messages des voyageurs à l'arrivée et au départ (2h+ par jour).",
    "cas_clients.items.2.solution": "Mise en place d'un assistant IA connecté à l'API WhatsApp et n8n, répondant instantanément aux questions fréquentes à partir des données de réservation.",
    "cas_clients.items.2.resultat": "10 heures économisées par semaine par logement et 100% de taux de réponse en moins de 2 minutes."
  };

  const { t, isMounted } = useSSRTranslation(fallbackValues);

  if (!isMounted) {
    return <div className="py-20" style={{ minHeight: "400px" }}></div>;
  }

  const cases = [
    {
      id: 0,
      client: t("cas_clients.items.0.client"),
      title: t("cas_clients.items.0.titre"),
      problem: t("cas_clients.items.0.probleme"),
      solution: t("cas_clients.items.0.solution"),
      result: t("cas_clients.items.0.resultat"),
      stat: "+40%",
      statSub: "de réservations",
      gradient: "from-blue-600 to-indigo-600",
      glowColor: "rgba(59, 130, 246, 0.15)",
    },
    {
      id: 1,
      client: t("cas_clients.items.1.client"),
      title: t("cas_clients.items.1.titre"),
      problem: t("cas_clients.items.1.probleme"),
      solution: t("cas_clients.items.1.solution"),
      result: t("cas_clients.items.1.resultat"),
      stat: "+25%",
      statSub: "de conversion",
      gradient: "from-purple-600 to-pink-600",
      glowColor: "rgba(168, 85, 247, 0.15)",
    },
    {
      id: 2,
      client: t("cas_clients.items.2.client"),
      title: t("cas_clients.items.2.titre"),
      problem: t("cas_clients.items.2.probleme"),
      solution: t("cas_clients.items.2.solution"),
      result: t("cas_clients.items.2.resultat"),
      stat: "-10h",
      statSub: "par semaine",
      gradient: "from-orange-500 to-amber-500",
      glowColor: "rgba(245, 158, 11, 0.15)",
    },
  ];

  return (
    <SectionWrapper background="bg-white dark:bg-black/20">
      <div id="cas-clients" className="scroll-mt-20 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-purple-200/70 dark:border-purple-500/20 bg-purple-50/70 dark:bg-purple-500/10 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 tracking-wider uppercase">
              Clients accompagnés
            </span>
          </motion.div>

          <SectionHeader title={t("cas_clients.title")} />

          <p className="text-center text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto -mt-6 mb-12 md:mb-16 text-base md:text-lg leading-relaxed">
            {t("cas_clients.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {cases.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative flex flex-col justify-between p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/40 backdrop-blur-xl shadow-xl overflow-hidden group"
              style={{
                boxShadow: `0 10px 30px -10px rgba(0,0,0,0.05), 0 1px 3px 0 rgba(0,0,0,0.05), inset 0 0 20px 0 ${c.glowColor}`
              }}
            >
              {/* Top Section */}
              <div>
                {/* Client & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs md:text-sm font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase">
                    {c.client}
                  </span>
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                  {c.title}
                </h3>

                {/* Problem & Solution details */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">
                      {t("cas_clients.probleme_label")}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">
                      {c.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">
                      {t("cas_clients.solution_label")}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Stat Card */}
              <div className={`mt-auto p-5 rounded-2xl bg-gradient-to-br ${c.gradient} text-white shadow-lg relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02]`}>
                {/* Subtle Background Glow circles */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
                
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">
                  {t("cas_clients.resultat_label")}
                </h4>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-black tracking-tight">{c.stat}</span>
                  <span className="text-sm font-semibold text-white/90">{c.statSub}</span>
                </div>
                
                <p className="text-xs md:text-sm text-white/90 font-medium leading-normal mt-2">
                  {c.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
