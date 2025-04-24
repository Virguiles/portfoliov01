"use client";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

function lerp(a: number, b: number, n: number) {
  return a + (b - a) * n;
}

export default function MouseHalo() {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const animRef = useRef<number | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setPos(prev => ({
        x: lerp(prev.x, target.x, 0.15),
        y: lerp(prev.y, target.y, 0.15),
      }));
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (typeof animRef.current === "number") {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [target]);

  // Choix du background selon le thème
  const background = theme === "dark"
    ? "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.18) 0%, rgba(139,92,246,0.10) 60%, transparent 100%)"
    : "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.10) 0%, rgba(168,85,247,0.13) 60%, transparent 100%)";

  return (
    <div
      className="pointer-events-none fixed z-50 w-[80vw] max-w-[1000px] h-[80vw] max-h-[1000px] left-0 top-0"
      style={{
        left: `calc(${pos.x}px - 500px)`, // 500px = max-w/2
        top: `calc(${pos.y}px - 500px)`,  // 500px = max-h/2
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background,
          filter: "blur(120px)",
          transition: "background 0.3s, filter 0.3s",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
