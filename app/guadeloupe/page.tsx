"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiExternalLink } from "react-icons/fi";

export default function GuadeloupePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-black pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Navigation retour */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 mb-8 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>

          {/* En-tête de la page */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              Développeur web freelance en Guadeloupe – Création de sites internet modernes et optimisés SEO
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Vous êtes entrepreneur, commerçant, artisan ou dirigeant d&apos;une une PME en Guadeloupe ?
              <br />
              Aujourd&apos;hui, avoir un site internet professionnel n&apos;est plus une option, c&apos;est la clé pour être visible, attirer de nouveaux clients et développer votre activité.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Je suis Virgile Popote, développeur web freelance basé en Guadeloupe, spécialisé dans la création de sites vitrines et d&apos;applications web sur-mesure.
              <br />
              Mon objectif : vous aider à bâtir une présence en ligne qui reflète votre identité et qui génère des résultats.
            </p>
          </header>

          {/* Section principale */}
          <article className="prose prose-lg max-w-none">
            {/* Pourquoi un site internet est essentiel */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Pourquoi un site internet est essentiel en Guadeloupe ?
              </h2>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                  💡 Le saviez-vous ?
                </h3>
                <p className="text-blue-700 dark:text-blue-200 m-0">
                  La majorité des internautes recherchent des services via Google et leur smartphone.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>SEO local :</strong> Le SEO local vous permet d&apos;apparaître en haut des résultats pour des recherches comme &quot;restaurant en Guadeloupe&quot;, &quot;coiffeur Gosier&quot;, ou &quot;développeur web Guadeloupe&quot;.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Crédibilité :</strong> Un site vitrine moderne rassure vos prospects et renforce votre crédibilité face à la concurrence.
                  </span>
                </li>
              </ul>
            </section>

            {/* Mes services en Guadeloupe */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Mes services en Guadeloupe
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                    🎨 Création de sites vitrines
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Sites modernes et responsives adaptés mobile et tablette
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                      Responsive
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                      Mobile First
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                    ⚡ Technologies performantes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Développement sur-mesure avec Ruby on Rails, React, Tailwind CSS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                      Ruby on Rails
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                    🔍 Optimisation SEO locale
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Apparaître dans les recherches Google en Guadeloupe
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                      SEO Local
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                      Google
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                    🎯 Design UI/UX
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Navigation claire et expérience utilisateur agréable
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-3 py-1 rounded-full text-sm">
                      UI/UX
                    </span>
                    <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-3 py-1 rounded-full text-sm">
                      Navigation
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Accompagnement personnalisé */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Un accompagnement pensé pour les entreprises guadeloupéennes
              </h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 p-6 rounded-lg mb-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Chaque projet est unique. Que vous soyez une petite entreprise locale, un commerce de proximité ou une startup ambitieuse, je m&apos;adapte à vos besoins pour créer un site internet efficace et durable.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  En travaillant ensemble, vous bénéficiez d&apos;un partenaire de proximité qui comprend les réalités du marché guadeloupéen et qui reste disponible pour vous conseiller.
                </p>
              </div>
            </section>

            {/* SEO local */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Gagnez en visibilité avec le SEO local
              </h2>


              <p className="text-lg text-gray-700 dark:text-gray-300">
                Je mets en place les bonnes pratiques SEO pour améliorer votre visibilité et attirer plus de clients.
              </p>
            </section>

            {/* Call to action */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Contactez-moi dès aujourd&apos;hui
              </h2>

              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-200 dark:border-purple-800 text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Vous êtes en Guadeloupe et vous cherchez un développeur web freelance pour créer un site internet moderne, rapide et optimisé SEO ?
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Contactez-moi dès maintenant et donnons vie à votre projet digital.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                >
                  Discutons de votre projet
                  <FiExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
