"use client"

import Link from "next/link";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { useSSRTranslation } from "@/lib/hooks/useSSRTranslation";
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
    const { t } = useSSRTranslation({
        "developer": "DEVELOPPEUR / DESIGNER UI/UX",
        "about": "à propos",
        "projects": "mes projets",
        "contact": "contact",
        "navbar.blog": "blog",
        "navbar.open_menu": "Ouvrir le menu",
        "navbar.change_language": "Changer de langue",
        "navbar.choose_language": "Choisir la langue"
    });
    const pathname = usePathname();

    // Optimisation : mémorisation des traductions pour éviter les re-renders inutiles
    const translations = useMemo(() => ({
        developer: t("developer"),
        about: t("about"),
        projects: t("projects"),
        contact: t("contact"),
        blog: t("navbar.blog"),
        openMenu: t("navbar.open_menu"),
        changeLanguage: t("navbar.change_language"),
        chooseLanguage: t("navbar.choose_language")
    }), [t]);

    const { developer: developerText, about: aboutText, projects: projectsText, contact: contactText, blog: blogText, openMenu: openMenuText, changeLanguage: changeLanguageText, chooseLanguage: chooseLanguageText } = translations;

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
                        suppressHydrationWarning
                    >
                        {developerText}
                    </span>
                </div>
                <button
                    className="md:hidden navbar-button flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label={openMenuText}
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
                                suppressHydrationWarning
                            >
                                {aboutText}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#projets"
                                className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-gray-200 hover:text-purple-500"
                                onClick={handleNavigation}
                                suppressHydrationWarning
                            >
                                {projectsText}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-gray-200 hover:text-purple-500"
                                onClick={handleNavigation}
                                suppressHydrationWarning
                            >
                                {blogText}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-gray-200 hover:text-purple-500"
                                onClick={handleNavigation}
                                suppressHydrationWarning
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
                                className="navbar-button group flex items-center justify-center w-10 h-10 rounded-full hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                                aria-label={changeLanguageText}
                            >
                                <Globe className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-purple-400 transition-colors duration-300" />
                            </button>
                            {dropdownOpen && (
                                <div className="z-50 absolute right-0 mt-3 w-48 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border border-gray-200/20 dark:border-gray-700/20 rounded-xl shadow-2xl shadow-purple-500/10 overflow-hidden transform transition-all duration-300 ease-out">
                                    <div className="p-2">
                                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-3">
                                            {chooseLanguageText}
                                        </div>
                                        <div className="space-y-1">
                                            <button
                                                onClick={() => changeLanguage("fr")}
                                                className="group flex items-center w-full px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:text-purple-400 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                                                aria-label="Français"
                                            >
                                                <span className="text-xl mr-3">🇫🇷</span>
                                                <span className="group-hover:translate-x-1 transition-transform duration-200">Français</span>
                                            </button>
                                            <button
                                                onClick={() => changeLanguage("en")}
                                                className="group flex items-center w-full px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:text-purple-400 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                                                aria-label="English"
                                            >
                                                <span className="text-xl mr-3">🇬🇧</span>
                                                <span className="group-hover:translate-x-1 transition-transform duration-200">English</span>
                                            </button>
                                        </div>
                                    </div>
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
                                    suppressHydrationWarning
                                >
                                    {aboutText}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#projets"
                                    className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-white hover:text-purple-500"
                                    onClick={handleNavigation}
                                    suppressHydrationWarning
                                >
                                    {projectsText}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-white hover:text-purple-500"
                                    onClick={handleNavigation}
                                    suppressHydrationWarning
                                >
                                    {blogText}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="navbar-link text-base font-[var(--font-jetbrains-mono)] text-gray-900 dark:text-white hover:text-purple-500"
                                    onClick={handleNavigation}
                                    suppressHydrationWarning
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
                                    className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    aria-label={changeLanguageText}
                                >
                                    <Globe className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-purple-400 transition-colors duration-300" />
                                </button>
                                {dropdownOpen && (
                                    <div className="z-50 absolute right-0 mt-3 w-48 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border border-gray-200/20 dark:border-gray-700/20 rounded-xl shadow-2xl shadow-purple-500/10 overflow-hidden transform transition-all duration-300 ease-out">
                                        <div className="p-2">
                                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-3">
                                                {chooseLanguageText}
                                            </div>
                                            <div className="space-y-1">
                                                <button
                                                    onClick={() => closeMobileMenuAndChangeLanguage("fr")}
                                                    className="group flex items-center w-full px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:text-purple-400 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                                                    aria-label="Français"
                                                >
                                                    <span className="text-xl mr-3">🇫🇷</span>
                                                    <span className="group-hover:translate-x-1 transition-transform duration-200">Français</span>
                                                </button>
                                                <button
                                                    onClick={() => closeMobileMenuAndChangeLanguage("en")}
                                                    className="group flex items-center w-full px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:text-purple-400 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                                                    aria-label="English"
                                                >
                                                    <span className="text-xl mr-3">🇬🇧</span>
                                                    <span className="group-hover:translate-x-1 transition-transform duration-200">English</span>
                                                </button>
                                            </div>
                                        </div>
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
