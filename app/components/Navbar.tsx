"use client"

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { ModeToggle } from "./ModeToggle";
import { Globe } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fermer le dropdown si on clique en dehors
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownOpen]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setDropdownOpen(false);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                ? "bg-white/05 dark:bg-black/05 shadow-md backdrop-blur-md"
                : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <div className="flex items-center space-x-2">
                    <Link
                        href="/#hero"
                        className="text-2xl font-extrabold text-white-800 hover:text-purple-600 transition-colors duration-200"
                    >
                        Virgile
                    </Link>
                    <span className="text-sm font-[var(--font-jetbrains-mono)] text-white-600">
                        {t("developer")}
                    </span>
                </div>
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Ouvrir le menu"
                >
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
                <nav>
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <Link
                                href="/#about"
                                className="text-base font-[var(--font-jetbrains-mono)] text-white-700 hover:text-purple-500 transition-colors duration-200"
                            >
                                {t("about")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#projets"
                                className="text-base font-[var(--font-jetbrains-mono)] text-white-700 hover:text-purple-500 transition-colors duration-200"
                            >
                                {t("projects")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="text-base font-[var(--font-jetbrains-mono)] text-white-700 hover:text-purple-500 transition-colors duration-200"
                            >
                                {t("contact")}
                            </Link>
                        </li>
                        <li>
                            <ModeToggle />
                        </li>
                        <li className="relative" ref={dropdownRef}>
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-purple-500/20 transition-colors"
                                aria-label="Changer de langue"
                            >
                                <Globe className="w-6 h-6 text-gray-900 dark:text-white" />
                            </button>
                            {dropdownOpen && (
                                <div className="z-50 absolute right-0 mt-2 w-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
                                    <ul className="py-2 font-medium flex flex-col items-center" role="none">
                                        <li>
                                            <button
                                                onClick={() => changeLanguage("fr")}
                                                className="block w-full text-2xl text-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                                aria-label="Français"
                                            >
                                                🇫🇷
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => changeLanguage("en")}
                                                className="block w-full text-2xl text-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                                aria-label="English"
                                            >
                                                🇬🇧
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                    {mobileMenuOpen && (
                        <ul className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center space-y-4 py-6 z-40 animate-fade-in-down">
                            <li>
                                <Link
                                    href="/#about"
                                    className="text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-white hover:text-purple-500 transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t("about")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#projets"
                                    className="text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-white hover:text-purple-500 transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t("projects")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-white hover:text-purple-500 transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t("contact")}
                                </Link>
                            </li>
                            <li>
                                <ModeToggle />
                            </li>
                            <li className="relative">
                                <button
                                    type="button"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-purple-500/20 transition-colors"
                                    aria-label="Changer de langue"
                                >
                                    <Globe className="w-6 h-6 text-gray-900 dark:text-white" />
                                </button>
                                {dropdownOpen && (
                                    <div className="z-50 absolute right-0 mt-2 w-20 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
                                        <ul className="py-2 font-medium flex flex-col items-center" role="none">
                                            <li>
                                                <button
                                                    onClick={() => { changeLanguage("fr"); setMobileMenuOpen(false); }}
                                                    className="block w-full text-2xl text-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                                    aria-label="Français"
                                                >
                                                    🇫🇷
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => { changeLanguage("en"); setMobileMenuOpen(false); }}
                                                    className="block w-full text-2xl text-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                                    aria-label="English"
                                                >
                                                    🇬🇧
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
}
