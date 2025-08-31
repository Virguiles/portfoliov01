"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiTarget, FiTrendingUp, FiUsers, FiExternalLink, FiCalendar, FiClock, FiUser } from "react-icons/fi";

export default function FaireSiteInternetGuadeloupePage() {
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
              Faire un site internet en Guadeloupe : Guide complet 2025
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Vous cherchez à <strong>faire un site internet en Guadeloupe</strong> ? Découvrez comment créer un site web professionnel
              qui attire des clients locaux et booste votre visibilité en ligne.
            </p>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-gray-800 mb-8">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span>Virgile Popote</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>12 mars 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>8 min de lecture</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                <strong>Expertise locale :</strong> En tant que développeur web basé en Guadeloupe, je comprends
                les besoins spécifiques des entreprises locales et les particularités du marché antillais.
              </p>
            </div>
          </header>

          {/* Contenu principal */}
          <article className="prose prose-lg max-w-none">

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Pourquoi faire un site internet en Guadeloupe en 2025 ?
              </h2>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <FiUsers className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                    Visibilité locale
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    78% des recherches locales se font sur mobile. Un site optimisé vous rend visible 24h/24.
                  </p>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <FiTarget className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                    Génération de leads
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Transformez vos visiteurs en clients avec des formulaires de contact et appels à l&apos;action ciblés.
                  </p>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <FiTrendingUp className="w-8 h-8 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                    Croissance business
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Les entreprises avec un site web génèrent 2x plus de demandes que celles sans présence en ligne.
                  </p>
                </div>
              </div>
            </section>

            {/* Étapes pour faire un site internet */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Les 7 étapes pour faire un site internet en Guadeloupe
              </h2>

              <div className="space-y-6">
                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        Définir vos objectifs
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Site vitrine, e-commerce, blog ? Quel est votre objectif principal ?
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400">
                        <li>• Présenter vos services</li>
                        <li>• Générer des contacts</li>
                        <li>• Vendre en ligne</li>
                        <li>• Renforcer votre marque</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3">
                      <span className="text-green-600 dark:text-green-400 font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        Étudier votre concurrence locale
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Analysez les sites web de vos concurrents en Guadeloupe pour identifier les bonnes pratiques.
                      </p>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-3">
                        <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                          <strong>Focus local :</strong> Recherchez &quot;restaurant Guadeloupe&quot;, &quot;coiffeur Pointe-à-Pitre&quot;, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3">
                      <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        Choisir votre nom de domaine
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Idéalement avec &quot;guadeloupe&quot; ou votre ville pour le SEO local.
                      </p>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <p>💡 <strong>Exemples :</strong> monentreprise-guadeloupe.com, monrestaurant971.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-3">
                      <span className="text-red-600 dark:text-red-400 font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        Sélectionner un développeur web local
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Travailler avec un développeur en Guadeloupe garantit une meilleure compréhension de vos besoins locaux.
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-3">
                        <p className="text-green-800 dark:text-green-200 text-sm">
                          <strong>Avantages :</strong> Disponibilité, compréhension du marché local, suivi personnalisé
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-full p-3">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        Créer le contenu de votre site
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Texte, images, coordonnées - tout doit être optimisé pour le référencement local.
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-400">
                        <li>• Description de vos services</li>
                        <li>• Photos professionnelles</li>
                        <li>• Adresse et numéro de téléphone</li>
                        <li>• Mots-clés locaux (Guadeloupe, Pointe-à-Pitre, etc.)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 dark:bg-teal-900/30 rounded-full p-3">
                      <span className="text-teal-600 dark:text-teal-400 font-bold text-lg">6</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        Développement et optimisation SEO
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Site responsive, rapide, et optimisé pour les moteurs de recherche.
                      </p>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <p>🎯 <strong>SEO local :</strong> Intégration de mots-clés comme &quot;développeur web Guadeloupe&quot;</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black/60 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-100 dark:bg-pink-900/30 rounded-full p-3">
                      <span className="text-pink-600 dark:text-pink-400 font-bold text-lg">7</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                        Lancement et suivi
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Mise en ligne, tests, et optimisation continue basée sur les analytics.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-3">
                        <p className="text-blue-800 dark:text-blue-200 text-sm">
                          <strong>Maintenance :</strong> Mise à jour régulière du contenu et suivi des performances
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technologies recommandées */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Technologies pour faire un site internet en Guadeloupe
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
                    Frontend moderne
                  </h3>
                  <ul className="space-y-2 text-blue-700 dark:text-blue-200">
                    <li>✓ React / Next.js pour les performances</li>
                    <li>✓ Tailwind CSS pour le design</li>
                    <li>✓ Responsive design mobile-first</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3">
                    Backend robuste
                  </h3>
                  <ul className="space-y-2 text-green-700 dark:text-green-200">
                    <li>✓ Ruby on Rails pour les applications complexes</li>
                    <li>✓ Base de données optimisée</li>
                    <li>✓ API sécurisées</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Budget */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Combien coûte un site internet en Guadeloupe ?
              </h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-lg mb-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4">
                    🌟 Révolution numérique avec l&apos;Intelligence Artificielle
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Grâce à l&apos;intelligence artificielle, je peux créer votre site web plus rapidement,
                    plus efficacement et avec une créativité sans limites. Fini les contraintes techniques
                    qui freinaient l&apos;innovation !
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 mb-6">
                  <div className="text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="text-3xl mb-2">⚡</div>
                    <h4 className="font-semibold text-black dark:text-white mb-2">Rapidité d&apos;exécution</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Développement accéléré grâce à l&apos;automatisation intelligente
                    </p>
                  </div>
                  <div className="text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="text-3xl mb-2">🎨</div>
                    <h4 className="font-semibold text-black dark:text-white mb-2">Liberté de création</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Designs innovants et personnalisés sans limites techniques
                    </p>
                  </div>
                  <div className="text-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="text-3xl mb-2">💰</div>
                    <h4 className="font-semibold text-black dark:text-white mb-2">Prix optimisés</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Tarifs compétitifs grâce à l&apos;efficacité de l&apos;IA
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Chaque projet est unique</strong> - les prix varient selon vos besoins spécifiques,
                    la complexité technique et vos objectifs business. Que vous ayez besoin d&apos;un site vitrine
                    élégant ou d&apos;une plateforme e-commerce performante, je m&apos;adapte à votre vision.
                  </p>
                  <p className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                    Prêt à donner vie à votre projet digital ? Contactez-moi pour un devis personnalisé !
                  </p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                <p className="text-green-800 dark:text-green-200">
                  <strong>🚀 Avantages :</strong> Bénéficiez du meilleur de la technologie moderne avec
                  des délais réduits, une qualité supérieure et des coûts optimisés grâce à l&apos;IA.
                </p>
              </div>
            </section>

            {/* Call to action */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Prêt à faire votre site internet en Guadeloupe ?
              </h2>

              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-200 dark:border-purple-800 text-center">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Créons ensemble votre présence en ligne
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Développeur web freelance en Guadeloupe, je vous accompagne dans la création d&apos;un site internet
                  professionnel qui correspond à vos besoins et à votre budget.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  De la conception à la mise en ligne, bénéficiez d&apos;un accompagnement personnalisé et d&apos;une
                  expertise technique pointue pour réussir votre projet digital.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                >
                  Démarrons votre projet
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
