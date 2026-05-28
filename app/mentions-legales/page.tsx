"use client";

import React from "react";
import Link from "next/link";
import { useSSRTranslation } from "@/lib/hooks/useSSRTranslation";
import { SectionWrapper } from "../components/ui/section-wrapper";

export default function MentionsLegales() {
  const fallbackValues = {
    "legal.mentions_titre": "Mentions Légales",
    "legal.back_home": "Retour à l'accueil"
  };

  const { t, isMounted } = useSSRTranslation(fallbackValues);

  if (!isMounted) {
    return <div className="py-20" style={{ minHeight: "600px" }}></div>;
  }

  return (
    <SectionWrapper background="bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 md:py-16 text-gray-800 dark:text-zinc-300">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline text-sm font-semibold mb-6 transition-all"
          >
            ← {t("legal.back_home")}
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            {t("legal.mentions_titre")}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Content Panel */}
        <div className="p-8 md:p-10 rounded-3xl border border-gray-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/40 backdrop-blur-xl shadow-xl space-y-8">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
              1. Éditeur du Site
            </h2>
            <div className="pl-3 space-y-1 text-sm md:text-base leading-relaxed">
              <p><strong>Nom de l'entreprise :</strong> Virgile Popote EI</p>
              <p><strong>Responsable de la publication :</strong> Virgile Popote</p>
              <p><strong>Statut professionnel :</strong> Entrepreneur Individuel / Développeur Web Freelance</p>
              <p><strong>Siège social :</strong> Guadeloupe, France</p>
              <p><strong>Contact email :</strong> hello@virgilepopote.com</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
              2. Hébergement du Site
            </h2>
            <div className="pl-3 space-y-1 text-sm md:text-base leading-relaxed">
              <p>Le site est hébergé de manière sécurisée par :</p>
              <p><strong>Hébergeur :</strong> Netlify, Inc.</p>
              <p><strong>Adresse :</strong> 512 2nd Street, Suite 200, San Francisco, CA 94107, USA</p>
              <p><strong>Site internet :</strong> https://www.netlify.com</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
              3. Propriété Intellectuelle
            </h2>
            <p className="pl-3 text-sm md:text-base leading-relaxed">
              L'ensemble des contenus de ce site (textes, designs, graphismes, logos, codes sources, icônes) est la propriété exclusive de Virgile Popote, sauf mentions contraires ou contenus tiers spécifiquement référencés. Toute reproduction ou distribution sans autorisation préalable écrite est strictement interdite.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
              4. Cookies & Statistiques
            </h2>
            <p className="pl-3 text-sm md:text-base leading-relaxed">
              Ce site utilise des cookies de mesure d'audience anonymes pour analyser le trafic et améliorer l'expérience utilisateur. Vous pouvez accepter ou refuser ces cookies via la bannière de consentement visible à tout moment sur le site.
            </p>
          </section>

        </div>
      </div>
    </SectionWrapper>
  );
}
