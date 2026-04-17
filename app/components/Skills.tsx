"use client"

import React, { useState, useEffect, useMemo } from 'react'
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { RubyIcon, ReactIcon, TailwindIcon, WordPressIcon, FigmaIcon, ShopifyIcon } from "./icons/skills";
import { SectionHeader } from "./ui/section-header";
import { SectionWrapper } from "./ui/section-wrapper";

const Competences = React.memo(() => {
    const [activeSkillId, setActiveSkillId] = useState<string>("react");
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    const categories = useMemo(() => [
        {
            title: "Front-end",
            skills: [
                {
                    id: "react",
                    title: t("competences.react.title"),
                    description: t("competences.react.description"),
                    Icon: ReactIcon
                },
                {
                    id: "tailwind",
                    title: t("competences.tailwind.title"),
                    description: t("competences.tailwind.description"),
                    Icon: TailwindIcon
                }
            ]
        },
        {
            title: "Back-end",
            skills: [
                {
                    id: "ruby",
                    title: t("competences.ruby.title"),
                    description: t("competences.ruby.description"),
                    Icon: RubyIcon
                }
            ]
        },
        {
            title: "Design",
            skills: [
                {
                    id: "figma",
                    title: t("competences.figma.title"),
                    description: t("competences.figma.description"),
                    Icon: FigmaIcon
                }
            ]
        },
        {
            title: "CMS / Tools",
            skills: [
                {
                    id: "wordpress",
                    title: t("competences.wordpress.title"),
                    description: t("competences.wordpress.description"),
                    Icon: WordPressIcon
                },
                {
                    id: "shopify",
                    title: t("competences.shopify.title"),
                    description: t("competences.shopify.description"),
                    Icon: ShopifyIcon
                }
            ]
        }
    ], [t]);

    const activeSkill = useMemo(() => {
        for (const cat of categories) {
            for (const skill of cat.skills) {
                if (skill.id === activeSkillId) return skill;
            }
        }
        return categories[0].skills[0];
    }, [categories, activeSkillId]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="py-10 relative"></div>;

    return (
        <SectionWrapper>
            <SectionHeader title={t("competences.title")} />
            
            <div className="w-full flex justify-center mb-6">
                <div className="w-full grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 md:gap-8">
                    {categories.map((category) => (
                        <div key={category.title} className="flex flex-col items-center">
                            <h4 className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 sm:mb-3 font-semibold text-center w-full">
                                {category.title}
                            </h4>
                            <div className="flex gap-2">
                                {category.skills.map((skill) => {
                                    const isActive = skill.id === activeSkillId;
                                    return (
                                        <button
                                            key={skill.id}
                                            onClick={() => setActiveSkillId(skill.id)}
                                            aria-label={skill.title}
                                            className={clsx(
                                                "flex flex-col items-center p-3 rounded-lg border transition-all min-w-[70px] sm:min-w-[80px]",
                                                isActive
                                                    ? "bg-purple-500/20 border-purple-500 text-purple-700 dark:text-purple-300 shadow-sm"
                                                    : "bg-white/10 dark:bg-black/30 border-transparent text-gray-700 dark:text-gray-300 hover:bg-purple-500/10 dark:hover:bg-purple-500/10"
                                            )}
                                        >
                                            <span
                                                className={clsx(
                                                    "transition-all duration-300",
                                                    !isActive && "grayscale opacity-50 scale-95",
                                                    isActive && "scale-100"
                                                )}
                                            >
                                                <skill.Icon />
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Carte de présentation de la compétence */}
            <div className="w-full dark:bg-black/70 bg-white shadow-sm dark:shadow-none rounded-xl p-6 md:p-8 min-h-[180px] flex flex-col justify-start border border-gray-100 dark:border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black dark:text-white text-center flex items-center justify-center">
                    {activeSkill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-base md:text-lg text-center leading-relaxed mx-auto">
                    {activeSkill.description}
                </p>
            </div>
        </SectionWrapper>
    )
});

Competences.displayName = 'Competences';

export default Competences;
