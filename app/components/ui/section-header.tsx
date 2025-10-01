import React from 'react';

interface SectionHeaderProps {
  title: string;
  className?: string;
  titleClassName?: string;
  accentClassName?: string;
}

export function SectionHeader({
  title,
  className = "",
  titleClassName = "",
  accentClassName = ""
}: SectionHeaderProps) {
  return (
    <div className={`w-full flex flex-col items-center ${className}`} style={{ minHeight: '80px' }}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-black dark:text-white tracking-tight ${titleClassName}`}>
        {title}
      </h2>
      <div className={`h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4 ${accentClassName}`} />
    </div>
  );
}
