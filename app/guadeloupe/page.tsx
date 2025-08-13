import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Création de site internet en Guadeloupe – Développeur web freelance",
  description: "Développeur web freelance basé en Guadeloupe. Sites vitrines, e‑commerce, SEO local et performances. Discutons de votre projet !",
  alternates: {
    canonical: "/guadeloupe",
  },
  openGraph: {
    title: "Création de site internet en Guadeloupe – Développeur web freelance",
    description: "Sites vitrines, e‑commerce, SEO local et performances en Guadeloupe.",
    url: "https://virgile.site/guadeloupe",
    type: "website",
  },
};

export default function GuadeloupePage() {
  return (
    <main className="min-h-[60svh] px-4 md:px-8 py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-6">
          Création de site internet en Guadeloupe
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
          Je conçois des sites rapides, accessibles et orientés résultats pour les entreprises et indépendants en Guadeloupe (Pointe‑à‑Pitre, Basse‑Terre, Les Abymes, Baie‑Mahault, Le Gosier…).
        </p>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2 mb-8">
          <li>Site vitrine, e‑commerce, landing pages</li>
          <li>SEO local (Google), performances Core Web Vitals</li>
          <li>Maintenance, refonte, accompagnement contenu</li>
        </ul>
        <Link href="/#contact" className="inline-block rounded-md bg-purple-600 text-white px-5 py-3 hover:bg-purple-700 transition-colors">
          Demander un devis gratuit
        </Link>
      </div>
    </main>
  );
}
