"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { useSSRTranslation } from "@/lib/hooks/useSSRTranslation";
import { getArticleJsonLd, getBreadcrumbJsonLd, getPostBySlug } from "@/lib/blog/posts";

export default function ArticlePrixSiteInternet() {
  const { t } = useSSRTranslation({
    "blog.back_to_blog": "Retour au blog",
    "cta.i_can_help": "Demander un devis",
    "blog.see_my_work": "Voir mes réalisations",
    "blog.related_articles": "Articles complémentaires"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd(getPostBySlug("combien-coute-site-internet-guadeloupe"))) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbJsonLd([
              { name: "Accueil", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: getPostBySlug("combien-coute-site-internet-guadeloupe").title, path: "/blog/combien-coute-site-internet-guadeloupe" },
            ])
          ),
        }}
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
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
              Combien coûte un site internet en Guadeloupe ? Guide des tarifs 2026
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              C&apos;est la première question que se posent les TPE et TME guadeloupéennes avant de se lancer.
              Voici les fourchettes de prix par type de site, ce qui fait varier le tarif, et pourquoi le
              moins cher n&apos;est pas toujours le plus rentable.
            </p>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span>Virgile Popote</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span>23 juillet 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>9 min de lecture</span>
              </div>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">
                🌴 Pourquoi les prix varient autant ?
              </h3>
              <p className="text-orange-700 dark:text-orange-200 m-0">
                Entre un site à 300€ et un projet sur-mesure à plusieurs milliers d&apos;euros, l&apos;écart s&apos;explique
                par ce qu&apos;il y a réellement derrière : template générique vs conception dédiée, hébergement
                mutualisé vs infrastructure fiable, et surtout, un accompagnement humain ou son absence.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Les fourchettes de prix par type de site
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Voici des ordres de grandeur constatés sur le marché du développement web freelance. Chaque
              projet reste unique : ces chiffres donnent un cadre, pas un devis.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Site vitrine simple</h4>
                <p className="text-2xl font-bold text-purple-600 mb-3">à partir de 300€</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Quelques pages (accueil, services, contact), design adapté à votre identité, optimisé mobile
                  et référencement de base.
                </p>
              </div>
              <div className="bg-white dark:bg-black/60 border-2 border-purple-500 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Site vitrine premium</h4>
                <p className="text-2xl font-bold text-purple-600 mb-3">à partir de 1 500€</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Design entièrement sur-mesure, plus de pages, animations, SEO local approfondi, textes optimisés.
                </p>
              </div>
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Site e-commerce</h4>
                <p className="text-2xl font-bold text-purple-600 mb-3">à partir de 2 500€</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Catalogue produits, paiement en ligne sécurisé, gestion des stocks et des commandes.
                </p>
              </div>
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">Application sur-mesure</h4>
                <p className="text-2xl font-bold text-purple-600 mb-3">sur devis</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Outil métier, tableau de bord, plateforme avec logique spécifique à votre activité.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                📍 Bon à savoir
              </h3>
              <p className="text-blue-700 dark:text-blue-200 m-0">
                Un devis sérieux se construit après un échange sur vos besoins réels, pas avant. Méfiez-vous
                des tarifs annoncés sans aucune question sur votre activité.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Ce qui fait varier le prix
            </h2>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Le nombre de pages et de fonctionnalités :</strong> un formulaire de réservation, une
                  galerie photo ou un espace client demandent plus de développement qu&apos;une simple page de contact.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Template vs design sur-mesure :</strong> personnaliser une charte graphique unique prend
                  plus de temps que d&apos;adapter un modèle existant, mais évite d&apos;avoir un site qui ressemble à cent autres.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Le contenu et la rédaction :</strong> textes optimisés SEO, photos professionnelles et
                  traductions ajoutent de la valeur mais aussi du temps de production.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Le SEO local :</strong> un site pensé dès le départ pour{" "}
                  <Link href="/guadeloupe" className="underline hover:text-purple-600 dark:hover:text-purple-400">
                    apparaître dans les recherches locales en Guadeloupe
                  </Link>{" "}
                  demande un travail spécifique sur les mots-clés, la structure et les données structurées.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>La maintenance et le suivi :</strong> un accompagnement après la mise en ligne
                  (mises à jour, corrections, évolutions) a un coût, qu&apos;il soit inclus ou facturé à part.
                </span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Template no-code vs développement sur-mesure
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Les solutions no-code (Wix, Squarespace, constructeurs de sites) permettent de démarrer vite et
              à moindre coût. Le développement sur-mesure demande un budget plus élevé au départ, mais offre
              plus de contrôle sur la performance, le référencement et l&apos;évolution du site.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">No-code / constructeur</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Mise en ligne rapide</li>
                  <li>• Coût de départ réduit</li>
                  <li>• Personnalisation et performance limitées</li>
                  <li>• Abonnement mensuel qui dure dans le temps</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-black/60 border-2 border-purple-500 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Développement sur-mesure</h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Site pensé pour vos besoins précis</li>
                  <li>• Performance et SEO optimisés dès la conception</li>
                  <li>• Vous êtes propriétaire du code et du contenu</li>
                  <li>• Investissement initial plus important</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Le piège du site pas cher
            </h2>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                <FiAlertTriangle className="w-5 h-5" />
                Ce que cache souvent un tarif anormalement bas
              </h3>
              <ul className="text-red-700 dark:text-red-200 space-y-2">
                <li>• Un template générique déjà utilisé par des centaines d&apos;autres sites</li>
                <li>• Aucun travail de référencement, donc aucune visibilité sur Google</li>
                <li>• Un hébergement lent qui pénalise l&apos;expérience mobile</li>
                <li>• Pas de suivi une fois le site livré : la moindre modification devient compliquée</li>
                <li>• Un site à refaire entièrement 1 à 2 ans plus tard, donc payé deux fois</li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Un site qui n&apos;est jamais vu par vos clients parce qu&apos;il n&apos;apparaît pas dans les recherches
              locales ne coûte pas cher : il coûte tout ce qu&apos;il aurait pu rapporter.
            </p>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Le budget à prévoir après la mise en ligne
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Le prix de création n&apos;est pas le seul coût à anticiper. Voici ce qui revient chaque année :
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center">
                <h4 className="text-lg font-bold text-black dark:text-white mb-2">Nom de domaine</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Quelques euros par an</p>
              </div>
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center">
                <h4 className="text-lg font-bold text-black dark:text-white mb-2">Hébergement</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Variable selon la solution technique</p>
              </div>
              <div className="bg-white dark:bg-black/60 border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center">
                <h4 className="text-lg font-bold text-black dark:text-white mb-2">Maintenance</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Selon le niveau de suivi souhaité</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Comment obtenir un devis précis
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Avant de demander un devis, préparez quelques éléments pour obtenir un chiffrage fiable et rapide :
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8">
              <ul className="text-purple-700 dark:text-purple-200 space-y-2">
                <li>• Le nombre de pages et de fonctionnalités souhaitées</li>
                <li>• Des exemples de sites que vous aimez (ou que vous voulez éviter)</li>
                <li>• Si vous avez déjà des textes, photos ou un logo</li>
                <li>• Votre budget approximatif, même large</li>
                <li>• Votre échéance de mise en ligne</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-12">
              Conclusion
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Le prix d&apos;un site internet en Guadeloupe dépend surtout de ce que vous en attendez : une
              simple vitrine ou un véritable outil de croissance. Le bon réflexe n&apos;est pas de chercher le
              tarif le plus bas, mais de comparer ce qui est réellement inclus derrière chaque offre.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Pour aller plus loin, consultez notre{" "}
              <Link href="/blog/faire-site-internet-guadeloupe" className="underline hover:text-purple-600 dark:hover:text-purple-400">
                guide complet pour faire un site internet en Guadeloupe
              </Link>.
            </p>
          </article>

          {/* Call to action */}
          <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-200 dark:border-purple-800 text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Envie d&apos;un chiffrage précis pour votre projet ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Parlons de vos besoins pour construire un devis adapté à votre activité et à votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t("cta.i_can_help")}
              </Link>
              <Link
                href="/#projets"
                className="inline-flex items-center gap-2 border border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t("blog.see_my_work")}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
