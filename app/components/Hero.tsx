"use client"

import { HeroParticle } from "../../components/HeroParticle";
import { GradualSpacing } from "@/app/components/ui/gradual-spacing";
import { useSSRTranslation } from "../../lib/hooks/useSSRTranslation";

export default function HeroSection() {
    const fallbackValues = {
        "hero_creative": "CREATIVE",
        "hero_designer": "DESIGNER",
        "hero_and": "&",
        "hero_developer": "DÉVELOPPEUR",
        "hero_web": "WEB"
    };

    const { t, isI18nReady } = useSSRTranslation(fallbackValues);

    const heroCreativeText = t("hero_creative");
    const heroDesignerText = t("hero_designer");
    const heroAndText = t("hero_and");
    const heroDeveloperText = t("hero_developer");
    const heroWebText = t("hero_web");

    return (
        <div className="relative min-h-[100svh] h-[100svh] w-full" style={{ contain: 'layout style paint' }}>
            <div className="absolute inset-0">
                <HeroParticle />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-2">
                <div className="w-full max-w-4xl px-4 sm:px-2">
					<h1 className="sr-only">Développeur web freelance en Guadeloupe</h1>
                    {isI18nReady ? (
                        <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <GradualSpacing
                                text={`${heroCreativeText}\n${heroDesignerText}\n${heroAndText}\n${heroDeveloperText}\n${heroWebText}`}
                                duration={0.3}
                                delayMultiple={0.02}
                                key="hero-text"
                            />
                        </div>
                    ) : (
                        // Skeleton loader avec dimensions prédéfinies
                        <div className="flex flex-col items-center gap-4" style={{ minHeight: '200px' }}>
                            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-8 w-32 rounded" style={{ width: '128px', height: '32px' }}></div>
                            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-16 w-64 rounded" style={{ width: '256px', height: '64px' }}></div>
                            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-8 w-8 rounded" style={{ width: '32px', height: '32px' }}></div>
                            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-16 w-80 rounded" style={{ width: '320px', height: '64px' }}></div>
                            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-8 w-16 rounded" style={{ width: '64px', height: '32px' }}></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
