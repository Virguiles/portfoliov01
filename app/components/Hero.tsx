"use client"

import { HeroParticle } from "../../components/HeroParticle";
import { GradualSpacing } from "@/app/components/ui/gradual-spacing";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const { t, i18n } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);
    const [isI18nReady, setIsI18nReady] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Vérifier que i18n est prêt
        if (i18n.isInitialized) {
            setIsI18nReady(true);
        } else {
            const checkI18n = () => {
                if (i18n.isInitialized) {
                    setIsI18nReady(true);
                } else {
                    setTimeout(checkI18n, 100);
                }
            };
            checkI18n();
        }
    }, [i18n.isInitialized]);

    // Textes pour SSR et premier rendu client (français)
    const ssrHeroCreativeText = "CREATIVE";
    const ssrHeroDesignerText = "DESIGNER";
    const ssrHeroAndText = "&";
    const ssrHeroDeveloperText = "DÉVELOPPEUR";
    const ssrHeroWebText = "WEB";

    // Textes conditionnels - attendre que i18n soit prêt
    const heroCreativeText = (isMounted && isI18nReady) ? t("hero_creative") : ssrHeroCreativeText;
    const heroDesignerText = (isMounted && isI18nReady) ? t("hero_designer") : ssrHeroDesignerText;
    const heroAndText = (isMounted && isI18nReady) ? t("hero_and") : ssrHeroAndText;
    const heroDeveloperText = (isMounted && isI18nReady) ? t("hero_developer") : ssrHeroDeveloperText;
    const heroWebText = (isMounted && isI18nReady) ? t("hero_web") : ssrHeroWebText;

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
