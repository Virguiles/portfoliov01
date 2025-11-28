"use client";

import confetti from "canvas-confetti";

// Vérification de sécurité pour canvas-confetti
const isConfettiAvailable = () => {
  return typeof confetti === 'function';
};
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export function ConfettiSideCannons({ autoFire = false }: { autoFire?: boolean }) {
  const handleClick = () => {
    try {
      const end = Date.now() + 3 * 1000; // 3 seconds
      const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

      const frame = () => {
        if (Date.now() > end) return;

        if (isConfettiAvailable()) {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            startVelocity: 60,
            origin: { x: 0, y: 0.5 },
            colors: colors,
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            startVelocity: 60,
            origin: { x: 1, y: 0.5 },
            colors: colors,
          });
        }

        requestAnimationFrame(frame);
      };

      frame();
    } catch (error) {
      console.error("ConfettiSideCannons error:", error);
    }
  };

  useEffect(() => {
    if (autoFire) {
      handleClick();
    }
  }, [autoFire]);

  return (
    <div className="relative">
      {!autoFire && <Button onClick={handleClick}>Trigger Side Cannons</Button>}
    </div>
  );
}
