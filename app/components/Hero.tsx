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

    const { t } = useSSRTranslation(fallbackValues);

    const heroCreativeText = t("hero_creative");
    const heroDesignerText = t("hero_designer");
    const heroAndText = t("hero_and");
    const heroDeveloperText = t("hero_developer");
    const heroWebText = t("hero_web");

    return (
        <div className="relative min-h-[100svh] h-[100svh] w-full">
            <div className="absolute inset-0">
                <HeroParticle />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-2">
                <div className="w-full max-w-4xl px-4 sm:px-2">
					<h1 className="sr-only">Développeur web freelance en Guadeloupe</h1>
                    <GradualSpacing
                        className="font-display text-left text-xl sm:text-2xl md:text-4xl font-serif -tracking-widest text-black dark:text-white"
                        text={heroCreativeText}
                        key={`creative-${heroCreativeText}`}
                    />
                    <GradualSpacing
                        className="font-display text-left text-4xl sm:text-5xl md:text-8xl font-bold -tracking-widest text-black dark:text-white"
                        text={heroDesignerText}
                        key={`designer-${heroDesignerText}`}
                    />
                    <GradualSpacing
                        className="font-display text-left text-xl sm:text-2xl md:text-4xl font-serif -tracking-widest text-black dark:text-white"
                        text={heroAndText}
                        key={`and-${heroAndText}`}
                    />
                    <GradualSpacing
                        className="font-display text-left text-4xl sm:text-5xl md:text-8xl font-bold -tracking-widest text-black dark:text-white"
                        text={heroDeveloperText}
                        key={`developer-${heroDeveloperText}`}
                    />
                    <GradualSpacing
                        className="font-display text-left text-xl sm:text-2xl md:text-4xl font-serif -tracking-widest text-black dark:text-white"
                        text={heroWebText}
                        key={`web-${heroWebText}`}
                    />
                </div>
            </div>
        </div>
    );
}
