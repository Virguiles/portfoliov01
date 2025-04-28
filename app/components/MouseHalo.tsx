"use client";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

export default function MouseHalo() {
  // Position du halo
  const [outlinePosition, setOutlinePosition] = useState({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Attributs pour détecter l'activité réelle de la souris
  const mouseActivityTimeout = useRef<NodeJS.Timeout | null>(null);
  const mouseMoveCount = useRef(0);
  const isRealMouseActivity = useRef(false);

  const [isMoving, setIsMoving] = useState(false);
  const movingTimeout = useRef<NodeJS.Timeout | null>(null);

  // Stocker la position absolue du halo (incluant le défilement)
  const absolutePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Ignorer les mouvements minimes qui pourraient être causés par le système
      const deltaX = Math.abs(e.pageX - lastX);
      const deltaY = Math.abs(e.pageY - lastY);

      if (deltaX > 5 || deltaY > 5) {
        // Compteur de mouvements significatifs
        mouseMoveCount.current += 1;

        // Si nous avons plusieurs mouvements significatifs en succession rapide,
        // c'est probablement un utilisateur qui bouge activement la souris
        if (mouseMoveCount.current > 3) {
          isRealMouseActivity.current = true;
          setIsVisible(true);

          // Stocker la position absolue (incluant le défilement)
          absolutePosition.current = { x: e.pageX, y: e.pageY };

          // Mettre à jour la position du halo à l'écran
          setOutlinePosition({
            x: e.pageX - window.scrollX,
            y: e.pageY - window.scrollY
          });
        }

        // Réinitialiser le timer à chaque mouvement significatif
        if (mouseActivityTimeout.current) {
          clearTimeout(mouseActivityTimeout.current);
        }

        // Après 1 seconde sans mouvement significatif, réinitialiser l'état
        mouseActivityTimeout.current = setTimeout(() => {
          mouseMoveCount.current = 0;
          isRealMouseActivity.current = false;
          // setIsVisible(false); // Retiré pour garder le halo visible
        }, 1000);
      }

      lastX = e.pageX;
      lastY = e.pageY;

      setIsMoving(true);
      if (movingTimeout.current) clearTimeout(movingTimeout.current);
      movingTimeout.current = setTimeout(() => setIsMoving(false), 100);
    };

    // Utiliser mousedown comme signal fort d'activité utilisateur
    const handleMouseDown = () => {
      isRealMouseActivity.current = true;
      setIsVisible(true);
    };

    // Désactiver le suivi pendant la navigation au clavier
    const handleKeyDown = () => {
      isRealMouseActivity.current = false;
      // setIsVisible(false); // Retiré pour garder le halo visible
    };

    // Cacher le halo si la souris quitte la fenêtre
    const handleMouseLeaveWindow = () => {
      setIsVisible(false); // Le halo disparaît quand la souris quitte la fenêtre
      isRealMouseActivity.current = false;
    };

    // Mettre à jour la position du halo lors du défilement
    const handleScroll = () => {
      if (absolutePosition.current.x || absolutePosition.current.y) {
        setOutlinePosition({
          x: absolutePosition.current.x - window.scrollX,
          y: absolutePosition.current.y - window.scrollY
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mouseleave", handleMouseLeaveWindow);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mouseleave", handleMouseLeaveWindow);
      window.removeEventListener("scroll", handleScroll);

      if (mouseActivityTimeout.current) {
        clearTimeout(mouseActivityTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Couleur du halo en fonction du thème
  const background = theme === 'light'
    ? "radial-gradient(circle at 50% 50%, rgba(75,85,99,0.18) 0%, rgba(75,85,99,0.10) 40%, transparent 100%)"
    : "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.10) 40%, transparent 100%)";

  return (
    <>
      {/* Halo (outline) */}
      {isVisible && (
        <div
          className="pointer-events-none fixed z-50 w-[80vw] max-w-[1000px] h-[80vw] max-h-[1000px] left-0 top-0"
          style={{
            left: `calc(${outlinePosition.x}px - 500px)`,
            top: `calc(${outlinePosition.y}px - 500px)`,
            transition: isMoving ? "left 0.2s cubic-bezier(0.22, 1, 0.36, 1), top 0.2s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background,
              filter: isHovering ? "blur(80px)" : "blur(120px)",
              opacity: isHovering ? 0.5 : 1,
              transition: "background 0.3s, filter 0.3s, opacity 0.4s",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
    </>
  );
}
