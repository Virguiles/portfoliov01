"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiCalendar, FiClock, FiUser } from "react-icons/fi";

export default function BlogPage() {
  const { ready } = useTranslation();

  const articles = [
    {
      slug: "faire-site-internet-guadeloupe",
      title: "Faire un site internet en Guadeloupe : Guide complet 2025",
      excerpt: "Guide complet pour faire un site internet en Guadeloupe. Découvrez les étapes, coûts et conseils pour créer un site web professionnel qui attire des clients locaux.",
      readTime: "8 min",
      date: "2025-03-12",
      keywords: ["faire site internet", "Guadeloupe", "guide complet", "développeur web freelance", "coût site web"],
      featured: true
    },
    {
      slug: "creer-site-vitrine-guadeloupe",
      title: "Créer un site vitrine en Guadeloupe : 5 conseils pour réussir votre présence en ligne",
      excerpt: "Découvrez les étapes essentielles pour créer un site vitrine efficace qui vous permettra d&apos;être visible et de développer votre activité en Guadeloupe.",
      readTime: "5 min",
      date: "2025-04-28",
      keywords: ["site vitrine", "Guadeloupe", "création site internet", "développeur web"],
      featured: false
    },
    {
      slug: "ux-design-experience-utilisateur",
      title: "UX Design : pourquoi l'expérience utilisateur est la clé d'un site internet efficace",
      excerpt: "L'UX design n'est pas qu'une tendance, c'est un facteur clé de succès pour votre site web. Apprenez pourquoi et comment l'optimiser.",
      readTime: "6 min",
      date: "2025-02-08",
      keywords: ["UX design", "expérience utilisateur", "site web intuitif", "conversion"],
      featured: false
    },
    {
      slug: "seo-local-guadeloupe",
      title: "SEO local en Guadeloupe : comment apparaître sur Google quand vos clients vous cherchent",
      excerpt: "Optimisez votre visibilité locale en Guadeloupe avec des techniques SEO adaptées à votre territoire et à vos clients.",
      readTime: "7 min",
      date: "2025-05-15",
      keywords: ["SEO Guadeloupe", "référencement local", "Google My Business", "visibilité locale"],
      featured: false
    }
  ];

  if (!ready) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-black pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-8"></div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-black pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Breadcrumb navigation */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  accueil
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-gray-800 dark:text-gray-300 font-medium">blog</span>
              </li>
            </ol>
          </nav>

          {/* En-tête du blog - style harmonisé avec le reste de l'app */}
          <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 mt-4 text-center text-black dark:text-white tracking-tight">
              blog & conseils
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez mes conseils pour développer votre présence en ligne en Guadeloupe.
              Des articles pratiques pour améliorer votre visibilité et attirer plus de clients.
            </p>
          </div>

          {/* Articles avec design amélioré */}
          <div className="space-y-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className={`bg-white dark:bg-black/60 rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl ${
                  article.featured ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                {article.featured && (
                  <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    ⭐ article recommandé
                  </div>
                )}

                <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 leading-tight">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Métadonnées */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FiUser className="w-4 h-4" />
                    <span>Virgile Popote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Mots-clés */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                      title={`Mot-clé : ${keyword}`}
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>

                {/* Lire la suite */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium transition-colors group"
                >
                  Lire l&apos;article complet
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>

          {/* Call to action - style harmonisé */}
          <div className="mt-16 text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Besoin d&apos;aide pour votre projet web ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Ces articles vous ont donné des idées ? Parlons de votre projet et de comment je peux vous aider à le concrétiser.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Discutons de votre projet
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
