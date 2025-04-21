"use client"

import { HeroParticle } from "./HeroParticle";
import { GradualSpacing } from "@/app/components/ui/gradual-spacing";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
    const { t } = useTranslation();
    return (
        <div className="relative h-screen">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-purple-500/30 blur-[100px] dark:bg-purple-700/30" />

            <div className="absolute inset-0">
                <HeroParticle />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-full max-w-4xl px-4">
                    <GradualSpacing
                        className="font-display text-left text-2xl font-serif -tracking-widest text-black dark:text-white md:text-4xl"
                        text={t("hero_creative")}
                    />
                    <GradualSpacing
                        className="font-display text-left text-6xl font-bold -tracking-widest text-black dark:text-white md:text-8xl"
                        text={t("hero_designer")}
                    />
                    <GradualSpacing
                        className="font-display text-left text-2xl font-serif -tracking-widest text-black dark:text-white md:text-4xl"
                        text={t("hero_and")}
                    />
                    <GradualSpacing
                        className="font-display text-left text-6xl font-bold -tracking-widest text-black dark:text-white md:text-8xl"
                        text={t("hero_developer")}
                    />
                    <GradualSpacing
                        className="font-display text-left text-2xl font-serif -tracking-widest text-black dark:text-white md:text-4xl"
                        text={t("hero_web")}
                    />
                </div>
            </div>
        </div>
    );
}
