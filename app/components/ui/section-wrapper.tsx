import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
  padding?: string;
  background?: string;
}

export function SectionWrapper({
  children,
  className = "",
  maxWidth = "max-w-3xl",
  padding = "py-16 px-4 sm:px-6",
  background = "bg-white/10 dark:bg-black/60"
}: SectionWrapperProps) {
  return (
    <section className={`${padding} ${background} ${className}`} style={{ minHeight: '400px' }}>
      <div className={`${maxWidth} mx-auto flex flex-col items-center gap-8`}>
        {children}
      </div>
    </section>
  );
}
