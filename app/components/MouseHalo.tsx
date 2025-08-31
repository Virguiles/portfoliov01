"use client";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { useTheme } from "next-themes";

export default function MouseHalo() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const lastUpdateRef = useRef(0);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const isHoveringRef = useRef(false);

  // Mémoriser le gradient CSS pour éviter les recalculs
  const background = useMemo(() => {
    return theme === 'light'
      ? "radial-gradient(circle at 50% 50%, rgba(75,85,99,0.12) 0%, rgba(75,85,99,0.06) 50%, transparent 100%)"
      : "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.06) 50%, transparent 100%)";
  }, [theme]);

  // Mémoriser la fonction de gestion du mouvement de souris
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttling : limiter à 60fps maximum
    const now = Date.now();
    if (now - lastUpdateRef.current < 16) return; // ~60fps

    lastUpdateRef.current = now;
    isHoveringRef.current = true;

    // Utiliser requestAnimationFrame pour une animation fluide
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (haloRef.current) {
        // Utiliser transform au lieu de left/top pour de meilleures performances
        haloRef.current.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`;
      }
    });

    // Activer la visibilité seulement si nécessaire
    if (!isVisible) {
      setIsVisible(true);
    }

    // Masquer le halo après 2 secondes d'inactivité
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!isHoveringRef.current) {
        setIsVisible(false);
      }
    }, 2000);
  }, [isVisible]);

  // Mémoriser la fonction de gestion de la sortie de souris
  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
    // Délai avant de masquer pour éviter les clignotements
    setTimeout(() => {
      if (!isHoveringRef.current) {
        setIsVisible(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    }, 50);
  }, []);

  // Mémoriser la fonction de gestion de l'entrée de souris
  const handleMouseEnter = useCallback(() => {
    isHoveringRef.current = true;
  }, []);

  useEffect(() => {
    // Utiliser passive listeners pour de meilleures performances
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("mouseenter", handleMouseEnter, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  return (
    <div
      ref={haloRef}
      className="pointer-events-none fixed z-40 w-96 h-96 transition-opacity duration-300 ease-out"
      style={{
        opacity: isVisible ? 0.6 : 0,
        willChange: 'transform, opacity', // Optimisation pour les animations
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background,
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
