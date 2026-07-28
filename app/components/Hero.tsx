"use client"

import { useSSRTranslation } from "../../lib/hooks/useSSRTranslation";
import { lazy, Suspense } from "react";
import { BlurFade } from "../../components/magicui/blur-fade";

const HeroParticle = lazy(() => import("../../components/HeroParticle").then(m => ({ default: m.HeroParticle })));

export default function HeroSection() {
  const fallbackValues = {
    "hero_creative": "CREATIVE",
    "hero_designer": "DESIGNER",
    "hero_and": "&",
    "hero_developer": "DÉVELOPPEUR",
    "hero_web": "WEB",
    "hero_subtitle": "J'accompagne les TPE/PME dans leur transformation numérique grâce à des sites web performants, un référencement local efficace et des outils sur mesure."
  };

  const { t } = useSSRTranslation(fallbackValues);

  const heroCreativeText = t("hero_creative");
  const heroDesignerText = t("hero_designer");
  const heroAndText = t("hero_and");
  const heroDeveloperText = t("hero_developer");
  const heroWebText = t("hero_web");
  const heroSubtitleText = t("hero_subtitle");

  return (
    <div className="relative min-h-[100svh] h-[100svh] w-full" style={{ contain: 'layout style paint' }}>
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <HeroParticle />
        </Suspense>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-2">
        <div className="w-full max-w-4xl px-4 sm:px-2 flex flex-col items-center">

          <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            {/* Titre en cascade : chaque ligne entre légèrement décalée, ce qui
                donne le rythme d'entrée « Magic UI » sans coûter de layout. */}
            <h1 className="hero-title text-center text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] text-black dark:text-white">
              {[heroCreativeText, heroDesignerText, heroAndText, heroDeveloperText, heroWebText].map(
                (line, i) => (
                  <BlurFade key={i} inView={false} delay={i * 0.08} yOffset={8} className="block">
                    {line}
                  </BlurFade>
                )
              )}
            </h1>
          </div>
          <BlurFade inView={false} delay={0.48} yOffset={8}>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-white/80 text-center max-w-2xl mx-auto font-light leading-relaxed">
              {heroSubtitleText}
            </p>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
