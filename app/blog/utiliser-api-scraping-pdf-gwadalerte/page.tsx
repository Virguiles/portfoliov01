"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiCode, FiDatabase, FiLayers, FiExternalLink } from "react-icons/fi";
import { useSSRTranslation } from "@/lib/hooks/useSSRTranslation";
import { getArticleJsonLd, getPostBySlug } from "@/lib/blog/posts";

export default function ArticleApiScraping() {
  const { t, i18n } = useSSRTranslation({
    "blog.back_to_blog": "Retour au blog",
    "blog.discuss_project": "Discutons de votre projet",
    "blog.see_my_work": "Voir mes réalisations",
    "blog.related_articles": "Articles complémentaires"
  });

  const currentLanguage = i18n.language || 'fr';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd(getPostBySlug("utiliser-api-scraping-pdf-gwadalerte"))) }}
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
                ⭐ Case Study
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              {currentLanguage === 'en' ? "API Usage and PDF Scraping: The Gwad'Alerte Example" : "Utilisation d'API et scraping de PDF : L'exemple Gwad'Alerte"}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {currentLanguage === 'en' ? (
                <>In Guadeloupe, access to water information is crucial. Discover how the <strong>Gwad'Alerte</strong> project uses PDF scraping to make SMGEAG announcements finally accessible to everyone.</>
              ) : (
                <>En Guadeloupe, l'accès à l'information sur l'eau est crucial. Découvrez comment le projet <strong>Gwad'Alerte</strong> utilise le scraping de PDF pour rendre les communiqués de la SMGEAG enfin accessibles à tous.</>
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
                <span>{currentLanguage === 'en' ? "January 04, 2026" : "04 Janvier 2026"}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>{currentLanguage === 'en' ? "6 min read" : "6 min de lecture"}</span>
              </div>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                {currentLanguage === 'en' ? "🤔 The Problem" : "🤔 Le Problème"}
              </h3>
              <p className="text-blue-700 dark:text-blue-200 m-0">
                {currentLanguage === 'en' ?
                  "The SMGEAG (Mixed Syndicate for Water and Sanitation Management of Guadeloupe) publishes information on water rotations and cuts mainly in the form of PDF files or images on their website and social networks. These formats are difficult to read on mobile and impossible to process automatically." :
                  "La SMGEAG (Syndicat Mixte de Gestion de l'Eau et de l'Assainissement de Guadeloupe) publie les informations sur les tours d'eau et les coupures principalement sous forme de fichiers PDF ou d'images sur leur site web et réseaux sociaux. Ces formats sont difficilement lisibles sur mobile et impossibles à exploiter automatiquement."
                }
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              {currentLanguage === 'en' ? "1. From Raw Data to Useful Information" : "1. De la donnée brute à l'information utile"}
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {currentLanguage === 'en' ? (
                <>To solve this accessibility problem, I developed <a href="https://gwadalerte.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline hover:text-purple-800">Gwad'Alerte</a>. The goal was simple: transform static PDF documents into a dynamic and responsive web application.</>
              ) : (
                <>Pour résoudre ce problème d'accessibilité, j'ai développé <a href="https://gwadalerte.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline hover:text-purple-800">Gwad'Alerte</a>. L'objectif était simple : transformer des documents PDF statiques en une application web dynamique et réactive.</>
              )}
            </p>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <FiDatabase className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{currentLanguage === 'en' ? "Before (PDF)" : "Avant (PDF)"}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  {currentLanguage === 'en' ? (
                    <>
                      <li>Heavy files to download</li>
                      <li>Not responsive (zoom required)</li>
                      <li>No search possible</li>
                      <li>No notifications</li>
                    </>
                  ) : (
                    <>
                      <li>Fichiers lourds à télécharger</li>
                      <li>Non responsive (zoom nécessaire)</li>
                      <li>Pas de recherche possible</li>
                      <li>Pas de notifications</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <FiLayers className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{currentLanguage === 'en' ? "After (Gwad'Alerte)" : "Après (Gwad'Alerte)"}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  {currentLanguage === 'en' ? (
                    <>
                      <li>Fluid and fast interface</li>
                      <li>Search by municipality</li>
                      <li>Interactive map</li>
                      <li>Data always up to date</li>
                    </>
                  ) : (
                    <>
                      <li>Interface fluide et rapide</li>
                      <li>Recherche par commune</li>
                      <li>Carte interactive</li>
                      <li>Données toujours à jour</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              {currentLanguage === 'en' ? "2. The Technical Architecture" : "2. L'architecture technique"}
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {currentLanguage === 'en' ?
                "The core of the system relies on a process of scraping and data normalization. Here is how it works behind the scenes:" :
                "Le cœur du système repose sur un processus de scraping et de normalisation des données. Voici comment cela fonctionne en coulisses :"
              }
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 font-bold text-purple-600 dark:text-purple-400">1</div>
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white">{currentLanguage === 'en' ? "Detection" : "Détection"}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{currentLanguage === 'en' ? "A bot monitors the SMGEAG website at regular intervals to detect new announcements." : "Un bot surveille le site de la SMGEAG à intervalles réguliers pour détecter les nouveaux communiqués."}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 font-bold text-purple-600 dark:text-purple-400">2</div>
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white">{currentLanguage === 'en' ? "Extraction (OCR & Parsing)" : "Extraction (OCR & Parsing)"}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{currentLanguage === 'en' ? "The content of the PDF is extracted. For images, OCR (Optical Character Recognition) techniques are used to read the text contained in the visuals." : "Le contenu des PDF est extrait. Pour les images, des techniques d'OCR (Reconnaissance Optique de Caractères) sont utilisées pour lire le texte contenu dans les visuels."}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 font-bold text-purple-600 dark:text-purple-400">3</div>
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white">{currentLanguage === 'en' ? "Structuring" : "Structuration"}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{currentLanguage === 'en' ? "Raw text is analyzed to identify key entities: affected municipalities, neighborhoods, dates, and times of outage. This data is converted into standardized JSON format." : "Le texte brut est analysé pour identifier les entités clés : communes concernées, quartiers, dates et heures de coupure. Ces données sont converties en format JSON standardisé."}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 font-bold text-purple-600 dark:text-purple-400">4</div>
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white">{currentLanguage === 'en' ? "Distribution" : "Diffusion"}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{currentLanguage === 'en' ? "The API makes this clean data available to the Gwad'Alerte frontend, allowing for instant and user-friendly display." : "L'API met à disposition ces données propres au frontend Gwad'Alerte, permettant un affichage instantané et convivial."}</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              {currentLanguage === 'en' ? "3. Why Scraping is Essential for Open Data" : "3. Pourquoi le Scraping est essentiel pour l'Open Data"}
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {currentLanguage === 'en' ?
                "In an ideal world, all institutions would provide public APIs. In reality, much valuable information remains \"locked\" in unstructured formats." :
                "Dans un monde idéal, toutes les institutions fourniraient des API publiques. En réalité, beaucoup d'informations précieuses restent \"enfermées\" dans des formats non structurés."
              }
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {currentLanguage === 'en' ?
                "Ethical scraping, like that done for Gwad'Alerte, plays a civic role by democratizing access to public information. It helps bridge the technological gap and offer modern services to users without waiting for a redesign of institutional systems." :
                "Le scraping éthique, comme celui réalisé pour Gwad'Alerte, joue un rôle citoyen en démocratisant l'accès à l'information publique. Il permet de combler le fossé technologique et d'offrir des services modernes aux usagers sans attendre une refonte des systèmes institutionnels."
              }
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center gap-2">
                <FiCode className="w-5 h-5" />
                Developer Advocacy
              </h3>
              <p className="text-green-700 dark:text-green-200 m-0 leading-relaxed">
                {currentLanguage === 'en' ? (
                  <>
                    This project perfectly illustrates the importance of making data accessible. My vision of <strong>Developer Advocacy</strong> is to help developers overcome technical barriers to access web data, regardless of its original format, and to transform that complexity into opportunities.
                  </>
                ) : (
                  <>
                    Ce projet illustre parfaitement l'importance de rendre la donnée accessible. Ma vision du <strong>Developer Advocacy</strong> est d'aider les développeurs à surmonter les barrières techniques pour accéder aux données du web, quel que soit leur format d'origine, et de transformer cette complexité en opportunités.
                  </>
                )}
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Conclusion
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {currentLanguage === 'en' ? (
                <>Gwad'Alerte is more than just an application: it is a demonstration of the power of scraping to solve concrete daily problems. By transforming unreadable PDFs into useful data, we give power back to the users.</>
              ) : (
                <>Gwad'Alerte est plus qu'une simple application : c'est une démonstration de la puissance du scraping pour résoudre des problèmes concrets du quotidien. En transformant des PDF illisibles en données utiles, nous redonnons le pouvoir aux usagers.</>
              )}
            </p>
          </article>

          {/* Call to action */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-200 dark:border-purple-800 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              {currentLanguage === 'en' ? "Interested in Scraping or Open Data?" : "Intéressé par le scraping ou l'Open Data ?"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {currentLanguage === 'en' ? "Discover Gwad'Alerte live or contact me to discuss your data challenges." : "Découvrez Gwad'Alerte en live ou contactez-moi pour échanger sur vos problématiques de données."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://gwadalerte.netlify.app/"
                target="_blank"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {currentLanguage === 'en' ? "Visit Gwad'Alerte" : "Visiter Gwad'Alerte"}
                <FiExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t("blog.discuss_project")}
              </Link>
            </div>
          </div>

          {/* Liens vers d'autres articles */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-black dark:text-white mb-6">
              {t("blog.related_articles")}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/creer-site-vitrine-guadeloupe"
                className="block p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  {currentLanguage === 'en' ? "Create a showcase website in Guadeloupe" : "Créer un site vitrine en Guadeloupe"}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {currentLanguage === 'en' ? "Tips for a successful online presence" : "Conseils pour réussir votre présence en ligne"}
                </p>
              </Link>
              <Link
                href="/blog/seo-local-guadeloupe"
                className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors border border-blue-200 dark:border-blue-800"
              >
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {currentLanguage === 'en' ? "Local SEO in Guadeloupe" : "SEO local en Guadeloupe"}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {currentLanguage === 'en' ? "How to appear on Google when your clients search for you" : "Comment apparaître sur Google quand vos clients vous cherchent"}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
