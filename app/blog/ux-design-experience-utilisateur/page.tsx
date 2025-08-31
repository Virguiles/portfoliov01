"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiCheckCircle, FiTrendingUp, FiSmartphone, FiZap, FiUsers } from "react-icons/fi";


export default function ArticleUXDesign() {
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
              UX Design : pourquoi l&apos;expérience utilisateur est la clé d&apos;un site internet efficace
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              L&apos;UX design n&apos;est pas qu&apos;une tendance, c&apos;est un facteur clé de succès pour votre site web.
              Découvrez comment une bonne expérience utilisateur peut transformer vos conversions et fidéliser vos clients.
            </p>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span>Virgile Popote</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>8 février 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>6 min de lecture</span>
              </div>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
                🎯 Le saviez-vous ?
              </h3>
              <p className="text-purple-700 dark:text-purple-200 m-0">
                Un site web avec une UX optimisée peut augmenter vos conversions de 400% et réduire
                votre taux de rebond de 60%. L&apos;expérience utilisateur n&apos;est pas un détail, c&apos;est votre avantage concurrentiel.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Qu&apos;est-ce que l&apos;UX Design ?
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              L&apos;UX Design (User Experience Design) est l&apos;art de concevoir des interfaces qui offrent
              une expérience fluide, intuitive et agréable aux utilisateurs. C&apos;est la science qui fait
              que votre site web est facile à utiliser et efficace.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
                  <FiUsers className="w-5 h-5 text-blue-500" />
                  UX ≠ UI
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  L&apos;UX se concentre sur l&apos;expérience globale, l&apos;UI sur l&apos;apparence visuelle.
                  Les deux sont complémentaires mais différents.
                </p>
              </div>
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3 flex items-center gap-2">
                  <FiTrendingUp className="w-5 h-5 text-green-500" />
                  Centré utilisateur
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  L&apos;UX design place l&apos;utilisateur au centre de la conception, pas la technologie
                  ou les préférences du développeur.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              L&apos;impact de l&apos;UX sur vos conversions
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Une bonne UX n&apos;est pas juste &quot;sympa à avoir&quot;, elle a un impact direct sur vos résultats commerciaux :
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Augmentation des conversions :</strong> +400% en moyenne pour les sites optimisés UX.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Réduction du taux de rebond :</strong> -60% grâce à une navigation intuitive.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Amélioration de la fidélisation :</strong> Les utilisateurs reviennent sur des sites faciles à utiliser.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Réduction des coûts support :</strong> Moins de questions = moins de temps passé à aider les clients.
                </span>
              </li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                📊 Exemple concret
              </h3>
              <p className="text-blue-700 dark:text-blue-200 m-0">
                            Un site e-commerce qui améliore son processus de commande (moins d&apos;étapes, formulaires plus clairs)
                peut voir son taux de conversion passer de 2% à 8% en quelques semaines.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Les bonnes pratiques UX à appliquer
            </h2>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              1. Vitesse de chargement
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              La vitesse est la première impression que vous donnez. Un site lent = un utilisateur qui part.
              Objectif : moins de 3 secondes de chargement.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                ⚡ Optimisations rapides
              </h4>
              <ul className="text-yellow-700 dark:text-yellow-200 text-sm space-y-1">
                <li>• Compresser les images (WebP, AVIF)</li>
                <li>• Utiliser un CDN pour la distribution</li>
                <li>• Minimiser CSS et JavaScript</li>
                <li>• Mettre en cache les ressources statiques</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              2. Design mobile-first
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Plus de 60% du trafic web vient du mobile. Votre site doit être parfaitement optimisé
              pour les petits écrans.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-white dark:bg-black/60 rounded-lg border border-gray-200 dark:border-gray-800">
                <FiSmartphone className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h5 className="font-semibold text-black dark:text-white">Responsive</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">S&apos;adapte à tous les écrans</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-black/60 rounded-lg border border-gray-200 dark:border-gray-800">
                <FiZap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h5 className="font-semibold text-black dark:text-white">Performance</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Optimisé pour mobile</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-black/60 rounded-lg border border-gray-200 dark:border-gray-800">
                <FiUsers className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h5 className="font-semibold text-black dark:text-white">Accessibilité</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">Facile à utiliser partout</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              3. Lisibilité et typographie
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Votre contenu doit être facile à lire. Choisissez des polices lisibles, des contrastes appropriés
              et une hiérarchie claire.
            </p>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              4. Navigation intuitive
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              L&apos;utilisateur doit toujours savoir où il est et comment aller où il veut.
              Menu clair, fil d&apos;Ariane, boutons d&apos;action visibles.
            </p>

            <h3 className="text-2xl font-bold text-black dark:text-white mb-4 mt-8">
              5. Feedback et micro-interactions
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Donnez des retours visuels à vos utilisateurs : boutons qui changent d&apos;état,
              animations subtiles, messages de confirmation.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                🎨 Exemple de micro-interaction
              </h3>
              <p className="text-green-700 dark:text-green-200 m-0">
                Un bouton qui change légèrement de couleur au survol, un formulaire qui valide en temps réel,
                une barre de progression qui se remplit... Ces petits détails font la différence.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Comment tester et améliorer l&apos;UX de votre site
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              L&apos;UX design est un processus continu. Voici comment l&apos;améliorer :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Tests utilisateurs</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Faites tester votre site par des vrais utilisateurs</li>
                  <li>• Observez où ils bloquent</li>
                  <li>• Collectez leurs retours</li>
                  <li>• Itérez et améliorez</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Outils d&apos;analyse</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Google Analytics (comportement)</li>
                  <li>• Hotjar (heatmaps)</li>
                  <li>• Google PageSpeed Insights</li>
                  <li>• Lighthouse (audit complet)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Conclusion
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              L&apos;UX design n&apos;est pas un luxe, c&apos;est un investissement qui se rentabilise rapidement.
              Un site avec une bonne expérience utilisateur convertit mieux, fidélise plus et coûte moins cher à maintenir.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                N&apos;oubliez pas : l&apos;UX se mesure. Testez, analysez, améliorez.
              Votre site web est un produit vivant qui doit évoluer avec vos utilisateurs.
            </p>
          </article>

          {/* Call to action */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-200 dark:border-purple-800 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Vous voulez un site intuitif qui convertit ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Je peux vous aider à créer un site web avec une UX optimisée qui respecte toutes ces bonnes pratiques
              et maximise vos conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Parlons de votre projet
              </Link>
              <Link
                href="/#projets"
                className="inline-flex items-center gap-2 border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Voir mes réalisations
              </Link>
            </div>
          </div>

          {/* Navigation entre articles */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Link
                href="/blog/creer-site-vitrine-guadeloupe"
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
              >
                <FiArrowLeft className="w-4 h-4" />
                Article précédent : Site vitrine en Guadeloupe
              </Link>
              <Link
                href="/blog/seo-local-guadeloupe"
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
              >
                Article suivant : SEO local en Guadeloupe
                <FiArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
