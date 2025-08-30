"use client"

import Link from "next/link";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import i18n from "@/i18n";
import { ModeToggle } from "./ModeToggle";
import { Globe } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const { t } = useTranslation();
    const pathname = usePathname();

    // Optimisation : mémorisation des traductions pour éviter les re-renders inutiles
    const translations = useMemo(() => ({
        developer: t("developer"),
        about: t("about"),
        projects: t("projects"),
        contact: t("contact")
    }), [t]);

    const { developer: developerText, about: aboutText, projects: projectsText, contact: contactText } = translations;

    // Optimisation du LCP - Initialisation
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsScrolled(window.scrollY > 10);
        }
    }, []);

    // Utilisation de useRef pour éviter les dépendances cycliques
    const isScrolledRef = useRef(isScrolled);

    // Synchronisation du ref avec la valeur actuelle
    useEffect(() => {
        isScrolledRef.current = isScrolled;
    }, [isScrolled]);

    // Gestionnaire d'événement pour le scroll avec throttling
    const handleScroll = useCallback(() => {
        const scrolled = window.scrollY > 10;
        if (scrolled !== isScrolledRef.current) {
            setIsScrolled(scrolled);
        }
    }, []); // Plus de dépendance à isScrolled

    // Gestionnaire pour fermer le dropdown quand on clique en dehors
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    }, []);

    // Gestionnaire pour changer la langue
    const changeLanguage = useCallback((lng: string) => {
        i18n.changeLanguage(lng);
        setDropdownOpen(false);
    }, []);

    // Gestionnaires d'événements mémorisés pour éviter les re-renders
    const toggleDropdown = useCallback(() => {
        setDropdownOpen(prev => !prev);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenuAndChangeLanguage = useCallback((lng: string) => {
        changeLanguage(lng);
        setMobileMenuOpen(false);
    }, [changeLanguage]);

    // Détection des pages blog pour optimisations spécifiques
    const isBlogPage = useMemo(() => {
        // Vérification de sécurité pour pathname
        if (!pathname || typeof pathname !== 'string') return false;
        return pathname.startsWith('/blog');
    }, [pathname]);

    // Fonction optimisée pour la navigation (ferme automatiquement le menu mobile)
    const handleNavigation = useCallback(() => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
        setIsTransitioning(true);

        // Petit délai pour permettre à l'animation de commencer
        setTimeout(() => {
            setIsTransitioning(false);
        }, 150);

        // Navigation sera gérée par Next.js Link
    }, []);

    // Effet pour le scroll avec throttling
    useEffect(() => {
        let ticking = false;

        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledScroll, { passive: true });
        return () => window.removeEventListener("scroll", throttledScroll);
    }, [handleScroll]);

    // Effet pour le dropdown
    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownOpen, handleClickOutside]);

    // Fermer automatiquement le menu mobile lors des changements de route (utile pour les pages blog)
    useEffect(() => {
        if (pathname) {
            setMobileMenuOpen(false);
            setDropdownOpen(false);
            // Déclencher une transition subtile pour indiquer le changement de page
            setIsTransitioning(true);
            const timer = setTimeout(() => setIsTransitioning(false), 200);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    // Préserver l'état de scroll lors des transitions
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Stocker la position de scroll pour la restaurer si nécessaire
            sessionStorage.setItem('navbarScrollPosition', scrollPosition.toString());
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Optimisation des classNames pour éviter les re-renders
    const headerClassName = useMemo(() =>
        `fixed top-0 w-full z-50 transition-all duration-300 ease-out will-change-transform ${
            isScrolled
                ? "bg-white/5 dark:bg-black/5 shadow-md backdrop-blur-md border-b border-gray-200/10 dark:border-gray-800/10"
                : "bg-transparent"
        } ${isTransitioning ? 'opacity-90' : 'opacity-100'}`,
        [isScrolled, isTransitioning]
    );

    const hamburgerLineClassName = useMemo(() =>
        "block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ease-out",
        []
    );

    return (
        <header className={`${headerClassName} ${isBlogPage ? 'blog-page' : ''}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <div className="flex items-center space-x-2">
                    <Link
                        href="/#hero"
                        className="text-2xl font-extrabold text-white-800 hover:text-purple-600 transition-colors duration-200"
                    >
                        Virgile
                    </Link>
                    <span
                        className="text-sm font-[var(--font-jetbrains-mono)] text-white-600"
                        aria-label={developerText}
                        id="developer-title"
                        style={{ fontOpticalSizing: 'auto' }}
                    >
                        {developerText}
                    </span>
                </div>
                <button
                    className="md:hidden navbar-button flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label="Ouvrir le menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <span className={`${hamburgerLineClassName} mb-1 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`${hamburgerLineClassName} mb-1 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`${hamburgerLineClassName} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
                <nav role="navigation" aria-label="Navigation principale">
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <Link
                                href="/#about"
                                className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-gray-200 hover:text-purple-500"
                                onClick={handleNavigation}
                            >
                                {aboutText}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#projets"
                                className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-gray-200 hover:text-purple-500"
                                onClick={handleNavigation}
                            >
                                {projectsText}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-gray-200 hover:text-purple-500"
                                onClick={handleNavigation}
                            >
                                blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-gray-200 hover:text-purple-500"
                                onClick={handleNavigation}
                            >
                                {contactText}
                            </Link>
                        </li>
                        <li>
                            <ModeToggle />
                        </li>
                        <li className="relative" ref={dropdownRef}>
                            <button
                                type="button"
                                onClick={toggleDropdown}
                                className="navbar-button flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-purple-500/20"
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
                        <ul className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center space-y-4 py-6 z-40 transform transition-all duration-300 ease-out opacity-100 translate-y-0">
                            <li>
                                <Link
                                    href="/#about"
                                    className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-white hover:text-purple-500"
                                    onClick={handleNavigation}
                                >
                                    {aboutText}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#projets"
                                    className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-white hover:text-purple-500"
                                    onClick={handleNavigation}
                                >
                                    {projectsText}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-white hover:text-purple-500"
                                    onClick={handleNavigation}
                                >
                                    blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-white hover:text-purple-500"
                                    onClick={handleNavigation}
                                >
                                    {contactText}
                                </Link>
                            </li>
                            <li>
                                <ModeToggle />
                            </li>
                            <li className="relative">
                                <button
                                    type="button"
                                    onClick={toggleDropdown}
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
                                                    onClick={() => closeMobileMenuAndChangeLanguage("fr")}
                                                    className="block w-full text-2xl text-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                                                    aria-label="Français"
                                                >
                                                    🇫🇷
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => closeMobileMenuAndChangeLanguage("en")}
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
