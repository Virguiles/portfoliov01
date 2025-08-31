"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiCheckCircle, FiStar, FiTrendingUp } from "react-icons/fi";


export default function ArticleSEOLocal() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              SEO local en Guadeloupe : comment apparaître sur Google quand vos clients vous cherchent
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Être visible localement en Guadeloupe est crucial pour votre business. Découvrez comment
              optimiser votre site pour apparaître dans les recherches &quot;près de moi&quot; et attirer des clients locaux.
            </p>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span>Virgile Popote</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>15 mai 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>7 min de lecture</span>
              </div>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
                🌴 Pourquoi le SEO local en Guadeloupe ?
              </h3>
              <p className="text-orange-700 dark:text-orange-200 m-0">
                En Guadeloupe, les recherches locales représentent 80% du trafic web. Quand quelqu&apos;un cherche
                &quot;coiffeur Basse-Terre&quot; ou &quot;restaurant Pointe-à-Pitre&quot;, vous voulez être en première position !
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Pourquoi le SEO local est essentiel en Guadeloupe
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Le SEO local est différent du SEO classique. Il se concentre sur votre territoire et vos clients locaux :
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Recherches &quot;près de moi&quot; :</strong> 80% des utilisateurs mobiles font des recherches locales
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Concurrence locale :</strong> Moins de concurrence qu&apos;au niveau national, plus de chances de se démarquer
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Clients qualifiés :</strong> Les recherches locales ont un taux de conversion plus élevé
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Territoire limité :</strong> Plus facile de dominer un marché local qu&apos;un marché national
                </span>
              </li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                📍 Exemple concret
              </h3>
              <p className="text-blue-700 dark:text-blue-200 m-0">
                Un restaurant à Sainte-Anne qui optimise son SEO local peut apparaître en première position
                quand quelqu&apos;un cherche &quot;restaurant Sainte-Anne Guadeloupe&quot; ou &quot;manger près de la plage&quot;.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Les outils incontournables du SEO local
            </h2>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              1. Google Business Profile (anciennement Google My Business)
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              C&apos;est l&apos;outil le plus important pour le SEO local. Votre profil Google Business Profile apparaît
              dans les résultats de recherche et Google Maps.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                ⭐ Optimisation Google Business Profile
              </h4>
              <ul className="text-yellow-700 dark:text-yellow-200 text-sm space-y-2">
                <li>• Informations complètes et à jour (horaires, téléphone, adresse)</li>
                <li>• Photos professionnelles de votre établissement</li>
                <li>• Catégorie d&apos;activité précise</li>
                <li>• Réponses aux avis clients</li>
                <li>• Publications régulières (actualités, offres)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              2. Avis clients et réputation en ligne
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Les avis Google ont un impact direct sur votre positionnement local. Plus vous avez d&apos;avis positifs,
              plus Google vous fait confiance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
                  <FiStar className="w-5 h-5 text-yellow-500" />
                  Stratégie avis
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Demander des avis à vos clients satisfaits</li>
                  <li>• Répondre à tous les avis (positifs et négatifs)</li>
                  <li>• Utiliser des outils de gestion d&apos;avis</li>
                  <li>• Intégrer les avis sur votre site web.</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
                  <FiTrendingUp className="w-5 h-5 text-green-500" />
                  Impact sur le SEO
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Améliore votre positionnement local</li>
                  <li>• Augmente votre taux de clic</li>
                  <li>• Renforce la confiance des clients</li>
                  <li>• Plus d&apos;apparitions dans les résultats</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              3. Optimisation mobile et vitesse
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              En SEO local, la majorité des recherches se font sur mobile. Votre site doit être parfaitement
              optimisé pour les petits écrans et rapide à charger.
            </p>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Comment optimiser votre site pour le SEO local
            </h2>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              Stratégie 1 : Mots-clés locaux ciblés
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Intégrez des mots-clés locaux dans votre contenu. Voici des exemples pour la Guadeloupe :
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                🎯 Mots-clés locaux Guadeloupe
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-green-700 dark:text-green-200 mb-2">Villes principales :</h5>
                  <ul className="text-green-600 dark:text-green-300 text-sm space-y-1">
                    <li>• Basse-Terre</li>
                    <li>• Pointe-à-Pitre</li>
                    <li>• Le Gosier</li>
                    <li>• Sainte-Anne</li>
                    <li>• Deshaies</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-green-700 dark:text-green-200 mb-2">Mots-clés régionaux :</h5>
                  <ul className="text-green-600 dark:text-green-300 text-sm space-y-1">
                    <li>• Guadeloupe</li>
                    <li>• Antilles françaises</li>
                    <li>• Caraïbes</li>
                    <li>• Îles de Guadeloupe</li>
                    <li>• Outre-mer</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              Stratégie 2 : Pages dédiées par zone géographique
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Créez des pages spécifiques pour chaque ville ou zone où vous intervenez.
              Cela vous permet de cibler des recherches locales précises.
            </p>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              Stratégie 3 : Données structurées et schéma local
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Utilisez le balisage Schema.org pour indiquer à Google que votre entreprise est locale.
              Cela améliore votre visibilité dans les résultats locaux.
            </p>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              Stratégie 4 : Contenu local pertinent
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Créez du contenu qui parle de votre territoire : actualités locales, événements,
              spécificités de la Guadeloupe, etc.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
                💡 Idées de contenu local
              </h3>
              <ul className="text-purple-700 dark:text-purple-200 space-y-2">
                <li>•&quot;Les meilleurs endroits pour [votre activité] en Guadeloupe&quot;</li>
                <li>• &quot;Guide complet de [votre ville] : où manger, dormir, visiter&quot;</li>
                <li>• &quot;Spécificités de la Guadeloupe pour [votre domaine]&quot;</li>
                <li>• &quot;Événements et festivals en Guadeloupe&quot;</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Mesurer et améliorer votre SEO local
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Le SEO local se mesure. Voici les indicateurs à suivre :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Métriques à surveiller</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Position dans les résultats locaux</li>
                  <li>• Nombre d&apos;impressions locales</li>
                  <li>• Taux de clic local</li>
                  <li>• Trafic depuis Google Maps</li>
                  <li>• Avis et notes Google</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Outils d&apos;analyse</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Google Search Console</li>
                  <li>• Google Analytics</li>
                  <li>• Google Business Profile Insights</li>
                  <li>• SEMrush (version locale)</li>
                  <li>• Moz Local</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Erreurs courantes à éviter
            </h2>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3">
                ❌ Erreurs qui tuent votre SEO local
              </h3>
              <ul className="text-red-700 dark:text-red-200 space-y-2">
                <li>• Adresses incohérentes entre votre site et Google Business Profile</li>
                <li>• Numéros de téléphone différents selon les sources</li>
                <li>• Horaires d&apos;ouverture non mis à jour</li>
                <li>• Pas de contenu local sur votre site</li>
                <li>• Ignorer les avis clients négatifs</li>
                <li>• Ne pas optimiser pour mobile</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Combien de temps pour voir des résultats ?
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Le SEO local peut donner des résultats plus rapidement que le SEO classique :
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-black dark:text-white mb-2">Court terme</h4>
                <p className="text-3xl font-bold text-green-600 mb-2">2-4 semaines</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Optimisation Google Business Profile</p>
              </div>
              <div className="bg-white dark:bg-black/60 border-2 border-purple-500 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-black dark:text-white mb-2">Moyen terme</h4>
                <p className="text-3xl font-bold text-purple-600 mb-2">1-3 mois</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Amélioration du contenu local</p>
              </div>
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-black dark:text-white mb-2">Long terme</h4>
                <p className="text-3xl font-bold text-blue-600 mb-2">3-6 mois</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Autorité et réputation établies</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Conclusion
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Le SEO local en Guadeloupe est une opportunité en or pour les entreprises locales.
              Avec moins de concurrence qu&apos;au niveau national et un trafic local qualifié,
              vous pouvez rapidement vous démarquer et attirer de nouveaux clients.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Commencez par optimiser votre Google Business Profile, créez du contenu local pertinent,
              et soignez votre réputation en ligne. Les résultats suivront rapidement !
            </p>
          </article>

          {/* Call to action */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-200 dark:border-purple-800 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Vous voulez améliorer votre visibilité en Guadeloupe ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Je peux vous accompagner dans l&apos;optimisation de votre SEO local et vous aider à apparaître
              en première position quand vos clients vous cherchent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Je peux vous accompagner
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
                href="/blog/creer-site-vitrine-guadeloupe"
                className="block p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Créer un site vitrine en Guadeloupe
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  5 conseils pour réussir votre présence en ligne
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
