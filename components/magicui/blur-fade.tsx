"use client";

import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  type UseInViewOptions,
  type Variants,
} from "framer-motion";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
  as?: "div" | "span" | "li";
}

/**
 * Entrée « blur fade » à la Magic UI : l'élément monte de quelques pixels en
 * sortant d'un flou léger dès qu'il entre dans le viewport. Utilisé en cascade
 * (delay incrémental) pour donner un rythme à la lecture d'une section.
 */
export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = true,
  inViewMargin = "-50px",
  blur = "6px",
  as = "div",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const prefersReducedMotion = useReducedMotion();
  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    // On revient à y: 0 (et non -yOffset comme l'original) : un décalage
    // négatif final fait déborder le contenu hors des conteneurs qui ont
    // `contain: paint`, ce qui rognait la première ligne du titre.
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant ?? defaultVariants;

  const MotionTag = motion[as];

  // Accessibilité : pas d'animation si l'utilisateur a demandé à les réduire.
  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <AnimatePresence>
      <MotionTag
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </MotionTag>
    </AnimatePresence>
  );
}

export default BlurFade;
