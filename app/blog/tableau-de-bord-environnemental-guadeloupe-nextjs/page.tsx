"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiZap, FiCode, FiLayers, FiExternalLink, FiTrendingUp } from "react-icons/fi";
import { useSSRTranslation } from "@/lib/hooks/useSSRTranslation";
import { getArticleJsonLd, getPostBySlug } from "@/lib/blog/posts";

export default function ArticleGwadlerteDashboard() {
  const { t, i18n } = useSSRTranslation({
    "blog.back_to_blog": "Retour au blog",
    "blog.discuss_project": "Discutons de votre projet",
    "blog.see_my_work": "Voir mes réalisations",
    "blog.related_articles": "Articles complémentaires"
  });

  const currentLanguage = i18n.language || 'fr';
  const slug = "tableau-de-bord-environnemental-guadeloupe-nextjs";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd(getPostBySlug(slug))) }}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-black pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Navigation retour */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 mb-8 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            {t("blog.back_to_blog")}
          </Link>

          {/* En-tête de l'article */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                ⭐ {currentLanguage === 'en' ? "Case Study" : "Étude de cas"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              {currentLanguage === 'en' ? "Environmental Dashboard in Guadeloupe: The Power of Next.js" : "Tableau de bord environnemental Guadeloupe : La puissance de Next.js"}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium">
              {currentLanguage === 'en' ? (
                <>Designing a high-performance <strong>environmental dashboard</strong> in Guadeloupe requires a robust technical approach combining <strong>Next.js</strong> and React.</>
              ) : (
                <>Concevoir un <strong>tableau de bord environnemental</strong> performant en Guadeloupe demande une approche technique robuste alliant <strong>Next.js</strong> et React.</>
              )}
            </p>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span>Virgile Popote</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>{currentLanguage === 'en' ? "April 16, 2026" : "16 Avril 2026"}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>{currentLanguage === 'en' ? "5 min read" : "5 min de lecture"}</span>
              </div>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 mt-12">
              {currentLanguage === 'en' ? "Why GwadAlerte?" : "Pourquoi GwadAlerte ?"}
            </h2>
            <p className="text-lg mb-6">
              {currentLanguage === 'en' ? (
                <>In Guadeloupe, water management and environmental issues are critical daily topics. 
                The goal of GwadAlerte was to design a professional tool—a true <strong>Guadeloupe environmental dashboard</strong>—that allows both citizens and decision-makers to better track and understand these major territorial challenges.</>
              ) : (
                <>En Guadeloupe, la gestion de l'eau et l'attention portée aux problématiques environnementales sont des sujets cruciaux du quotidien. 
                L'objectif de GwadAlerte a été de concevoir un outil professionnel, un véritable <strong>tableau de bord environnemental Guadeloupe</strong>, qui permet aux citoyens comme aux décisionnaires de mieux suivre et comprendre ces enjeux territoriaux majeurs.</>
              )}
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
              <p className="m-0 italic">
                {currentLanguage === 'en' ? 
                  "Next.js allows us to handle high-traffic interactive maps while maintaining a light and ultra-fast application for users with limited bandwidth." :
                  "Next.js nous permet de gérer des cartes interactives à fort trafic tout en conservant une application légère et ultra-rapide pour les usagers ayant une bande passante limitée."
                }
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">
              {currentLanguage === 'en' ? "The Power of Next.js for Optimal Performance" : "La puissance de Next.js pour des performances optimales"}
            </h2>
            <p className="mb-6">
              {currentLanguage === 'en' ? (
                <>To ensure an irreproachable user experience on both mobile and desktop, the platform was built around <strong>Next.js</strong>. 
                This framework allows for hybrid rendering that ensures high display speed and excellent SEO.</>
              ) : (
                <>Pour garantir une expérience utilisateur irréprochable sur mobile comme sur ordinateur, la plateforme a été entièrement pensée autour de <strong>Next.js</strong>. 
                Ce framework permet un rendu hybride assurant une grande rapidité d'affichage et un excellent référencement naturel.</>
              )}
            </p>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <FiZap className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{currentLanguage === 'en' ? "Performance" : "Performance"}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{currentLanguage === 'en' ? "Lighthouse scores optimized for a fluid mobile experience." : "Scores Lighthouse optimisés pour une expérience mobile fluide."}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <FiTrendingUp className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{currentLanguage === 'en' ? "Local SEO" : "SEO Local"}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{currentLanguage === 'en' ? "Maximum visibility for territorial keywords." : "Visibilité maximale sur les mots-clés territoriaux."}</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <FiCode className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{currentLanguage === 'en' ? "Dynamic" : "Dynamique"}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{currentLanguage === 'en' ? "Real-time updates of environmental reports." : "Mise à jour en temps réel des signalements."}</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">
              {currentLanguage === 'en' ? "Key Features of the Dashboard" : "Fonctionnalités Clés du Tableau de Bord"}
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li>
                <strong>{currentLanguage === 'en' ? "Spatial Visualization:" : "Visualisation spatiale :"}</strong> 
                {currentLanguage === 'en' ? " Highlighting emergencies and network dysfunctions (water leaks) on an interactive map." : " Mise en évidence des urgences et dysfonctionnements réseau (fuites d'eau) sur une carte interactive."}
              </li>
              <li>
                <strong>{currentLanguage === 'en' ? "Analytical Data:" : "Données analytiques :"}</strong> 
                {currentLanguage === 'en' ? " Multi-criteria filtering powered by a robust API for clear tracking." : " Filtrage multicritère alimenté par une API robuste pour un suivi clair."}
              </li>
              <li>
                <strong>{currentLanguage === 'en' ? "Integrity & De-duplication:" : "Intégrité & Dé-doublonnage :"}</strong> 
                {currentLanguage === 'en' ? " Algorithms to validate the consistency of reports across the archipelago." : " Algorithmes pour valider la cohérence des signalements sur l'ensemble de l'archipel."}
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12">
              Conclusion
            </h2>
            <p className="text-lg mb-8">
              {currentLanguage === 'en' ? (
                <>Building a <strong>dashboard in Guadeloupe</strong> requires understanding the local specifics and using technologies that transcend technical constraints. GwadAlerte is the materialization of this expertise.</>
              ) : (
                <>Construire un <strong>dashboard en Guadeloupe</strong> demande de comprendre les spécificités locales et d'utiliser des technologies qui transcendent les contraintes techniques. GwadAlerte est la matérialisation de cette expertise.</>
              )}
            </p>
          </article>

          {/* Call to action */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-200 dark:border-purple-800 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              {currentLanguage === 'en' ? "Need a custom tool?" : "Besoin d'un outil sur-mesure ?"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {currentLanguage === 'en' ? "Whether it's an environmental dashboard, a monitoring tool, or a Next.js web application, let's talk about it." : "Qu'il s'agisse d'un tableau de bord environnemental, d'un outil de monitoring ou d'une application Web Next.js, discutons-en ensemble."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t("blog.discuss_project")}
                <FiExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
