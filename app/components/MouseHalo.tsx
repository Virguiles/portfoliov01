"use client";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

export default function MouseHalo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Masquer le halo après 2 secondes d'inactivité
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsVisible(false), 2000);
    };

    const handleMouseLeave = () => setIsVisible(false);

    // Utiliser passive listeners pour de meilleures performances
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Couleur du halo optimisée - plus simple pour de meilleures performances
  const background = theme === 'light'
    ? "radial-gradient(circle at 50% 50%, rgba(75,85,99,0.12) 0%, rgba(75,85,99,0.06) 50%, transparent 100%)"
    : "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.06) 50%, transparent 100%)";

  return (
    <>
      {isVisible && (
        <div
          className="pointer-events-none fixed z-40 w-96 h-96 -ml-48 -mt-48"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transition: "opacity 0.3s ease-out",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background,
              filter: "blur(60px)",
              opacity: 0.6,
            }}
          />
        </div>
      )}
    </>
  );
}
