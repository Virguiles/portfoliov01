"use client"

import React, { useState, useEffect, useMemo } from 'react'
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { RubyIcon, ReactIcon, TailwindIcon, WordPressIcon, FigmaIcon, ShopifyIcon } from "./icons/skills";
import { SectionHeader } from "./ui/section-header";
import { SectionWrapper } from "./ui/section-wrapper";

const Competences = React.memo(() => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    const skills = useMemo(() => [
        {
            title: t("competences.ruby.title"),
            description: t("competences.ruby.description"),
            Icon: RubyIcon
        },
        {
            title: t("competences.react.title"),
            description: t("competences.react.description"),
            Icon: ReactIcon
        },
        {
            title: t("competences.tailwind.title"),
            description: t("competences.tailwind.description"),
            Icon: TailwindIcon
        },
        {
            title: t("competences.wordpress.title"),
            description: t("competences.wordpress.description"),
            Icon: WordPressIcon
        },
        {
            title: t("competences.figma.title"),
            description: t("competences.figma.description"),
            Icon: FigmaIcon
        },
        {
            title: t("competences.shopify.title"),
            description: t("competences.shopify.description"),
            Icon: ShopifyIcon
        },
    ], [t]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="py-10 relative"></div>;

    return (
        <SectionWrapper>
            <SectionHeader title={t("competences.title")} />
                {/* Onglets */}
                <div className="w-full grid grid-cols-3 gap-2 mb-1 sm:flex sm:flex-nowrap sm:overflow-x-auto sm:justify-center sm:gap-4 sm:scrollbar-thin sm:scrollbar-thumb-purple-300/40 sm:scrollbar-track-transparent">
                    {skills.map((skill, idx) => (
                        <button
                            key={skill.title}
                            onClick={() => setActiveTab(idx)}
                            aria-label={skill.title}
                            className={clsx(
                                "flex flex-col items-center px-4 py-2 rounded-lg border transition-all min-w-[80px]",
                                idx === activeTab
                                    ? "bg-purple-500/20 border-purple-500 text-purple-700 dark:text-purple-300"
                                    : "bg-white/10 dark:bg-black/30 border-transparent text-gray-700 dark:text-gray-300 hover:bg-purple-500/10 dark:hover:bg-purple-500/10"
                            )}
                        >
                            <span
                                className={clsx(
                                    "mb-2",
                                    idx !== activeTab && "grayscale opacity-60"
                                )}
                            >
                                <skill.Icon />
                            </span>
                        </button>
                    ))}
                </div>
                {/* Carte de présentation de la compétence */}
                <div className="w-full dark:bg-black/70 rounded-xl p-4 md:p-6 h-[160px] flex flex-col justify-start">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-0 text-black dark:text-white text-center min-h-[40px] flex items-center justify-center">
                        {skills[activeTab].title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-200 max-w-xl text-base md:text-lg text-center leading-relaxed mx-auto">
                        {skills[activeTab].description}
                    </p>
                </div>
        </SectionWrapper>
    )
});

Competences.displayName = 'Competences';

export default Competences;
