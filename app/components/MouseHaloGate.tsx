"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Le halo suit la souris : il n'a aucun sens sur un appareil tactile, et son
 * code (plus next-themes, les listeners mousemove/scroll) n'a rien à faire dans
 * le bundle mobile. On ne le charge donc que si le pointeur est fin, et
 * seulement après le premier rendu pour ne pas peser sur le LCP.
 */
const MouseHalo = dynamic(() => import("./MouseHalo"), { ssr: false });

export default function MouseHaloGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;

  return <MouseHalo />;
}
