"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiCheckCircle, FiAlertTriangle, FiExternalLink } from "react-icons/fi";

export default function ArticleSiteVitrine() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-black pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Navigation retour */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 mb-8 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          {/* En-tête de l'article */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                ⭐ Article recommandé
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              Créer un site vitrine en Guadeloupe : 5 conseils pour réussir votre présence en ligne
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              En 2025, avoir un site vitrine professionnel n&apos;est plus une option pour les entreprises en Guadeloupe.
              C&apos;est un outil essentiel pour attirer de nouveaux clients et développer votre activité locale.
            </p>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span>Virgile Popote</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>28 avril 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>5 min de lecture</span>
              </div>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                💡 Pourquoi cet article ?
              </h3>
              <p className="text-blue-700 dark:text-blue-200 m-0">
                En tant que développeur web freelance en Guadeloupe, je vois trop d&apos;entreprises locales
                qui passent à côté d&apos;opportunités commerciales faute d&apos;une présence en ligne efficace.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              1. Pourquoi un site vitrine est indispensable en 2025
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Les réseaux sociaux sont utiles, mais ils ne remplacent pas un site vitrine professionnel.
              Voici pourquoi :
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Contrôle total :</strong> Vous possédez votre site, contrairement aux réseaux sociaux
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>SEO local :</strong> Apparaître dans les résultats Google quand on cherche vos services en Guadeloupe
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Crédibilité :</strong> Un site pro renforce la confiance de vos clients potentiels
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              2. Les erreurs fréquentes à éviter
            </h2>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                <FiAlertTriangle className="w-5 h-5" />
                Erreurs qui tuent votre site
              </h3>
              <ul className="space-y-2 text-red-700 dark:text-red-200">
                <li>• Site trop lent (plus de 3 secondes de chargement)</li>
                <li>• Pas responsive (inutilisable sur mobile)</li>
                <li>• Navigation confuse et peu intuitive</li>
                <li>• Pas optimisé pour Google (SEO inexistant)</li>
                <li>• Hébergement peu fiable (site souvent inaccessible)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              3. Les 5 conseils pour réussir votre site vitrine
            </h2>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              Conseil n°1 : Design simple et efficace
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Privilégiez la simplicité. Un design épuré avec une navigation claire est plus efficace
              qu&apos;un site surchargé d&apos;animations. Votre message doit passer en moins de 5 secondes.
            </p>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              Conseil n°2 : Navigation intuitive
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Vos visiteurs doivent trouver l&apos;information en maximum 3 clics. Organisez votre contenu
              de manière logique : Accueil, Services, À propos, Contact.
            </p>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              Conseil n°3 : SEO local optimisé
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Intégrez des mots-clés locaux (votre ville, &quot;Guadeloupe&quot;, &quot;Antilles&quot;) et créez des
              pages dédiées à vos zones d&apos;intervention. Google My Business est votre ami !
            </p>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              Conseil n°4 : Call-to-Action clairs
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Chaque page doit avoir un objectif clair. Que voulez-vous que vos visiteurs fassent ?
              Appeler ? Prendre rendez-vous ? Demander un devis ? Guidez-les !.
            </p>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              Conseil n°5 : Hébergement fiable
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Choisissez un hébergeur avec une bonne disponibilité (99,9% minimum) et des serveurs.
              en France ou en Europe pour de meilleures performances en Guadeloupe.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                🎯 Exemple concret
              </h3>
              <p className="text-green-700 dark:text-green-200 m-0">
                Un restaurant en Guadeloupe qui optimise son site pour &quot;restaurant [ville] Guadeloupe&quot;
                peut voir son trafic local augmenter de 200% en quelques mois.
              </p>
            </div>


            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Conclusion
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Un site vitrine bien conçu est un investissement rentable pour votre entreprise en Guadeloupe.
              Il vous permet d&apos;être visible 24h/24, d&apos;attirer de nouveaux clients et de renforcer votre image de marque.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              N&apos;oubliez pas : la qualité prime sur la quantité. Mieux vaut un site simple mais efficace
              qu&apos;un site complexe qui ne fonctionne pas.
            </p>
          </article>

          {/* Call to action */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-200 dark:border-purple-800 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Besoin d&apos;un site vitrine adapté à votre activité en Guadeloupe ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Je peux vous accompagner dans la création d&apos;un site professionnel qui respecte tous ces principes
              et vous permet d&apos;être visible sur le web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Discutons de votre projet
                <FiExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href="/#projets"
                className="inline-flex items-center gap-2 border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Voir mes réalisations
              </Link>
            </div>
          </div>

          {/* Liens vers d'autres articles */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-black dark:text-white mb-6">
              Articles complémentaires
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/seo-local-guadeloupe"
                className="block p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  SEO local en Guadeloupe
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Optimisez votre visibilité sur Google en Guadeloupe
                </p>
              </Link>
              <Link
                href="/blog/faire-site-internet-guadeloupe"
                className="block p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800/50 transition-colors border border-purple-200 dark:border-purple-800"
              >
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Guide complet : Faire un site internet en Guadeloupe
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Les 7 étapes pour créer votre site web professionnel
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
