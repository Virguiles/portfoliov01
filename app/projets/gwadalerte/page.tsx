import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GwadAlerte : Tableau de bord environnemental Guadeloupe Next.js',
  description: 'Découvrez GwadAlerte, un tableau de bord environnemental conçu pour la Guadeloupe, développé avec Next.js pour suivre les signalements de qualité de vie.',
  openGraph: {
    title: 'GwadAlerte : Tableau de bord environnemental Guadeloupe',
    description: 'Tableau de bord environnemental Next.js pour suivre les alertes et signalements en Guadeloupe.',
    url: 'https://virgile.site/projets/gwadalerte',
    images: [
      {
        url: 'https://virgile.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GwadAlerte - Tableau de bord environnemental Guadeloupe Next.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GwadAlerte : Tableau de bord environnemental Guadeloupe',
    description: 'Tableau de bord environnemental Next.js pour suivre les alertes et signalements en Guadeloupe.',
    images: ['https://virgile.site/og-image.jpg'],
  },
};

export default function GwadalerteProject() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors font-medium">
          &larr; Retour à l'accueil
        </Link>
      </div>

      <article className="prose prose-purple dark:prose-invert lg:prose-xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
          GwadAlerte : Tableau de bord environnemental Guadeloupe (Next.js)
        </h1>

        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
          GwadAlerte est une initiative de <strong>tableau de bord environnemental en Guadeloupe</strong>, développée avec les toutes dernières technologies web dont <strong>Next.js</strong> et React, dans le but d'analyser et de visualiser les signalements liés à l'eau et à l'environnement local.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-400">Pourquoi GwadAlerte ?</h2>
          <p className="mb-4">
            En Guadeloupe, la gestion de l'eau et l'attention portée aux problématiques environnementales sont des sujets cruciaux du quotidien. 
            L'objectif derrière ce projet a été de concevoir un outil ultra-performant, un véritable <em>tableau de bord environnemental Guadeloupe</em>, qui permet aux citoyens comme aux décisionnaires de mieux suivre et comprendre ces enjeux territoriaux majeurs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-400">La puissance de Next.js pour des performances optimales</h2>
          <p className="mb-4">
            Pour garantir une expérience utilisateur irréprochable sur mobile comme sur ordinateur (dans des contextes de connectivité parfois instables), la plateforme a été entièrement pensée autour de <strong>Next.js</strong>.
            Ce framework React de pointe permet un rendu hybride assurant une grande rapidité d'affichage et un excellent référencement naturel.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Performance ultime :</strong> L'architecture de Next.js assure des scores Lighthouse excellents, vitaux pour une expérience fluide.</li>
            <li><strong>Optimisation SEO local :</strong> Le mot clé "Tableau de bord environnemental Guadeloupe" est valorisé grâce au pré-rendu des pages Next.js afin d'être visible par tous les acteurs.</li>
            <li><strong>Expérience dynamique :</strong> Une interface interactive combinant géolocalisation et mise à jour des données en temps réel.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-400">Fonctionnalités Clés</h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
            <ul className="list-disc pl-6 space-y-4">
              <li>Mise en évidence spatiale des urgences et dysfonctionnements réseau (fuites d'eau, déchets).</li>
              <li>Filtrage multicritère alimenté par une API robuste créant un tableau de bord analytique clair.</li>
              <li>Algorithme de détection de doublons pour valider l'intégrité des signalements à travers l'archipel.</li>
              <li>Interface responsive native, conçue aussi bien pour les agents de terrain que pour le grand public en Guadeloupe.</li>
            </ul>
          </div>
        </section>
        
        <section className="mt-16 text-center bg-purple-50 dark:bg-purple-950/30 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">Un projet de data-visualisation territoriale ?</h3>
          <p className="mb-8 text-lg">Si vous cherchez à construire un Dashboard environnemental, un outil de monitoring ou une application Web sur-mesure (Next.js/React), discutons-en ensemble.</p>
          <a href="mailto:virgilepopote@gmail.com" className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-700 transition shadow-lg hover:shadow-xl dark:shadow-purple-900/20">
            Me contacter pour votre projet
          </a>
        </section>
      </article>
    </main>
  );
}
