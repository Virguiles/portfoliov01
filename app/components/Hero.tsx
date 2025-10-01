"use client"

import { useSSRTranslation } from "../../lib/hooks/useSSRTranslation";
import { lazy, Suspense } from "react";

const HeroParticle = lazy(() => import("../../components/HeroParticle").then(m => ({ default: m.HeroParticle })));

export default function HeroSection() {
    const fallbackValues = {
        "hero_creative": "CREATIVE",
        "hero_designer": "DESIGNER",
        "hero_and": "&",
        "hero_developer": "DÉVELOPPEUR",
        "hero_web": "WEB"
    };

    const { t } = useSSRTranslation(fallbackValues);

    const heroCreativeText = t("hero_creative");
    const heroDesignerText = t("hero_designer");
    const heroAndText = t("hero_and");
    const heroDeveloperText = t("hero_developer");
    const heroWebText = t("hero_web");

    return (
        <div className="relative min-h-[100svh] h-[100svh] w-full" style={{ contain: 'layout style paint' }}>
            <div className="absolute inset-0">
                <Suspense fallback={null}>
                    <HeroParticle />
                </Suspense>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-2">
                <div className="w-full max-w-4xl px-4 sm:px-2">
					<h1 className="sr-only">Développeur web freelance en Guadeloupe</h1>
                    <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h2 className="hero-title text-center text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight whitespace-pre-line">
                            {`${heroCreativeText}\n${heroDesignerText}\n${heroAndText}\n${heroDeveloperText}\n${heroWebText}`}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
