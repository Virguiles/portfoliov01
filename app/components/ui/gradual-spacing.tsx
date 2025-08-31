"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const lines = text.split('\n');

  return (
    <div className="flex flex-col items-center gap-2">
      <AnimatePresence>
        {lines.map((line, lineIndex) => (
          <div
            key={`line-${lineIndex}`}
            className={cn(
              "flex justify-center space-x-1",
              // Appliquer des styles spécifiques selon la ligne
              lineIndex === 0 && "text-xl sm:text-2xl md:text-4xl font-serif", // CREATIVE
              lineIndex === 1 && "text-4xl sm:text-5xl md:text-8xl font-bold", // DESIGNER
              lineIndex === 2 && "text-xl sm:text-2xl md:text-4xl font-serif", // &
              lineIndex === 3 && "text-4xl sm:text-5xl md:text-8xl font-bold", // DÉVELOPPEUR
              lineIndex === 4 && "text-xl sm:text-2xl md:text-4xl font-serif"  // WEB
            )}
          >
            {line.split("").map((char, charIndex) => {
              const globalIndex = lines.slice(0, lineIndex).join('').length + charIndex;
              return (
                <motion.h1
                  key={`char-${lineIndex}-${charIndex}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay: globalIndex * delayMultiple }}
                  className={cn("drop-shadow-sm font-display -tracking-widest text-black dark:text-white", className)}
                >
                  {char === " " ? <span>&nbsp;</span> : char}
                </motion.h1>
              );
            })}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export { GradualSpacing };
