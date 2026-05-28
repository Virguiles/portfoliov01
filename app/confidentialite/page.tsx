"use client";

import React from "react";
import Link from "next/link";
import { useSSRTranslation } from "@/lib/hooks/useSSRTranslation";
import { SectionWrapper } from "../components/ui/section-wrapper";

export default function Confidentialite() {
  const fallbackValues = {
    "legal.confidentialite_titre": "Politique de Confidentialité",
    "legal.back_home": "Retour à l'accueil"
  };

  const { t, isMounted } = useSSRTranslation(fallbackValues);

  if (!isMounted) {
    return <div className="py-20" style={{ minHeight: "600px" }}></div>;
  }

  return (
    <SectionWrapper background="bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 md:py-16 text-gray-800 dark:text-zinc-300">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline text-sm font-semibold mb-6 transition-all"
          >
            ← {t("legal.back_home")}
          </Link>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            {t("legal.confidentialite_titre")}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Content Panel */}
        <div className="p-8 md:p-10 rounded-3xl border border-gray-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/40 backdrop-blur-xl shadow-xl space-y-8">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
              1. Collecte des Données Personnelles
            </h2>
            <p className="pl-3 text-sm md:text-base leading-relaxed">
              Nous collectons uniquement les informations personnelles que vous nous fournissez volontairement lors de l'utilisation de notre formulaire de contact (nom, adresse email et message). Ces données ne sont collectées que dans le but de répondre à vos demandes de renseignements ou de prestations.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
              2. Utilisation et Partage des Données
            </h2>
            <p className="pl-3 text-sm md:text-base leading-relaxed">
              Vos informations sont traitées de manière strictement confidentielle. Nous ne vendons, n'échangeons ni ne transférons vos données personnelles à des tiers. Les données transmises via notre formulaire de contact ne sont utilisées que par Virgile Popote EI pour communiquer directement avec vous.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
              3. Conservation et Sécurité des Données
            </h2>
            <p className="pl-3 text-sm md:text-base leading-relaxed">
              Les données personnelles sont conservées uniquement pendant la durée nécessaire au traitement de la correspondance ou du contrat commercial qui en découle. Nous mettons en œuvre des mesures de sécurité techniques pour protéger vos informations contre les accès non autorisés, l'altération ou la perte.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
              4. Vos Droits (Conformité RGPD)
            </h2>
            <p className="pl-3 text-sm md:text-base leading-relaxed">
              Conformément à la réglementation européenne sur la protection des données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition au traitement de vos données personnelles. Vous pouvez exercer ce droit à tout moment en écrivant à : <strong>hello@virgilepopote.com</strong>.
            </p>
          </section>

        </div>
      </div>
    </SectionWrapper>
  );
}
