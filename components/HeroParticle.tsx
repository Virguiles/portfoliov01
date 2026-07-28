"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "@/app/components/ui/particles";

export function HeroParticle() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  useEffect(() => {
    // Le canvas de particules est purement décoratif : on attend que le thread
    // principal soit au repos plutôt qu'un délai fixe de 100 ms, qui tombait en
    // plein milieu de l'hydratation sur mobile et retardait le LCP.
    if (typeof window === "undefined") return;

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setIsVisible(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Ne pas rendre les particules si pas visible pour améliorer le LCP
  if (!isVisible) {
    return null;
  }

  return (
    <Particles
      className="absolute inset-0 z-0"
      quantity={15} // Réduit de 25 à 15 pour améliorer les performances
      ease={80}
      color={color}
      refresh={false}
      size={0.3} // Taille réduite pour moins de calculs
      staticity={30} // Réduit pour moins d'interactions
    />
  );
}
