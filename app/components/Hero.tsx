"use client"

import { HeroParticle } from "../../components/HeroParticle";
import { GradualSpacing } from "@/app/components/ui/gradual-spacing";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
    const { t } = useTranslation();
    return (
        <div className="relative min-h-screen h-screen w-full">
            <div className="absolute inset-0">
                <HeroParticle />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-2">
                <div className="w-full max-w-4xl px-4 sm:px-2">
                    <GradualSpacing
                        className="font-display text-left text-xl sm:text-lg font-serif -tracking-widest text-black dark:text-white md:text-4xl"
                        text={t("hero_creative")}
                    />
                    <GradualSpacing
                        className="font-display text-left text-4xl sm:text-2xl font-bold -tracking-widest text-black dark:text-white md:text-8xl"
                        text={t("hero_designer")}
                    />
                    <GradualSpacing
                        className="font-display text-left text-xl sm:text-lg font-serif -tracking-widest text-black dark:text-white md:text-4xl"
                        text={t("hero_and")}
                    />
                    <GradualSpacing
                        className="font-display text-left text-4xl sm:text-2xl font-bold -tracking-widest text-black dark:text-white md:text-8xl"
                        text={t("hero_developer")}
                    />
                    <GradualSpacing
                        className="font-display text-left text-xl sm:text-lg font-serif -tracking-widest text-black dark:text-white md:text-4xl"
                        text={t("hero_web")}
                    />
                </div>
            </div>
        </div>
    );
}
